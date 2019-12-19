 <template>
  <v-form>
    Quel est le diplôme le plus élevé que vous ayez obtenu ?
    <v-radio-group v-model="radios">
      <v-radio label="Choix 1" value="radio-1"></v-radio>
      <v-radio label="Choix 2" value="radio-2"></v-radio>
      <v-radio label="Choix 3" value="radio-3"></v-radio>
      <v-radio label="Choix 4" value="radio-4"></v-radio>
      <v-radio label="Choix 5" value="radio-5"></v-radio>
      <v-radio label="Choix 6" value="radio-6"></v-radio>
    </v-radio-group>
    <QuestionButtons @submit="submit"></QuestionButtons>
  </v-form>
</template>
 
 <script>
import QuestionButtons from "@/components/QuestionButtons";
export default {
  name: "Grade",
  components: {
    QuestionButtons
  },
  methods: {
    submit() {
      //this.$store.dispatch("submitDiploma", this.??);
      this.$router.push("votre-adresse");
    }
  }
};
</script>
 
 <style>
</style>