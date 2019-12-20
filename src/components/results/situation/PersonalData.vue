<template>
  <v-list>
    <v-toolbar>
      <v-toolbar-title>Données personnelles</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon left>mdi-pencil-outline</v-icon>Modifier
      </v-btn>
    </v-toolbar>
    <v-list-item-group>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Âge :</v-list-item-title>
          {{ this.age }}
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Diplôme :</v-list-item-title>
          {{ this.diploma }}
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Ville :</v-list-item-title>
          {{ this.city }}
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Zone de revitalisation rurale :</v-list-item-title>
          {{ this.zrr }}
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Quartier prioritaire de la ville :</v-list-item-title>
          {{ this.prioritary }}
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "PersonalData",
  created() {
    this.age = this.$store.state.situation.age;
    this.diploma = this.$store.state.situation.diploma;
    this.city = this.$store.state.situation.location_citycode;
  },
  data: () => ({
    age: 0,
    diploma: "",
    city: 0,
    zrr: "indisponible",
    prioritary: "vérifier"
  })
};
</script>

<style>
</style>