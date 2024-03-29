"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart-items")) || [];
    setCartItems(items);
  }, []);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(cartItems),
      });
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = (id) => {
    const newList = cartItems.filter((item) => item._id !== id);
    localStorage.setItem("cart-items", JSON.stringify(newList));
    setCartItems(newList);
  };

  const getTotal = () => {
    const prices = cartItems.map((item) => item.Price);
    const formattedPrice = prices.map((price) =>
      parseFloat(price.replace(/[$,]/g, ""))
    );
    const total = formattedPrice.reduce((a, b) => a + b);
    return total;
  };

  return (
    <section className="mt-20 flex flex-col justify-center items-center">
      <h1 className="text-center text-xl">Your Paintings</h1>
      <div className="my-20">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="my-3 rounded-sm p-3">
                <Link href={`/painting/?id=${item._id}`}>
                  <img
                    src={item.Img}
                    alt={item.Title}
                    className="object-cover mx-auto w-full h-full md:w-[800px] md:h-[700px] lg:w-[500px] lg:h-[300px]"
                  />
                </Link>
                <div className="flex justify-between items-center">
                  <p>{item.Size}</p>
                  <p
                    className={`${Number(item.Sale) > 0 ? "line-through" : ""}`}
                  >
                    {item.Price}
                  </p>
                </div>
                <p className="my-2 text-lg">{item.Title}</p>
                {Number(item.Sale) > 0 ? (
                  <div className="flex justify-between items-center">
                    <p>Sale! New Price: </p>
                    <p>${calcNewPrice(Number(item.Sale), item.Price)}</p>
                  </div>
                ) : (
                  ""
                )}
                <button
                  onClick={() => removeItem(item._id)}
                  className="mt-5 px-3 py-1 rounded-sm shadow-md bg-slate-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="pl-3 pb-1 border-b border-b-slate-700">
              <p>Total Price: ${getTotal()}</p>
              <p>Checkout: {cartItems.length} paintings</p>
            </div>
          </div>
        ) : (
          <p>No Items In Your Cart 😢</p>
        )}
      </div>
      <button
        onClick={cartItems.length > 0 ? handlePayment : () => router.push("/")}
        className="px-5 py-1 mb-5 text-lg text-amber-200 rounded-sm shadow-md bg-slate-700"
      >
        {cartItems.length > 0 ? "Pay" : "Shop"}
      </button>
    </section>
  );
};

export default Checkout;
