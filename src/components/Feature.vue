<template>
  <section class="container">
    <h2 class="mb-6 font-medium text-3xl md:text-4xl text-center">
      Почему выбирают нас?
    </h2>
    <div class="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        v-for="feature in features"
        class="rounded-lg bg-blue-50 shadow-md p-5 max-md:text-center"
      >
        <Icon :name="`heroicons:${feature.icon}`" size="40" />
        <h3 v-text="feature.title" class="title mt-3" />
        <p v-text="feature.text" />
      </div>
    </div>
    <div>
      <img src="/images/xiu/01.jpg" alt="" class="rounded-lg" />
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: "Полное сопровождение",
    text: "Поддержка на всех этапах от приезда до уезда из Китая",
    icon: "clock",
  },
  {
    title: "Надёжный персонал",
    text: "Квалифицированные специалисты с большим опытом работы",
    icon: "lock-closed",
  },
  {
    title: "Премиальное качество услуг",
    text: "Современное оборудование и материалы высокого качества",
    icon: "currency-dollar",
  },
  {
    title: "Персональный подход",
    text: "Индивидуальный подход и внимание к каждой детали лечения",
    icon: "user",
  },
];
</script>
