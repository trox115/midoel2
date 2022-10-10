import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';

import axios from 'axios';
import { useRouter } from 'next/router';
import _ from 'lodash';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

function ProductCategory({ products, header, footerData }) {
  const router = useRouter();
  const category = _.find(products[0].categories, {slug: router.query.slug})
  
  return (
    <>
      <Header logo={header.siteLogoUrl} items={header.headerMenuItems} siteDescription={header.siteDescription} siteLogo={header.siteLogo} siteTitle={header.siteTitle} />
      <BreadCrumb categories={[{slug: '/', name: 'Home'}]} name={category.name} />
      <h1 className='w-full p-10 text-2xl text-center bg-white' >{category.name}</h1>
      <h3 className='p-5 text-xl text-center'>{`${products.length} produtos encontrados para ${ category.name }`}</h3>
      <div class="flex flex-wrap mx-2 overflow-hidden bg-white">
        {
          products.map(product => {
            return (
              <div key={product.id} class="my-2 px-2 w-1/2 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4">
                <Product key={product.id} images={product.images} name={product.name} slug={product.slug} />
              </div>
            )
          })
        }
      </div>
      <Footer footerData={footerData} />
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);

  const { data: products } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-product-by-category?slug=${context.params.slug}`);
  const { data: footerData } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/posts-by-tax?post_type=post&taxonomy=category&slug=footer`);

  return { props: { products: products.products, header: data.data.header, footerData: footerData.data } };
}

export default ProductCategory
