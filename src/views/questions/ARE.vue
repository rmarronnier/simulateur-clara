 <template>
  <v-form>
    Quel est le montant de cette allocation ?
    <v-text-field single-line type="number" label="Montant par mois"></v-text-field>
    <QuestionButtons @submit="submit"></QuestionButtons>
  </v-form>
</template>
 
 <script>
import QuestionButtons from "@/components/QuestionButtons";
export default {
  components: {
    QuestionButtons
  },
  name: "ARE",
  methods: {
    submit() {
      this.$router.push("votre-age");
    }
  }
};
</script>
 
 <style>
</style>