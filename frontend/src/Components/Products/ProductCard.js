import React, { useState } from 'react'


const ProductCard = ({ title, price, popularity, subcategory }) => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className="card " style={{ width: "100%", position: "relative", overflow: "hidden", border: "none", boxShadow: "0px 2px 8px rgba(0,0,0,0.4)" }}>
            {!show && <div className="card-body d-flex justify-content-between align-items-start flex-column" style={{ padding: "0", overflow: "hidden", margin: "0" }} >
                <div className='title-box d-flex justify-content-start align-items-center' style={{ width: "110%", backgroundColor: "#0B2545", padding: "10px 25px" }}>
                    <h5 className="card-title" style={{ color: '#fff' }}>{title}</h5>
                </div>

                <div className='detail-box d-flex justify-content-between align-items-start flex-row' style={{ padding: "0px 25px", width: "100%" }}>
                    <div className='db-left d-flex justify-content-around align-items-start flex-column'>
                        <p>Price: {price}</p>
                        <p>Popularity: {popularity}</p>

                    </div>
                    <div className='db-right'>
                        <p>Subcategory: {subcategory}</p>
                    </div>


                </div>
                <p href="somewhere" className="btn" onClick={handleClick} style={{ margin: "15px 25px", backgroundColor: "#134074", color: "#fff" }}>Show Details</p>

            </div>}
            {show && <div className="prod-details" style={{ backgroundColor: '#0B2545', height: "100%", width: "100%" }}>
                <div className='title-box d-flex justify-content-between align-items-center flex-row' style={{ width: "100%", backgroundColor: "#fff", padding: "10px 25px" }}>
                    <h5 className="card-title" style={{ color: '#0B2545', }}>{title}</h5>
                    <p onClick={handleClick} style={{ backgroundColor: "red", color: "#fff", padding: "5px 15px", boxShadow: "0px 2px 8px rgba(0,0,0,0.5)", borderRadius: "10px", cursor: "pointer" }}>Close</p>
                </div>
                 <div className='detail-box d-flex justify-content-between align-items-center flex-row' style={{ padding: "0px 25px", width: "100%", color:"#fff" }}>
                    <div className='db-left d-flex justify-content-around align-items-start flex-column'>
                        <p>Price: {price}</p>
                        <p>Popularity: {popularity}</p>
                        <p>Subcategory: {subcategory}</p>
                    </div>
                    <div className='db-right' style={{flexBasis:"50%", textAlign:"right"}}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo vero atque quam tempora quibusdam ullam assumenda hic,</p>
                    </div>


                </div>

            </div>}

        </div>


    )
}

export default ProductCard
