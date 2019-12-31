<template>
  <v-card>
    Vous ne pouvez pas bénéficier de
    <v-btn @click="showResults">Voir</v-btn>
    <v-expansion-panels v-if="shown">
      <v-expansion-panel>
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Contract
            v-for="(aids, contractType) in contracts"
            :key="(contractType)"
            v-bind:aids="aids"
            v-bind:contractType="contractType"
          ></Contract>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
 <script>
import Contract from "@/components/results/aids/Contract";
export default {
  name: "NonEligible",
  components: {
    Contract
  },
  methods: {
    showResults() {
      this.shown = !this.shown;
    }
  },
  data() {
    return {
      shown: false
    };
  },
  computed: {
    contracts() {
      return this.$store.state.results.nonEligible;
    }
  }
};
</script>
 
 <style>
</style>