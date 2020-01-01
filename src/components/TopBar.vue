 <template>
  <v-app-bar class="display-1 justify-center align-center" app color="primary" dark>
    <div class="d-flex align-center">
      <v-img alt="Clara Logo" contain src="@/assets/clara-logo.svg" transition="scale-transition" />

      <v-img alt="Logo Pôle Emploi" contain src="@/assets/logo-pole-emploi.svg" />
    </div>
  </v-app-bar>
</template>
 
 <script>
export default {
  name: "TopBar"
};
</script>
 
 <style scoped>
header {
display: flex;
justify-content: center;
}
</style>
 