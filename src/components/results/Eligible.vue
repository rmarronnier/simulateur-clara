<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Vous pouvez bénéficier de**tout déplier**</v-expansion-panel-header>
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
  name: "Eligible",
  components: {
    Contract
  },
  // data() {
  //   return {
  //     contracts: {}
  //   };
  // },
  computed: {
    contracts() {
      return this.$store.state.results.eligible;
    }
  }
};
</script>
 
 <style>
</style>