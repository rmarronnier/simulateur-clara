<template>
  <v-list>
    <v-toolbar>
      <v-toolbar-title>Situation actuelle</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="edit">
        <v-icon left>mdi-pencil-outline</v-icon>Modifier
      </v-btn>
    </v-toolbar>
    <v-list-item-group>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Inscrit depuis : ' + this.inscription"></v-list-item-title>
        </v-list-item-content>
                  </v-list-item>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Catégorie demandeur d emploi : ' + this.category"></v-list-item-title>
        </v-list-item-content>
                  </v-list-item>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-text="'Type d allocation : ' + this.allocation_type"></v-list-item-title>
        </v-list-item-content>
                  </v-list-item>        
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "CurrentSituation",
  created() {
    this.inscription = this.$store.state.situation.inscription_period;
    this.category = this.$store.state.situation.category;
    this.allocation_type = this.$store.state.situation.allocation_type;
  },
  data: () => ({
    inscription: "",
    category: "",
    allocation_type: ""
  }),
  methods: {
    edit() {
      this.$router.push('questions/etes-vous-inscrit')
    }
  }
};
</script>

<style>
</style>