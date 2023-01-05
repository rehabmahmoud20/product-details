import { Navbar, Button } from "flowbite-react";
import { FiSearch } from "react-icons/fi";

import { GoLocation } from "react-icons/go";
import { BsFillBagFill } from "react-icons/bs";

const NavbarComponent = () => {
  return (
    <Navbar fluid={true} rounded={true} className="bg-slate-900">
      <div className="uppercase text-white font-bold text-3xl leading-8 ">
        <h2 className="bg-blue-700 mb-1 px-2 w-fit">sports</h2>
        <h2 className="bg-red-600 px-2 tracking-wider w-fit">direct</h2>
      </div>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <form className="md:w-2/3  md:mb-0 mb-4 ">
          <div className="relative mr-3">
            <div className="absolute inset-y-0 right-0 flex items-center pl-1 pointer-events-none">
              <FiSearch className=" mr-2" />
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full block  border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block "
              placeholder=" Search product or brand"
            />
          </div>
        </form>
        <div className="flex ">
          <ul className="text-white flex justify-between w-full gap-10">
            <li className="  text-center ">
              <p>hello.</p>
              signIn
            </li>
            <li className="  text-center border-l-2  pl-5">
              <GoLocation className="mx-auto mb-2" />
              <p>stores</p>
            </li>
            <li className="text-center">
              <GoLocation className="mx-auto mb-2" />
              <p>$CBP</p>
            </li>
            <li className=" text-center">
              <BsFillBagFill className="mx-auto mb-2" />
              <p>$0.00</p>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
