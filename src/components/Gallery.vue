<template>
  <section id="gallery" class="container">
    <h2 class="mb-6 font-medium text-3xl md:text-4xl text-center">
      Галерея фотографий
    </h2>
    <div class="relative">
      <Swiper
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }"
      >
        <SwiperSlide v-for="i in 36" :key="i" class="aspect-[16/9]">
          <img
            :src="`/images/xiu/${i + 1 < 10 ? '0' + (i + 1) : i + 1}.jpg`"
            alt="Фото"
            class="object-cover w-full h-full rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
