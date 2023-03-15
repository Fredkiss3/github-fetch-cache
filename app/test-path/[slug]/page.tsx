import { callExternalAPI } from '@/app/lib/external-api';
import { use } from 'react';

const Page = ({ params: { slug } }: any) => {
  console.log('BODY: How many times I render', slug);
  console.log('BODY: got value from external api : ');
  console.dir(use(callExternalAPI(slug)), { depth: null });
  return <h1> Hello {slug} </h1>;
};

export const generateStaticParams = () => {
  const slugs = ['slug-1', 'slug-2'];
  return slugs.map((s) => ({ slug: s }));
};

export const generateMetadata = async ({ params: { slug } }: any) => {
  console.log('HEAD: How many times I render', slug);
  console.log('HEAD: got value from external api : ');
  console.dir(use(callExternalAPI(slug)), { depth: null });

  return {
    title: slug,
  };
};

export default Page;
