import Banner from "./components/homepage/Banner";
import FAQ from "./components/homepage/FAQ";
import Howitworks from "./components/homepage/Howitworks";
import TopDoctors from "./components/homepage/TopDoctors";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopDoctors />
      <Howitworks />
      <FAQ />
    </div>
  );
}
