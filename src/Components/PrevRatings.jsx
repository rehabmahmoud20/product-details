
export const PrevRatings = ({ rates }) => {
  const { client, comment } = rates;
  return (
   
      <div className="mb-2">
        <p className="text-md"> {client.name}</p>
        <p className="text-sm text-gray-400">{comment}</p>
      </div>
   
  );
};
export default PrevRatings;
