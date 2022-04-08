<template>
  <div>
    <h1>Administrado la Lista de Opiniones</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in LocalData" :key="i">
          <th>{{ i + 1 }}</th>
          <td>{{ data.nombre }}</td>
          <td>{{ data.namegame }}</td>
          <td>{{ data.opinion }}</td>
          <td>
            <button v-on:click="elimina(i)" class="btn btn-danger">
              Eliminar
            </button>
          </td>
          <td><button class="btn btn-info">Editar</button></td>
        </tr>
      </tbody>
    </table>
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
  methods: {
    elimina(i) {
      this.LocalData.splice(i, 1);
      localStorage.setItem(this.nombreId, JSON.stringify(this.LocalData));
    },
  },
};
</script>

<style></style>
