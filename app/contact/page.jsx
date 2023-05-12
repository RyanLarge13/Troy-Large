"use client";
import { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedCredentials = localStorage.getItem("credentials");
    if (storedCredentials) {
      const parsedCredentials = JSON.parse(storedCredentials);
      setName(parsedCredentials.name);
      setEmail(parsedCredentials.email);
      setMessage(parsedCredentials.message);
    }
  }, []);

  const storeCredentials = () => {
    if (name || email || message) {
      const newCredentials = {
        name,
        email,
        message,
      };
      localStorage.setItem("credentials", JSON.stringify(newCredentials));
    }
  };

  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-center font-bold mb-5">Contact Troy</h1>
      <form
        onBlur={() => storeCredentials()}
        className="flex flex-col justify-center items-center p-2 mt-20 text-black"
      >
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder={!name && "Name"}
          value={name && name}
          className="w-full p-2 focus:outline-0 focus:bg-amber-100 duration-200"
        />
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder={!email && "Email"}
          value={email && email}
          className="w-full my-5 p-2 focus:outline-0 focus:bg-amber-100 duration-200"
        />
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder={!message && "Message"}
          value={message && message}
          className="w-full p-2 min-h-[300px] focus:outline-0 focus:bg-amber-100 duration-200"
        ></textarea>
        <button type="submit" className="px-5 py-2 mt-5 bg-amber-300">
          Submit
        </button>
      </form>
      <div></div>
    </section>
  );
};

export default Contact;
