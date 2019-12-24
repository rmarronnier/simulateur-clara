 <template>
  <v-card align="center">
    <v-card-title class="display-1">Quel est votre âge ?</v-card-title>

    <v-form @submit.prevent="submitAge" ref="formAge" v-model="validity" :lazy-validation="lazy">
      <v-text-field
        required
        autofocus
        outlined
        color="black"
        v-model.number="age"
        type="number"
        min="0"
        max="99"
        :rules="[rules.min, rules.max]"
      ></v-text-field>
      <v-btn x-large class="ma-6" color="#96a8b2" @click="back">Revenir</v-btn>
      <v-btn
        x-large
        class="ma-6"
        color="secondary"
        v-bind:disabled="!validity"
        type="submit"
      >Continuer</v-btn>
    </v-form>
  </v-card>
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
      min: v => v >= 16 || "doit être supérieur ou égal à 16",
      max: v => v <= 100 || "doit être inférieur ou égal à 100"
    }
  }),
  methods: {
    validate() {
      if (this.$refs.formAge.validate()) {
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