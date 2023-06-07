import { stripe } from "@utils/stripe.js";

const baseUrl = "http://localhost:3000";
const productionUrl = "https://troy-large.vercel.app";

const getPrice = (price) => {
  const realPrice = parseFloat(price.replace(/[$,]/g, ""));
  return realPrice;
};

export const POST = async (req) => {
  const items = await req.json();
  try {
    console.log("Trying");
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      payment_method_types: ["card"],
      shipping_options: [
        { shipping_rate: "shr_1M50fYGhuJ5xJe5GY2bYupwY" },
        { shipping_rate: "shr_1M50ghGhuJ5xJe5GUWb7cMAN" },
      ],
      line_items: items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.Title,
              images: [item.Img],
            },
            unit_amount: getPrice(item.Price) * 100,
          },
          adjustable_quantity: {
            enabled: false,
          },
          quantity: 1,
        };
      }),
      mode: "payment",
      success_url: `${productionUrl}/`,
      cancel_url: `${productionUrl}/`,
    });
    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (err) {
    console.log("Erroring");
    console.log(err);
    return new Response("Error checking out items", { status: 400 });
  }
};
