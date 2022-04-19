import { useParams } from "react-router-dom";
import MainCententLayout from "Blog_page/MainCententLayout";

function Article() {
  let { articleHtml } = useParams();

  return (
    <MainCententLayout>
      <iframe
        src={`${process.env.PUBLIC_URL}/articles/${articleHtml}.html`}
        title="article"
        className="w-full min-h-[85vh]"
      />
    </MainCententLayout>
  );
}

export default Article;
