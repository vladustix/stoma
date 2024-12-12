import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname;
  if (!path.startsWith('/api')) return;

  // const method = event.node.req.method?.toUpperCase();

  // const includes = [
  //   { path: '/bids' },
  //   { path: '/auth/token' },
  // ];
  // const excludes = [
  //   { path: '/bids', method: 'POST' },
  // ];

  // const isInc = includes.some(r => path.startsWith('/api' + r.path));
  // const isExc = excludes.some(r => path.startsWith('/api' + r.path) && r.method === method);

  // if (!isInc || isExc) return;

  // if (!process.env.JWT_SECRET) {
  //   throw createError({
  //     statusCode: 506,
  //     message: 'Ошибка конфигурации сервера',
  //   });
  // }

  // const token = getCookie(event, 'stomaAuthToken');
  // if (!token) {
  //   throw createError({
  //     statusCode: 401,
  //     message: 'Неавторизирован: Токен не предоставлен',
  //   });
  // }
  // try {
  //   jwt.verify(token, process.env.JWT_SECRET);
  // } catch (error) {
  //   throw createError({
  //     statusCode: 401,
  //     message: 'Неавторизирован: Недействительный токен',
  //   });
  // }
});