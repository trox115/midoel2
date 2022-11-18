import React, { useEffect, useState } from 'react';
import _ from 'lodash';

interface Props {
  items?:
  {
    ID: number,
    title: string,
    slug: string,
    children?: {
      ID: number,
      title: string,
      slug: string,
      isProduct?: boolean
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
    <div className="bg-midoel-blue navbar animate">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            {
              items?.map(item => {
                return (
                  <li key={item.ID} tabIndex={0}>
                    <a href={`/product-category/${convertToSlug(item.title)}`} className="justify-between">
                      {item.title}
                      {item.children && item.children.length > 0 && <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>}
                    </a>
                    {item?.children && item.children.length > 0 &&
                      <ul className="p-2">
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
      <div className="justify-start hidden text-white navbar-center lg:flex">
        <ul className="p-0 menu menu-horizontal">
          {
            items?.map(item => {
              return (
                <li key={item.ID} tabIndex={0}>
                  <a href={`/product-category/${convertToSlug(item.title)}`}>
                    {item.title}
                    {item.children && item.children.length > 0 && <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>}
                  </a>
                  {item?.children && item.children.length > 0 &&
                    <ul className="p-2 text-black bg-white">
                      {
                        item.children.map(subItem => {
                          const url = subItem.isProduct === undefined ? `/product-category/${convertToSlug(subItem.title)}` : `${subItem.slug}`
                          return (
                            <li key={subItem.ID}><a href={ url }>{subItem.title}</a></li>

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
