"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Painting = () => {
  const [painting, setPainting] = useState(null);
  const [itemInCart, setItemInCart] = useState(false);

  const searchParams = useSearchParams();
  const paintingId = searchParams.get("id");

  useEffect(() => {
    const getPainting = async () => {
      const res = await fetch(`/api/painting/${paintingId}`);
      const data = await res.json();
      setPainting(data[0]);
    };
    if (paintingId) {
      getPainting();
      const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
      const inCart = cartItems.some((item) => item._id === paintingId);
      inCart ? setItemInCart(true) : setItemInCart(false);
    }
  }, [paintingId]);

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
    const included = cartItems.some((cartItem) => cartItem._id === item._id);
    if (!included) {
      cartItems.push(item);
      localStorage.setItem("cart-items", JSON.stringify(cartItems));
      setItemInCart(true);
    }
  };

  return (
    <section className="mt-20 pb-20 text-white">
        <div className="min-h-screen">
      {painting && (
        <div>
          <p className="text-2xl text-center font-bold mb-10 md:text-3xl">
            {painting.Title}
          </p>
          <img
            src={painting.Img}
            alt={painting.Title}
            className="object-cover mx-auto w-full h-full md:w-[800px] md:h-[700px] lg:w-[500px] lg:h-[300px]"
          />
          <p className="text-center">{painting.Size}</p>
          <p className="mt-5 mx-5 text-center md:text-2xl md:w-[50%] md:my-20 md:mx-auto">
            {painting.Description}
          </p>
          <div className="mt-5 mb-10 ml-5">
            <p>Frame type: {painting.FrameType}</p>
            <p>Frame size: {painting.FrameThickness} inch</p>
          </div>
          <p className="text-sm text-center mt-5">{painting.Price}</p>
          <div className="mt-10 p-3 flex justify-center items-center">
            <button
              onClick={() => (itemInCart ? null : addToCart(painting))}
              className="px-3 py-1 rounded-sm bg-slate-700 text-amber-300"
            >
              {itemInCart ? "Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Painting;
