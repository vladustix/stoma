<template>
  <main class="container mt-[100px]">
    <h1 class="mb-10 font-medium text-3xl text-center">Авторизация</h1>
    <form
      @submit.prevent="login"
      class="mx-auto w-full max-w-[400px] flex flex-col gap-4"
    >
      <input
        type="text"
        v-model="data.username"
        class="w-full"
        placeholder="Логин"
        required
      />
      <input
        type="password"
        v-model="data.password"
        class="w-full"
        placeholder="Пароль"
        required
      />
      <button type="submit" class="w-full">Войти</button>
    </form>
  </main>
</template>

<script setup lang="ts">
const data = reactive({
  username: "",
  password: "",
});

const login = async () => {
  await $fetch("/api/auth/login", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      navigateTo("/admin");
    })
    .catch((err) => {
      alert(err.data.message);
    });
};

definePageMeta({
  layout: false,
  middleware: () => {
    if (!useCookie("stomaAuthToken").value) return;
    return navigateTo("/admin");
  },
});
</script>
