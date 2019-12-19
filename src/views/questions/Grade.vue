 <template>
  <v-form @submit.prevent="submitGrade" ref="formGrade" v-model="validity">
    Quel est le diplôme le plus élevé que vous ayez obtenu ?
    <v-radio-group required :rules="rules" v-model="diploma">
      <v-radio autofocus label="Bac +4 et + (Master) / diplômes d’ingénieur" value="level_1"></v-radio>
      <v-radio label="Bac +3 (Licence)" value="level_2"></v-radio>
      <v-radio label="Bac +1 à bac +2 (BTS / DUT)" value="level_3"></v-radio>
      <v-radio label="Bac" value="level_4"></v-radio>
      <v-radio label="CAP / BEP" value="level_5"></v-radio>
      <v-radio label="Je n'ai aucun de ces diplômes" value="level_bellow_5"></v-radio>
    </v-radio-group>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
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
    submitGrade() {
      this.validate();
      this.$store.dispatch("submitGrade", this.diploma);
      this.$router.push("votre-adresse");
    }
  }
};
</script>
 
 <style>
</style>