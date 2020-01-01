<template>
  <v-list>
    <v-toolbar>
      <v-toolbar-title>Autres situations</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="edit">
        <v-icon left>mdi-pencil-outline</v-icon>Modifier
      </v-btn>
    </v-toolbar>
    <v-list-item-group>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Artiste ou technicien•ne du spectacle : ' + this.spectacle"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Travailleur(euse) handicapé(e) : ' + this.disabled"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Cadre en recherche : ' + this.manager"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "OtherSituations",
  created() {
    this.spectacle = this.$store.state.situation.spectacle;
    this.disabled = this.$store.state.situation.disabled;
    this.manager = this.$store.state.situation.manager;
  },
  data: () => ({
    spectacle: false,
    disabled: false,
    manager: false
  }),
  methods: {
    edit() {
      this.$router.push("questions/autres-situations");
    }
  }
};
</script>

<style>
</style>