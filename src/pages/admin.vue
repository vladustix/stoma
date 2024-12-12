<template>
  <div class="container py-5">
    <h1 class="mb-4 font-medium text-3xl">Заявки</h1>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Телефон</th>
          <th>Создан</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bid in bids" :key="bid.id">
          <td>{{ bid.id }}</td>
          <td class="w-full">{{ bid.name }}</td>
          <td>{{ bid.phone }}</td>
          <td class="text-nowrap">{{ bid.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";

const { data: bids } = await useFetch("/api/bids", {
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
