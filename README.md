# Controle de Missão Espacial

Projeto desenvolvido para a disciplina **Advanced Programming And Mobile Dev**.

## Descrição do Projeto

O projeto **Controle de Missão Espacial** consiste em uma solução integrada composta por um backend em **Java com Spring Boot** e um aplicativo mobile em **React Native com TypeScript**.

A aplicação tem como objetivo simular o controle de uma missão espacial, permitindo o cadastro, consulta e monitoramento de sensores, módulos computacionais, eventos operacionais e alertas críticos gerados durante a operação.

O sistema foi desenvolvido com integração entre frontend mobile e backend, utilizando requisições HTTP do tipo **GET** e **POST** para comunicação com a API.

## Tecnologias Utilizadas

### Backend

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* H2 Database
* Maven

### Mobile

* React Native
* Expo
* TypeScript
* Fetch API

### Ferramentas

* IntelliJ IDEA
* Visual Studio Code
* Postman
* GitHub

## Funcionalidades

* Cadastro de sensores e módulos computacionais da missão
* Consulta de sensores cadastrados
* Cadastro de eventos operacionais
* Consulta de eventos operacionais
* Cadastro de alertas críticos
* Consulta de alertas críticos
* Integração funcional entre aplicativo mobile e backend
* Persistência dos dados em banco H2 em modo file

## Estrutura do Projeto

```txt
controle-missao-espacial
├── backend
│   ├── src
│   ├── pom.xml
│   └── README.md
│
└── mobile
    ├── src
    ├── App.tsx
    ├── package.json
    └── README.md
```

## Backend - Spring Boot

O backend foi desenvolvido em Java com Spring Boot e possui uma API REST responsável por armazenar e consultar os dados da missão espacial.

### Entidades Criadas

* Sensor
* Evento Operacional
* Alerta Crítico

### Banco de Dados

Foi utilizado o banco de dados **H2** em modo file, permitindo que os dados sejam armazenados localmente durante a execução da aplicação.

Configuração utilizada no `application.properties`:

```properties
spring.datasource.url=jdbc:h2:file:./data/missao_db
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

server.port=8080
```

## Endpoints da API

### Sensores

Listar sensores:

```http
GET /api/sensores
```

Cadastrar sensor:

```http
POST /api/sensores
```

Exemplo de JSON:

```json
{
  "nome": "Sensor de Temperatura",
  "tipo": "Temperatura",
  "modulo": "Módulo Térmico",
  "leitura": 38.5,
  "unidade": "°C",
  "status": "Operacional"
}
```

### Eventos Operacionais

Listar eventos:

```http
GET /api/eventos
```

Cadastrar evento:

```http
POST /api/eventos
```

Exemplo de JSON:

```json
{
  "sistema": "Propulsão",
  "descricao": "Sistema de propulsão ativado com sucesso",
  "nivel": "INFO",
  "status": "Concluído",
  "dataHora": "2026-06-02 21:20"
}
```

### Alertas Críticos

Listar alertas:

```http
GET /api/alertas
```

Cadastrar alerta:

```http
POST /api/alertas
```

Exemplo de JSON:

```json
{
  "titulo": "Temperatura Crítica",
  "descricao": "Temperatura do módulo térmico acima do limite seguro",
  "severidade": "ALTA",
  "origem": "Sensor de Temperatura",
  "status": "Aberto",
  "dataHora": "2026-06-02 21:25"
}
```

## Como Executar o Backend

Entre na pasta do backend:

```bash
cd backend
```

Execute o projeto:

```bash
mvn spring-boot:run
```

A API ficará disponível em:

```txt
http://localhost:8080
```

## Mobile - React Native com TypeScript

O aplicativo mobile foi desenvolvido em React Native com Expo e TypeScript.

O app possui telas navegáveis para:

* Status da missão
* Sensores e módulos
* Eventos operacionais
* Alertas críticos

O aplicativo consome a API Spring Boot por meio de requisições **GET** e **POST**.

## Como Executar o Mobile

Entre na pasta do mobile:

```bash
cd mobile
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npx expo start --web
```

O aplicativo será aberto no navegador.

## Integração Mobile + Backend

A integração entre o aplicativo mobile e o backend é feita pelo arquivo:

```txt
mobile/src/services/api.ts
```

URL utilizada para comunicação com a API:

```txt
http://localhost:8080/api
```

Exemplo de chamada GET:

```ts
const response = await fetch("http://localhost:8080/api/sensores");
```

Exemplo de chamada POST:

```ts
await fetch("http://localhost:8080/api/sensores", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(sensor)
});
```

## Testes Realizados

Foram realizados testes no Postman e no aplicativo mobile.

### Testes no Postman

Foram testados os seguintes endpoints:

```txt
GET  /api/sensores
POST /api/sensores

GET  /api/eventos
POST /api/eventos

GET  /api/alertas
POST /api/alertas
```

### Testes no Mobile

No aplicativo mobile foram testadas as seguintes funcionalidades:

* Cadastro de sensor
* Listagem de sensores
* Cadastro de evento operacional
* Listagem de eventos operacionais
* Cadastro de alerta crítico
* Listagem de alertas críticos

## Versionamento

O projeto foi versionado utilizando Git e GitHub, com commits realizados durante o desenvolvimento da solução.

Exemplos de commits utilizados:

```txt
feat: cria backend spring boot com h2
feat: adiciona entidades e controllers da missao
feat: cria app mobile com expo typescript
feat: integra mobile com api spring boot
docs: adiciona readme do projeto
```

## Integrantes

* Victor Augusto Ribeiro Oliveira - RM558338
* Pedro Henrique de Brito Garcia - RM558867

## Status do Projeto

Projeto funcional com backend em Spring Boot integrado ao aplicativo mobile em React Native com TypeScript.

A aplicação permite cadastrar e consultar sensores, eventos operacionais e alertas críticos, atendendo aos requisitos de integração entre frontend mobile e backend.
