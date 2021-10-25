<template>
  <div>
   
    <v-card class="mx-auto my-12" max-width="800">
        <v-breadcrumbs class="mx-auto my-12" max-width="500" :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-card-title>{{ coin.symbol }}</v-card-title>

      <v-card-text>
        <v-simple-table height="300px">
          <template v-slot:default>
            <tbody>
              <tr v-for="(key, item) in coin" :key="item">
                <td class="text-capitalize">
                  <strong>{{ item }}</strong>
                </td>

                <td>{{ key }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="goToHome">
          Go back
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    coin: Object
  },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Coin",
        disabled: true,
        href: "Coin"
      }
    ]
  }),

  methods: {
    goToHome() {
      this.$router.push({ name: "index" });
    }
  }
};
</script>
