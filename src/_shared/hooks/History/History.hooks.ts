import { useNavigate } from 'react-router-dom';

export function useGoPush() {
  const navigate = useNavigate();

  return (url: string) => navigate(url);
}

export function useGoReplace() {
  const navigate = useNavigate();

  return (url: string) => navigate(url, { replace: true });
}

export function useGoBack() {
  const navigate = useNavigate();

  return navigate(-1);
}
