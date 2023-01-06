import { useState } from "react";


export const Quantity = () => {
    const [count, setCount] = useState(1);
  return (
    <div className="flex items-center mb-6 ">
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
  )
}

export default Quantity;
