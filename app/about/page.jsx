import Image from "next/image";
import TroyLarge from "/public/assets/troy-large.jpg";

export const metadata = {
	title: "Troy Large - about", 
	description: "Troy Large from childhood to grandfather, a short backstory telling the world about this amazing artist"
}

const About = () => {
  return (
    <section className="p-2 px-3 md:px-5 lg:px-60">
      <div className="overflow-hidden rounded-full w-[200px] h-[200px] mb-5">
        <Image
          src={TroyLarge}
          height={200}
          width={250}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-10">Troy Large</h1>
      <hr />
      <h2 className="text-2xl mt-4 mb-3 font-bold md:text-3xl text-amber-200">
        The Beginning
      </h2>
      <p className="indent-5 mb-2 ml-1 md:text-xl">
        Born in 1961 Los Angeles, California, Troy Large began his life
        wondering about the mysterious phenomena & the abundatant amount of
        amazing things around him the world had to offer.
      </p>
      <p className="indent-5 mb-2 ml-1 md:text-xl">
        Books did not only become a joyful part of his life but also a necessity
        in it. He read everything he came across and dabbled in the arts of
        music and drawing.
      </p>
      <p className="indent-5 mb-2 md:text-xl">
        The moral of the story is that my father has had a connection with this
        amazing artistic side of the world for a very long time. And just like
        that, at the age of 8 his artistic intuitions were born.
      </p>
      <h2 className="text-2xl mt-4 mb-3 font-bold md:text-3xl text-amber-200">
        Intuition
      </h2>
      <p className="indent-5 mb-2 md:text-xl">
        As any good artist would do, my father became fixed on religiously
        drawing & painting everything he could possibly imagine. Not very often
        did his art spawn from his imagination.
      </p>
      <p className="indent-5 mb-2 md:text-xl">
        No.. Rather it was born from the way specific places in this world made
        him feel. He believes whole heartedly that a true skill in art is not
        the sheer realism, or perfection of each stroke, rather it is the
        ability to undoubtedly & inevitably make someone feel something.
      </p>
      <p className="indent-5 mb-2 md:text-xl">
        What does he mean by feel something?? Anything. He wants people to
        connect to the art the same way he does. By their heart and soul..
        Surely an even better artist would have the ability to make people feel
        exactly as he did in order to show them who he is through art.
      </p>
      <p className="indent-5 mb-2 md:text-xl">He does just that...</p>
      <h2 className="text-2xl mt-4 mb-3 font-bold md:text-3xl text-amber-200">
        The Future
      </h2>
      <p className="indent-5 mb-2 md:text-xl">
        Not all times in this life are as wonderful as making art everyday doing
        what you love. Real life unfortunately does not consist of those
        luxuries. To say the least, 3 kids, 12 hour work shifts, managing two
        households & trying to find time to focus is not the easiest task.
      </p>
      <p className="indent-5 mb-2 md:text-xl">
        Countless times life nearly strung out it's malicious hand to force him
        to let go of a dream. But a true lover of art never let's go.
      </p>
      <p className="indent-5 mb-2 md:text-xl">
        One of the greatest benefits in doing what you love is the ability to
        share it with others. Welcome to Troy Large's art gallery. Yes, you are
        welcome to buy these pieces, but most importantly, simply enjoy them.
      </p>
      <p className="indent-5 mb-2 md:text-xl">
        Thank you for visiting the online art gallery.
      </p>
    </section>
  );
};

export default About;
