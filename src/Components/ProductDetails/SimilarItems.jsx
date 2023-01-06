export const SimilarItems = ({ similarPds }) => {
  const { title } = similarPds;
  return (
      <p className="border p-4 text-center  w-[200px] hover:cursor-pointer ">
        {title}
      </p>

  );
};
