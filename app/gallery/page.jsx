const getPaintings = async () => {
  const data = await fetch("http://localhost:3000/api/paintings");
  return data.json();
};

const Gallery = async () => {
  const paintings = await getPaintings();

  return (
    <section>
      {paintings.data.map((painting) => (
        <img src={painting.Img} className="w-full object-cover object-center h-[300px]" />
      ))}
    </section>
  );
};

export default Gallery;