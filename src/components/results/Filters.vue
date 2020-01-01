<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Ouvrir les filtres</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form>
            Chercher les aides pour
            <v-checkbox
              v-for="filter in filters"
              :key="filter.name"
              :v-model="filter.value"
              :label="filter.description"
            ></v-checkbox>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

 <script>
export default {
  name: "Filters",
  data: () => ({
    inscription: "",
    category: "",
    allocation_type: ""
  }),
  computed: {
    filters() {
      return this.store.state.results.filters;
    }
  }
};
</script>
 
 <style>
</style>