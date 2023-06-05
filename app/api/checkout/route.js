import { stripe } from "@utils/stripe.js";

export const POST = async (req, res) => {
  try {
    console.log("Trying");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Example Product",
              images: ["https://example.com/product-image.jpg"],
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });
    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (err) {
    console.log("Erroring");
    console.log(err);
    return new Response("Error checking out items", { status: 400 });
  }
};
