<template>
  <div>
    <Header title="$ BINANCE APP $" />
    <Nuxt /> 
    <Footer />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
