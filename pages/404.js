import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className="flex w-screen h-screen items-center justify-center bg-blue-600 text-white">
          <h2 className="text-3xl">404. что-то пошло не туда</h2>
      </div>
    </>
  )
}

export default Error;