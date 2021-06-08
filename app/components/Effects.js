import { useState, useEffect } from 'react'

/*
 * React effect to fetch JSON from a URL.
 */
export function useFetch(url, options, defaultResponse=null) {
  const [ response, setResponse ] = useState(defaultResponse);
  const [ error, setError ] = useState(null);
  const [ isReady, setIsReady ] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    fetch(url, options).then(async (res) => {
      const json = await res.json();
      if (isSubscribed) {
        setResponse(json);
        setIsReady(true);
      }
    }).catch((err) => {
      if (isSubscribed) {
        setError(err);
        setIsReady(true);
      }
    });

    return () => isSubscribed = false;
  });

  return [ response, error, isReady ];
}
