import Layout from "@/components/Layout";
import Link from "next/link";

export default function custom404() {
  return (
    <Layout>
      <div className="text-center">
        <h1>Error 404 !!</h1>
        <p>
          Esta página no existe. Favor de redirigirse al 
          <Link href="/">
            <button> Home</button>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
