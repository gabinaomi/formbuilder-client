<template>
  <v-app id="app">
    <v-app-bar class>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-app-bar-title>Construtor de Formulários | FormBuilder</v-app-bar-title>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>

          <v-list-item-title>
            <router-link :to="item.route">{{ item.text }}</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <router-view />
    <v-main class="bg-grey-lighten-2"> </v-main>
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
