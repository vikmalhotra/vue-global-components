<template>
  <section>
    <v-alert prominent color="error" elevation="2">
      <v-row align="center">
        <v-col class="grow">
          ボタン押したら通知を表示する
        </v-col>
        <v-col class="shrink">
          <v-btn @click="handleClick">Take action</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useSnackbar } from '@/store/snackbar';

export default defineComponent({
  setup() {
    const snackbar = useSnackbar();

    const handleClick = () => {
      snackbar.showMessage('これは通知です');
    };

    return {
      handleClick,
    };
  },
});
</script>