![react native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white) ![IOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white) ![MIT](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)

# React Native Movies List App :clapper: :movie_camera:

<p float="left">
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/1082736335477022882/Simulator_Screen_Shot_-_iPhone_14_-_2023-03-07_at_15.43.22.png" />
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/1082736335829336206/Simulator_Screen_Shot_-_iPhone_14_-_2023-03-07_at_15.43.55.png" />
</p>

- [React Native Movies List App](#rn-movies-list-app)
  - [Descrição](#descricao)
  - [Funcionalidades](#funcionalidades)
    - [Listagem de filmes próximos](#upcoming-movies)
    - [Detalhamento do filme selecionado](#movie-details)
  - [Instruções para instalação](#instrucoes-para-instalacao)
  - [Como executar o projeto](#como-executar-o-projeto)
  - [Executando os testes da aplicação](#executando-os-testes-da-aplicacao)
  - [Principais bibliotecas utilizadas](#principais-bibliotecas-utilizadas)

#### Descrição

###### Aplicativo que exibe os dados de filmes recentes ou prestes a serem lançados, através das APIs do [The Movie DB](https://www.themoviedb.org/).

---

## Funcionalidades

### Listagem de filmes próximos

A home do App consiste em listar todos os filmes próximos, obtidos através do retorno da API. possui "infinite scroll", portanto conforme o usuário vai scrollando a tela, a API é chamada novamente para retornar os próximos dados a serem exibidos. Ao clicar em algum filme, a tela de detalhamento do filme relacionado é exibida.

---

## Instruções para instalação

### Ambiente de Desenvolvimento

Por gentileza, siga as intruções descritas na [documentação oficial do React Native](https://reactnative.dev/docs/environment-setup) para preparar seu ambiente de desenvolvimento.

### Clonando o projeto

```
https://github.com/Leosampc/rn-movies-list-app.git
```

### Acessando a pasta do projeto

```
cd rn-movies-list-app
```

### Instalando as dependências

> **Atenção**: O projeto foi configurado utilizando o Yarn (v1.22.17) e as versões dependências estão fixas no arquivo `yarn.lock`.

Para instalar as dependências utilize o comando:

```
yarn
```

Caso você pretenda executar o projeto através de um **MacOS** e no simulador **iOS**, você precisa rodar um dos seguintes comandos:

```
cd ios/ && pod install && cd ..
```

ou

```
npx pod-install
```

---

## Como executar o projeto

Após abrir o emulador ou conectar seu dispositivo via USB, execute o seguinte comando via terminal:

**Android**

```
yarn android
```

**iOS**

```
yarn ios
```

---

## Executando os testes da aplicação

#### Os testes unitários podem ser executados da seguinte maneira:

```
yarn jest
```

### Testes e2e

##### Os testes de integração dependem do **Detox**, uma biblioteca de automação de testes end-to-end. Caso você nunca tenha ouvido falar, é bom dar uma conferida na [documentação oficial](https://wix.github.io/Detox/)

---

## Principais bibliotecas utilizadas

- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [Axios](https://axios-http.com)
- [Styled Components](https://styled-components.com)
- [Jest](https://jestjs.io)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Detox](https://wix.github.io/Detox/)
- [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import)

---

### Feedback

Todo e qualquer feedback é sempre bem vindo, esteja á vontade! :smile:
