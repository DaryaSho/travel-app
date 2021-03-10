/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url: string, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something wrong!');
      }

      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = () => setError(null);

  return {
    loading, request, error, clearError,
  };
};
