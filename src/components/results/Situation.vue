<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Récapitulatif de ma situation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-toolbar>
              <v-toolbar-title>Données personnelles</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn>
                <v-icon left>mdi-pencil-outline</v-icon>Modifier
              </v-btn>
            </v-toolbar>
            <v-list-item-group v-model="personal">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

 <script>
export default {
  name: "Situation",
  data: () => ({
    items: [
      {
        text: " Âge : 44 "
      },
      {
        text: " Diplôme : Bac +3 "
      },
      {
        text: " Ville : 33100 Bordeaux "
      },
      {
        text: " Zone de revitalisation rurale : indisponible "
      },
      {
        text: " Quartier prioritaire de la ville : vérifier "
      }
    ],
    model: "personal"
  })
};
</script>
 
 <style>
</style>