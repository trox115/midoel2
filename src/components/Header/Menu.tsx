import React from 'react'

interface Props {
  items?:
  {
    ID: number,
    url: string,
    title: string,
    slug: string,
    children?: {
      ID: number,
      url: string,
      title: string,
      slug: string,
    }[]
  }[]
}

function Menu({ items }: Props) {
  const convertToSlug = (str: string) => {
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    const from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    const to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (let i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '') 
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-') 
    // Collapse dashes
    .replace(/-+/g, '-'); 

    return str;
  }  
  return (
    <div className="navbar bg-blue-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              items?.map(item => {
                return (
                  <li key={item.ID} tabIndex={0}>
                    <a href={item.url} className="justify-between">
                      {item.title}
                      {item.children && item.children.length > 0 && <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>}
                    </a>
                    {item?.children && item.children.length > 0 &&
                      <ul className="p-2">
                        {
                          item.children.map(subItem => {
                            return (
                              <li key={subItem.ID}><a href={subItem.url}>{subItem.title}</a></li>

                            );
                          })
                        }
                      </ul>}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex text-white justify-start">
        <ul className="menu menu-horizontal p-0">
          {
            items?.map(item => {
              return (
                <li key={item.ID} tabIndex={0}>
                  <a href={item.url}>
                    {item.title}
                    {item.children && item.children.length > 0 && <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>}
                  </a>
                  {item?.children && item.children.length > 0 &&
                    <ul className="p-2 bg-white text-black">
                      {
                        item.children.map(subItem => {
                          return (
                            <li key={subItem.ID}><a href={`/product-category/${convertToSlug(subItem.title)}`}>{subItem.title}</a></li>

                          );
                        })
                      }
                    </ul>}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu
