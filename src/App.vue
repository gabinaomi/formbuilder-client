<template>
  <v-app>
    <v-app-bar max-height="70px">
      <v-app-bar-title>Construtor de Formulários | FormBuilder</v-app-bar-title>

      <router-link
        to="/formbuilder"
        class="ma-3 text-uppercase text-decoration-none"
        >Construtor</router-link
      >
      <router-link
        to="/formresponse"
        class="ma-3 text-uppercase text-decoration-none"
        >Resposta</router-link
      >

      <v-spacer></v-spacer>
    </v-app-bar>

    <router-view />
    <v-main class="bg-grey-lighten-2 pa-0"> </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AppView",
  data() {
    return {
      drawer: null,
      items: [
        { text: "Construtor", icon: "mdi-clock", route: "/formbuilder" },
        { text: "Resposta", icon: "mdi-account", route: "/formresponse" },
      ],
    };
  },
};
</script>
