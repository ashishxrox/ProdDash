import React, { useState } from 'react'
import '../../static/btns.css'

const Filter = ({ onFilterApply }) => {

  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedPopularityRange, setSelectedPopularityRange] = useState(null);

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handlePopularityRangeChange = (event) => {
    setSelectedPopularityRange(event.target.value);
  };

  const handleApplyFilter = () => {
    if (onFilterApply) {
      onFilterApply(selectedPriceRange, selectedPopularityRange);
    }
  };

  return (
    <div className='sort-btn d-flex justify-content-center align-items-center' style={{ height: "50%", boxShadow: "0px 2px 8px rgba(0,0,0,0.3)", borderRadius: "5px", padding: "5px 15px", cursor: "pointer", marginLeft:"25px" }}>

      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#FilterModal" style={{ fontWeight: "700", fontSize: "18px" }}>
        Filter
      </button>

      <div className="modal fade" id="FilterModal" tabIndex="-1" aria-labelledby="FilterModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="FilterModalLabel">Filter Options</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <h5>Price Range:</h5>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="priceRange" id="priceRange0-5000" value="0-5000" onChange={handlePriceRangeChange} />
                  <label className="form-check-label" for="priceRange0-5000">0-5000</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="priceRange" id="priceRange5000-10000" value="5000-10000" onChange={handlePriceRangeChange} />
                  <label className="form-check-label" for="priceRange5000-10000">5000-10000</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="priceRange" id="priceRange10000-20000" value="10000-20000" onChange={handlePriceRangeChange} />
                  <label className="form-check-label" for="priceRange10000-20000">10000-20000</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="priceRange" id="priceRange20000+" value="20000+" onChange={handlePriceRangeChange} />
                  <label className="form-check-label" for="priceRange20000+">20000+</label>
                </div>

                <h5>Popularity Range:</h5>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="popularityRange" id="popularityRange0-10000" value="0-10000" onChange={handlePopularityRangeChange} />
                  <label className="form-check-label" for="popularityRange0-10000">0-10000</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="popularityRange" id="popularityRange10000-30000" value="10000-30000" onChange={handlePopularityRangeChange} />
                  <label className="form-check-label" for="popularityRange10000-30000">10000-30000</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="popularityRange" id="popularityRange30000-50000" value="30000-50000" onChange={handlePopularityRangeChange} />
                  <label className="form-check-label" for="popularityRange30000-50000">30000-50000</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="popularityRange" id="popularityRange30000-50000" value="30000-50000" onChange={handlePopularityRangeChange} />
                  <label className="form-check-label" for="popularityRange30000-50000">50000+</label>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleApplyFilter}>Apply Sort</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
