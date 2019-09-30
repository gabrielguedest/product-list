# Aplicação em React + Redux com API em NodeJS(Typescript)

Link para projeto no heroku: https://stormy-plains-51662.herokuapp.com/

## Instruções para instalação e execução

1º Passo: Clonar o repositório

```
git clone https://github.com/gabrielguedest/teste.git
```

2º Passo: Instalar as dependências do servidor NodeJS (Na pasta do repositório clonado)

```
npm install 
```

3º Passo: Instalar as dependências da aplicação em React

```
npm client-install
```

4º Passo: Criar arquivo keys_dev.ts em lib/config

```javascript
module.exports = {
  mongoURI: "mongodb://SUA_DATABASE_URI/SUA_COLLECTION"
};
```

5º Passo: Executar o script para startar o servidor e o client

```
npm run dev
```

JSON com exemplo de produto para popular o banco

```json
{
    "images": [
        "insira_uma_url_aqui",
        "insira_uma_url_aqui",
        "insira_uma_url_aqui",
        "insira_uma_url_aqui"
    ],
    "category": [
        "Lençol"
    ],
    "keywords": [
        "Lençol",
        "Avulso",
        "Classic",
        "Solteiro Extra",
        "Solteiro"
    ],
    "brand": "DAY BY DAY",
    "size": "Solteiro",
    "name": "Jogo de Lençol Day By Day 400 Fios Egípcios",
    "price": 1290,
    "discount": 23
}
```
