# Sisand Airlines - Sistema de Compra de Passagens Aéreas

Interface web para a compra de passagens da empresa fictícia **Sisand Airlines**, que realiza **viagens diárias de Curitiba para São Paulo**. Esta aplicação foi desenvolvida como parte de um sistema completo de reservas e compras de passagens aéreas.

## Começando

### Pré-requisitos

Antes de tudo, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão compatível com Angular 20)
- [Angular CLI](https://angular.io/cli)
- [Visual Studio Code](https://code.visualstudio.com/) (opcional, mas recomendado)

### Instalação

1. Clone o repositório
bash
   git clone https://github.com/brenoramosq/sisand-airlines-front

2. Acesse o diretório do projeto
bash
   cd sisand-airlines-front


3. Instale as dependências
bash
   npm install


4. Edite o arquivo `src/environments/environment.ts`, apontando para a URL correta da API (sisand-airlines-api):
   export const environment = {
      production: false,
      apiUrl: 'http://localhost:3000' // exemplo de URL da API
   };


### Executando a aplicação
bash
   # Inicie o servidor de desenvolvimento
      npm start

   # Depois, acesse a aplicação no navegador:
      http://localhost:4200


## Funcionalidades disponíveis

Na página principal, você encontrará:

- **Consulta dos voos**
- **Visualização de assentos disponíveis**
- **Reserva de assentos**
- **Carrinho de compras com as reservas realizadas**

⚠️ Para acessar o checkout, é necessário estar logado. O sistema conta com:

- **Cadastro de usuário**
- **Login**
- **Finalização de reservas (checkout)**
