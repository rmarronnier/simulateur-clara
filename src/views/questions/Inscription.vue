 <template>
  <v-form>
    Depuis combien de temps êtes-vous inscrit•e à Pôle emploi ?
    <v-radio-group v-model="radios">
      <v-radio label="Choix 1" value="radio-1"></v-radio>
      <v-radio label="Choix 2" value="radio-2"></v-radio>
    </v-radio-group>
  </v-form>
</template>
 
 <script>
export default {
  name: "Inscription"
};
</script>
 
 <style>
</style>