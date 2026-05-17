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


### ~/index.html
essa pasta tem só o protótipo do projeto em index.html, referenciando o style.css e script.js no root. O objetivo é traduzir esse protótipo pra um negocio mais estruturado com Angular.js, mas deixei aqui só de referência.

por algum motivo no meu ambiente em casa o firefox não ta lendo o style.css, só deu quando eu troquei o `security.fileuri.strict_origin_policy` pra false, e eu nao sei o que isso faz ao certo, não quero brincar com isso agora não

a solução foi rodar um server simples em python, aí a página carrega direito

```bash
python -m http.server 8000
```

inicializa o servidor com python pra pasta root, lendo o ./index.html em http://localhost:8000/

### /techstore

Essa pasta é o projeto em si, 

```bash
npm start
```

usa esse aqui pra iniciazilar o servidor na pasta /techstore no link http://localhost:4200/

como é um trabalho em andamento, vou colocar mais uns comandos aqui eventualmente

```bash
ng generate component nome-componente
```
cria um componente em uma pasta

### /server

essa pasta aqui é principalmente pra continuar o backend do projeto, os computadores da universidade são resetados toda semana aí pra não ter que começar o projeto do zero é só pegar os negocios dessa pasta

```bash
npm run dev
```

inicializa o servidor da pasta server, roda em http://localhost:3000/

http://localhost:3000/produtos/

aqui é a API de produtos pra mandar as requisições pelo postman

#
