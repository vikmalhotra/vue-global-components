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
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { EventBus } from '@/utils/bus';

export default defineComponent({
  setup() {
    const handleClick = () => {
      EventBus.$emit('show-snackbar', 'これは通知です');
    };
    
    return {
      handleClick,
    };
  },
});

</script>