import { getCsrfToken } from "next-auth/react";
import Drink from "../public/assets/cocktailpic.jpg";
import Head from "next/head";
import Image from "next/image";
import { signIn, getProviders, getSession } from "next-auth/react";


export default function signin({ csrfToken }) {
  return (
    <>
      <Head>
        <title>Cocktails</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block h-fit w-full">
          <Image
            priority="true"
            className="h-screen w-full object-cover"
            src={Drink}
            alt="Food"
          />
        </div>
        <div className="bg-[#262626] flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto bg-[#404040] p-8 px-8 rounded-lg"
            method="post"
            action="/api/auth/signin/email"
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <h2 className="text-4xl text-white font-bold text-center">
              Log in with email
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-[#737373] mt-2 p-2 focus:border--blue-500 focus:bg-gray-800 focus:outline-none"
                name="email"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-1 text-center">
              <button className="border rounded-xl bg-[#A6A6A6] w-full p-1 my-5 hover:bg-[#262626] text-white">
                Log in with your email
              </button>
            </div>
            <div className="text-center text-white font-bold m-2 ">
              <button
                onClick={() => signIn("google")}
                className="p-2 rounded-3xl border bg-green-600"
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  return {
    props: { csrfToken, providers },
  };
}
