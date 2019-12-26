<template>
  <ul>
    Autres situations
    <li>Artiste ou technicien•ne du spectacle : {{ this.spectacle }}</li>
    <li>Travailleur(euse) handicapé(e) : {{ this.disabled }}</li>
    <li>Cadre en recherche : {{ this.manager }}</li>
  </ul>
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
  })
};
</script>

<style>
</style>