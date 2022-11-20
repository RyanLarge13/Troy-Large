import styles from "./page.module.scss";

const getPaintings = async () => {
  const data = await fetch("http://localhost:3000/api/paintings");
  return data.json();
};

const Home = async () => {
  const paintings = await getPaintings();
  return (
    <>
      <h1>Home</h1>
      <div>
        {paintings.data.map((item) => (
          <>
            <h2>{item.Title}</h2>
            <img className="img" src={item.Img} alt="image" />
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
