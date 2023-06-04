"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Painting = () => {
  const [painting, setPainting] = useState(null);

  const searchParams = useSearchParams();
  const paintingId = searchParams.get("id");

  useEffect(() => {
    const getPainting = async () => {
      const res = await fetch(`/api/painting/${paintingId}`);
      const data = await res.json();
      setPainting(data[0]);
    };
    if (paintingId) getPainting();
  }, [paintingId]);

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
    cartItems.push(item);
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  };

  return (
    <section className="mt-20 text-white">
      {painting && (
        <div>
          <p className="text-2xl text-center font-bold mb-10">
            {painting.Title}
          </p>
          <img src={painting.Img} alt={painting.Title} />
          <p className="mt-5 text-center">{painting.Description}</p>
          <p className="text-sm text-center mt-5">{painting.Price}</p>
          <div className="mt-10 p-3 flex justify-center items-center">
            <button
              onClick={() => addToCart(painting)}
              className="px-3 py-1 rounded-sm bg-slate-700 text-amber-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Painting;
