<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-row class="mx-auto">
        <v-col v-for="field in fields" :key="field.id" cols="12" class="pa-3">
          <template v-if="field.type === 'VCurrencyField'">
            <v-currency-field
              v-model="formData[field.id]"
              :label="field.title"
              :required="field.mandatory"
              prefix="R$"
            ></v-currency-field>
          </template>

          <template v-else-if="field.type === 'v-text-field'">
            <v-text-field
              v-model="formData[field.id]"
              :label="field.title"
              :required="field.mandatory"
              type="text"
            ></v-text-field>
          </template>

          <template v-else-if="field.type === 'v-radio-button'">
            <v-radio-group
              v-model="formData[field.id]"
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
      <v-alert v-if="alert" type="success" dismissible>
        Formulário enviado com sucesso. Respostas: {{ formData }}
      </v-alert>
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
      alert: false,
    };
  },
  beforeMount() {
    this.getForm();
    this.loadFormData();
  },
  methods: {
    submit() {
      localStorage.setItem("formData", JSON.stringify(this.formData));
      this.alert = true;
    },
    getForm() {
      const storedFields = localStorage.getItem("fields");
      if (storedFields) {
        this.fields = JSON.parse(storedFields);
      }
    },
    loadFormData() {
      const storedFormData = localStorage.getItem("formData");
      if (storedFormData) {
        this.formData = JSON.parse(storedFormData);
      }
    },
  },
};
</script>

<style scoped></style>
