<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  preFetch({ store }) {
    console.log("TCL: preFetch -> store", store);
    store.dispatch("bindArticles");
  }
};
</script>

<style></style>
