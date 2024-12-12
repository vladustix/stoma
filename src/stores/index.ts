export const useStoreIndex = defineStore('index', {
  state: () => ({
    auth: null as boolean | null,
    send: false,
  }),
  actions: {
    setAuth(value: boolean) {
      this.auth = value;
    },
    setSend(value: boolean) {
      this.send = value;
    },
  },
});