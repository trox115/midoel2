import Image from "next/image";
import Link from "next/link";

function Logo({image}) {
  return (
    <>
  <div className="p-2 text-center bg-white md:hidden">
    <Link href="/">
    <Image src={image} className='content-center animate glow' alt='midoel-logo' height='50px' width='180px'/>
    </Link>
  </div>
    <div className="items-center justify-between hidden p-10 bg-white md:flex">
      <div>
    <Link href="/">
    <Image src={image} className='content-center cursor-pointer animate glow' alt='midoel-logo-mobile' height='50px' width='180px'/>
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
