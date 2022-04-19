import { useParams } from "react-router-dom";
import MainCententLayout from "Blog_page/MainCententLayout";

function iframe(fileAddress) {
  return {
    __html: `<iframe src="${fileAddress}" style="position: absolute; width: 100%; height: 90%;"></iframe>`,
  };
}

function Article() {
  let { articleHtml } = useParams();

  return (
    <MainCententLayout>
      <div
        className="min-h-screen fixed top-28 w-10/12"
        dangerouslySetInnerHTML={iframe(
          `${process.env.PUBLIC_URL}/articles/${articleHtml}.html`
        )}
      />
    </MainCententLayout>
  );
}

export default Article;
