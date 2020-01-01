 <template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        {{aids.length | filtered}}
        <v-img src="@/assets/contracts/alternance.svg"></v-img>
        {{ contractType }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <AidSummary v-for="aid in aids" :key="aid.name" v-bind:aid="aid  | filtered"></AidSummary>
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
  filters: {
    filtered(aid) {
      let values = [];
      aid.filters.forEach(filter => {
        values.push(filter.value);
      });
      if (values.includes(true)) {
        return aid;
      } else {
        return null;
      }
    }
  }
};
</script>
 
 <style>
</style>