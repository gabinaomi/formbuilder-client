<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-row class="mx-auto">
        <v-col
          v-for="field in fields"
          :key="field.id"
          cols="12"
          md="6"
          class="pa-3"
        >
          <template v-if="field.type === 'v-text-field'">
            <v-text-field
              v-model="form1"
              :label="field.title"
              :required="field.mandatory"
              :type="field.type === 'v-text-field' ? 'text' : 'number'"
            ></v-text-field>
          </template>

          <template v-else-if="field.type === 'v-radio-button'">
            <v-radio-group
              v-model="form2"
              :required="field.mandatory"
              :label="field.title"
            >
              <v-radio
                v-for="option in field.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              ></v-radio>
            </v-radio-group>
          </template>
        </v-col>
      </v-row>
      <v-btn @click="submit" :disabled="!valid" color="primary">Enviar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      formData: {},
      fields: [],
    };
  },
  beforeMount() {
    this.getForm();
  },
  methods: {
    submit() {
      console.log(this.formData);
    },
    getForm() {
      this.fields = localStorage.getItem("fields");
      console.log(this.fields);
    },
  },
};
</script>

<style scoped></style>
