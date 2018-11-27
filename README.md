<h1> Aplicação em React + Redux com API em NodeJS(Typescript) </h1>

<br>1º Passo: Clonar o repositório<br>
```
https://github.com/gabrielguedest/teste.git
```

<br>2º Passo: Instalar as dependências do servidor NodeJS (Na pasta do repositório clonado) <br>
```
npm install 
```

<br>3º Passo: Instalar as dependências da aplicação em React <br>
```
npm client-install
```

<br>4º Passo: Criar arquivo keys_dev.ts em lib/config<br>
```javascript
module.exports = {
  mongoURI: "mongodb://SUA_DATABASE_URI/SUA_COLLECTION"
};
```

<br>5º Passo: Executar o script para startar o servidor e o client<br>
```
npm run dev
```

<br><br>JSON com exemplo de produto para popular o banco </bold><br>
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
