import Image from "next/image";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import AboutUs from "./components/AboutUs";
import tw from "tailwind-styled-components";
import Categories from "./components/Categories";
import ScrollContainer from "react-indiana-drag-scroll";
import Testimonials from "./components/Testimonials";

const Section = tw.section`my-16`;
const Container = tw.div`container mx-auto px-4`;
const Flex = tw.div`flex justify-between items-center py-8 px-4 font-poppins gap-8`;
const H2 = tw.h2`text-3xl font-bold mb-4`;

export default function Home() {
  return (
    <article>
      <Container>
        <section>
          <Hero />
        </section>
        <Section>
          <BestSelling />
        </Section>
        <Section>
          <AboutUs />
        </Section>
      </Container>
      <Container>
        <Flex className="flex-col gap-2">
          <H2>Categories</H2>
          <p>Find what you are looking for</p>
        </Flex>
      </Container>
      <Section className="my-[2rem] bg-[#C1DCDC]">
        <Container>
          <Categories />
        </Container>
      </Section>
      <Section>
        <Container>
          <Testimonials />
        </Container>
      </Section>
    </article>
  );
}
