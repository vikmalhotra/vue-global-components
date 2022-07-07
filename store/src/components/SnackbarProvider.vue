<template>
  <v-snackbar :value="snackbar.visibility" elevation="1" @input="snackbar.hideMessage">
    {{ snackbar.content }}
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useSnackbar } from '@/store/snackbar';

export default defineComponent({
  setup() {
    const snackbar = useSnackbar();

    return {
      snackbar,
    };
  },
});
</script>
