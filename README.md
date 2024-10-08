


## FormBuilder Client

This is the `formbuilder-client` project, a Vue.js application for creating and managing dynamic forms.

Este é o projeto `formbuilder-client`, uma aplicação Vue.js para criar e gerenciar formulários dinâmicos.


## Prerequisites | Pré-requisitos
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

Make sure you have Node.js and Yarn installed on your machine.

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina.

## Project usage

First of all, you need to clone the repository and install the dependencies:

Primeiramente, você precisa clonar o repositório e instalar as dependências:
 
```bash
git clone https://github.com/gabinaomi/formbuilder-client.git

cd formbuilder-client
yarn install
```

In the project directory, you can run:

Dentro do diretório do projeto, você pode executar:

### `yarn install`

Install all project dependencies.

Instale todas as dependências do projeto.

### `yarn lint`
 
Enforce code style and linter fixes.

Garanta estilo de código e correção com o linter.

### `yarn serve`

Runs the app in the development mode.

Execute a aplicação em modo de desenvolvimento.

Abra [http://localhost:8081/](http://localhost:8081/) para ver o projeto no browser.

Open [http://localhost:8081/](http://localhost:8081/) to view it in the browser.



## Stack e Explicações.
- [Vue 2 + Javascript](https://vuejs.org/) Foi utilizado framework VueJS 2 conforme solicitado no desafio e devido familiaridade com a stack.
- [Vuetify](https://vuetifyjs.com/en/) Para biblioteca de componentes, utilizei Vuetify por já trazer componentes prontos e robustos, aplicável pelo desafio proposto. 
- [Vue Router](https://router.vuejs.org/) Vue Router para navegação entre as páginas.
- [vuedraggable](https://www.npmjs.com/package/vuedraggable) vuedraggable para que seja possível arrastar e soltar os componentes de pergunta e modificar sua ordem de forma fácil.
- [VCurrencyField](https://www.npmjs.com/package/v-currency-field) E VCurrencyField para que seja possível customizar campos de valores monetários, incluindo máscaras e algumas validações.

## Documentation | Documentação

Construtor: Para acessar o contrutor de formulários, clique na opção "Construtor". Adicione todos os campos que desejar, incluindo suas opções, quando necessário.É possível mudar a ordem das perguntas arrastando o componente. Assim que concluir, clique em "Enviar Formulário".
 
![screencapture-localhost-8081-formbuilder-2024-09-23-15_02_24](https://github.com/user-attachments/assets/d76bf127-ba93-4dd7-a8c8-f391edeac7d9)

![screencapture-localhost-8081-formbuilder-2024-09-23-15_04_15 (1)](https://github.com/user-attachments/assets/a2882937-b137-4d3e-b169-6f09401b3990)


Resposta: Para acessar o formulário de resposta, clique na opção "Resposta". Preencha os dados e ao finalizar, clique em "Enviar".

![screencapture-localhost-8081-formresponse-2024-09-23-15_08_58](https://github.com/user-attachments/assets/22990e68-3a3b-4121-a4be-96189948265c)




@author: Gabriela Naomi Kamimoto de Souza | https://gabinaomi.github.io/
