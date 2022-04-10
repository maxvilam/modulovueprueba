<template>
  <div>
    <h1>Lista de Opiniones</h1>
    <div v-if="LocalData != null">
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
    <p v-else class="p-4 bg-danger display-6">No existen opiones por mostrar</p>
  </div>
</template>

<script>
export default {
  name: "OpinionesView",
  data() {
    return {
      nombreId: "GameOpinion",
      LocalData: ["No Existe Data"],
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
