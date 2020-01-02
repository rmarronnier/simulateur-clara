<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="4">
        <v-content>
          <Filters></Filters>
          <SituationSummary></SituationSummary>
        </v-content>
      </v-col>
      <v-col cols="12" md="8">
        <v-content>
          <Eligible></Eligible>
          <NonEligible class="mt-5"></NonEligible>
          <v-alert class="mt-5" type="info">
            Simulation non contractuelle tenant compte des éléments déclarés et appréciés le {{ new Date().toLocaleDateString() }}
            <br />Clara n'intègre pas encore les spécificités des aides et mesures applicables dans les régions et collectivités d'Outre Mer.
          </v-alert>
        </v-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Filters from "@/components/results/Filters";
import SituationSummary from "@/components/results/SituationSummary";
import Eligible from "@/components/results/Eligible";
import NonEligible from "@/components/results/NonEligible";

export default {
  name: "Results",

  components: {
    Filters,
    SituationSummary,
    Eligible,
    NonEligible
  },
  beforeCreate() {
    if (this.$store.state.results.filters.length === 0) {
      this.$store.dispatch("getFilters");
    }
    if (this.$store.state.results.contracts_quantity === 0) {
      this.$store.dispatch("getContracts");
    }
    if (this.$store.state.situation.changed) {
      this.$store.dispatch("getResults");
    }
  },

  data: () => ({
    //
  })
};
</script>