 <template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title class="title text-capitalize">{{aid.name}}</v-list-item-title>
      <v-list-item-subtitle>{{aid.short_description}}</v-list-item-subtitle>
      <v-chip
        class="small-sized ma-5 pa-3 justify-center"
        v-for="filter in filters"
        :key="filter.desciption"
      >{{filter.description}}</v-chip>
      <!-- <v-btn class="small-sized justify-start" color="blue">
        <v-icon left>mdi-eye</v-icon>En savoir plus
      </v-btn>-->
      <v-divider class="mt-5"></v-divider>
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
.small-sized {
  max-width: 40%;
}
</style>