<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="title">Vous pouvez bénéficier de</v-expansion-panel-header>
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
  methods: {
    // hasOneTrueFilter(aid) {
    //   let values = [];
    //   aid.filters.forEach(filter => {
    //     values.push(filter.value);
    //   });
    //   return values.include(true);
    // }
  },
  computed: {
    contracts() {
      return this.$store.state.results.eligible;
    }
  }
};
</script>
 
 <style>
</style>