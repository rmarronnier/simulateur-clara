 <template>
  <v-card pa-4 align="center">
    <v-form @submit.prevent="submitARE" ref="formARE" v-model="validity" :lazy-validation="lazy">
      <v-card-title class="display-1 justify-center align-center">Quel est le montant de cette allocation ?</v-card-title>
      
      <v-text-field
        v-model.number="monthly_allocation_value"
        autofocus
        required
        :rules="rules"
        min="0"
        type="number"
        label="Montant par mois"
        outlined
        color="black"
      ></v-text-field>
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
 
 <style scoped>
  .v-text-field--outlined {
   margin-top: 20px;
   margin-bottom: 20px;
   width: 20%;
 }
</style>