<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="display-1">Récapitulatif de ma situation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <PersonalData />
          <CurrentSituation />
          <OtherSituations />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

 <script>
import PersonalData from "@/components/results/situation/PersonalData";
import CurrentSituation from "@/components/results/situation/CurrentSituation";
import OtherSituations from "@/components/results/situation/OtherSituations";
export default {
  name: "Situation",
  components: {
    PersonalData,
    CurrentSituation,
    OtherSituations
  }
};
</script>
 
 <style>
</style>