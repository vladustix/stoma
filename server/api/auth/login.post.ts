import jwt from 'jsonwebtoken';

type User = {
  username: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody<User>(event);
  if (username !== process.env.USERNAME && password !== process.env.PASSWORD) {
    throw createError({
      statusCode: 401,
      message: 'Неверный логин или пароль',
    });
  }
  if (!process.env.JWT_SECRET) {
    throw createError({
      statusCode: 506,
      message: 'Ошибка конфигурации сервера',
    });
  }
  const token = jwt.sign(
    { username: username },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  setCookie(event, 'stomaAuthToken', token, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 7 * 60 * 60 * 24,
  });
  return token;
});