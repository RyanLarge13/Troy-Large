import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center my-20">
      <p className="text-lg font-semibold mb-5">Troy Large Pastel</p>
      <ul className="text-center">
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-x-3 my-5">
        <BsFacebook />
        <BsLinkedin />
      </div>
      <p className="text-xs">TroyLarge Pastel @2023 all rights reserved</p>
    </footer>
  );
};

export default Footer;
