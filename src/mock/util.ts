import { Recordable } from 'vite-plugin-mock';

export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
    return {
      code: 200,
      result,
      message,
      type: 'success',
    };
  }