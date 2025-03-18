// pages/index.js
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto py-10">
        {/* Next sections go here */}
      </main>
    </>
  );
}
