import { render } from "@testing-library/react";
import React from "react";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";

describe('Inital page', () => {
  it('should render a header logo', () => {
    const header = render(<Header logo={'/srcImage'} items={[{title: 'test'}]} siteDescription={'description'} siteLogo={'logoimage'} siteTitle={'Title'} />);
    const logo = header.getByAltText('midoel-logo');
    expect(logo).toBeTruthy();
  })
  it('should render menu items', () => {
    const header = render(<Header logo={'/srcImage'} items={[{title: 'test'}]} siteDescription={'description'} siteLogo={'logoimage'} siteTitle={'Title'} />);
    const items = header.getAllByText('test');
    expect(items).toBeTruthy();
  });

  it('should render an Image Background', () => {
    const homePage = render(<HomePage image={ '/image' } newProducts={ [] } featured={ [] } />)
    const image = homePage.getByAltText('Midoel Imagem');
    expect(image).toBeTruthy();
  });

  it('should render new products', () => {
    const homePage = render(<HomePage image={ '/image' } newProducts={ [{id: 1, images:[{}], name: 'Test Product', slug:'test-product'}] } featured={ [] } />)
    const product = homePage.getByText('Test Product');
    expect(product).toBeTruthy();
  })

  it('should render featured products', () => {
    const homePage = render(<HomePage image={ '/image' } featured={ [{id: 1, images:[{}], name: 'Featured', slug:'test-product'}] } newProducts={ [] } />)
    const product = homePage.getByText('Featured');
    expect(product).toBeTruthy();
  })
})