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
    filters: [
      {
        name: "travailler-en-alternance",
        description: "Travailler en alternance",
        value: false
      },
      {
        name: "s-informer-sur-contrats-specifiques",
        description: "S'informer sur les contrats spécifiques",
        value: false
      },
      {
        name: "travailler-a-l-international",
        description: "Travailler en Europe ou à l'international",
        value: false
      },
      {
        name: "garder-enfant",
        description: "Faire garder son enfant",
        value: false
      },
      {
        name: "creer-entreprise",
        description: "Créer ou reprendre une entreprise",
        value: false
      },
      {
        name: "accompagne-recherche-emploi",
        description: "Être accompagné/e pour la recherche d'emploi",
        value: false
      },
      {
        name: "trouver-change-de-metier",
        description: "Trouver un métier, changer de métier",
        value: false
      },
      {
        name: "se-deplacer",
        description: "Se déplacer",
        value: false
      },
      {
        name: "aides-employeurs",
        description: "Connaître les aides au bénéfice des employeurs",
        value: false
      },
      {
        name: "se-former-valoriser-ses-competences",
        description: "Financer une formation, obtenir un diplôme",
        value: false
      }
    ],

    inscription: "",
    category: "",
    allocation_type: ""
  })
};
</script>
 
 <style>
</style>