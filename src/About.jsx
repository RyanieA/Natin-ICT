import BentoGrid from "./components/BentoGrid";
import InlineImageBlock from "./components/InlineImageBlock";
import SubjectsSection from "./components/SubjectsSection";
import Layout from "./layouts/Layout";

export default function About() {
  return (
    <Layout>
      <div className="w-full ">
        <img src="/about-hero.jpg" alt="hero" className="w-full object-cover" />
      </div>
      <div className="min-h-screen">
        <div className="container-screen my-10">
          <InlineImageBlock image={"/hero.png"} imagePosition={"right"}>
            <div className="flex flex-col justify-center h-full">
              <h2 className="font-semibold text-2xl">Over ons</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores illo iure nihil labore officia hic debitis ipsa nulla
                saepe quo. Quasi, quo nulla. Laborum expedita dignissimos, unde
                illo eum aliquam?
              </p>
            </div>
          </InlineImageBlock>
        </div>
        <div className="mt-10 bg-neutral-50">
          <div className="container-screen py-10">
            <SubjectsSection />
          </div>
        </div>
        <div>
          <BentoGrid />
        </div>
      </div>
    </Layout>
  );
}
