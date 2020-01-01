 <template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title>Titre de l'aide {{aid.name}}</v-list-item-title>
      <v-list-item-subtitle>{{aid.short_description}}</v-list-item-subtitle>
      <v-chip v-for="filter in filters" :key="filter.desciption">{{filter.description}}</v-chip>
      <v-btn right>
        <v-icon left>mdi-eye</v-icon>En savoir plus
      </v-btn>
    </v-list-item-content>
  </v-list-item>
</template>
 
 <script>
export default {
  name: "AidSummary",
  props: {
    aid: {
      type: Object
    }
  },
  computed: {
    filters() {
      return this.aid.filters;
    }
  }
};
</script>
 
 <style>
</style>