import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between p-6">
      <div className="flex flex-col my-auto gap-2 items-center">
        <span className="text-9xl">🦋</span>
        <h1 className="text-4xl">Butterfly</h1>
        <h2 className="text-2xl">Welcome to Butterfly Market</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/create-account"
          className="primary-btn py-2.5 text-lg"
        >Get Started</Link>
        <div className="flex flex-col gap-2 mobile:items-center text-center mobile:flex-row">
          <span>Do you already have an account?</span>
          <Link href="/login" className="hover:underline underline-offset-4">Log In</Link>
        </div>
      </div>
    </div>
  );
}
