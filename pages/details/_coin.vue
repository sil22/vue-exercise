<template>
  <div v-if="coin">
    <Card :coin="coin" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../../components/Card.vue";
export default {
  layout: 'full-layout',
  components: {
    Card
  },
  data() {
    return {
      coin: null
    };
  },
  computed: {
    ...mapGetters("coins", ["getCoin"])
  },
  mounted() {
    this.coin = this.getCoin(this.$route.params.coin);
    if (!this.coin) {
      this.$router.push({ name: "index" });
    }
  }
};
</script>
