 <template>
  <v-card align="center">
    <v-card-title class="display-1">Depuis combien de temps êtes-vous inscrit•e à Pôle emploi ?</v-card-title>
    <v-form @submit.prevent="submitInscription" ref="formInscription" v-model="validity">
      <v-radio-group required :rules="rules" v-model="inscription">
        <v-radio label="Je ne suis pas inscrit.e" value="not_registred"></v-radio>
        <v-radio label="Moins d'un an" value="less_than_year"></v-radio>
        <v-radio label="Plus d'un an" value="more_than_a_year"></v-radio>
      </v-radio-group>
      <v-btn x-large class="ma-10" color="#96a8b2" @click="back">Revenir</v-btn>
      <v-btn
        x-large
        class="ma-10"
        color="secondary"
        v-bind:disabled="!validity"
        type="submit"
      >Continuer</v-btn>
    </v-form>
  </v-card>
</template>
 
 <script>
export default {
  name: "Inscription",
  created() {
    this.inscription = this.$store.state.situation.inscription_period;
  },
  data: () => ({
    inscription: "",
    validity: false,
    rules: [v => !!v || "doit être renseigné"]
  }),
  methods: {
    validate() {
      if (this.$refs.formInscription.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitInscription() {
      this.validate();
      this.$store.dispatch("submitInscription", this.inscription);
      if (this.inscription != "not_registred") {
        this.$router.push("categorie");
      } else {
        this.$router.push("votre-allocation");
      }
    }
  }
};
</script>
 
 <style>
</style>