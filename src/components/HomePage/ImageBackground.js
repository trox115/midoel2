
function ImageBackground({ image }) {

  return (
    <div className="w-full animate pop">
      <div className="w-full carousel-item">
        <img src={image} className="w-full" alt={image?.alt || 'Midoel Imagem'} />
      </div>
    </div>
  )
}

export default ImageBackground
