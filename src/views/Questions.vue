 <template>
  <v-content>
    <v-card>
      <v-form>
        <router-view></router-view>
        <QuestionButtons></QuestionButtons>
      </v-form>
    </v-card>
  </v-content>
</template>
 
 <script>
import QuestionButtons from "@/components/QuestionButtons";
export default {
  name: "Questions",
  components: {
    QuestionButtons
  }
};
</script>
 
 <style>
</style>