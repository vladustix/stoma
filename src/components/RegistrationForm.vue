<template>
  <form
    class="w-full max-w-[480px] p-5 flex flex-col gap-4 rounded-lg bg-white shadow-lg"
    @submit.prevent="send"
  >
    <div>
      <p class="mb-1 text-xl font-medium">Оставьте заявку на консультацию</p>
      <p class="text-gray-400">
        Наши менеджеры свяжутся с вами в ближайшее время
      </p>
    </div>

    <input v-model="data.name" type="text" placeholder="Введите имя" />
    <input
      v-model="data.phone"
      v-mask="'+7 (###) ###-##-##'"
      type="tel"
      placeholder="+7 (___) ___-__-__"
    />
    <button type="submit" :disabled="!valid">Получить консультацию</button>
  </form>
</template>

<script setup lang="ts">
const data = reactive({
  name: "",
  phone: "",
});

const valid = computed(() => {
  return data.name.length > 0 && data.phone.length === 18;
});

const send = async () => {
  await $fetch("/api/request", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      alert("Успешно отравлено");
      data.name = "";
      data.phone = "";
    })
    .catch((err) => {
      alert(err.data.message);
    });
};
</script>
