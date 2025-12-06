import { Header } from "./app/components/Header/Header";
import { WelcomeBlock } from "./app/components/WelcomeBlock/WelcomeBlock";
import { AboutCompany } from "./app/components/AboutCompany/AboutCompany";
import { Contacts } from "./app/components/Contacts/Contacts";
import { CategoriesList } from "./app/components/CategoriesList/CategoriesList";
import { Catalog } from "./app/components/Catalog/Catalog";

function App() {
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
        <CategoriesList />
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

export default App;

