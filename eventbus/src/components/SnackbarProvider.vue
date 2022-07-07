<template>
  <v-snackbar v-model="state" elevation="1">
    {{ message }}
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { EventBus } from '@/utils/bus';

export default defineComponent({
  setup() {
    const message = ref('');
    const state = ref(false);

    EventBus.$on('show-snackbar', (data: any) => {
      state.value = true;
      message.value = data;
    });

    return {
      message,
      state,
    };
  },
})
</script>
