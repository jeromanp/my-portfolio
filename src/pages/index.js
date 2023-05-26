import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full max-w-sm items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold text-red-500">
            Jose Eduardo Roman
          </h1>
          <h3 className="text-center pt-4">Desarrollador FullStack</h3>
        </div>
      </main>
    </Layout>
  );
}
