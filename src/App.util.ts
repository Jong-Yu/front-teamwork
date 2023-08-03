import { reissueToken } from './_query/auth/api/AuthApi';
import { initAxios } from './_shared/util/Axios/axios.util';

export async function initApp() {
  initAxios(reissueToken);
}
