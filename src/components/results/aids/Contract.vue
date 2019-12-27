 <template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-img src="@/assets/contracts/alternance.svg"></v-img>
        {{ contractType }}
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
  }
};
</script>
 
 <style>
</style>