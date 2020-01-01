<template>
  <v-list>
    <v-toolbar>
      <v-toolbar-title>Données personnelles</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="edit">
        <v-icon left>mdi-pencil-outline</v-icon>Modifier
      </v-btn>
    </v-toolbar>
    <v-list-item-group>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Âge : ' + this.age + ' ans'"></v-list-item-title>
        </v-list-item-content>
                  </v-list-item>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Diplôme : ' + this.diploma"></v-list-item-title>
        </v-list-item-content>
                  </v-list-item>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Ville : ' + this.city"></v-list-item-title>
        </v-list-item-content>
                  </v-list-item>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Zone de revitalisation rurale : ' + this.zrr"></v-list-item-title>
        </v-list-item-content>
                  </v-list-item>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Quartier prioritaire de la ville : ' + this.prioritary"></v-list-item-title>
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
    this.city = this.$store.state.situation.address;
    this.zrr = this.$store.state.situation.zrr;
  },
  data: () => ({
    age: 0,
    diploma: "",
    city: 0,
    zrr: "Non renseigné",
    prioritary: "vérifier"
  }),
  methods: {
    edit() {
      this.$router.push('questions/votre-age')
    }
  }
};
</script>

<style>
</style>