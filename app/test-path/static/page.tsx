import { callExternalAPI } from '@/app/lib/external-api';
import { use } from 'react';

// export const fetchCache = 'force-no-store';

const Page = () => {
  console.log('BODY: How many times I render Static Page');
  console.log('BODY: got value from external api : ');
  console.dir(use(callExternalAPI('/static')), { depth: null });
  return <h1> Hello Static Page </h1>;
};
export default Page;

export async function generateMetadata() {
  console.log('HEAD: How many times I render Static Page');
  console.log('HEAD: got value from external api : ');
  console.dir(await callExternalAPI('/static'), { depth: null });
  return {
    title: 'Static Page',
  };
}
