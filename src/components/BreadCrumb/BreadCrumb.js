import { Fragment } from 'react';

function BreadCrumb({ categories, name }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 text-gray-400 text-sm">
        {categories.map(category => {
          return (
            <Fragment key={category.id}>
              <a href={`/product-category/${category.slug}`} className="hover:underline hover:text-gray-600">{category.name}</a>
              <span>
                <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Fragment>

          )
        })}
        <span>{name}</span>
      </div>
    </div>
  )
}

export default BreadCrumb
