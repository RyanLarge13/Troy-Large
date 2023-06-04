"use client";
import { HiOutlineLink } from "react-icons/hi";
import { useRouter } from "next/navigation";

const HeadingLink = ({ title, id }) => {
  const router = useRouter();
  return (
    <div className="flex border-b border-b-white">
      <h2
        onClick={() => router.push(`/painting?id=${id}`)}
        className="font-bold text-xl pb-1 mr-2"
      >
        {title}
      </h2>
      <HiOutlineLink className="text-sm self-center" />
    </div>
  );
};

export default HeadingLink;
