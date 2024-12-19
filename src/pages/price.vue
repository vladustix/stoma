<template>
  <div class="container py-10">
    <h1 class="text-3xl font-semibold mb-6 text-center">Прайс</h1>
    <div class="w-1/2 xl:w-1/3 mx-auto flex flex-col gap-5">
      <div
        v-for="price in prices"
        :key="price.category"
        class="flex flex-col gap-3"
      >
        <h3 class="font-medium text-xl text-center">
          {{ price.category }}
        </h3>
        <div
          v-for="item in price.items"
          :key="item.name"
          :class="
            item.price
              ? 'flex items-center justify-between gap-2'
              : 'flex flex-col gap-3'
          "
        >
          <p class="font-medium" :class="!item.price && 'text-center'">
            {{ item.name }}
          </p>
          <div v-if="item.options">
            <div
              v-for="(option, i) in item.options"
              :key="i"
              class="flex items-center justify-between gap-2"
            >
              <p>{{ option.country }}</p>
              <div class="flex-grow border-t box-border border-gray-400" />
              <p>
                {{
                  option.price.toLocaleString("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                    minimumFractionDigits: 0,
                  })
                }}
              </p>
            </div>
          </div>
          <template v-else>
            <div class="flex-grow border-t box-border border-gray-400" />
            <p>{{ item.price }}</p>
          </template>
        </div>
      </div>
    </div>
    <p class="mt-10 w-1/2 xl:w-1/3 mx-auto px-5 py-3 rounded-md bg-yellow-100">
      Сумма протезирования зависит от выбора материала и количества зубов. Мы
      рекомендуем подготовить панорамный снимок зубов для точного расчета.
      Посетите любую стоматологию для этого или отправьте нам фото зубов верхней
      и нижней челюсти - и мы сделаем предварительный расчет бесплатно для вас!
    </p>
  </div>
</template>

<script setup lang="ts">
const prices = [
  {
    category: "Металлокерамические коронки",
    items: [
      {
        name: "Никель хромовый сплав",
        options: [{ price: 2200, country: "Китай" }],
      },
      {
        name: "Титановый сплав",
        options: [
          { price: 4200, country: "Китай" },
          { price: 5300, country: "Япония" },
          { price: 6050, country: "Германия" },
        ],
      },
      {
        name: "Кобальт хромовый сплав",
        options: [
          { price: 5600, country: "Китай" },
          { price: 7800, country: "Япония" },
          { price: 8600, country: "Германия" },
        ],
      },
    ],
  },
  {
    category: "Безметалловые коронки",
    items: [
      {
        name: "Диоксид циркония",
        options: [
          { price: 12000, country: "Китай" },
          { price: 15000, country: "Япония" },
          { price: 18000, country: "Германия" },
        ],
      },
      {
        name: "Съемные протезы",
        price: "от 13 000 ₽",
      },
    ],
  },
];
</script>
