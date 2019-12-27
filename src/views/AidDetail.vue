 <template>
  <v-card>
    {{aid.name}}
    {{aid.description}}
    {{aid.content}}
    {{aid.name}}
    {{aid.how}}
    <v-alert>{{aid.additional}}</v-alert>
  </v-card>
</template>
 
 <script>
export default {
  name: "AidDetail",
  props: {
    aid_name: {
      type: String
    }
  },
  computed: {
    aid() {
      return this.$store.state.results.aids[this.aid_name];
    }
  }
};
</script>
 
 <style>
</style>