<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="title">
          Vous ne pouvez pas bénéficier de
          <v-btn @click="showResults" class="ml-5 small-sized">Voir</v-btn>
        </v-expansion-panel-header>
        <v-expansion-panel-content v-if="shown">
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