export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('adminAuthToken').value;
  if (!token) navigateTo('/login');
});