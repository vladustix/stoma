<template>
  <form
    class="w-full max-w-[480px] p-5 flex flex-col gap-4 rounded-lg bg-white shadow-lg"
    @submit.prevent="send"
  >
    <div>
      <p class="mb-1 text-xl font-medium">
        Запишитесь на консультацию уже сегодня
      </p>
      <p class="text-gray-400">
        Наши менеджеры свяжутся с вами в ближайшее время
      </p>
    </div>

    <template v-if="!store.send">
      <input v-model="data.name" type="text" placeholder="Введите имя" />
      <input
        v-model="data.phone"
        v-mask="'+7 (###) ###-##-##'"
        type="tel"
        placeholder="+7 (___) ___-__-__"
      />
      <button type="submit" :disabled="!valid">Получить консультацию</button>
    </template>
    <div v-else class="h-[44px] rounded-md bg-green-100 grid">
      <div class="m-auto">
        <p class="text-green-900">Заявка успешно отправлена</p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const store = useStoreIndex();

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
      data.name = "";
      data.phone = "";
      store.setSend(true);
    })
    .catch((err) => {
      alert(err.data.message);
    });
};
</script>
