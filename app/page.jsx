// Server component — individual sections opt into client rendering
// via their own "use client" directives. This keeps the page shell
// server-rendered for better SEO.
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";


export default function HomePage() {
  return (
    <>
      <Preloader />
      <Header />

      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
