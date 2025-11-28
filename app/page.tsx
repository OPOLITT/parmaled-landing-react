import { Header } from "./components/Header/Header";
import { WelcomeBlock } from "./components/WelcomeBlock/WelcomeBlock";
import { AboutCompany } from "./components/AboutCompany/AboutCompany";
import { Contacts } from "./components/Contacts/Contacts";
import { Category } from "./components/Category/Category";
import { getFirstCategory } from "./lib/catalog";

export default function Home() {
  const categoryData = getFirstCategory();

  return (
    <div>
      <main>
        <Header />
        <section id="welcome">
          <WelcomeBlock />
        </section>
        {categoryData && <Category data={categoryData} />}
        {/* <section id="catalog" style={{ minHeight: "100vh", paddingTop: "110px" }}>
        </section>
        <section id="about" style={{ minHeight: "100vh", paddingTop: "110px" }}>
        </section> */}
        <section id="about">
          <AboutCompany />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
    </div>
  );
}
