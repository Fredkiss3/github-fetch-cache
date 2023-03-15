import { cache } from 'react';

export const callExternalAPI = cache(async (path: string) => {
  console.log(`external api called for path "${path}"`);

  const response = await fetch(
    `https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Paris`
  ).then((res) => res.json());

  return {
    [path]: {
      fetchedAt: new Date(response.dateTime).valueOf(),
      currentTime: new Date().valueOf(),
    },
  };
});
