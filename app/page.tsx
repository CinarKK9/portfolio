import AboutSection from "@/components/AboutSection";
import GithubProjects from "@/components/GithubProjects";
import GithubSection from "@/components/GithubSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <GithubSection>
        <GithubProjects />
      </GithubSection>
    </>
  );
}
