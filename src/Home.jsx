import "./App.css";
import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Layout from "./layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}
