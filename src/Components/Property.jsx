import React from 'react'
import './Property.css'
import Property_image from '../Images/6.jpg'
// import author from '../Images/author.jpg'
const Property = ({output}) => {
	return (

		<>
			<div className="card-container flex flex-col w-96 h-50 border-2
			 rounded-md border-blue-500 m-2 shadow-zinc-700 shadow-xl bg-green-300">
				<div className="product-image rounded-md mt-2 hover:scale-105 ease-in-out duration-300">
					<a href="#"> <img src={Property_image} alt="property" className="rounded-md"/></a>
				</div>


				<div className="product-info">
					<div className="product-badge ">
						<ul>
							<li className="sale-badg mt-2 text-xl text-blue-700 font-bold ">{output?.category}</li>
						</ul>
					</div>
					<h2 className="product-title text-black hover:text-green-950 hover:font-mono"> <a href="#">
						{output?.name}</a></h2>
					<div className="product-img-location">
						<ul>
							<li>

								<a href="#"><i className="flaticon-pin"></i> {output?.address}</a>
							</li>
						</ul>
					</div>
					<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
						<li><span>3 </span>
							Bed
						</li>
						<li><span>2 </span>
							Bath
						</li>
						<li><span>3450 </span>
							Square Ft
						</li>
					</ul>
					<div className="product-hover-action">
						<ul>
							<li>
								<a href="#" title="Quick View" data-bs-toggle="modal"
								   data-bs-target="#quick_view_modal">
									<i className="flaticon-expand"></i>
								</a>
							</li>
							<li>
								<a href="#" title="Wishlist" data-bs-toggle="modal"
								   data-bs-target="#liton_wishlist_modal">
									<i className="flaticon-heart-1"></i></a>
							</li>
							<li>
								<a href="product-details.html" title="Product Details">
									<i className="flaticon-add"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</>
	)
}

export default Property
