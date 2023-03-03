import { useState, useEffect } from 'react';

const DataFetcher = ({ url, onSuccess, onError }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
        onSuccess && onSuccess(data);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
        onError && onError(error);
      });
  }, [url, onSuccess, onError]);

  return { data, isLoading, error };
};

export default DataFetcher;
