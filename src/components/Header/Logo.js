import Image from "next/image";
import Link from "next/link";

function Logo({image}) {
  return (
    <>
  <div className="bg-white text-center p-2 md:hidden">
    <Link href="/">
    <Image src={image} className='content-center' alt='midoel-logo' height='50px' width='180px'/>
    </Link>
  </div>
    <div className="bg-white p-10 hidden md:flex justify-between items-center">
      <div>
    <Link href="/">
    <Image src={image} className='content-center' alt='midoel-logo' height='50px' width='180px'/>
    </Link>
      </div>
    <div>
      <input type='text' placeholder='pesquisar'/>
    </div>
  </div>
  </>
  )
}

export default Logo
