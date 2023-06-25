import axios from 'axios';
import { UesrDTO } from '../models/UserDTO';
import { CreateUserDTO } from '../models/CreateUserDTO';

export function getUsers(): Promise<UesrDTO[]> {
  return axios.get('/api/user').then(res => res.data);
}

export function createUesr(createUserDto: CreateUserDTO) {
  return axios.post('/api/user', createUserDto);
}
