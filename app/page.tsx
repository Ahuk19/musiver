import About from "./components/ui/about";
import { CardComponent } from "./components/ui/card";
import { FloatingNav } from "./components/ui/floatingnav";
import { HeroComponent } from "./components/ui/logo";
import StorePage from "./components/ui/store";
import ContactUs from "@/app/components/ui/contact";
import Footer from "@/app/components/ui/footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <main className="flex min-h-full] flex-col items-center justify-between">
        <FloatingNav navItems={[{ name: "Home", link: "/" }]} />
        <section className="w-full">
          <HeroComponent />
        </section>

        <CardComponent />
        <About />
        <StorePage />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
