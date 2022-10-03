import { useCallback, useEffect, useRef, useState } from 'react';
import ArrowButton from '../ArrowButton/ArrowButton';
import Product from '../Product/Product';


function ProductCarousel({ title, products }) {
  const ref = useRef(null);
  const productRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  const [productWidth, setProductWidth] = useState(0)

  const handleNext = useCallback(() => {
    if (ref.current) {
      const container = ref.current;
      container.scrollTo(offset + productWidth, 0);
      setOffset(offset + productWidth);
    }
  }, [offset]);
  console.log(offset);
  const handlePrevious = useCallback(() => {
    if (ref.current) {
      const container = ref.current;
      container.scrollTo(offset - productWidth, 0);
      setOffset(offset - productWidth);
    }
  }, [offset])

  useEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.clientWidth);
    setProductWidth(productRef.current?.clientWidth);
  }, [productRef]);

  return (
    <div className='mt-20 px-2'>
      <h4 className='p-4 flex content-center gap-4 items-center'>
        {title}
        <ArrowButton onClick={handleNext} disabled={offset >= width} />
        <ArrowButton isNext={false} onClick={handlePrevious} disabled={offset <= 0} />
      </h4>
      <div className='flex flex-grow overflow-scroll scroll-smooth gap-4 bg-white no-scrollbar' ref={ref}>
        {
          products?.map(product => {
            return (
              <div key={product.id} ref={productRef} className='py-10'>
                <Product key={product.id} images={product.images} name={product.name} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductCarousel
