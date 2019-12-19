 <template>
  <v-form>
    Depuis combien de temps êtes-vous inscrit•e à Pôle emploi ?
    <v-radio-group v-model="radios">
      <v-radio label="Je ne suis pas inscrit.e" value="not_registred"></v-radio>
      <v-radio label="Moins d'un an" value="less_than_year"></v-radio>
      <v-radio label="Plus d'un an" value="more_than_a_year"></v-radio>
    </v-radio-group>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "Inscription",
  methods: {
    submit() {
      //this.$store.dispatch("submitInscription", this.??);
      // if choice != non inscrit
      this.$router.push("categorie");
    }
  }
};
</script>
 
 <style>
</style>