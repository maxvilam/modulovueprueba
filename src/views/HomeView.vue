<template>
  <div class="home">
    <ListGamers :listargames="games" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListGamers from "@/components/ListGamers.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    ListGamers,
  },
  computed: {
    ...mapState(["games"]),
  },
};
</script>
