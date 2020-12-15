import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import BlogDetails from "../../components/BlogDetails";
import BlogData from "../../components/data/blog";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../components/functions/windowSize";

const blogItem = (props) => {
  useEffect(() => {
    console.log("mounted");
    console.log(blogs);
  }, []);
  const router = useRouter();
  const { blogItem } = router.query;
  const [blogs, setBlogs] = useState(BlogData);
  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        {blogs && blogItem ? (
          <BlogDetails
            width={width}
            title={blogs[blogItem].title}
            titleNext={
              blogItem == blogs.length - 1
                ? blogs[0].title
                : blogs[blogItem * 1 + 1].title
            }
            titlePrevious={
              blogItem == 0
                ? blogs[blogs.length - 1].title
                : blogs[blogItem * 1 - 1].title
            }
            text={blogs[blogItem].text}
            nextLink={
              blogItem < blogs.length - 1
                ? blogItem * 1 + 1
                : blogItem * 1 + 1 - blogs.length
            }
            previousLink={blogItem == 0 ? blogs.length - 1 : blogItem * 1 - 1}
          />
        ) : (
          ""
        )}
      </Layout>
    );
  } else {
    return "";
  }
};

export default blogItem;
