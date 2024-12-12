// @ts-ignore
import { VueMaskDirective as VMask } from 'v-mask';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('mask', {
    beforeMount: VMask.bind,
    updated: VMask.componentUpdated,
    unmounted: VMask.unbind,
  });
});