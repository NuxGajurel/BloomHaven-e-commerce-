import React, { useState } from "react";
import Qr from "../../public/Img/qr.jpg";
const Checkout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen(e.target.checked);
  };
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-50">
        <div className="shadow-md bg-white lg:w-150 w-93 mt-10 border border-gray-100">
          <div>
            <h1 className="text-3xl flex mt-3 ml-3 text-[#a5576d]">
              Bloom Haven
            </h1>
          </div>
          <div>
            <h3 className="text-gray-900 mt-4 ml-3">Contact Information </h3>
            <form
              action=""
              onSubmit={() => alert("Thank you for buying from us")}
            >
              <input
                type="email"
                placeholder="bloomhaven@gmail.com"
                className="mt-3 ml-3 border w-80"
                required
              />
              <br></br>
              <input type="checkbox" className="mt-6 ml-3" required/> Are you sure
              <h3 className="text-gray-900 mt-4 ml-3">Shipping Address </h3>
              <input
                type="text"
                placeholder="Full Name"
                className="mt-3 ml-3 border"
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="mt-3 ml-3 border"
                required
              />
              <br></br>
              <input
                type="text"
                placeholder="City"
                className="mt-3 ml-3 border"
                required
              />
              <input
                type="palce"
                placeholder="phone number"
                className="mt-3 ml-3 border"
                required
              />
              <h3 className="text-gray-900 mt-4 ml-3">Payment Method </h3>
              <label htmlFor="">
                {" "}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mt-3 ml-3"
                />{" "}
                Cash on delivery
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mt-3 ml-3"
                  onClick={handleOpen}
                  checked={open}
                />{" "}
                Phone pay
              </label>
              {open && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={Qr}
                    alt=""
                    className="w-60"
                    onClick={() => setOpen(!open)}
                  />
                </div>
              )}
              <button className="bg-[#1D1D1F] hover:bg-[#333333] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 lg:w-120 mt-6 m-7 w-80">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
