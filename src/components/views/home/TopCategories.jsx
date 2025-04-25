import React from 'react'

const TopCategories = () => {
  return (
    <section className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Top Categories</h3>
      <div className="flex flex-wrap gap-4">
        <span className="bg-indigo-100 px-4 py-2 rounded-full text-indigo-700">Electronics</span>
        <span className="bg-indigo-100 px-4 py-2 rounded-full text-indigo-700">Fashion</span>
        <span className="bg-indigo-100 px-4 py-2 rounded-full text-indigo-700">Home Decor</span>
      </div>
    </section>
  )
}

export default TopCategories