 <template>
  <v-row>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn @click="submitClick" type="submit">Continuer</v-btn>
  </v-row>
</template>
 
 <script>
export default {
  name: "QuestionButtons",
  methods: {
    back() {
      this.$router.go(-1);
    },
    submitClick() {
      this.$emit("submit");
    }
  }
};
</script>
 
 <style>
</style>