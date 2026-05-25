import { getAllDoctors } from "@/lib/fetchData";
import Banner from "../components/homepage/Banner";
import FAQ from "../components/homepage/FAQ";
import Howitworks from "../components/homepage/Howitworks";
import TopDoctors from "../components/homepage/TopDoctors";
import AuthToast from "@/components/AuthToast";

export default async function Home() {
  const doctors = await getAllDoctors();
  const topDoctors = doctors.slice(0, 3);

  return (
    <div>
      <Banner />
      <TopDoctors topDoctors={topDoctors} />
      <Howitworks />
      <FAQ />
      <AuthToast />
    </div>
  );
}
