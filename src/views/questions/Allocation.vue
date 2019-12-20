 <template>
  <v-form @submit.prevent="submitAllocation" ref="formAllocation" v-model="validity">
    Quelle allocation percevez-vous actuellement ?
    <v-row>
      <v-col>
        <v-radio-group required :rules="rules" v-model="allocation_type">
          <v-radio autofocus label="Une prestation d’assurance chômage : ARE / ASP" value="ARE_ASP"></v-radio>
          <v-radio
            label="Une prestation de solidarité : ASS / AER / APS / AS-FNE"
            value="ASS_AER_ATA_APS_ASFNE"
          ></v-radio>
          <v-radio
            label="Une autre indemnité parmi les suivantes : RPS / RFPE / RFF / pension de retraite"
            value="RPS_RFPA_RFF_PENSION"
          ></v-radio>
          <v-radio label="Le RSA" value="RSA"></v-radio>
          <v-radio label="L’AAH" value="AAH"></v-radio>
          <v-radio label="Je ne suis pas indemnisé•e" value="none"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col>
        <v-card color="secondary">
          <v-list class="overflow-y-auto" max-height="400" flat color="lime lighten-4">
            <v-subheader>Aide : Liste complète des allocations</v-subheader>
            <v-list-item-group v-model="allocations" color="primary">
              <v-list-item v-for="i in allocations" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="i"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
export default {
  name: "Allocation",
  created() {
    this.allocation_type = this.$store.state.situation.allocation_type;
  },
  data: () => ({
    allocation_type: "",
    validity: false,
    rules: [v => !!v || "doit être renseigné"],
    allocations: [
      "Allocation d'aide au Retour à l'emploi (ARE)",
      "Allocation de sécurisation professionnelle (ASP)",
      "Allocation de sécurisation professionnelle (ASP)",
      "Allocation de solidarité spécifique (ASS)",
      "Allocation équivalent retraite (AER)",
      "Allocation de professionnalisation et de solidarité (APS)",
      "Allocation spéciale du Fonds national de l'emploi (AS-FNE)",
      "Revenu de solidarité active (RSA)",
      "Allocation aux adultes handicapés (AAH)",
      "Régime Public de rémunération des Stagiaires (RPS)",
      "Régime public de rémunération des demandeurs d'emploi en formation (RFPE)",
      "Rémunération de fin de formation (RFF)"
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.formAllocation.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitAllocation() {
      this.validate();
      this.$store.dispatch("submitAllocation", this.allocation_type);
      //if value != none OR !retraite...
      this.$router.push("montant-ARE");
    }
  }
};
</script>
 
 <style>
</style>