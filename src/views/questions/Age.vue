 <template>
  <v-form>
    Quel est votre âge ?
    <v-text-field
      v-model.number="age"
      single-line
      type="number"
      v-validate="'required|min:16'"
      :rules="rules"
    ></v-text-field>
    <QuestionButtons @submit="submit"></QuestionButtons>
  </v-form>
</template>
 
 <script>
import QuestionButtons from "@/components/QuestionButtons";
export default {
  name: "Age",
  components: {
    QuestionButtons
  },
  computed: {
    age: {
      get() {
        return this.$store.state.situation.age;
      },
      set(value) {
        this.$store.dispatch("submitAge", value);
      }
    }
  },
  data: () => ({
    rules: [
      value => !!value || "Required."
      // value => value || >= 15 || 'doit être supérieur ou égal à 16',
      // value => {
      //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      //   return pattern.test(value) || 'Invalid e-mail.'
      //},
    ]
  }),
  methods: {
    submit() {
      //this.$store.dispatch("submitAge", this.age);
      this.$router.push("votre-diplome");
    }
  }
};
</script>
 
 <style>
</style>