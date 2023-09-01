import React, { useEffect } from "react";
import Header from "../HeaderHome/Header";
import Footer from "../Footer/Footer";
import Arrivals from "./NewArrivals";

function Home() {
  useEffect(() => {
    let prevScrollPos = document.documentElement.scrollTop;
    const headerContainer = document.querySelector(".header-container");
    const headerHeight = headerContainer.offsetHeight;

    function handleScroll() {
      const currentScrollPos = document.documentElement.scrollTop;

      if (currentScrollPos > prevScrollPos) {
        headerContainer.style.top = `-${headerHeight}px`;
      } else {
        headerContainer.style.top = "0";
      }

      prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="relative">
        <img className="fluid" src="/img_1.png" alt="" />
        <p className="absolute top-[200px] right-[100px] text-center text-[48px] text-white w-[500px] h-auto m-0 p-0 uppercase font-bold leading-[48px]">
          stylist picks beat the heat
        </p>
      </div>
      <Arrivals />
      <Footer />
    </>
  );
}

export default Home;
