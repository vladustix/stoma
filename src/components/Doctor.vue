<template>
  <section class="container py-10">
    <h2 class="mb-6 font-medium text-4xl text-center">Наши специалисты</h2>
    <div class="relative">
      <Swiper
        :breakpoints="{
          0: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
      >
        <SwiperSlide v-for="(doctor, i) in doctors" :key="i">
          <div class="group rounded-lg bg-blue-500">
            <div class="aspect-[2/3] relative overflow-hidden rounded-t-lg">
              <img
                :src="`/images/doctors/${doctor.image}.jpg`"
                :alt="`Доктор ${doctor.name} - Клиника Жуйкан | Хэйхэ`"
                class="object-cover w-full h-full"
              />
              <div
                class="absolute bottom-3 left-3 flex flex-col items-start gap-2 font-medium text-[14px] leading-none"
              >
                <span
                  v-text="doctor.spec"
                  class="bg-blue-500 text-white px-2 py-1 rounded-md"
                />
                <span
                  v-text="`Возраст: ${doctor.age} лет`"
                  class="bg-white text-black px-2 py-1 rounded-md"
                />
                <span
                  v-text="`Опыт: ${doctor.exp} лет`"
                  class="bg-yellow-300 text-black px-2 py-1 rounded-md"
                />
              </div>
            </div>
            <div class="p-3">
              <h3 v-text="doctor.name" class="font-medium text-lg text-white" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
const doctors = [
  {
    name: "Ван Хунъянь",
    age: 73,
    spec: "Главный врач",
    exp: 48,
    text: "Сочетание китайской и западной медицины, богатый клинический опыт, обладатель золотой награды",
    image: 1,
  },
  {
    name: "Ван Шушэн",
    age: 52,
    spec: "Главный врач",
    exp: 32,
    text: "Специализация: массаж, акупунктура, китайская традиционная медицина",
    image: 8,
  },
  {
    name: "Мэн Шисюн",
    age: 48,
    spec: "Главный врач",
    exp: 25,
    image: 3,
  },
  {
    name: "Чэн Фан",
    age: 44,
    spec: "Главный врач",
    exp: 24,
    image: 4,
  },
  {
    name: "Ван Сяожуй",
    age: 46,
    spec: "Главный врач",
    exp: 23,
    image: 2,
  },
  {
    name: "Ван Яшэн",
    age: 38,
    spec: "Главный врач",
    exp: 14,
    image: 5,
  },
  {
    name: "Ли Юэ",
    age: 36,
    spec: "Врач",
    exp: 12,
    image: 7,
  },
  {
    name: "Се Хунъюй",
    age: 36,
    spec: "Врач",
    exp: 11,
    image: 6,
  },
];
</script>
