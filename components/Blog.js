import blog from './data/blog'
import Carousel from 'react-multi-carousel'
import Link from 'next/link'
// import ButtonGroup from './React-Multi-Carousel-Custom-Arrows'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Blog = () => {
    return (
        <div id="blog">
            <h2>erfahre mehr in <br /> unserem <span>Blog</span></h2>
            <div className="blog-list">
                <Carousel
                    responsive={responsive}
                    ssr
                    showDots={false}
                    slidesToSlide={1}
                    infinite
                    containerClass="container-with-dots"
                    itemClass="image-item"
                    deviceType={''}
                >
                    {blog.map((blogitem, i) =>
                        <div className="blog-item" key={i}>
                            <h3>{blogitem.titel.slice(0, 100)}</h3>
                            <p>{blogitem.text.slice(0, 200)}</p>
                            <Link href={blogitem.href}><a target="_blank">zum Artikel </a></Link>
                        </div>)}
                </Carousel>
            </div>

            <style jsx>{`
            #blog {
                padding: 10vh 5vw;
                background: #03000F
            }
            h2 {
                margin: 0;
                padding: 0 0 10vh;
                color: #3DD7AC;
                font-size: 5em;
                border-bottom: 1px solid #5D3EDE;
            }
            h2 span {
                color: transparent;
                letter-spacing: 3px;
                -webkit-text-stroke-width: 1.5px;
                -webkit-text-stroke-color: #3DD7AC;
            }
            .blog-list {
                padding-top: 15vh;
            }
            // Blog-item-style
            .blog-item {
                padding: 15vh 7.5vw 3vh;
                box-shadow: 15vw 0 #5D3EDE;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }
            h3, p {
                color: #3DD7AC;
            }
            h3 {
                font-weight: 300;
            }
            p {
                font-weight: 200;
            }
            a {
                color: #fff;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
                color: #3DD7AC;
            }
            `}</style>
        </div>
    );
}

export default Blog;