import { getAxios } from '../../../_shared/util/Axios/axios.util';
import { UesrDTO } from '../models/UserDTO';
import { CreateUserDTO } from '../models/CreateUserDTO';

export function getUsers(): Promise<UesrDTO[]> {
  const { get, axiosReturn } = getAxios();

  return get('/api/user').then(axiosReturn);
}

export function createUesr(createUserDto: CreateUserDTO) {
  const { post, axiosReturn } = getAxios();

  return post('/api/user/create', createUserDto).then(axiosReturn);
}
