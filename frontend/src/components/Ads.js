import React from 'react'

function Ads(props) {
    return (
        <div className='col-md-3 mt-2'>

            <div className="card -w-100">
                <img src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1__en-IN_955a5f8b-9006-4919-92f4-ddfa2ebec8f6.jpg?v=1694757755" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
            </div>




        </div>
    )
}

export default Ads;