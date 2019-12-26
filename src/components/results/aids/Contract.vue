 <template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>Nom du type d'aide</v-expansion-panel-header>
      <v-expansion-panel-content>
        <AidSummary></AidSummary>
        <v-btn right>
          <v-icon left>mdi-eye</v-icon>Voir
        </v-btn>
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
  data() {
    return {};
  }
};
</script>
 
 <style>
</style>