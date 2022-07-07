<template>
  <v-snackbar v-model="snackbarState" elevation="1">
    {{ snackbarMessage }}
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useSnackbar } from '@/composables/useSnackbar';

export default defineComponent({
  setup() {
    const { snackbarMessage, snackbarState } = useSnackbar();

    return {
      snackbarMessage,
      snackbarState,
    };
  },
});
</script>
