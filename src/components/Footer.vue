 <template>
  <v-footer color="secondary" dark app max-height="200px">
    <v-row justify="center" no-gutters>
      <ul>
        <li>Navigation sur Clara :</li>
        <li>
          <a href="#">Toutes nos aides</a>
        </li>
        <li>
          <a href="#">Appui à l'embauche</a>
        </li>
        <li>
          <a href="#">Aide à la mobilité</a>
        </li>
        <li>
          <a
            href="#"
          >Aide à la définition du projet professionnel, à l'orientation, ou à la reconversion</a>
        </li>
        <li>
          <a href="#">Dispositif de formation, certification, obtention de diplôme</a>
        </li>
        <li>
          <a href="#">Emploi international</a>
        </li>
        <li>
          <a href="#">Contrat spécifique</a>
        </li>
        <li>
          <a href="#">Dispositif Séniors</a>
        </li>
        <li>
          <a href="#">Aide à la création ou reprise d'entreprise</a>
        </li>
        <li>
          <a href="#">Contrat en alternance</a>
        </li>
        <li>
          <a href="#">Aide régionale</a>
        </li>
      </ul>
      <ul>
        <li>Liens utiles :</li>
        <li>
          <a href="#">Conditions générales d'utilisation</a>
        </li>
        <li>
          <a href="#">Nous contacter</a>
        </li>
        <li>
          <a href="#">Cookies et politique de confidentialité</a>
        </li>
        <li>
          <a href="#">Accessibilité</a>
        </li>
      </ul>
      <v-col class="secondary py-4 text-center white--text" cols="12">
        <v-divider></v-divider>
        Copyright {{ new Date().getFullYear() }} CLARA
        <a href="#">propulsé par POLE EMPLOI</a>
      </v-col>
    </v-row>
  </v-footer>
</template>
 
 <script>
export default {
  name: "Footer"
};
</script>
 
 <style scoped>
ul {
  list-style-type: none;
}
</style>
 