import { Header } from "./components/Header/Header";
import { WelcomeBlock } from "./components/WelcomeBlock/WelcomeBlock";
import { AboutCompany } from "./components/AboutCompany/AboutCompany";
import { Contacts } from "./components/Contacts/Contacts";
import { Category } from "./components/Category/Category";
import { getFirstCategory } from "./lib/catalog";
import { Catalog } from "./components/Catalog/Catalog";

export default function Home() {
  const categoryData = getFirstCategory();

  return (
    <div>
      <main>
        <Header />
        <section id="welcome">
          <WelcomeBlock />
        </section>
        <section id="catalog">
          <Catalog />
        </section>
        <Category
          data={categoryData}
        />
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
