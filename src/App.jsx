import "./App.css";
import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
