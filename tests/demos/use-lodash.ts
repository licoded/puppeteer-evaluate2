import { chunk } from 'lodash-es';

export default function splitArr() {
  return chunk([1, 2, 3, 4], 2);
}