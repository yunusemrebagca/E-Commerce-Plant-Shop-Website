import Image from "next/image";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";

export default function Home() {
  return (
    <article className="container mx-auto px-4">
      <section>
        <Hero />
      </section>
      <section className="my-16">
        <BestSelling />
      </section>
    </article>
  );
}
