 <template>
  <v-card align="center">
    <v-card-title text-align="center">Quel est le code postal de votre lieu de résidence ?</v-card-title>
    <v-card-subtitle>Code postal - facultatif</v-card-subtitle>
    <v-form align="center" @submit.prevent="submitAddress" ref="formAddress" v-model="validity">
      <v-row>
        <v-col cols="12" md="8">
          <v-autocomplete
            max-width="200px"
            v-model="address"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            autofocus
            outlined
            color="black"
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="Citycode"
            label="Exemple : 44220"
            placeholder="Exemple : 44220"
            prepend-icon="mdi-map-marker"
            return-object
          ></v-autocomplete>

          <!-- <v-expand-transition>
          <v-list v-if="model" class="red lighten-3">
            <v-list-item v-for="(field, i) in fields" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="field.value"></v-list-item-title>
                <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          </v-expand-transition>-->

          <!-- <v-text-field autofocus v-model.number="address" type="number" label="Exemple : 44220"></v-text-field> -->
        </v-col>
        <v-col cols="6" md="4">
          <v-alert text type="info">
            <strong>Plus que 2 questions</strong>
            <br />avant d'obtenir vos résultats
          </v-alert>
        </v-col>
      </v-row>

      <v-btn x-large class="ma-2" color="#96a8b2" @click="back">Revenir</v-btn>
      <v-btn
        x-large
        class="ma-2"
        color="secondary"
        v-bind:disabled="!validity"
        type="submit"
      >Continuer</v-btn>
    </v-form>
  </v-card>
</template>
 
 <script>
import BANService from "@/services/ban";
export default {
  name: "Address",
  created() {
    this.address = {
      Description: this.$store.state.situation.address,
      Citycode: this.$store.state.situation.citycode
    };
  },
  data: () => ({
    address: "",
    citycode: null,
    validity: false,
    results: [],
    isLoading: false,
    search: null
  }),
  methods: {
    // validate() {
    //   if (this.$refs.formAddress.validate()) {
    //     this.validity = true;
    //   }
    //},
    back() {
      this.$router.go(-1);
    },
    submitAddress() {
      // this.validate();
      this.$store.dispatch("submitAddress", this.address["Description"]);
      this.$store.dispatch("submitCitycode", this.address["Citycode"]);
      this.$router.push("autres-situations");
    }
  },

  computed: {
    fields() {
      if (!this.address) return [];

      return Object.keys(this.address).map(key => {
        return {
          key,
          value: this.address[key] || "n/a"
        };
      });
    },
    items() {
      return this.results.map(result => {
        const Description =
          result.properties.city + " " + result.properties.postcode;
        const Citycode = result.properties.citycode;
        return Object.assign({ Description, Citycode });
      });
    }
  },

  watch: {
    search(val) {
      // Items have already been loaded
      if (this.items.length > 4) return;

      // Items have already been requested
      if (val.length < 5) return;
      if (this.isLoading) return;
      this.isLoading = true;

      // Lazily load input items
      BANService(val)
        .then(res => res.json())
        .then(results => {
          this.results = results.features;
        })
        // .catch(err => {
        //   //console.log(err);
        // })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
 
 <style>
</style>