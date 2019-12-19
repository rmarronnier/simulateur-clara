 <template>
  <v-form>
    Quel est votre code postal de votre lieu de résidence ?
    Code postal - facultatif
    **Plus que 2 questions avant d'obtenir vos résultats**
    <v-text-field single-line type="number" label="Exemple : 44220"></v-text-field>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "Address",
  methods: {
    back() {
      this.$router.go(-1);
    },
    submit() {
      //this.$store.dispatch("submitAddress", this.??);
      this.$router.push("autres-situations");
    }
  }
};
</script>
 
 <style>
</style>