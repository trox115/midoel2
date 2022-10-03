import Image from 'next/image';

function Footer({ footerData }) {

  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
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

    </footer>
  )
}

export default Footer
