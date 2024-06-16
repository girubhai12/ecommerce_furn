import React from 'react'
import { NewestProducts } from './components/NewestProducts'
import { ProductRow } from './components/ProductRow'


function page() {
  return (
  <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
    <div className="max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center">
      <h1>Find the best Furntinure</h1>
      <h1 className="text-primary "> On Houses And Offices...</h1>
      <p className="lg:text-lg text-muted-foreground mt-5 w-[90%] font-normal text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo in perferendis debitis ut animi velit quas deserunt
        </p>
    </div>
<ProductRow category="newest" />
<ProductRow category="bed" />
<ProductRow category="lamp" />
<ProductRow category="sofa" />


  </section>
  )
}

export default page