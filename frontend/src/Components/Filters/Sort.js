import React,{useState} from 'react';
import '../../static/btns.css';

const Sort = ({ onSortApply }) => {
  const [selectedSortOption, setSelectedSortOption] = useState(null);

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const handleApplySort = () => {
    if (onSortApply) {
      onSortApply(selectedSortOption);
    }
  };

  return (
    <div className='sort-btn d-flex justify-content-center align-items-center ' style={{ height: "50%", boxShadow: "0px 2px 8px rgba(0,0,0,0.3)", borderRadius: "5px", padding: "5px 15px", cursor: "pointer" }}>

      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#SortModal" style={{fontWeight:"700", fontSize:"18px"}}>
        Sort
      </button>

      <div className="modal fade" id="SortModal" tabIndex="-1" aria-labelledby="SortModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="SortModalLabel">Sort Options</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="sortOption" id="priceAsc" value="priceAsc" onChange={handleSortOptionChange} />
                  <label className="form-check-label" for="priceAsc">Price: Lowest to Highest</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="sortOption" id="popularityAsc" value="popularityAsc" onChange={handleSortOptionChange} />
                  <label className="form-check-label" for="popularityAsc">Popularity: Lowest to Highest</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="sortOption" id="priceDesc" value="priceDesc" onChange={handleSortOptionChange} />
                  <label className="form-check-label" for="priceDesc">Price: Highest to Lowest</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="sortOption" id="popularityDesc" value="popularityDesc" onChange={handleSortOptionChange} />
                  <label className="form-check-label" for="popularityDesc">Popularity: Highest to Lowest</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleApplySort}>Apply Sort</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sort;