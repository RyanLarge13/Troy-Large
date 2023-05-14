"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Painting = () => {
  const [painting, setPainting] = useState({});

  const params = useSearchParams();

  useEffect(() => {
    const id = params.id;
    const fetchData = async () => {
      const res = await fetch(`/api/painting/${id}`, { method: "GET" });
      const data = await res.json();
      setPainting(data);
    };
    fetchData();
  }, []);

  return (
    <section className="mt-20 text-white">
      <p>{painting.Title}</p>
      <p>Hi</p>
    </section>
  );
};

export default Painting;
