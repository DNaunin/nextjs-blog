import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

// const YourComponent = () => (
//   <Image src="/images/profile.jpg" height={144} width={144} alt="Your Name" />
// );

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>This is the first post.</h2>
    </Layout>
  );
}
