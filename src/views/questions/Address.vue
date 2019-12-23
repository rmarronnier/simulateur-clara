 <template>
  <v-form @submit.prevent="submitAddress" ref="formAddress" v-model="validity">
    Quel est votre code postal de votre lieu de résidence ?
    Code postal - facultatif
    <v-row>
      <v-col>
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          autofocus
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="Citycode"
          label="Exemple : 44220"
          placeholder="Exemple : 44220"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>

        <v-expand-transition>
          <v-list v-if="model" class="red lighten-3">
            <v-list-item v-for="(field, i) in fields" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="field.value"></v-list-item-title>
                <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expand-transition>

        <v-text-field autofocus v-model.number="address" type="number" label="Exemple : 44220"></v-text-field>
      </v-col>
      <v-col>
        <v-alert type="info">
          <strong>Plus que 2 questions</strong>
          <br />avant d'obtenir vos résultats
        </v-alert>
      </v-col>
    </v-row>
    <v-btn @click="back">Revenir</v-btn>
    <v-btn v-bind:disabled="!validity" type="submit">Continuer</v-btn>
  </v-form>
</template>
 
 <script>
import BANService from "@/services/ban";
export default {
  name: "Address",
  created() {
    this.address = this.$store.state.situation.address;
    this.citycode = this.$store.state.situation.location_citycode;
  },
  data: () => ({
    address: "",
    citycode: null,
    validity: false,
    results: [],
    search: null,
    model: null
  }),
  methods: {
    validate() {
      if (this.$refs.formAddress.validate()) {
        this.validity = true;
      }
    },
    back() {
      this.$router.go(-1);
    },
    submitAddress() {
      this.validate();
      this.$store.dispatch("submitAddress", this.address);
      this.$store.dispatch("submitCitycode", this.citycode);
      this.$router.push("autres-situations");
    }
  },

  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.results.map(result => {
        const Description =
          result.properties.city + " " + result.properties.postcode;
        const Citycode = result.properties.citycode;
        return Object.assign({}, result, { Description, Citycode });
      });
    }
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      BANService(this.address)
        .then(res => res.json())
        .then(res => {
          this.results = res.features;
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