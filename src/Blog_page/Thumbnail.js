import { Link } from "react-router-dom";

function Thumbnail({ article }) {
  return (
    <Link
      to={`/blog/${article.filename}`}
      className="flex w-full h-35 shadow-stone-600 shadow-md hover:shadow-lg hover:shadow-stone-600 mb-6"
    >
      <img
        src={`${process.env.PUBLIC_URL}/image/thumbnail/${article.thumbnail}.jpg`}
        alt="thumnail"
        className="h-30 w-1/6 hidden md:inline-block"
      />
      <div className="text-ellipsis overflow-hidden container  p-3 flex-grow  hover:cursor-pointer bg-stone-700">
        <h2 className="pb-2 text-xl font-bold italic text-[#6B8490]">
          {article.title}
        </h2>
        <p>{article.digest}</p>
        <p className="italic text-base my-2">
          by {article.author} on{" "}
          <span className="text-orange-100">{article.date}</span>
        </p>
      </div>
    </Link>
  );
}

export default Thumbnail;
