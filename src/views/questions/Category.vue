 <template>
  <v-form>
    Êtes-vous actuellement dans l'une des situations suivantes ?
    <v-radio-group v-model="radios">
      <v-radio label="Choix 1" value="radio-1"></v-radio>
      <v-radio label="Choix 2" value="radio-2"></v-radio>
    </v-radio-group>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "Category",
  methods: {
    submit() {
      //this.$store.dispatch("submitCategory", this.??);
      this.$router.push("votre-allocation");
    }
  }
};
</script>
 
 <style>
</style>