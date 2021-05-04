import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import BlogDetails from "../../components/BlogDetails";
import BlogData from "../../components/data/blog";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../components/functions/windowSize";

const blogItem = (props) => {

  const router = useRouter();
  const { blogItem } = router.query;

  const [blogs, setBlogs] = useState(BlogData);
  const [thisBlog, setThisBlog] = useState([])

  useEffect(() => {
    setBlogs(BlogData)
    // console.log("mounted");
    // console.log(blogs);
    setThisBlog(blogs.filter((singleBlog) => {
      // console.log(singleBlog.title.main.replace(/ /g, "-") === blogItem)
      return singleBlog.title.main.replace(/ /g, "-") === blogItem
    }))
    // console.log(thisBlog)
    // thisBlog ? console.log(thisBlog[0].id) : console.log("error")

  }, [blogs, blogItem]);




  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        {thisBlog.length !== 0 ? (
          // JSON.stringify(thisBlog[0].id)
          // // ""
          <BlogDetails
            width={width}
            title={blogs[thisBlog[0].id].title}
            // titleNext={
            //   blogItem == blogs.length - 1
            //     ? blogs[0].title
            //     : blogs[blogItem * 1 + 1].title
            // }
            // titlePrevious={
            //   blogItem == 0
            //     ? blogs[blogs.length - 1].title
            //     : blogs[blogItem * 1 - 1].title
            // }
            text={blogs[thisBlog[0].id].text}
            // nextLink={
            //   blogItem < blogs.length - 1
            //     ? blogItem * 1 + 1
            //     : blogItem * 1 + 1 - blogs.length
            // }
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
