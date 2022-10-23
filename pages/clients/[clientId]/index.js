import { useRouter } from 'next/router';

function ClientProjects() {
  const { query, push } = useRouter();
  console.log(query);

  function loadProjectHandler() {
    push('/clients/subash/projecta');
  }

  return (
    <div>
      <h1>Client Projects</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjects;
