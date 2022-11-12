import { useEffect, useState } from 'react';

function LastSalesPage({ sales: salesData }) {
  const [sales, setSales] = useState(salesData);
  const isLoading = !sales;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://nextjs-course-5595-default-rtdb.firebaseio.com/sales.json'
  );
  const data = await response.json();

  const updatedData = Object.keys(data).map((key) => ({
    id: key,
    username: data[key].username,
    volume: data[key].volume,
  }));

  return { props: { sales: updatedData } };
}

export default LastSalesPage;
