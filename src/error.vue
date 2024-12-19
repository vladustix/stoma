<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const message = computed(() => {
  let text = props.error.message;
  if (props.error.statusCode === 404) {
    text = "Страница не найдена";
  }
  return text;
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main class="w-full h-full min-h-screen grid">
    <section class="m-auto w-full max-w-[400px] text-center">
      <h1 v-text="error.statusCode" />
      <p v-text="message" />
      <button type="button" v-text="'Главная'" @click="handleError" />
    </section>
  </main>
</template>

<style scoped>
h1 {
  @apply font-medium text-6xl mb-3;
}
p {
  @apply mb-3;
}
</style>
