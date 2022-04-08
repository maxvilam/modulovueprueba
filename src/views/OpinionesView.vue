<template>
  <div>
    <h1>Lista de Opiniones</h1>
    <section v-for="(data, i) in LocalData" :key="i">
      <h4 class="p-3 border bg-light text-left">
        Opinion creada por {{ data.nombre }}, Para el juego
        {{ data.namegame }}
      </h4>
      <div class="ml-5">
        <strong class="fs-6 ml-5">Opinión: </strong>
        <span>{{ data.opinion }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "OpinionesView",
  data() {
    return {
      nombreId: "GameOpinion",
      LocalData: [],
    };
  },
  props: {
    Local: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.LocalData = JSON.parse(localStorage.getItem(this.nombreId));
  },
};
</script>

<style></style>
