 <template>
  <v-form>
    Quel est votre code postal de votre lieu de résidence ?
    Code postal - facultatif
    **Plus que 2 questions avant d'obtenir vos résultats**
    <v-text-field single-line type="number" label="Exemple : 44220"></v-text-field>
    <QuestionButtons @submit="submit"></QuestionButtons>
  </v-form>
</template>
 
 <script>
import QuestionButtons from "@/components/QuestionButtons";
export default {
  components: {
    QuestionButtons
  },
  name: "Address",
  methods: {
    submit() {
      //this.$store.dispatch("submitAddress", this.??);
      this.$router.push("autres-situations");
    }
  }
};
</script>
 
 <style>
</style>