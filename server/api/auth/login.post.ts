import jwt from 'jsonwebtoken';

type User = {
  username: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<User>(event);
  const config = useRuntimeConfig();
  if (username !== config.username && password !== config.password) {
    throw createError({
      statusCode: 401,
      message: 'Неверный логин или пароль',
    });
  }
  if (!config.jwtSecret) {
    throw createError({
      statusCode: 506,
      message: 'Ошибка конфигурации сервера',
    });
  }
  const token = jwt.sign(
    { username: username },
    config.jwtSecret,
    { expiresIn: '7d' }
  );
  setCookie(event, 'adminAuthToken', token, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 7 * 60 * 60 * 24,
  });
  return token;
});