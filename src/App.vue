<script>
import theHeader from "./components/theHeader.vue";
import theMain from "./components/theMain.vue";
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  components: { theHeader, theMain },
  data() {
    return {
    };
  },
  methods: {},
  beforeMount() { },
}
</script>

<template>

<theHeader></theHeader>
<theMain></theMain>

</template>

<style scoped>

</style>
