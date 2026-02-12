# 🔐 Password Strength Analyzer

> **[Clique aqui para testar o projeto online](https://caiobrunol.github.io/Password-Strength-Analyzer/)** 🚀

Um verificador de força de senhas reativo e moderno, desenvolvido com **React**, **Vite** e **RegEx**.

Este projeto demonstra a manipulação de estado em tempo real e feedback visual imediato para o usuário, simulando validações comuns em sistemas de cadastro seguros.

## 🔗 Demo Online

O projeto está hospedado e funcionando! Você pode testar a aplicação clicando no link abaixo:
👉 **https://caiobrunol.github.io/Password-Strength-Analyzer/**

## 🚀 Tecnologias Utilizadas

* **React.js** (Hooks, State Management)
* **Vite** (Build tool rápida e otimizada)
* **JavaScript (ES6+)**
* **CSS3** (Flexbox, Variáveis, Responsividade, Dark Mode)
* **GitHub Pages** (CI/CD para Deploy automático)

## ✨ Funcionalidades

* **Análise em Tempo Real:** O cálculo é feito a cada caractere digitado (Reactive Programming).
* **Algoritmo de Força:** Verifica 4 critérios de segurança:
  * Mínimo de 8 caracteres
  * Letras Maiúsculas
  * Números
  * Símbolos Especiais
* **Feedback Visual:**
    * Barras de progresso dinâmicas que mudam de cor (🔴 🟠 🟡 🟢).
    * Mensagens de texto condicionais ("Muito fraca" até "Forte").
* **UI Moderna:** Interface limpa com tema Dark Mode e efeitos de foco.

## 📦 Como rodar localmente

Se quiser rodar o código na sua máquina:

```bash
# 1. Clone o repositório
git clone [https://github.com/CaioBrunoL/Password-Strength-Analyzer.git](https://github.com/CaioBrunoL/Password-Strength-Analyzer.git)

# 2. Entre na pasta do projeto
cd password-analyzer

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
