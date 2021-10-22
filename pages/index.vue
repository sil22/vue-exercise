<template>
  <div id="container" class="container">
    <v-row>
      <v-col cols="6">
        <v-btn
          color="deep-purple accent-4"
          :loading="loading"
          dark
          @click="handleButtonClick"
        >
          Refresh values
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-alert class="float-right" color="blue" type="info" v-if="updated" close-text="Close Alert"
         dismissible @click="updated = false">
          After 10 sec values updated!
        
        </v-alert>
        
      </v-col>
    </v-row>
    <Table :coins="coinsArray" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Table from "../components/Table.vue";

export default {
  layout: "full-layout",
  components: {
    Table
  },
  data() {
    return {
      updated: false,
      loading: false,
      lastUpdate: new Date()
    };
  },
  computed: {
    ...mapGetters("coins", ["coinsArray"])
  },
  mounted() {
    this.fetchCoins();
    this.refreshValues();
  },
  methods: {
    ...mapActions("coins", ["getCoins"]),
    fetchCoins() {
      this.getCoins();
    },
    refreshValues() {
      setInterval(() => {
        this.fetchCoins();
        this.updated = true;
      }, 10000);
    },
    async handleButtonClick() {
      this.loading = true;
      await this.getCoins();
      this.loading = false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

thead,
td {
  height: 3%;
}

* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
