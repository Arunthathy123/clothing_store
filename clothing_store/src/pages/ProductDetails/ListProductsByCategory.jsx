import React from 'react'
import Header from '../../componets/CommonUtilities/Header/Header'
import Footer from '../../componets/CommonUtilities/Footer/Footer'
// import ListUniforms from '../../componets/Uniform/ListUniforms'
import ProductList from '../../componets/TendingProducts/ProductList'

function ListProductsByCategory() {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  )
}

export default ListProductsByCategory
