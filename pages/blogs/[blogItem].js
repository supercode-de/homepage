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
    // Filtern die Daten nach der URL 
    setThisBlog(blogs.filter((singleBlog) => {
      // console.log(singleBlog.title.main.replace(/ /g, "-") === blogItem)

      if (singleBlog.title.main.lastIndexOf('?') === -1) {
        return singleBlog.title.main.replace(/ /g, "-").replace(/\?|\#|”|“|"|,|:|\./g, "") === blogItem
      } else {
        // blogItem does not continue after ?
        return singleBlog.title.main.replace(/ /g, "-").replace(/\?|\#|”|“|"|,|:|\./g, "").slice(0, singleBlog.title.main.indexOf('?')) === blogItem
      }
    }))
    console.log(thisBlog)
    console.log(blogItem)
    console.log(blogs)
  }, [blogs, blogItem]);

  if (process.browser) {
    const width = useWindowSize().width / 12;
    return (
      <Layout>
        {/* Erst wenn etwas in thisBlog ist geht es weiter */}
        {thisBlog.length !== 0 ? (
          <BlogDetails
            width={width}
            title={blogs[thisBlog[0].id].title}
            // TODO: Wie finden wir die nächste URL aus dem blogs 
            // in thisBlog[0].id ist die aktuelle ID (das was bisher in unserem routerQuery / blogItem war)
            // damit müssten wir weiter arbeiten können.

            titleNext={
              thisBlog[0].id == blogs.length - 1 ?
                blogs[0].title :
                blogs[thisBlog[0].id * 1 + 1].title
              // blogItem == blogs.length - 1
              //   ? blogs[0].title
              //   : blogs[blogItem * 1 + 1].title
            }
            titlePrevious={
              thisBlog[0].id == 0
                ? blogs[blogs.length - 1].title
                : blogs[thisBlog[0].id * 1 - 1].title
            }
            text={blogs[thisBlog[0].id].text}
          // nextLink={
          //   blogItem < blogs.length - 1
          //     ? blogItem * 1 + 1
          //     : blogItem * 1 + 1 - blogs.length
          // }
          // previousLink={blogItem == 0 ? blogs.length - 1 : blogItem * 1 - 1}
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
