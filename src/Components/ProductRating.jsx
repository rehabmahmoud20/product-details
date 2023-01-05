import ReactStars from "react-rating-stars-component";

const ProductRating = ({rate}) => {
  return (
    <ReactStars
      count={5}
      size={24}
      edit={false}
      activeColor="#1E429F"
      isHalf={true}
      value={rate}
    />
  );
};
export default ProductRating;
