import React from "react";

import { Categories } from "../../components/Categories";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Line } from "../../components/Line";
import { Main } from "../../components/Main";
import { Products } from "../../components/Products";
import { TitleSection } from "../../components/TitleSection";

function Home() {
  return (<>
    <Header />
    <Line />
    <Main />
    <Categories />
    <TitleSection />
    <Products />
    <Footer />
  </>
  );
}

export default Home;
