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
    
    <snackbar-provider v-model="showSnackbar">
      これは通知です
    </snackbar-provider>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import SnackbarProvider from '@/components/SnackbarProvider.vue';

export default defineComponent({
  components: { SnackbarProvider },

  setup() {
    const showSnackbar = ref(false);

    const handleClick = () => {
      showSnackbar.value = true;
    };
    
    return {
      handleClick,
      showSnackbar,
    };
  },
});

</script>