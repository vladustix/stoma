export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'stomaAuthToken');
  return token;
});