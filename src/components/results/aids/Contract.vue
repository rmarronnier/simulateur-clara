 <template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-img
          :src="require('@/assets/contracts/' + contractType + '.svg')"
          aspect-ratio="1"
          maxWidth="50px"
          maxHeight="50px"
          class="mr-5"
        ></v-img>
        <h3>
          {{aids.length}}
          {{ contractDescription }}
        </h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <AidSummary v-for="aid in aids" :key="aid.name" v-bind:aid="aid"></AidSummary>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
 
 <script>
import AidSummary from "@/components/results/aids/AidSummary";
export default {
  name: "Contract",
  components: {
    AidSummary
  },
  props: {
    contractType: String,
    aids: {
      type: Array
    }
  },
  computed: {
    contractDescription() {
      return this.$store.state.results.contracts.find(
        contract => contract.name === this.contractType
      ).description;
    }
  },
  filters: {
    // filtered(aid) {
    //   let values = [];
    //   aid.filters.forEach(filter => {
    //     values.push(filter.value);
    //   });
    //   if (values.includes(true)) {
    //     return aid;
    //   } else {
    //     return null;
    //   }
    // }
  }
};
</script>
 
 <style>
</style>