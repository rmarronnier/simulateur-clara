<template>
  <v-container>
    **Imprimer**
    <v-row>
      <v-col cols="6" md="4">
        <v-content>
          <Filters></Filters>
          <Situation></Situation>
        </v-content>
      </v-col>
      <v-col cols="12" md="8">
        <v-content>
          <Eligible></Eligible>
          <NonEligible></NonEligible>
          <v-alert color="yellow">
            Simulation non contractuelle tenant compte des éléments déclarés et appréciés le 17/12/2019
            Clara n'intègre pas encore les spécificités des aides et mesures applicables dans les régions et collectivités d'Outre Mer.
          </v-alert>
        </v-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Filters from "@/components/results/Filters";
import Situation from "@/components/results/Situation";
import Eligible from "@/components/results/Eligible";
import NonEligible from "@/components/results/NonEligible";

export default {
  name: "Results",

  components: {
    Filters,
    Situation,
    Eligible,
    NonEligible
  },

  data: () => ({
    //
  })
};
</script>