import React from 'react'

const FeaturedProducts = () => {
  return (
    <section className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Featured Products</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-indigo-50 p-4 rounded shadow">Product 1</div>
        <div className="bg-indigo-50 p-4 rounded shadow">Product 2</div>
        <div className="bg-indigo-50 p-4 rounded shadow">Product 3</div>
      </div>
    </section>
  )
}

export default FeaturedProducts