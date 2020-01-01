 <template>
  <v-card class="pa-4" align="center">
    <v-form @submit.prevent="submitDiploma" ref="formGrade" v-model="validity">
      <v-card-title class="display-1 justify-center align-center">Quel est le diplôme le plus élevé que vous ayez obtenu ?</v-card-title>
      <v-radio-group class="justify-center align-center" required :rules="rules" v-model="diploma">
        <v-radio autofocus label="Bac +4 et + (Master) / diplômes d’ingénieur" value="level_1"></v-radio>
        <v-radio label="Bac +3 (Licence)" value="level_2"></v-radio>
        <v-radio label="Bac +1 à bac +2 (BTS / DUT)" value="level_3"></v-radio>
        <v-radio label="Bac" value="level_4"></v-radio>
        <v-radio label="CAP / BEP" value="level_5"></v-radio>
        <v-radio label="Je n'ai aucun de ces diplômes" value="level_bellow_5"></v-radio>
      </v-radio-group>
      <v-btn x-large class="ma-2" color="#96a8b2" @click="back">Revenir</v-btn>
      <v-btn
        x-large
        class="ma-2"
        color="secondary"
        v-bind:disabled="!validity"
        type="submit"
      >Continuer</v-btn>
    </v-form>
  </v-card>
</template>
 
 <script>
export default {
  name: "Grade",
  created() {
    this.diploma = this.$store.state.situation.diploma;
  },
  data: () => ({
    diploma: "",
    validity: false,
    rules: [v => !!v || "doit être renseigné"]
  }),

  methods: {
    validate() {
      if (this.$refs.formGrade.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitDiploma() {
      this.validate();
      this.$store.dispatch("submitGrade", this.diploma);
      this.$router.push("votre-adresse");
    }
  }
};
</script>
 
 <style>
</style>