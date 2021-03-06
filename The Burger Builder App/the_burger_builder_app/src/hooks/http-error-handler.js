import { useState } from 'react';

export default (httpClient) => {
  const [error, setError] = useState(null);

  const reqInterceptor = httpClient.interceptors.request.use((req) => {
    setError(null);
    return req;
  });

  const resInterceptor = httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err);
    }
  );

  // useEffect(() => {
  //   return () => {
  //     axios.interceptors.reqest.eject(reqInterceptor);
  //     axios.interceptors.response.eject(resInterceptor);
  //   };
  // }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
