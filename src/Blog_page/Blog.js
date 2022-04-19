import Thumbnail from "Blog_page/Thumbnail";
import articles from "Blog_page/articles.json";
import MainCententLayout from "Blog_page/MainCententLayout";

const thumbnails = articles.map((article_data, index) => (
  <Thumbnail key={index} article={article_data} />
));

function Blog() {
  return <MainCententLayout>{thumbnails}</MainCententLayout>;
}

export default Blog;
