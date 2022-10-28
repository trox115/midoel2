import Head from "next/head";
// import styled from '@emotion/styled';
import UpperBar from "./UpperBar";
import Logo from "./Logo";
import Menu from "./Menu";

interface HeaderProps {
  siteTitle?: string,
  siteDescription?: string,
  logo?: string,
  items?: any[]
}

const Header = ({ siteTitle, siteDescription,logo, items }: HeaderProps) => {

  return (
    <>
      <Head>
        <title>{siteTitle} - {siteDescription} </title>
      </Head>
        <UpperBar />
        <Logo image={ logo } />
        <Menu items={items} /> 
    </>
  )
}

export default Header;