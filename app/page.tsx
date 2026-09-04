import Navbar from "@/components/layout/Navbar";
import ParallaxExperience from "@/components/home/ParallaxExperience";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <ParallaxExperience />
      </main>
    </>
  );
}



