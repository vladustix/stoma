<template>
  <div class="container py-5">
    <h1 class="mb-4 font-medium text-3xl">Заявки</h1>
    <table v-if="!pending" class="table-auto w-full">
      <thead>
        <tr class="select-none">
          <th>ID</th>
          <th>Имя</th>
          <th>Телефон</th>
          <th>Создан</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bid in bids" :key="bid.id">
          <td v-text="bid.id" />
          <td
            v-text="bid.name"
            @click="copyText(`+${bid.phone}`)"
            class="w-full cursor-copy select-none"
          />
          <td
            v-text="`+${bid.phone}`"
            @click="copyText(`+${bid.phone}`)"
            class="cursor-copy select-none"
          />
          <td v-text="bid.createdAt" class="text-nowrap select-none" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";

const { data: bids, pending } = useFetch("/api/bids", {
  transform: (res) => {
    return res.map((bid) => ({
      ...bid,
      createdAt: moment(bid.createdAt).format("DD.MM.YYYY - HH:mm:ss"),
    }));
  },
});

definePageMeta({
  layout: "admin",
  middleware: "auth",
});
</script>

<style scoped>
th,
td {
  @apply px-3 py-2 text-start border-collapse border;
}
tbody tr:nth-child(even) {
  @apply bg-blue-50;
}
</style>
