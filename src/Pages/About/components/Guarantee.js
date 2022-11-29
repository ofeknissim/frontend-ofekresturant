import React from "react";
import { Link } from "react-router-dom";

const Guarantee = () => {
  return (
    <div className="bg-about_guarantee h-auto md:h-[500px] w-full py-24 bg-cover bg-no-repeat bg-center ">
      <div className="container text-center font-JosefinSans">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-JosefinSans leading-[50px] md:leading-[60px] lg:leading-[70px]">
          30 Minutes Delivery!
        </h2>
        <p className="text-gray-600 mb-10">
          If you’re having a meeting, working late at night and need an extra{" "}
          <br />
          push. Let us know and we will be there
        </p>
        <Link to="/shop" className="btn-primary">
          Make an Order
        </Link>
      </div>
    </div>
  );
};

export default Guarantee;
