# DevFrame

## Visão Geral
O DevFrame é um projeto que combina o framework Next.js com o Electron para criar aplicações desktop modernas e eficientes. Ele utiliza o Next.js para renderização e o Electron para criar uma janela desktop que aponta para a aplicação.

---

## Objetivo

O objetivo do DevFrame é facilitar o desenvolvimento de aplicações modernas, permitindo:

- **WebView e PWA**: Criar aplicações que utilizam WebView e Progressive Web Apps (PWA) para maior flexibilidade e desempenho.
- **Aplicações Web Desktop**: Desenvolver aplicações desktop baseadas na web, eliminando a necessidade de manter navegadores abertos durante o desenvolvimento.
- **Estilo Xcode**: Fornecer uma experiência de desenvolvimento semelhante ao Xcode no macOS, com foco em produtividade e simplicidade.

Com o DevFrame, o desenvolvimento se torna mais rápido e eficiente, integrando o Next.js e o Electron em um único fluxo de trabalho.

---

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd devframe
   ```

2. **Instale as dependências:**
   Certifique-se de ter o Node.js instalado. Em seguida, execute:
   ```bash
   npm install
   ```

3. **Configure a variável de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto e adicione a seguinte variável:
   ```env
   NEXT_PUBLIC_PREVIEW_URL=http://localhost:3000
   ```
   Substitua `http://localhost:3000` pela URL da sua aplicação Next.js.

---

## Uso

### Scripts Disponíveis
Os scripts definidos no `package.json` ajudam a gerenciar o projeto:

- **`dev:next`**: Inicia o servidor de desenvolvimento do Next.js na porta 3000.
  ```bash
  npm run dev:next
  ```

- **`dev:electron`**: Inicia o Electron apontando para o projeto.
  ```bash
  npm run dev:electron
  ```

- **`dev`**: Inicia o Next.js e o Electron simultaneamente. Certifique-se de que a aplicação Next.js esteja acessível em `NEXT_PUBLIC_PREVIEW_URL`.
  ```bash
  npm run dev
  ```

- **`build`**: Cria uma versão de produção do Next.js.
  ```bash
  npm run build
  ```

- **`start`**: Inicia o servidor Next.js em modo de produção.
  ```bash
  npm run start
  ```

- **`lint`**: Executa o ESLint para verificar problemas no código.
  ```bash
  npm run lint
  ```

---

## Arquivo `main.js`
O arquivo `main.js` é o ponto de entrada do Electron. Ele cria uma janela desktop e carrega a URL definida na variável de ambiente `NEXT_PUBLIC_PREVIEW_URL`. Aqui está uma explicação de cada parte:

- **`BrowserWindow`**: Cria a janela do aplicativo com as configurações definidas (largura, altura, etc.).
- **`loadURL`**: Carrega a URL da aplicação Next.js. Certifique-se de que `NEXT_PUBLIC_PREVIEW_URL` esteja configurada corretamente.
- **`ready-to-show`**: Exibe a janela apenas quando ela estiver pronta.

Você pode editar o `main.js` para personalizar o comportamento da janela, como alterar o tamanho, adicionar menus ou modificar as configurações de segurança.

---

## Personalização

- **Variável de Ambiente**: Certifique-se de passar a variável `NEXT_PUBLIC_PREVIEW_URL` com a rota da sua aplicação local.
- **Configurações da Janela**: Edite o arquivo `main.js` para ajustar as configurações da janela conforme necessário.

---

## Requisitos

- Node.js (v16 ou superior)
- npm (v7 ou superior)

---

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou abrir issues para relatar problemas.

---

## Licença
Este projeto está licenciado sob a licença MIT.
