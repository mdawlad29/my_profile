import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services/Services"), {
  ssr: false,
});
const Resume = dynamic(() => import("@/components/Resume/Resume"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects/Projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills/Skills"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact/Contact"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-10 lg:mx-28 md:mx-12 sm:mx-8 mx-4">
        <About />
        <Services />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}
