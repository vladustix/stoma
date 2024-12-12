<template>
  <div class="flex flex-col gap-10">
    <div class="bg-[url('~/assets/images/xiu/04.jpg')] bg-bottom bg-cover">
      <div
        class="py-20 bg-gradient-to-b lg:bg-gradient-to-r from-50% lg:from-20% to-80% from-primary to-transparent"
      >
        <div class="container grid lg:grid-cols-2 gap-10">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-3 text-white">
              <h1 class="font-medium text-4xl">Клиника "Жуйкан" в г. Хэйхэ</h1>
              <p>
                Это современное медицинское учреждение, предлагающее широкий
                спектр услуг.
              </p>
              <p class="font-medium text-lg">Оставьте заявку, чтобы:</p>
              <ul class="flex flex-col gap-1.5">
                <li class="flex items-start gap-1">
                  <Icon
                    name="heroicons:check-badge"
                    size="24"
                    class="text-green-400"
                  />
                  <span>Узнать стоимость лечения;</span>
                </li>
                <li class="flex items-start gap-1">
                  <Icon
                    name="heroicons:check-badge"
                    size="24"
                    class="text-green-400"
                  />
                  <span>Согласовать дату и время визита;</span>
                </li>
                <li class="flex items-start gap-1">
                  <Icon
                    name="heroicons:check-badge"
                    size="24"
                    class="text-green-400"
                  />
                  <span>Получить ответы на все интересующие вас вопросы.</span>
                </li>
              </ul>
              <p class="underline">Ваше здоровье – наша забота!</p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>

    <section class="container">
      <h2 class="mb-6 font-medium text-4xl text-center">
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
        <img src="~/assets/images/xiu/01.jpg" alt="" class="rounded-lg" />
      </div>
    </section>

    <section id="service" class="container">
      <h2 class="mb-6 font-medium text-4xl text-center">Услуги клиники</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="(service, i) in services"
          class="border p-5 rounded-lg shadow-lg bg-white"
        >
          <img
            :src="`/images/services/${i + 1}.webp`"
            :alt="service.title"
            class="aspect-[2/1] rounded-md mb-3"
          />
          <h3 v-text="service.title" class="title" />
          <p v-text="service.text" class="text" />
        </div>
      </div>
    </section>

    <section id="about" class="container grid lg:grid-cols-2 gap-5">
      <div>
        <h2 class="text-3xl font-semibold mb-6">О клинике в г. Хэйхэ</h2>
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
            src="~/assets/images/xiu/26.jpg"
            alt="О клинике"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="aspect-[13/9] overflow-hidden rounded-lg shadow-lg">
          <img
            src="~/assets/images/cert.jpeg"
            alt="О клинике"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

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
                <h3
                  v-text="doctor.name"
                  class="font-medium text-lg text-white"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section id="gallery" class="container">
      <h2 class="mb-6 font-medium text-4xl text-center">Галерея фотографий</h2>
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
          <SwiperSlide v-for="i in 37" :key="i" class="aspect-[16/9]">
            <img
              :src="`/images/xiu/${i < 10 ? '0' + i : i}.jpg`"
              alt="Фото"
              class="object-cover w-full h-full rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section class="container">
      <div class="rounded-lg shadow-md bg-blue-50 py-12 px-10">
        <h2 class="text-3xl md:text-4xl font-medium text-center mb-8">
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

    <section
      class="py-20 bg-[url('~/assets/images/xiu/28.jpg')] bg-center bg-cover"
    >
      <div class="container flex items-center">
        <RegistrationForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: "Полное сопровождение",
    text: "От приезда в Благовещенск до вашего возвращения из Китая — поддержка на каждом этапе, 24/7.",
    icon: "clock",
  },
  {
    title: "Гарантия без компромиссов",
    text: "Мы всегда остаемся на связи и готовы помочь, если возникнут какие-либо проблемы после лечения.",
    icon: "lock-closed",
  },
  {
    title: "Премиальное качество услуг",
    text: "Мы сотрудничаем с лучшей стоматологической клиникой и ведущими специалистами в своей области.",
    icon: "currency-dollar",
  },
  {
    title: "Персональный подход",
    text: "Мы учитываем индивидуальные потребности каждого пациента, находя решение даже для самых требовательных.",
    icon: "user",
  },
];

const services = [
  {
    title: "Коронки",
    text: "Эстетичное восстановление зубов для безупречной улыбки. Подробности о современных материалах: Япония, Китай, Германия, а также выгодные предложения на установку.",
  },
  {
    title: "Протезирование",
    text: "От пластмассовых протезов до инновационных решений из биополимеров. Мы поможем вернуть вам комфорт и уверенность в улыбке с индивидуальным подходом к каждому случаю.",
  },
  {
    title: "Имплантация",
    text: "Современные технологии имплантации зубов в 2 этапа. Гарантированная безопасность и комфорт для пациентов. Узнайте о среднем уровне цен и сравните с вашим городом.",
  },
  {
    title: "Ортодонтия (брекеты)",
    text: "Достижение идеальной улыбки с помощью современных брекет-систем. Узнайте о сроках исправления прикуса и возможностях установки у ведущих стоматологов.",
  },
  {
    title: "Лечение кариеса",
    text: "Эффективное лечение кариеса без боли и стресса. Современные материалы и технологии для сохранения здоровья ваших зубов с гарантией качества.",
  },
  {
    title: "Удаление зубов",
    text: "Безопасное и безболезненное удаление зубов у лучших стоматологов региона. Узнайте о выгодных предложениях и о том, как избежать осложнений.",
  },
];

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

<style scoped>
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

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>
