import React, { useState } from 'react';
import Filter from '../Filters/Filter';
import Sort from '../Filters/Sort';
import ProductBody from './ProductBody';

const Products = () => {
  const [sortOption, setSortOption] = useState(null);
  const [filterOption, setFilterOption] = useState(null)

  const handleSortApply = (newSortOption) => {
    setSortOption(newSortOption);
    console.log(`Sort option selected: ${newSortOption}`);
    // Update your application state or perform the sorting logic here
  };

  const handleFilterApply = (newFilterOption)=>{
    setFilterOption(newFilterOption)
    console.log(`Filter Option Selected: ${newFilterOption}`)
  }

  return (
    <div className='d-flex justify-content-between align-items-center flex-column mt-3' style={{ height: "650px", width: "100%", backgroundColor: "#fff" }}>

      <div className="prod-top d-flex justify-content-start flex-row align-items-center" style={{ width: "85%", height: "75px" }}>
        <Sort onSortApply={handleSortApply} />
        <Filter onFilterApply={handleFilterApply} />
      </div>
      <div className="prod-bottom" style={{ width: "85%", height: "560px" }}>
        <ProductBody sortOption={sortOption} filterOption={filterOption} />
      </div>

    </div>
  )
}

export default Products;