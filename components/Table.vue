<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="coins"
      @click:row="handleClick"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search coin.."
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    coins: Array
  },
  data() {
    return {
      search: "",
      coinName: ""
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Coin Name",
          align: "start",
          sortable: false,
          value: "symbol"
        },
        {
          text: "Price",
          value: "askPrice",
          sortable: false
        },
        { text: "Weighted Avg Price", value: "weightedAvgPrice" },
        { text: "Volume", value: "volume" },
        { text: "Price change", value: "priceChange", sortable: false },
        { text: "Recently visited", value: "closeTime", sortable: true }
      ];
    }
  },
  methods: {
    filterOnlyCapsText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleUpperCase()

          .indexOf(search.toLocaleUpperCase()) !== -1
      );
    },
    handleClick(event) {
      this.$router.push({
        name: "details-coin",
        params: { coin: event.symbol }
      });
      event["visited"] = new Date();
    }
  } 
};
</script>
