import { useRouter } from 'next/router';

function Blog() {
  const router = useRouter();
  console.log(router.query);
  return <h1>Blog Posts Page</h1>;
}

export default Blog;
