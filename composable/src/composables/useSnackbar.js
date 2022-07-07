import { readonly, ref } from '@nuxtjs/composition-api';

const state = ref(false);
const currentMessage = ref('');

export function useSnackbar() {
  const toggleSnackbar = (message = '') => {
    state.value = !state.value;
    currentMessage.value = message;
  };

  return {
    snackbarMessage: readonly(currentMessage),
    snackbarState: readonly(state),
    toggleSnackbar,
  };
}
