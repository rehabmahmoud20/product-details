import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import PrevRatings from "./PrevRatings";
import { RatingModal } from "./RatingModal";
import { SimilarItems } from "./SimilarItems";
import Loader from "./Loader";
import { Breadcrumb } from "flowbite-react";
import ProductRating from "./ProductRating";

const ProductDetails = () => {
  const [data, SetData] = useState(null);
  const [color, setColor] = useState("red");
  const [thumIndex, setTumbIndex] = useState(0);
  const [rates, setRates] = useState();
  const [similar, setSimlarPds] = useState();
  const [count, setCount] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [images, setImg] = useState([]);
  const handleShowModal = (val) => {
    setShowModal(val);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://brocarshop.com/api/en/products/13");
      SetData(data.data.payload);
      const imgs = data.data?.payload?.product?.sizes[0]?.colors.map((e) => {
        return { original: e.images[0].image, thumbnail: e.images[0].image };
      });
      setImg(imgs);
      setRates(data.data?.payload?.product.rates);
      setSimlarPds(data.data?.payload.similar);
    };
    getData();
  }, []);

  if (!data) {
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

      <div className=" lg:grid lg:grid-cols-2">
        <div className="carosel ">
          <ImageGallery
            items={images}
            showPlayButton={false}
            thumbnailPosition="left"
            startIndex={thumIndex}
            showFullscreenButton={true}
          />
          {/* rate */}
        </div>
        <div className="content lg:ml-10">
          {/* ratting */}
          <div className="rating flex mb-4 gap-4">
            <ProductRating rate={data?.product?.rate} />
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
            {data.product?.title.slice(data.product?.title.lastIndexOf(" "))}
          </h2>
          {/* description */}
          <h3 className="text-gray-600 mb-4">{data.product?.title}</h3>
          {/* colors */}
          <p className="mb-2 mb-4">colour : {color}</p>
          <ul className="flex mb-4">
            {data?.product?.sizes[0] &&
              data?.product?.sizes[0]?.colors.map((e, i) => (
                <li key={i}>
                  <img
                    onClick={() => {
                      setColor(e.color);
                      setTumbIndex(i);
                    }}
                    className="w-20 h-20 mr-2"
                    src={e.images[0]?.image}
                    alt="product"
                  />
                </li>
              ))}
          </ul>
          {/* size */}

          <div>
            <p className="mb-2 mb-4">size :</p>
            <ul className="flex mb-4">
              {data?.product?.sizes &&
                data?.product?.sizes.map((e) => (
                  <li className="border py-2 px-5 mr-2" key={e.id}>
                    {e?.title}
                  </li>
                ))}
            </ul>
          </div>
          {/* quantity */}
          <div className="flex items-center mb-4 ">
            <span className="mr-10">Quantity :</span>
            <div
              className="text-4xl text-slate-400 mr-3 cursor-pointer select-none"
              onClick={() => {
                count > 1 && setCount(count - 1);
              }}
            >
              -
            </div>
            <div className="border inline-block py-1 px-6 text-3xl ">
              {count}
            </div>
            <div
              className="text-4xl text-slate-400 ml-3 cursor-pointer select-none"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </div>
          </div>

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
      {/* reviews */}
      <div className=" p-4 my-4">
        <h2 className="font-bold uppercase mb-3">customer reviews </h2>

        {rates?.map((e) => (
          <PrevRatings rates={e} key={e.id} />
        ))}
      </div>

      {/* similar products */}
      <div>
        <h2 className="font-bold mb-4 uppercase">see more similar items</h2>
        <div className="flex flex-wrap gap-5 mb-2 items-stretch">
          {similar?.map((e) => (
            <SimilarItems similarPds={e} key={e.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;

// product-details