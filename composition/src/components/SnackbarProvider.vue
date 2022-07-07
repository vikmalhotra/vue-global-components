<template>
  <v-snackbar v-bind="$attrs" elevation="1" v-on="$listeners">
    <slot />
  </v-snackbar>
</template>
