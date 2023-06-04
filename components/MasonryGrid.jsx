"use client";
import Masonry from "react-masonry-css";
import { useRouter } from "next/navigation";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const MasonryGrid = ({ images }) => {
  const router = useRouter();

  const showPainting = (id) => {
    router.push(`/painting?id=${id}`);
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((img) => (
        <div onClick={() => showPainting(img.id)}>
          <img key={img.id} src={img.img} alt="painting" className="rounded-sm" />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
