import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { RatingModal } from "./RatingModal";
import { SimilarItems } from "./SimilarItems";
import Loader from "../Shared/Loader";
import { Breadcrumb } from "flowbite-react";
import ProductRating from "./ProductRating";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/DataSlice";
import Quantity from "./Quantity";

const ProductDetails = () => {
  const { isloading, product, productData } = useSelector(
    (state) => state.productSlice
  );
  const dispatch = useDispatch();
  const [defaultColor, setColor] = useState("");
  const [defaultsize, setdefaultsize] = useState("");
  const [thumIndex, setTumbIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (val) => {
    setShowModal(val);
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  // setting the default colors and size
  useEffect(() => {
    setdefaultsize(product?.sizes[0]?.title);
    setColor(product?.sizes[0]?.colors[0].color)
    
  }, [product]);

  if (isloading) {
    return <Loader />;
  }
  return (
    <section className="container">
      <div className="mb-4">
        <Breadcrumb aria-label="Default breadcrumb example ">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>mens</Breadcrumb.Item>
          <Breadcrumb.Item>clothing </Breadcrumb.Item>
          <Breadcrumb.Item>tops and t-shirts </Breadcrumb.Item>
          <Breadcrumb.Item>zip</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className=" lg:grid lg:grid-cols-2 mb-6">
        <div className="carosel ">
          <ImageGallery
            items={productData.images}
            showPlayButton={false}
            thumbnailPosition="left"
            startIndex={thumIndex}
            showFullscreenButton={true}
          />
          {/* rate */}
        </div>
        <div className="content lg:ml-10">
          {/* ratting */}
          <div className="rating flex mb-4 gap-4 items-center">
            <ProductRating rate={product?.rate} />
            {/*prev  reviews */}
            <Link
              to="/PrevRatings"
              className="text-light text-decoration-none  fs-4"
            >
              <p>({product?.rates.length})</p>
            </Link>
            <button
              className="border-b-2 border-black "
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              write rating
            </button>
            <RatingModal
              showModal={showModal}
              handleShowModal={handleShowModal}
            />
          </div>
          {/* title */}
          <h2 className="text-gray-600 font-bold mb-4">
            {product?.title &&
              product?.title.slice(product.title.lastIndexOf(" "))}
          </h2>
          {/* description */}
          <h3 className="text-gray-600 mb-4">{product?.title}</h3>
          {/* colors */}
          <p className="mb-2 mb-4">colour : {defaultColor}</p>
          <ul className="flex mb-4">
            {product?.sizes &&
              product?.sizes[0]?.colors.map((e, i) => (
                <li key={i}>
                  <img
                    onClick={() => {
                      setColor(e.color);
                      setTumbIndex(i);
                    }}
                    className="w-20 h-20 mr-2 cursor-pointer"
                    src={e.images[0]?.image}
                    alt="product"
                  />
                </li>
              ))}
          </ul>
          {/* size */}

          <div>
            <p className="mb-2 mb-4">size : {defaultsize}</p>
            <ul className="flex mb-4">
              {product?.sizes &&
                product?.sizes.map((e) => (
                  <li className="border py-2 px-5 mr-2 cursor-pointer" key={e.id}  onClick={() => {
                    setdefaultsize(e.title);
                  }}>
                    {e?.title}
                  </li>
                ))}
            </ul>
          </div>
          {/* quantity */}
          <Quantity/>
          <button className="bg-green-400 w-full uppercase py-4 text-white mb-4">
            add to bag
          </button>
          <p className="mb-4 text-gray-600 text-center">
            sign in to add to wishlist
          </p>
          <p className="mb-4 text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      {/* similar products */}
      <div className="mb-14">
        <h2 className="font-bold mb-4 uppercase">see more similar items</h2>
        <div className="flex flex-wrap gap-5 mb-2 items-stretch">
          {productData.similar &&
            productData.similar.map((e) => (
              <SimilarItems similarPds={e} key={e.id} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
