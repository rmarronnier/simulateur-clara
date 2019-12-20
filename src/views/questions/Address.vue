 <template>
  <v-form @submit.prevent="submitAddress" ref="formAddress" v-model="validity">
    Quel est votre code postal de votre lieu de résidence ?
    Code postal - facultatif
    <v-row>
      <v-col>
        <v-text-field autofocus v-model.number="address" type="number" label="Exemple : 44220"></v-text-field>
      </v-col>
      <v-col>
        <v-alert type="info">
          <strong>Plus que 2 questions</strong>
          <br />avant d'obtenir vos résultats
        </v-alert>
      </v-col>
    </v-row>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "Address",
  created() {
    this.address = this.$store.state.situation.location_citycode;
  },
  data: () => ({
    address: 0,
    validity: false
  }),
  methods: {
    validate() {
      if (this.$refs.formAddress.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitAddress() {
      this.validate();
      this.$store.dispatch("submitAddress", this.address);
      this.$router.push("autres-situations");
    }
  }
};
</script>
 
 <style>
</style>