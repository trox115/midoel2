import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function UpperBar() {

  return (
    <>
    <div className="bg-white px-4 md:hidden">
      <div className="font-light text-black font text-sm">
        <div className="mx-1">
          <AccessTimeIcon fontSize='11px' color='info' className='mx-2' />
          Seg-Sex: 09:00 -12:30 - 14:00 - 18:30
        </div>
        <div className="mx-1">
          <EmailIcon fontSize='11px' color='info' className='mx-2' />
          geral@midoel.com
        </div>
      </div>
      <div className="hidden">
        <FacebookIcon color='info' />
        <InstagramIcon color='info' />
      </div>
    </div>
    <div className='bg-white px-4 hidden md:flex justify-between items-center'>
    <div className="font-light text-black flex font text-sm">
        <div className="mx-1">
          <AccessTimeIcon fontSize='11px' color='info' className='mx-2' />
          Seg-Sex: 09:00 -12:30 - 14:00 - 18:30
        </div>
        <div className="mx-1">
          <EmailIcon fontSize='11px' color='info' className='mx-2' />
          geral@midoel.com
        </div>
      </div>
      <div>
        <FacebookIcon color='info' />
        <InstagramIcon color='info' />
      </div>
    </div> 
    </>
  )
}

export default UpperBar
