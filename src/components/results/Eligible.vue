<template>
  <v-card>
    Vous pouvez bénéficier de
    **tout déplier**
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
          <Contract></Contract>
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
  }
};
</script>
 
 <style>
</style>