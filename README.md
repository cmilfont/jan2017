# Pra configurar development

## Pré-requisitos:
[Node 7 (sugiro com nvm)](https://github.com/creationix/nvm) ou n

Postgresql (recomendo instalar algum cliente gráfico como o pgAdmin)

Instalar node.
```
nvm install node
```

Caso já tenho nvm, garantir que está usando o último.
```
nvm use 7
```

Instalar pacotes globais.
```
npm i -g pg sequelize-cli create-react-app nodemon
```

## Instalação e primeira execução

Clonar o projeto e instalar dependências.
```
git clone git@github.com:cmilfont/jan2017.git
cd jan2017
npm i
cd client
npm i
```
Configurar dados do banco postgres no arquivo **server/config/config.json**

Criar o banco e rodar a app.
```
npm run db:create
npm run db:migrate
npm run dev
```

Por padrão vai subir em http://localhost:3000/

## PLUS: Deploy no Heroku

Criar conta no heroku, adicionar addons SendGrid.

Exportar variaveis de ambiente, sugiro criar um arquivo na raiz do projeto chamado config.env e colocar nele.

Exemplo (lembrar que pra windows é com set):

```
export SENDGRID_APIKEY=SG.D8Kte9yITmyYO99E5f5PcA.Bqi69X4yyuIah-xxxxxxxxxxxxxxxxxxxxxxxxx
```

Essas infos voce pega nos serviços a partir do heroku, algumas delas não são cadastradas automaticamente, então sugiro introduzir manualmente em https://dashboard.heroku.com/apps/seuprojeto/settings clicanco em **Reveal Config Vars***.
