export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('stomaAuthToken').value;
  if (!token) return navigateTo('/login');
});