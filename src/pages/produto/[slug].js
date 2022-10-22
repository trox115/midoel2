import axios from 'axios';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductImage from '../../components/ProductImage/ProductImage';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';

function Produto({ product, header, footerData }) {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  return (
    <>
      <Header logo={header.siteLogoUrl} items={header.headerMenuItems} siteDescription={header.siteDescription} siteLogo={header.siteLogo} siteTitle={header.siteTitle} />

      <div class="py-6 bg-white">

        <BreadCrumb categories={product.categories} name={product.name} />

        <div className="px-4 mx-auto mt-6 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col -mx-4 md:flex-row">
            <div className="px-4 md:flex-1">
              <ProductImage images={product.images} />
            </div>
            <div className="px-4 md:flex-1">
              <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">{product.name}</h2>
              <p className="text-sm text-gray-500">Por <a href="#" className="text-indigo-600 hover:underline">Midoel</a></p>

              <div className="flex items-center my-4 space-x-4">
                <div>
                  <div className="flex px-3 py-2 bg-gray-100 rounded-lg">
                    <span className="text-3xl font-bold text-indigo-600">{product.price || 'Preço Sob consulta'}</span>
                    {product.price && <span className="mt-1 mr-1 text-indigo-400">€</span>}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold text-green-500">Portes Grátis</p>
                  <p className="text-sm text-gray-400">A partir de 150€.</p>
                </div>
              </div>

              <p className="text-gray-500">{product.shortDescription}</p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="absolute left-0 right-0 block pt-2 text-xs font-semibold tracking-wide text-center text-gray-400 uppercase">Qtdd</div>
                  <select className="flex items-end pb-1 pl-4 pr-8 border border-gray-200 appearance-none cursor-pointer rounded-xl h-14">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg className="absolute bottom-0 right-0 w-5 h-5 mb-2 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>

                <button type="button" onClick={() => setModalOpen(true)} className="px-6 py-2 font-semibold text-white bg-indigo-600 h-14 rounded-xl hover:bg-indigo-500">
                  Pedir informações
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal onClickAway={() => setModalOpen(false) } open={modalOpen} />
      <Footer footerData={footerData} />

    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);
  const { data: product } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-product?slug=${context.params.slug}`);
  const { data: footerData } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/posts-by-tax?post_type=post&taxonomy=category&slug=footer`);

  return { props: { header: data.data.header, product: product.products[0], footerData: footerData.data } };
}

export async function getStaticPaths(context) {
  const { data: product } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-product?slug=${context.params.slug}`);
  console.log(product);
}

export default Produto
