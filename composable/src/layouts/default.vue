<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout class="align-center justify-center">
          <v-flex xs12 sm8 md4>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <snackbar-provider />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import SnackbarProvider from '@/components/SnackbarProvider.vue';

export default defineComponent({
  components: { SnackbarProvider }
});
</script>
