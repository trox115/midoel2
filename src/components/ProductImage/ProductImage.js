
import { useEffect, useState } from 'react';

function ProductImage({ images }) {
  const [selectedImage, setSelectedImages] = useState(null);

  useEffect(() => {
    setSelectedImages(images[0]);
  }, []);

  return (
    <>
      <div className="rounded-lg mb-4 items-center overflow-hidden justify-center">
        <img src={selectedImage?.src} className="max-w-full h-auto hover:scale-150 ease-in duration-500" alt={selectedImage?.alt} />
      </div>
      {
        images.map((image, index) => {
          return (
            <div key={index} onClick={() => setSelectedImages(image)} class="h-auto cursor-pointer rounded-lg bg-gray-100 mb-4 flex items-center justify-center w-1/4">
              <img src={image?.src} className="max-w-full h-auto" alt={image?.alt} />
            </div>
          )

        })
    }
    </>
  )
}

export default ProductImage
