import axios from 'axios';
import { UesrDTO } from '../models/UserDTO';

export function getUsers(): Promise<UesrDTO[]> {
  return axios.get('/api/user');
}
