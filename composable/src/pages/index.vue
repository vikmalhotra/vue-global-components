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
import { useSnackbar } from '@/composables/useSnackbar';

export default defineComponent({
  setup() {
    const { toggleSnackbar } = useSnackbar();

    const handleClick = () => {
      toggleSnackbar('これは通知です');
    };

    return {
      handleClick,
    };
  },
});

</script>