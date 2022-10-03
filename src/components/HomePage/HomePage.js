import ImageBackground from "./ImageBackground"
import PrintIcon from '@mui/icons-material/Print';
import CampaignIcon from '@mui/icons-material/Campaign';
import FoundationIcon from '@mui/icons-material/Foundation';
import ProductCarousel from '../ProductCarousel/ProductCarousel'

function HomePage({image, newProducts, featured}) {
  return (
    <>
    <ImageBackground image={image}/>
    <div className="w-full p-5 bg-white md:flex">
      <div className="w-full flex flex-column md:w-1/3 md:flex-row md:p-10">
        <div className="w-1/3 text-center">
          <PrintIcon style={{'font-size': '100px'}}/>
        </div>
        <div className="w-2/3 pl-2">
          <h3 className="font-bold">Artes Gráficas</h3>
          <p className="text-justify">
          Conheça o nosso potencial e alguns dos nossos trabalhos no setor das artes gráficas
          </p>
        </div>
      </div>
      <div className="w-full flex flex-column md:w-1/3 my-10 md:my-0 md:p-10">
        <div className="w-1/3 text-center order-last">
          <CampaignIcon style={{'font-size': '100px'}}/>
        </div>
        <div className="w-2/3 pl-2">
          <h3 className="font-bold">Publicidade</h3>
          <p className="text-justify">
          COM OS EQUIPAMENTOS ADEQUADOS, PRODUZIMOS PUBLICIDADE GRÁFICA PERSONALIZADA E ÚNICA
        </p>
        </div>
      </div>
      <div className="w-full flex flex-column md:w-1/3 md:p-10">
        <div className="w-1/3 text-center">
          <FoundationIcon style={{'font-size': '100px'}}/>
        </div>
        <div className="w-2/3 pl-2">
          <h3 className="font-bold">Mobiliário Urbano</h3>
          <p className="text-justify">
          DISPOMOS DE TODO O TIPO DE SOLUÇÕES PARA MOBILIÁRIO URBANO E SINALÉTICA
          </p>
        </div>
      </div>
    </div>
    <ProductCarousel title='Acabados de chegar' products={ newProducts }/>
    { featured.length > 0 && <ProductCarousel title='Produtos em destaque' products={ featured }/>}
    </>
  )
}

export default HomePage
