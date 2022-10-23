import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return <h1>Project Page</h1>;
}

export default PortfolioProjectPage;
