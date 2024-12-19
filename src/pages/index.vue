<template>
  <div class="flex flex-col gap-10">
    <div class="bg-[url('/images/xiu/04.jpg')] bg-bottom bg-cover">
      <div
        class="py-20 bg-gradient-to-b lg:bg-gradient-to-r from-50% lg:from-20% to-80% from-primary to-transparent"
      >
        <div class="container grid lg:grid-cols-2 gap-10">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-3 text-white">
              <h1 class="font-medium text-3xl md:text-4xl">
                Стоматологическая клиника "Жуйкан" в г. Хэйхэ
              </h1>
              <p>
                Мы рады приветствовать вас в нашей стоматологической клинике,
                где забота о вашем здоровье и комфорт - наш главный приоритет!
              </p>
              <p class="font-medium text-lg">
                Установите от 8 и более коронок и получите:
              </p>
              <ul class="flex flex-col gap-1.5">
                <li class="flex items-start gap-1">
                  <Icon
                    name="heroicons:check-badge"
                    size="24"
                    class="text-green-400"
                  />
                  <span>Бесплатный проезд в Хэйхэ и обратно</span>
                </li>
                <li class="flex items-start gap-1">
                  <Icon
                    name="heroicons:check-badge"
                    size="24"
                    class="text-green-400"
                  />
                  <span>Бесплатное проживание с завтраками</span>
                </li>
                <li class="flex items-start gap-1">
                  <Icon
                    name="heroicons:check-badge"
                    size="24"
                    class="text-green-400"
                  />
                  <span>Бесплатную визу в Китай</span>
                </li>
              </ul>
              <p>
                Не упустите шанс воспользоваться нашим уникальным предложением,
                которое действует на ограниченное время. Свяжитесь с нами для
                записи на консультацию и получения более подробной информации.
              </p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>

    <Feature />

    <Service />

    <div class="container py-10 flex justify-center">
      <NuxtLink
        to="/price"
        class="px-8 py-4 rounded-xl bg-blue-500 font-medium text-lg text-white"
        >Посмотреть прайс <Icon name="heroicons:arrow-right" size="24"
      /></NuxtLink>
    </div>

    <section id="about" class="container grid lg:grid-cols-2 gap-5">
      <div>
        <h2 class="font-medium text-3xl md:text-4xl mb-6">
          О клинике в г. Хэйхэ
        </h2>
        <p class="mb-6">
          Наш медицинский коллектив состоит из 30 высококвалифицированных
          специалистов. Общая площадь клиники составляет 1500 квадратных метров,
          где находятся 9 стоматологических кабинетов, 5 кабинетов для массажа и
          4 процедурные комнаты для инфузионной терапии. Мы используем передовое
          медицинское оборудование, а опытные специалисты из Тяньцзиня, Пекина и
          Харбина обеспечивают высочайшее качество лечения.
        </p>
        <p class="mb-6">
          Мы в клинике "Жуйкан" стремимся, чтобы каждый наш гость обрел здоровые
          зубы и уверенность в своей улыбке. Ваша улыбка - это ваша визитная
          карточка, и мы здесь, чтобы сделать ее неотразимой.
        </p>
        <ol class="steps mb-6 space-y-4">
          <li>
            <span>1</span> Вы оставляете заявку, а мы оперативно отвечаем на все
            ваши вопросы.
          </li>
          <li>
            <span>2</span> Вместе обсуждаем предварительную стоимость
            индивидуального лечения.
          </li>
          <li>
            <span>3</span> Согласовываем удобные дату и время вашего визита в
            клинику.
          </li>
          <li>
            <span>4</span> Вы заранее предоставляете фото загранпаспорта и фото
            3x4 для оформления визы.
          </li>
          <li>
            <span>5</span> Русскоговорящий представитель встречает вас,
            сопровождает на всех этапах лечения, а после завершения помогает
            вернуться обратно в Россию.
          </li>
        </ol>
        <p>
          Запишитесь на консультацию уже сегодня, чтобы начать свое путешествие
          к здоровью и уверенности.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-5">
        <div class="aspect-[13/9] overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/xiu/26.jpg"
            alt="О клинике"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="aspect-[13/9] overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/cert.jpeg"
            alt="О клинике"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

    <Doctor />

    <Gallery />

    <section class="container">
      <h2 class="mb-6 font-medium text-3xl md:text-4xl text-center">
        Наши видео
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="aspect-video">
          <iframe
            width="560"
            height="280"
            src="https://www.youtube.com/embed/RcVs-1uxY_Y?si=MtV252xLQ5_fuhbO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="object-cover w-full h-full"
          />
          <p class="text-gray-400 text-center mt-1">Клиника</p>
        </div>
        <div class="aspect-video">
          <iframe
            width="560"
            height="280"
            src="https://www.youtube.com/embed/B65EQIguPnQ?si=NaHMS_6HKe58Oj5z"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="object-cover w-full h-full"
          />
          <p class="text-gray-400 text-center mt-1">Гостиница</p>
        </div>
      </div>
    </section>

    <Recommendation />

    <section class="container">
      <div class="rounded-lg shadow-md bg-blue-50 py-12 px-10">
        <h2 class="font-medium text-3xl md:text-4xl text-center mb-8">
          Лечебные туры в Хэйхэ: высококлассная стоматология по доступным ценам
        </h2>
        <p class="leading-relaxed mb-6">
          Отправьтесь в лечебный тур в Хэйхэ, Китай, чтобы познакомиться с
          передовыми методами стоматологического лечения. Вас ждут
          высококвалифицированные специалисты и современное оборудование,
          благодаря которым лечение зубов станет комфортным и эффективным.
        </p>
        <div class="mb-8">
          <h3
            class="text-xl md:text-2xl font-semibold text-blue-600 mb-4 uppercase"
          >
            Цены, которые приятно удивляют
          </h3>
          <p class="leading-relaxed mb-6">
            Цены на лечение зубов в Китае весьма привлекательны. При сравнении с
            российскими аналогами они становятся еще более привлекательными.
            Экономия без ущерба качеству — вот девиз китайских стоматологических
            клиник.
          </p>
          <h3
            class="text-xl md:text-2xl font-semibold text-blue-600 mb-4 uppercase"
          >
            Стоматология в Китае: комфортное восстановление улыбки
          </h3>
          <p class="leading-relaxed mb-6">
            В стоматологических клиниках Хэйхэ работают опытные врачи, которые
            обеспечат максимальный комфорт и внимательное отношение. Современные
            технологии, качественные материалы и доступные цены делают лечение в
            Китае отличным выбором.
          </p>
          <h3
            class="text-xl md:text-2xl font-semibold text-blue-600 mb-4 uppercase"
          >
            Где качество встречается с экономией
          </h3>
          <p class="leading-relaxed mb-6">
            Посетив стоматологическую клинику в Хэйхэ, вы убедитесь, что
            доступные цены никак не влияют на качество услуг. Напротив, клиники
            активно используют инновационные подходы и материалы, оставаясь при
            этом финансово привлекательными.
          </p>
        </div>
        <p>
          Выбирая лечение зубов в Хэйхэ, вы получаете заботу о здоровье, высокое
          качество и значительную экономию. Подарите себе здоровую улыбку вместе
          с лучшими специалистами Китая!
        </p>
      </div>
    </section>

    <section class="py-20 bg-[url('/images/xiu/28.jpg')] bg-center bg-cover">
      <div class="container flex items-center">
        <RegistrationForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: "Стоматологическая клиника Жуйкан в Хэйхэ | Китай",
});
</script>

<style>
.title {
  @apply text-lg font-semibold mb-2;
}
.link {
  @apply text-blue-500 hover:underline;
}

.steps {
  counter-reset: step-counter;
}
.steps li {
  @apply flex items-start gap-4;
}
.steps li span {
  @apply min-w-8 min-h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold;
  counter-increment: step-counter;
  content: counter(step-counter);
}
</style>
