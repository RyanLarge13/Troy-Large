const getPaintings = async () => {
	try {
  const res = await fetch(`${process.env.API_ENDPOINT}/api/paintings`);
  return res.json();
	} catch (err) {
		console.log(err)
	}
};

const Home = async () => {
	const paintings = await getPaintings();
  return (
    <section className="mt-20 text-white">
      {
        paintings.map((painting) => (
          <div key={painting.id}>
            <h2>{painting.Title}</h2>
          </div>
        
      ))}
    </section>
  );
};

export default Home;
