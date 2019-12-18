 <template>
  <v-card>
    Êtes-vous actuellement dans l'une des situations suivantes ?
    <v-radio-group v-model="radios">
      <v-radio label="Choix 1" value="radio-1"></v-radio>
      <v-radio label="Choix 2" value="radio-2"></v-radio>
    </v-radio-group>
  </v-card>
</template>
 
 <script>
export default {
  name: "Category"
};
</script>
 
 <style>
</style>