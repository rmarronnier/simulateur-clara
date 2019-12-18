 <template>
  <v-card>
    Êtes-vous dans l'une des situations suivantes ?
    Cochez la ou les situations correspondantes
    <v-checkbox v-model="selected" label="Choix 1" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 2" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 3" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Choix 4" value="John"></v-checkbox>
  </v-card>
</template>
 
 <script>
export default {
  name: "Other"
};
</script>
 
 <style>
</style>