import Layout from "../components/Layout";
import NavMenuItem from "../components/NavMenuItem";
import NavMenu from "../components/NavMenu";
import { useSpring, animated, interpolate } from "react-spring";
import React, { useEffect, useState } from "react";
import ImageBackground from "../components/ImageBackground";
import HorizontalScrollCanvas from "../components/HorizontalScrollCanvas";
import ContentSection from "../components/ContentSection";
import Titles from "../components/Titles";
import ContentHead from "../components/ContentHead";
import ArrowLink from "../components/ArrowLink";
import BackgroundWords from "../components/BackgroundWords";
import FauxPage from "../components/FauxPage";
import debounce from "../lib/debounce";

export default function Page({ frontPages, careers, brands }) {
  //States which handle every elements animations
  const [scrollY, setScrollY] = useState(0);
  const [canvasProps, setCanvas] = useSpring(() => ({ left: "0px" }));
  const [page, setPage] = useState(0);

  useEffect(() => {
    let mql = window.matchMedia("(min-width: 800px)");

    scrollAnimation(mql.matches);

    window.addEventListener("scroll", () => scrollAnimation(mql.matches));

    mql.addEventListener("change", () => {
      scrollAnimation(mql.matches);
      console.log("changes");
    });

    return () =>
      window.removeEventListener("scroll", () => scrollAnimation(mql.matches));
  }, []);

  const scrollAnimation = (isDesktop) => {
    setScrollY(window.scrollY);
    setCanvas({ left: `-${isDesktop ? window.scrollY : 0}px` });
  };
  return (
    <Layout>
      <NavMenu>
        {frontPages.map((frontPage) => (
          <NavMenuItem
            title={frontPage.acf.menu_title}
            number={frontPage.acf.number}
            key={frontPage.id}
            page={page}
            setPage={setPage}
          />
        ))}
      </NavMenu>

      <HorizontalScrollCanvas canvasProps={canvasProps}>
        <FauxPage>
          <ContentSection
            number={parseInt(frontPages[0].acf.number)}
            className="static-mob"
          >
            <ContentHead
              number={frontPages[0].acf.number}
              smallTitle="Welcome"
            />
            <Titles
              mainTitle={frontPages[0].acf.main_title}
              subtitle={frontPages[0].acf.subtitle}
            />
            <ArrowLink
              linkUrl={frontPages[0].acf.link_url}
              linkText={frontPages[0].acf.link_text}
            />
          </ContentSection>
          <ImageBackground
            src="/img/mcg-landing.png"
            alt="man"
            scrollY={scrollY}
          />
          <BackgroundWords
            words={frontPages[0].acf.display_title}
            scrollY={scrollY}
          />
        </FauxPage>

        <FauxPage>
          <ContentSection
            number={parseInt(frontPages[1].acf.number)}
            className="static-mob"
          >
            <ContentHead
              number={frontPages[1].acf.number}
              smallTitle={frontPages[1].acf.menu_title}
            />
            <Titles
              mainTitle={frontPages[1].acf.main_title}
              subtitle={frontPages[1].acf.subtitle}
            />
            <ArrowLink
              linkUrl={frontPages[1].acf.link_url}
              linkText={frontPages[1].acf.link_text}
            />
          </ContentSection>
        </FauxPage>

        <FauxPage>
          <ContentSection
            number={parseInt(frontPages[2].acf.number)}
            className="static-mob"
          >
            <ContentHead
              number={frontPages[2].acf.number}
              smallTitle={frontPages[2].acf.menu_title}
            />
            <Titles
              mainTitle={frontPages[2].acf.main_title}
              subtitle={frontPages[2].acf.subtitle}
            />
            <ArrowLink
              linkUrl={frontPages[2].acf.link_url}
              linkText={frontPages[2].acf.link_text}
            />
          </ContentSection>
        </FauxPage>
      </HorizontalScrollCanvas>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:8888/wp-json/wp/v2/front-page?order=asc"
  );
  const frontPages = await res.json();

  const careersRes = await fetch(
    "http://localhost:8888/wp-json/wp/v2/job-listing?order=asc"
  );
  const careers = await careersRes.json();

  const brandsRes = await fetch(
    "http://localhost:8888/wp-json/wp/v2/brand?order=asc"
  );
  const brands = await brandsRes.json();

  return {
    props: {
      frontPages,
      careers,
      brands,
    },
  };
}
