import React, { useEffect, useState } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import Layout from "../components/Layout";
import NavMenuItem from "../components/NavMenuItem";
import NavMenu from "../components/NavMenu";
import ImageBackground from "../components/ImageBackground";
import HorizontalScrollCanvas from "../components/HorizontalScrollCanvas";
import ContentSection from "../components/ContentSection";
import Titles from "../components/Titles";
import ContentHead from "../components/ContentHead";
import ArrowLink from "../components/ArrowLink";
import BackgroundWords from "../components/BackgroundWords";
import FauxPage from "../components/FauxPage";
import debounce from "../lib/debounce";
import BrandSquare from "../components/BrandSquare";
import CareerBox from "../components/CareerBox";
import BrandsContainer from "../components/BrandsContainer";
import frontPages from "../data/frontPages";
import careers from "../data/careers";
import brands from "../data/brands";

export default function Page() {
  //State which is updated with the scroll point of the window
  const [scrollY, setScrollY] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, [debounce]);

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

      <HorizontalScrollCanvas scrollY={scrollY}>
        <FauxPage>
          <ContentSection
            number={parseInt(frontPages[0].acf.number)}
            scrollY={scrollY}
            alignment="left"
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
            scrollY={scrollY}
            alignment="right"
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
          <BrandsContainer>
            {brands.map((brand) => (
              <BrandSquare
                img={brand.acf.image}
                scrollY={scrollY}
                key={brand.id}
              />
            ))}
          </BrandsContainer>
        </FauxPage>

        <FauxPage>
          <ContentSection
            number={parseInt(frontPages[2].acf.number)}
            scrollY={scrollY}
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
          <div>
            {careers.map((career) => (
              <CareerBox career={career.acf} key={career.id} />
            ))}
          </div>
        </FauxPage>
      </HorizontalScrollCanvas>
    </Layout>
  );
}
