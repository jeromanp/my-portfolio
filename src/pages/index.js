import Layout from "@/components/Layout";
import { infoPersonal } from "@/utils/data";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full max-w-sm items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold text-red-500">
            {infoPersonal.name}
          </h1>
          <h3 className="text-center pt-4">{infoPersonal.professionOne} & {infoPersonal.professionTwo}</h3>
          <img src="/img-me.jpg" alt="me" className="h-50 rounded-full mt-4" />
        </div>
      </main>
    </Layout>
  );
}
