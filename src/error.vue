<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <span>{{ error.statusCode }}</span>
    <p>{{ error.message }}</p>
    <button type="button" v-text="'Главная'" @click="handleError" />
  </div>
</template>
