# progweb-UCB

Matéria de extensão - Programação Web da Universidade Católica de Brasília, 2026
essa branch é principalmente pra eu mesmo conseguir acessar os arquivos e inicializar os servidores em outras máquinas sem perder muito tempo

## Comandos uteis
passos pra conseguir inicializar os negocios em outras maquinas e anotações no geral

pra atualizar a branch:

```bash
git add .
git commit -m "mensagem"
git push origin nome-branch
git push -u origin nova-branch
```

se atualizar alguma coisa em outro computador:

```bash
git pull main
```

pra abrir o projeto em outra maquina:

```bash
git clone https://github.com/gabrielvnm/progweb-UCB.git
```
lembrando que tem que ter angular versao 14, node versao compativel (16 da certo), e isso pode dar treta se tiver outra versão do angular instalada localmente


### /techstore

Essa pasta é o front, usando angular 14 

```bash
npm install
npm start
ls node_modules

```
se tiver em uma maquina diferente, abre o terminal na pasta /techstore e roda npm install, ls node_modules pra verificar a versão

npm start inicia o servidor na pasta /techstore no link http://localhost:4200/



### /server

essa pasta aqui é o backend, os computadores da universidade são resetados toda semana aí pra não ter que começar o projeto do zero é só pegar os negocios dessa pasta

nao adicionei o node_modules no .gitignore pra conseguir rodar mais facil em outra maquina

```bash
npm run dev
npm install
npm install express
rm -rf node_modules
```

pra instalar as dependencias, abre o terminal na pasta /server e da um npm install, se der erro tenta rm -rf node_modules antes e depois npm install
npm run dev inicializa o servidor da pasta server, roda em http://localhost:3000/

http://localhost:3000/produtos/

aqui é a API de produtos pra mandar as requisições pelo postman ou algum outro negocio de API

