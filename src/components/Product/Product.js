import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

function Product({ name, price, images, slug, ref }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/produto/${slug}`)
  }
  return (
    <div className="w-72 cursor-pointer" ref={ref} onClick={handleClick}>
      <div className="w-72">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width='300px'
          height='200px'
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/produto/${slug}`}>
              <span aria-hidden="true" className="" />
              {name}
            </a>
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
        </div>
        <p className="text-sm font-medium text-gray-900">{price || 'sob consulta'}</p>
      </div>
    </div>
  )
}

export default Product
