 <template>
  <v-card align="center">
    <v-form @submit.prevent="submitCategory" ref="formCategory" v-model="validity">
      Êtes-vous actuellement dans l'une des situations suivantes ?
      <v-radio-group required :rules="rules" v-model="category">
        <v-radio autofocus value="categories_12345">
          <template v-slot:label>
            <ul>
              <li>En activité à temps complet (hors contrat aidé)</li>
              <li>En création d'entreprise</li>
              <li>En arrêt maladie</li>
              <li>En congé maternité ou congé parental</li>
              <li>En formation autre que formation professionnelle</li>
            </ul>
          </template>
        </v-radio>
        <v-radio label="Je ne suis dans aucune de ces situations" value="other_categorie"></v-radio>
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
  name: "Category",
  created() {
    this.category = this.$store.state.situation.category;
  },
  data: () => ({
    category: "",
    validity: false,
    rules: [v => !!v || "doit être renseigné"]
  }),
  methods: {
    validate() {
      if (this.$refs.formCategory.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitCategory() {
      this.validate();
      this.$store.dispatch("submitCategory", this.category);
      this.$router.push("votre-allocation");
    }
  }
};
</script>
 
 <style scoped>
ul {
  list-style-type: none;
  border-left: 4px grey solid;
  margin-left: 4px;
}
li {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>