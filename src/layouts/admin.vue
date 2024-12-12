<template>
  <header class="bg-blue-100 py-4">
    <div class="container flex items-center justify-between">
      <NuxtLink to="/">На главную</NuxtLink>
      <button @click="postLogout">Выйти</button>
    </div>
  </header>
  <main class="min-h-[calc(100vh-60px)]">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
const postLogout = async () => {
  if (!confirm("Вы точно хотите выйти?")) return;
  await $fetch("/api/auth/logout", {
    method: "POST",
  })
    .then((res) => {
      useCookie("stomaAuthToken").value = null;
      navigateTo("/");
    })
    .catch((err) => {
      alert(err.data.message);
    });
};
</script>
