 <template>
  <v-form>
    Êtes-vous dans l'une des situations suivantes ?
    Cochez la ou les situations correspondantes
    <v-checkbox v-model="selected" label="Choix 1" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 2" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 3" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 4" value="John"></v-checkbox>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
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