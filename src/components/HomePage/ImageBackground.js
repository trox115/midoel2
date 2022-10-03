
function ImageBackground({ image }) {
  console.log(image);
  return (
    <div className="w-full">
      <div className="carousel-item w-full">
        <img src={image} className="w-full" alt={image?.alt || 'Midoel Imagem'} />
      </div>
    </div>
  )
}

export default ImageBackground
