import path from 'path';
import fs from 'fs/promises';

import Link from 'next/link';

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <Link href={`/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return { redirect: { destination: '/no-data' } };
  }

  if (data.products?.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
