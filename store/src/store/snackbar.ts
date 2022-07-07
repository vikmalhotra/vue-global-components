import { defineStore } from 'pinia'

export const useSnackbar = defineStore('season', {
  state: () => ({
    content: '',
    visibility: false,
  }),
  actions: {
    hideMessage() {
      this.content = '';
      this.visibility = false;
    },
    showMessage(message: string) {
      this.content = message;
      this.visibility = true;
    }
  }
});
