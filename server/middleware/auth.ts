import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname;
  if (!path.startsWith('/api')) return;

  const includes = ['/bids', '/auth/token'];

  const isInc = includes.some(r => path.startsWith('/api' + r));

  if (!isInc) return;

  if (!process.env.JWT_SECRET) {
    throw createError({
      statusCode: 506,
      message: 'Ошибка конфигурации сервера',
    });
  }

  const token = getCookie(event, 'stomaAuthToken');
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Неавторизирован: Токен не предоставлен',
    });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: 'Неавторизирован: Недействительный токен',
    });
  }
});