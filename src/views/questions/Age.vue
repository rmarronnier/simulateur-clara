 <template>
  <v-form @submit.prevent="submitAge" ref="form" v-model="validity" :lazy-validation="lazy">
    Quel est votre âge ?
    <v-text-field
      required
      autofocus
      v-model.number="age"
      type="number"
      min="0"
      :rules="[rules.min]"
    ></v-text-field>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "Age",
  created() {
    this.age = this.$store.state.situation.age;
  },
  data: () => ({
    age: 0,
    validity: false,
    rules: {
      min: v => v >= 16 || "doit être supérieur ou égal à 16"
    }
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitAge() {
      this.validate();
      this.$store.dispatch("submitAge", this.age);
      this.$router.push("votre-diplome");
    }
  }
};
</script>
 
 <style>
</style>