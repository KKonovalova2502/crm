import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from '@/app/components/magic-button';

export default async function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
