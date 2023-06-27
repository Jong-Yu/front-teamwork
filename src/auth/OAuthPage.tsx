import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const OAuthPage = () => {
  // hooks
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
  }, [search]);

  return <div>OAuthPage</div>;
};
