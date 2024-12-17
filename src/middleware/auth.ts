export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('stomaAuthToken').value;
  if (!token) navigateTo('/login');
});