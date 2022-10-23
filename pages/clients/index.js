import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'subash', name: 'Subash' },
    { id: 'nani', name: 'Nani' },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            {/* <Link href={`/clients/${c.id}`}>{c.name}</Link> */}
            <Link
              href={{
                pathname: '/clients/[clientId]',
                query: { clientId: c.id },
              }}>
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
