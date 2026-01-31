import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // search submit

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Result : ", searchTerm);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-center items-center w-full  ${isOpen ? "absolute top-0 left-0 bg-primary w-full h-24 z-50 transition-all duration-100" : "w-auto"} `}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2 ">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white text-black px-5 py-2 w-full focus:outline-none rounded-lg"
            />

            {/* submit btn */}
            <button
              type="submit"
              className="cursor-pointer absolute top-2 right-5 transition-all hover:scale-110"
            >
              <LuSearch className="w-5 h-5 " />
            </button>
          </div>

          {/* close btn */}
          <button
            onClick={handleToggle}
            className="absolute right-6 bg-white hover:bg-text rounded-full p-2"
          >
            <IoCloseSharp className="w-6 h-6 cursor-pointer" />
          </button>
        </form>
      ) : (
        <button
          onClick={handleToggle}
          className="flex items-center justify-center"
        >
          <LuSearch className="w-5 h-5 cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default Search;
