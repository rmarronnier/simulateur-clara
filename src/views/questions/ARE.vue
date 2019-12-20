 <template>
  <v-form @submit.prevent="submitARE" ref="formARE" v-model="validity" :lazy-validation="lazy">
    Quel est le montant de cette allocation ?
    <v-text-field
      v-model.number="monthly_allocation_value"
      autofocus
      required
      :rules="rules"
      min="0"
      type="number"
      label="Montant par mois"
    ></v-text-field>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "ARE",
  created() {
    this.monthly_allocation_value = this.$store.state.situation.monthly_allocation_value;
  },
  data: () => ({
    monthly_allocation_value: null,
    validity: false,
    rules: [v => !!v || "doit être renseigné"]
  }),
  methods: {
    validate() {
      if (this.$refs.formARE.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitARE() {
      this.validate();
      this.$store.dispatch("submitARE", this.monthly_allocation_value);
      this.$router.push("votre-age");
    }
  }
};
</script>
 
 <style>
</style>