<template>
  <header>
    <nav class="container h-[80px] flex items-center justify-between">
      <div class="flex items-center gap-5 md:gap-6">
        <div class="max-w-20 flex items-center justify-start">
          <NuxtLink to="/">LOGO</NuxtLink>
        </div>
        <ul class="flex items-center gap-3 md:gap-4">
          <li><button @click="scrollSector('service')">Услуги</button></li>
          <li><button @click="scrollSector('about')">Клиника</button></li>
          <li><button @click="scrollSector('gallery')">Галерея</button></li>
        </ul>
      </div>
      <div
        class="max-w-20 flex flex-nowrap items-center justify-end gap-4 md:gap-5 font-medium text-nowrap"
      >
        <NuxtLink
          to="https://wa.me/+79142778806"
          class="text-lg flex items-center gap-1.5"
          ><Icon name="logos:whatsapp-icon" size="24" />
          <span class="max-xl:hidden">+7 (914) 277-88-06</span>
        </NuxtLink>
        <NuxtLink
          to="https://t.me/heihezuby"
          class="text-lg flex items-center gap-1.5"
          ><Icon name="logos:telegram" size="24" />
          <span class="max-xl:hidden">heihezuby</span>
        </NuxtLink>
        <NuxtLink
          to="mailto:stomatologia_v_kitae@mail.ru"
          class="text-lg flex items-center gap-1.5"
          ><Icon name="heroicons:envelope-solid" size="24" />
          <span class="max-xl:hidden">stomatologia_v_kitae@mail.ru</span>
        </NuxtLink>
      </div>
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer class="bg-blue-500 text-white">
    <div class="container py-8">
      <ul class="flex items-center gap-4">
        <li>
          <button @click="scrollSector('service')">Услуги</button>
        </li>
        <li>
          <button @click="scrollSector('about')">О клинике</button>
        </li>
        <li>
          <button @click="scrollSector('gallery')">Галерея</button>
        </li>
      </ul>
    </div>
    <div
      class="container py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
    >
      <div
        class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5"
      >
        <p class="text-sm">Copyright © 2024. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
header a,
header button {
  @apply text-blue-500 hover:text-blue-700;
}
main {
  @apply min-h-[calc(100vh-64px)];
}
</style>
