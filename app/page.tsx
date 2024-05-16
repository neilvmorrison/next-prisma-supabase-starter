import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="mb-4 text-xl font-bold">
          NextJS + Prisma + Supabase Boilerplate
        </h1>
        <h2 className="mb-2 font-bold text-lg">Get Started</h2>
        <ol className="list-decimal">
          <li>Clone Repo</li>
          <li>
            Install Deps: <code>yarn install</code>
          </li>
          <li>
            Create environment: <code>cp .env.sample .env</code>
          </li>
          <li>
            Populate <code>.env</code> with Environment Variables
          </li>
          <li>
            Define schema in <code>prisma/schema.prisma</code>
          </li>
          <li>
            Write seed scripts in <code>prisma/seed.ts</code>
          </li>
          <li>
            <code>yarn db:push</code>
          </li>
          <li>
            <code>yarn db:seed</code>
          </li>
          <li>
            <code>yarn dev</code>
          </li>
        </ol>
      </div>
    </main>
  );
}
