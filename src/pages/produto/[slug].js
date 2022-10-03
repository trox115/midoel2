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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <ProductImage images={product.images} />
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.name}</h2>
              <p className="text-gray-500 text-sm">Por <a href="#" className="text-indigo-600 hover:underline">Midoel</a></p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="font-bold text-indigo-600 text-3xl">{product.price || 'Preço Sob consulta'}</span>
                    {product.price && <span className="text-indigo-400 mr-1 mt-1">€</span>}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">Portes Grátis</p>
                  <p className="text-gray-400 text-sm">A partir de 150€.</p>
                </div>
              </div>

              <p className="text-gray-500">{product.shortDescription}</p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qtdd</div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>

                <button type="button" onClick={() => setModalOpen(true)} className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
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

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);
  const { data: product } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-product?slug=${context.params.slug}`);
  const { data: footerData } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/posts-by-tax?post_type=post&taxonomy=category&slug=footer`);

  return { props: { header: data.data.header, product: product.products[0], footerData: footerData.data } };
}

export default Produto
