"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";

const Cart = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setInterval(() => {
      getItems();
    }, 1000);
  }, []);

  const getItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
    setItems(cartItems);
  };

  const removeItem = (id) => {
    const newList = items.filter((item) => item._id !== id);
    setItems(newList);
    localStorage.setItem("cart-items", JSON.stringify(newList));
  };

  const getTotal = () => {
    const prices = items.map((item) => item.Price);
    const formattedPrice = prices.map((price) =>
      parseFloat(price.replace(/[$,]/g, ""))
    );
    const total = formattedPrice.reduce((a, b) => a + b);
    return total;
  };

  return (
    <>
      <div
        onClick={() => setShow((prev) => !prev)}
        className="fixed bottom-5 right-5 rounded-sm px-3 py-1 text-amber-300 bg-[#222] shadow-md text-2xl z-10"
      >
        <div className="absolute top-[-7px] right-[-7px] rounded-full bg-slate-700 shadow-sm h-[20px] w-[20px] text-xs flex justify-center items-center">
          {items.length}
        </div>
        <AiOutlineShoppingCart />
      </div>
      <motion.div
        initial={{ y: "110%" }}
        animate={show ? { y: 0 } : { y: "110%" }}
        className="fixed bottom-0 right-0 left-0 bg-[#222] p-5 shadow-sm"
      >
        {items.length > 0 ? (
          <div>
            <p className="mb-3 pb-1 border-b-slate-700 border-b">
              total: ${getTotal()} | count: {items.length}
            </p>
            <div className="max-h-[50vh] overflow-y-auto">
              {items.map((item) => (
                <div
                  onClick={() => {
                    setShow(false);
                    router.push(`/painting?id=${item._id}`);
                  }}
                  key={item._id}
                  className="w-full border-b border-b-amber-300 px-2 py-5 flex justify-between items-center"
                >
                  <p>{item.Title}</p>
                  <AiOutlineCloseCircle
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item._id);
                    }}
                    className="text-amber-300"
                  />
                </div>
              ))}
            </div>
            <button onClick={() => {
            setShow(false)
            router.push("/checkout")}} className="px-3 py-1 rounded-sm bg-slate-700 mt-5">
              CheckOut
            </button>
          </div>
        ) : (
          <p>Nothing In Your Cart</p>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
