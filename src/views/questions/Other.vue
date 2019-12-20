 <template>
  <v-form @submit.prevent="submitOther" ref="formOther" v-model="validity">
    Êtes-vous dans l'une des situations suivantes ?
    Cochez la ou les situations correspondantes
    <v-checkbox autofocus v-model="spectacle" label="Artiste ou technicien•ne du spectacle"></v-checkbox>
    <v-checkbox
      v-model="disabled"
      label="Bénéficiaire de l'obligation d'emploi (reconnu•e en situation de handicap)"
    ></v-checkbox>
    <v-checkbox label="Cadre et/ou en recherche d'un poste d'encadrement"></v-checkbox>
    <v-checkbox label="Je ne suis dans aucune de ces situations"></v-checkbox>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "Other",
  created() {
    this.spectacle = this.$store.state.situation.spectacle;
    this.disabled = this.$store.state.situation.disabled;
  },
  data: () => ({
    spectacle: false,
    disabled: false,
    validity: false,
    rules: [v => !!v || "doit être renseignée"]
  }),
  methods: {
    validate() {
      if (this.$refs.formOther.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitOther() {
      this.validate();
      this.$store.dispatch("submitDisabled", this.disabled);
      this.$store.dispatch("submitSpectacle", this.spectacle);
      // if choice != non inscrit
      this.$router.push({ path: "/resultats" });
    }
  }
};
</script>
 
 <style>
</style>