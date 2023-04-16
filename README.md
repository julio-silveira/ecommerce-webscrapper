# Lexarts challenge - Search Engine

## Visão geral

Este é um projeto de um mecanismo de busca de produtos que se conecta às páginas do Mercado Livre e do Buscapé utilizando web scraping.

## Funcionalidades
- Menu suspenso para escolher as categorias: Mobile, Geladeira e TV.
- Menu suspenso para escolher o site: Mercado Livre / Buscapé.
- Caixa de entrada de texto livre para pesquisar produtos.
- Lista de produtos com: foto, descrição, categoria, preço e site onde as informações foram obtidas.
- Armazena os resultados em um banco de dados após a pesquisa do usuário. Se a mesma pesquisa for repetida (considerando apenas os filtros de categoria e web para armazenar), mostra o que sai da base e não desfaz para as webs.
- Solução hospedada online em um servidor gratuito como o Heroku ou alguma outra alternativa.

Acessar aplicação em produção: https://lexart.up.railway.app/

## Tecnologias Utilizadas
- Typescript
- Express
- Axios
- Cheerio
- React + ViteJS
- Material UI
- MongoDB
- Mongoose

## Requisitos
Para executar este aplicativo, você precisará:

Node.js
npm 
## Instalação
- Clone o repositório:

```
git clone git@github.com:julio-silveira/lexarts-challenge-app.git
```
- Instale as bibliotecas necessárias:

```
cd app/api
npm install
cd ../web
npm install
```
-Execute no terminal:
```
cd app/api
npm run dev
```
-Abra um novo terminal e execute: 
```
cd ../web
npm run dev
```

Uso
Abra o seu navegador da web e vá para http://localhost:5173.
Escolha uma categoria e um site usando os menus suspensos.
Digite um termo de pesquisa no campo de texto livre e clique em "Search".
Os resultados da pesquisa aparecerão na tela, mostrando a foto do produto, descrição, categoria, preço e o site onde as informações foram obtidas.
Os resultados da pesquisa serão armazenados em um banco de dados após a pesquisa do usuário. Se o usuário repetir a mesma pesquisa, o sistema levará em conta apenas as categorias e filtros da web para armazenar os novos resultados e mostrar os resultados armazenados anteriormente, caso correspondam.
