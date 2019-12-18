 <template>
  <v-row>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn @click="submit">Continuer</v-btn>
  </v-row>
</template>
 
 <script>
export default {
  name: "QuestionButtons",
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
 
 <style>
</style>