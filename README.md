## Desafio técnico Take Blip

Você deverá construir um chatbot em nossa plataforma, para isso, você pode seguir esses passos:

- crie uma conta em nosso portal (https://bit.ly/3lYcJTf), depois crie um chatbot usando a opção "Criar do zero";

- crie uma API que faça integração com a API pública do GitHub com informações sobre os repositórios da Take no GitHub. Para criá-la, você pode usar C#, Java ou Javascript;

- agora que você tem a API criada, deverá utilizar esses dados para exibir um carrossel a partir de qualquer entrada do usuário com informações sobre os 5 repositórios de linguagem C# mais antigos da Take, ordenados de forma crescente por data de criação;

- a imagem de cada card do carrossel deve ser o avatar da Take no GitHub. O título de cada card deve ser o nome completo do repositório, e o subtítulo deve ser a descrição do repositório. Os cards não devem ter nenhum botão;

- o fluxo do bot precisa estar parecido com o que está no link:https://bit.ly/2uDaGhi;

- favor colocar no repositório o json do fluxo do bot para que o mesmo possa ser avaliado.


A API permite receber os repósitorios da Take Blip, API foi desenvolvida em Node.js 16.13.1;


### URL da API
A API está hospedada em `https://luanrs.herokuapp.com/consulta`

### Endereço

Para usar a API, utilize o endereço:

`https://luanrs.herokuapp.com/` ou `https://luanrs.herokuapp.com/consulta`


### Evento verifica se a API está ativa 
Metodo: GET
Retorno: Um JSON com o título e a versão da API.<br/>

Exemplo:

Envio uma requisição GET

`https://luanrs.herokuapp.com/`

Retorno:
[
    {
    "title": "Desafio técnico Take",
    "version": "1.0.0"
}
]

### Evento consultar os repósitorios da Take Blip
Metodo: GET
Retorno: Um JSON com os 5 repósitorios de C# da TakeBlip no GitHub.<br/>

Exemplo:

Envio uma requisição GET

`https://luanrs.herokuapp.com/consulta`

Retorno:
[
  {
    "id": 13860708,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzg2MDcwOA==",
    "name": "library.data",
    "full_name": "takenet/library.data",
    "private": false,
    "owner": {
      "login": "takenet",
      "id": 4369522...
  }

### Depedências

    "axios": "^0.24.0", <br> 
    "body-parse": "^0.1.0",
    "cors": "^2.8.5",
    "debug": "^4.3.3",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-handlebars": "^6.0.2",
    "express-session": "^1.17.2",
    "github-api": "^3.4.0",
    "http": "^0.0.1-security",
    "https": "^1.0.0",
    "request": "^2.88.2",# take.blip-desafio
# take-blip-desafio
