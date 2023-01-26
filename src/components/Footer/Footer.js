import { useState } from 'react';
import Image from 'next/image';
import cartazes from '../../../public/cartazes.jpg';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Footer({ footerData }) {
  const [lightBox, setLightBox] = useState(false);

  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <div>
        <Image src={footerData.favIcon} height='50px' width='50px' alt='midoel icone' />
        <p>Midoel<br />www.midoel.com</p>
      </div>

      {
        footerData.posts?.map(post => {
          return (
            <div key={post.id}>
              <span key={post.id} className="footer-title">{post.title}</span>
              <a className="link link-hover">
                <Image src={post.attachment_image.img_src[0]} width='300px' height='100px' alt={post.title} />
              </a>
            </div>

          )
        })
      }
      <div>
        <a className="link link-hover" onClick={() => setLightBox(!lightBox)}>
          <Image src={cartazes} width='200px' height='300px' alt='Norte 2020' />
        </a>
      </div>
      <Lightbox
        open={lightBox}
        close={() => setLightBox(false)}
        slides={[
          { src: '/cartazes.jpg' },
        ]}
      />    </footer>
  )
}

export default Footer
