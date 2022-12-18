import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CategoryLoader from "../../../Shared/Loader/CategoryLoader";
import { filterByCategory } from "../../../store/reducers/cartSlice";
import { useAllCategoryQuery } from "../../../store/services/productServices";
import Data from "../../../products.json";

const Menus = () => {
  const { data, isSuccess, isLoading } = useAllCategoryQuery({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (category) => {
    dispatch(filterByCategory(category.categoryName));
    navigate("/shop");
  };
  return (
    <div className="font-JosefinSans bg-white py-20">
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            className="btn-primary transition-all duration-100 z-20  absolute -top-[68px] right-auto"
            to="/menu"
          >
            Menus
          </Link>
        </div>
        {isLoading ? (
          <CategoryLoader />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
            {Data.slice(0, 8).map((category, index) => (
              <button
                key={index}
                className="flex items-center justify-center flex-col cursor-pointer hover:text-white transition-all duration-150 group bg-primary/40 rounded-xl px-4 py-2"
                onClick={() => handleNavigate(category)}
              >
                <div className="mx-auto overflow-hidden">
                  <img
                    className="group-hover:scale-110 transition-all duration-300 ease-in-out w-24 h-[100px] object-contain"
                    src={category.images}
                    alt="category-img"
                  />
                </div>
                <h2 className="uppercase text-sm font-bold text-center">
                  {category.category}
                </h2>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menus;
