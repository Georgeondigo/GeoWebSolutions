import Banner from "@/ui/Banner";
import BasicProducts from "@/ui/BasicProducts";
import Clients from "@/ui/Clients";
import CoreServices from "@/ui/CoreServices";
import HighPerformance from "@/ui/HighPerformance";
import Projects from "@/ui/Projects";
import WhatWeDo from "@/ui/WhatWeDo";
import PickServices from "@/ui/services/PickServices";

export default function Home() {
  return (
    <main>
      <Banner />
      <PickServices />
      <CoreServices />
      <Clients />
      <WhatWeDo />
      <BasicProducts />
      <HighPerformance />
      <Projects />
    </main>
  );
}
