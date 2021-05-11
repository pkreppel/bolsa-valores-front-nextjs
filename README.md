# bolsa-valores-front-nextjs

Aplicação em React com Nextjs que consome uma api que retorna os tickers da b3. Existe um repositório com uma aplicação java que faz a requisição na api da B3 e retorna dados do ticker requisitado.

- Esta aplicação contêm um Dockefile. 
- Para criar a imagem e o container, segue um exemplo:
  - Executar npm run build
  - Ainda no terminal, executar:
    - docker build -t 8081:8081 bolsa-valores-front-nextjs .
    - docker run -dp 8081:8081 bolsa-valores-front-nextjs
    - No browser, utilizar a url http://localhost:8081
   
## Backend
A aplicação backend em java está aqui: [bolsa-valores-back-java](https://github.com/pkreppel/bolsa-valores-back-java)

## Frontend Vue
Existe também uma aplicação em Vue que consome a mesma api: [bolsa-valores-front-vue](https://github.com/pkreppel/bolsa-valores-front-vue)

