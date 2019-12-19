 <template>
  <v-form>
    Êtes-vous dans l'une des situations suivantes ?
    Cochez la ou les situations correspondantes
    <v-checkbox v-model="selected" label="Choix 1" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 2" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 3" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 4" value="John"></v-checkbox>
    <QuestionButtons @submit="submit"></QuestionButtons>
  </v-form>
</template>
 
 <script>
import QuestionButtons from "@/components/QuestionButtons";
export default {
  components: {
    QuestionButtons
  },
  name: "Other",
  methods: {
    submit() {
      //this.$store.dispatch("submitOther", this.??);
      // if choice != non inscrit
      this.$router.push({ path: "/resultats" });
    }
  }
};
</script>
 
 <style>
</style>