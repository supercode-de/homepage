export default function Superblog() {
    if (process.browser) {
      const width = useWindowSize().width / 12;
      return (
        <Layout>
          <section className="blog-overview">
            <h1>Blog</h1>
          </section>
        </Layout>
      );
    } else {
      return "";
    }
  }
  