import Header from '../components/Header/Header'
import HomePage from '../components/HomePage/HomePage';
import axios from 'axios';
import Footer from '../components/Footer/Footer';

const Home = ({ header, image, products, featured, footerData }) => {

  return (
    <>
      <Header logo={header.siteLogoUrl} items={header.headerMenuItems} siteDescription={header.siteDescription} siteLogo={header.siteLogo} siteTitle={header.siteTitle} />
      <HomePage image={ image } newProducts={products} featured={ featured }/>
      <Footer footerData={footerData} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);
  const newData = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/post?post_id=48`);
  const { data : footerData } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/posts-by-tax?post_type=post&taxonomy=category&slug=footer`);
  // const { data :newProducts } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-new`);
  // const { data :featured } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-fetured`);

  return {
    props: {
      header: data.data.header || {},
      image: newData.data.post_data.attachment_image.img_src[0] || {},
      // products: newProducts.products,
      // featured: featured.products,
      footerData: {...footerData.data, favIcon:data.data.header.favicon },
      revalidate: 1
    }
  };
}

export default Home
