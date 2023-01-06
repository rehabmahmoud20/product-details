import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";

export const PrevRatings = () => {
  const { productData } = useSelector((state) => state.productSlice);
  return (
    <div className="mb-2 container">
      <h2 className="font-bold uppercase mb-6 text-2xl">customer reviews </h2>

      {productData?.rates &&
        productData.rates?.map((e) => (
          <div className="border shadow-lg shadow-gray-300 rounded-2xl p-4 mb-10">
            <div className="flex gap-4 items-center">
            <p className="text-2xl font-bold"> {e.client.name}</p>
              <ReactStars
                count={5}
                size={20}
                edit={false}
                activeColor="#1E429F"
                isHalf={true}
                value={e.rate}
              />
            </div>
          
            <p className="text-sm ">{e.comment}</p>
          </div>
        ))}
    </div>
  );
};
export default PrevRatings;
