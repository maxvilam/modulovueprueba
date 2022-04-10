<template>
  <div class="container">
    <h1 class="mb-5 mt-5">Lista de Juegos Disponibles</h1>
    <div class="row">
      <div
        v-for="game in listargames"
        :key="game.id"
        class="card col-sm-12 m-3"
        style="width: 18rem"
      >
        <img
          :src="game.background_image"
          class="card-img-top"
          height="150px"
          alt="game"
        />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ game.name }}</li>
          <li class="list-group-item">Rating: {{ game.rating }}</li>
          <li class="list-group-item">Release: {{ game.released }}</li>
          <li class="list-group-item">Updated: {{ game.updated }}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link"
            ><button
              data-bs-toggle="modal"
              class="btn btn-primary"
              :data-bs-target="'#' + game.id"
            >
              Opinar
            </button></a
          >
        </div>
        <ModalOpinion :data="game" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalOpinion from "@/components/ModalOpinion.vue";

export default {
  name: "ListGamers",
  props: {
    dataid: {
      type: String,
      default: "",
    },

    listargames: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ModalOpinion,
  },
};
</script>

<style></style>
