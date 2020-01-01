 <template>
  <v-card class="pa-4" align="center">
    <v-card-title
      class="display-1 justify-center align-center"
    >Êtes-vous dans l'une des situations suivantes ?</v-card-title>
    <v-form @submit.prevent="submitOther" ref="formOther" v-model="validity">
      Cochez la ou les situations correspondantes
      <div class="justify-center align-center check-group">
        <v-checkbox autofocus v-model="spectacle" label="Artiste ou technicien•ne du spectacle"></v-checkbox>
        <v-checkbox
          v-model="handicap"
          label="Bénéficiaire de l'obligation d'emploi (reconnu•e en situation de handicap)"
        ></v-checkbox>
        <v-checkbox v-model="manager" label="Cadre et/ou en recherche d'un poste d'encadrement"></v-checkbox>
        <v-checkbox v-model="none" label="Je ne suis dans aucune de ces situations"></v-checkbox>
      </div>
      <v-btn x-large class="ma-2" color="#96a8b2" @click="back">Revenir</v-btn>
      <v-btn
        x-large
        class="ma-2"
        color="secondary"
        v-bind:disabled="validity"
        type="submit"
      >Continuer</v-btn>
    </v-form>
  </v-card>
</template>
 
 <script>
export default {
  name: "Other",
  created() {
    this.spectacle = this.$store.state.situation.spectacle;
    this.handicap = this.$store.state.situation.disabled;
  },
  data: () => ({
    spectacle: false,
    handicap: false,
    manager: false,
    none: false
  }),
  methods: {
    back() {
      this.$router.go(-1);
    },
    submitOther() {
      this.$store.dispatch("submitDisabled", this.handicap);
      this.$store.dispatch("submitSpectacle", this.spectacle);
      this.$store.dispatch("submitManager", this.manager);
      // if choice != non inscrit
      this.$router.push({ path: "/resultats" });
    }
  },
  computed: {
    validity() {
      return ![this.spectacle, this.handicap, this.manager, this.none].includes(
        true
      );
    }
  },
  watch: {
    spectacle: function(val) {
      if (val) {
        this.none = !val;
      }
    },
    handicap: function(val) {
      if (val) {
        this.none = !val;
      }
    },
    manager: function(val) {
      if (val) {
        this.none = !val;
      }
    },
    none: function(val) {
      if (val) {
        this.spectacle = !val;
        this.handicap = !val;
        this.manager = !val;
      }
    }
  }
};
</script>
 
 <style>
.check-group {
  width: 50%;
}
</style>