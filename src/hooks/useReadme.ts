import { useState, useEffect } from 'react';

export const useReadme = (readmeUrl: string) => {
  const [readme, setReadme] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(readmeUrl)
      .then(res => res.text())
      .then(text => {
        setReadme(text);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [readmeUrl]);

  return { readme, isLoading, error };
}; 