<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Récapitulatif de ma situation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <PersonalData />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

 <script>
import PersonalData from "@/components/results/situation/PersonalData";
export default {
  name: "Situation",
  components: {
    PersonalData
  }
};
</script>
 
 <style>
</style>