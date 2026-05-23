import Banner from "../components/homepage/Banner";
import FAQ from "../components/homepage/FAQ";
import Howitworks from "../components/homepage/Howitworks";
import TopDoctors from "../components/homepage/TopDoctors";
import { getAllDoctors } from "./lib/fetchData";

export default async function Home() {
  const doctors = await getAllDoctors();
  const topDoctors = doctors.slice(0, 3);

  return (
    <div>
      <Banner />
      <TopDoctors topDoctors={topDoctors} />
      <Howitworks />
      <FAQ />
    </div>
  );
}
