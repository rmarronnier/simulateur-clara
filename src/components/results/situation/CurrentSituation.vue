<template>
  <ul>
    Situation actuelle
    <li>Inscrit depuis : {{ this.inscription }}</li>
    <li>Catégorie demandeur d'emploi : {{ this.category }}</li>
    <li>Type d'allocation : {{ this.allocation_type }}</li>
  </ul>
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
  })
};
</script>

<style>
</style>