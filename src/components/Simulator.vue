<template>
  <v-container>
    <v-row>
      <v-icon>mdi-home</v-icon>
      <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
    </v-row>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: "Simulator",

  data: () => ({
    items: [
      {
        text: "Accueil",
        disabled: true,
        href: "#"
      },
      {
        text: "Formulaire",
        disabled: true,
        href: "questions"
      }
    ]
  })
};
</script>
