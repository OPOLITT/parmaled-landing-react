import { Header } from "./components/Header/Header";
import { WelcomeBlock } from "./components/WelcomeBlock/WelcomeBlock";
import { AboutCompany } from "./components/AboutCompany/AboutCompany";
import { Contacts } from "./components/Contacts/Contacts";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <section id="welcome">
          <WelcomeBlock />
        </section>
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
