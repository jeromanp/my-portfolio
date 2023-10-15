import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import CountVisit from "@/components/CountVisit";

export default function Home() {
  return (
    <Layout>
      <CountVisit />
      <Intro />
    </Layout>
  );
}
