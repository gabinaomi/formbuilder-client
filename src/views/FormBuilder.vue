<template>
  <v-container>
    <v-row class="ma-auto d-flex justify-end">
      <v-btn @click="addField" color="primary">Adicionar Campo</v-btn>
    </v-row>
    <v-list>
      <v-list-item-group>
        <draggable v-model="fields">
          <v-list-item
            v-for="field in fields"
            :key="field.id"
            class="d-flex align-center"
          >
            <v-list-item-content>
              <v-row>
                <v-col cols="8">
                  <v-text-field
                    v-model="field.title"
                    label="Título"
                    hint="Título que se refere ao item"
                    counter="2500"
                    outlined
                    @blur="updateField(field.id, 'title', field.title)"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-select
                    v-model="field.type"
                    :items="options"
                    item-text="title"
                    item-value="value"
                    label="Tipo do Campo"
                    outlined
                    @change="updateField(field.id, 'type', field.type)"
                  >
                    <template v-slot:item="{ item }">
                      <div class="d-flex align-center">
                        <v-icon>{{ item.icon }}</v-icon>
                        <span class="ml-2">{{ item.title }}</span>
                      </div>
                    </template>
                  </v-select>
                </v-col>
                <v-col cols="12" v-if="field.type === 'v-radio-button'">
                  <v-radio-group v-model="selectedRadio">
                    <v-row
                      v-for="(option, index) in optionsRadioButton"
                      :key="index"
                      class="align-center"
                    >
                      <v-col cols="10">
                        <v-radio
                          :label="option.label"
                          :value="option.value"
                        ></v-radio>
                      </v-col>
                      <v-col cols="2">
                        <v-btn icon @click="removeOptionRadioButton(index)">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-radio-group>
                  <v-row>
                    <v-col cols="10">
                      <v-text-field
                        v-model="newOptionLabel"
                        label="Adicionar nova opção"
                        placeholder="Digite o nome da nova opção"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-btn
                        icon
                        @click="addOptionRadioButton(field.id)"
                        :disabled="!newOptionLabel"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-row class="mx-auto">
                  <v-col cols="4">
                    <v-btn icon>
                      <v-icon>mdi-help-circle-outline</v-icon>
                    </v-btn>
                    Dica Da Questão
                  </v-col>
                  <v-col cols="4">
                    <v-btn icon>
                      <v-icon>mdi-comment-outline</v-icon>
                    </v-btn>
                    Comentário Da Questão
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      v-model="field.score"
                      label="Pontuação"
                      type="number"
                      outlined
                      min="0"
                      max="10"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="mt-auto d-flex justify-end">
                    <v-switch
                      v-model="field.mandatory"
                      label="Obrigatória"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-row>
            </v-list-item-content>
            <v-list-item-action class="mt-auto d-flex justify-end">
              <v-btn icon @click="removeField(field.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </draggable>
      </v-list-item-group>
    </v-list>
    <v-row class="ma-auto d-flex justify-end">
      <v-btn @click="submitForm" color="success">Enviar Formulário</v-btn>
    </v-row>
    <v-alert v-if="alert" type="success" dismissible>
      Formulário enviado com sucesso.
    </v-alert>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      fields: [],
      options: [
        {
          title: "Resposta Curta",
          icon: "mdi-text",
          value: "v-text-field",
        },
        {
          title: "Múltipla Escolha",
          icon: "mdi-circle-multiple",
          value: "v-radio-button",
        },
        {
          title: "Valor Monetário",
          icon: "mdi-currency-brl",
          value: "VCurrencyField",
        },
        // {
        //   title: "Caixa de Seleção",
        //   icon: "mdi-checkbox-blank-outline",
        //   value: "v-checkbox",
        // },
        // {
        //   title: "Parágrafo",
        //   icon: "mdi-form-textarea",
        //   value: "v-textarea",
        // },
        // {
        //   title: "Anexo",
        //   icon: "mdi-form-textarea",
        //   value: "v-file-input",
        // },
        {
          title: "",
          icon: null,
          value: null,
        },
      ],
      selectedOptionType: null,
      optionsRadioButton: [],
      selectedRadio: "",
      newOptionLabel: "",
      alert: false,
    };
  },
  methods: {
    addField() {
      const newField = {
        id: Date.now(),
        title: "",
        type: "",
        options: [],
        score: 0,
        mandatory: true,
      };
      this.fields.push(newField);
    },
    removeField(id) {
      this.fields = this.fields.filter((field) => field.id !== id);
      this.selectedOptionType = "";
    },
    updateField(id, key, value) {
      const fieldIndex = this.fields.findIndex((field) => field.id === id);
      if (fieldIndex !== -1) {
        this.$set(this.fields[fieldIndex], key, value);
      }
    },
    addOptionRadioButton(id) {
      const newOption = {
        label: this.newOptionLabel,
        value: this.newOptionLabel.toLowerCase().replace(/\s+/g, ""),
      };

      this.optionsRadioButton.push(newOption);
      const fieldIndex = this.fields.findIndex((field) => field.id === id);
      if (fieldIndex !== -1) {
        this.$set(this.fields[fieldIndex], "options", this.optionsRadioButton);
      }
      this.newOptionLabel = "";
    },
    removeOptionRadioButton(index) {
      this.optionsRadioButton.splice(index, 1);
    },
    submitForm() {
      localStorage.setItem("fields", JSON.stringify(this.fields));
      this.alert = true;
      this.fields = [];
    },
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
</style>
