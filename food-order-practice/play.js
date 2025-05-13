import React, { useContext } from "react";

import bloghero from "../images/bloghero.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import homeSegment3img2 from "../images/homeSegment3img2.jpg";
import { Helmet } from "react-helmet-async";
import logo from "../images/logo.png";
import { SectionsContext } from "../store/section-context";

function Blog() {
  const { blog } = useContext(SectionsContext);

  const { meta, hero } = blog;

  return (
    <div>
      <Helmet>
        {/* Title and Meta Description */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:url"
          content="https://www.brookshealthandcare.com/"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Brooks Health and Care" />
        <meta property="og:locale" content="en_GB" />{" "}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={logo} />
        <link
          rel="canonical"
          href="https://www.brookshealthandcare.com/"
        />{" "}
        <meta name="author" content="Brooks Health and Care" />
        <meta name="robots" content="index, follow" />{" "}
      </Helmet>
      <div
        className="aboutheroreplacement p-md-5 p-4"
        style={{
          backgroundImage: `url(${hero.uri || bloghero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          backgroundColor: "rgb(0 0 0 / 70%)",
        }}
      >
        <div className="aboutheroreplacementbox">
          <div className="lhsheading">
            {" "}
            <span className="thick-dot"></span>{" "}
            <span className="ps-1"> {hero.headline}</span>{" "}
          </div>

          <div className="lhssubtitle pb-1 pt-3">{hero.subheadline} </div>
        </div>
      </div>
      <div className="blogcontainer">
        <div className="twocolumngrid blog2columngrid px-1 px-md-5">
          {["sample", "blog", "posts", "will", "go", "here"].map(() => (
            <ScrollAnimation
              className=""
              animateIn="bounceInLeft"
              animationOut="fadeOut"
            >
              <div className="homesection2subgridgroup ">
                <div>
                  <img
                    className="blogpageimg py-3"
                    src={homeSegment3img2}
                    alt=""
                  />
                </div>
                <div className="blogdate">July 24, 2024</div>
                <div className="aboutsegment3boxtitle  pt-3 pb-2">
                  The Art of Giving: More Than Just a Gesture
                </div>
                <div className="pt-2 homesection2subgridsubheading homesection4subgridsubheading">
                  In a world that often emphasizes the importance of acquiring
                  and achieving, the act of giving stands out as a powerful
                  counterbalance. Giving, in its truest form, is not merely an
                  action but an art that enriches both the giver and the
                  receiver. Let’s delve into the essence of giving and explore
                  its transformative power...
                </div>
                <div className="pt-4 text-start">
                  {" "}
                  <button className="testimonialbtn">
                    {" "}
                    <a href="/blogpage1" className="text-white">
                      Read More <i className="ps-2 fa-solid fa-arrow-right"></i>
                    </a>
                  </button>{" "}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Blog;
