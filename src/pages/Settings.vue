<template>
  <q-page class="flex flex-center">
    <h1 style="flex-basis: 100%;">Settings Page</h1>
    <div class="q-pa-md" style="width: 1000px;">
      <VuexFireDemo />
      <hr />
      <VueFireDemo />
    </div>
  </q-page>
</template>

<script>
import VueFireDemo from "components/VueFireDemo";
import VuexFireDemo from "components/VuexFireDemo";
export default {
  components: { VueFireDemo, VuexFireDemo },
  data() {
    return {
      model: "Google",

      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
    };
  }
};
</script>

<style lang="scss" scoped></style>
