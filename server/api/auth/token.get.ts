export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'adminAuthToken');
  return token;
});