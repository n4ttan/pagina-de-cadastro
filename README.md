# 🔐 Página de Login e Cadastro

Interface de **login, cadastro e perfil de usuário** desenvolvida a partir de um protótipo no **Figma**, para fins educacionais de **UX/UI Design**. O projeto explora layout, fluxo de telas e interações básicas com JavaScript.

## ✨ Funcionalidades

- **Tela de login** com validação de senha
- **Mostrar / ocultar senha** com um clique
- **Cadastro de usuário** e tela de criação de conta
- **Perfil** com upload e pré-visualização de foto (FileReader)
- **Recuperação de senha** (tela dedicada)
- Aviso de privacidade e confirmação de maioridade
- Layout responsivo baseado no design feito no Figma

## 🛠️ Tecnologias

- **HTML5** — estrutura das telas
- **CSS3** — estilização e responsividade
- **JavaScript (vanilla)** — validações, pré-visualização de imagem e navegação

## 🚀 Como rodar

Projeto estático, sem dependências:

```bash
git clone https://github.com/n4ttan/pagina-de-cadastro.git
cd pagina-de-cadastro
```

Abra `index.html` no navegador, ou sirva localmente:

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

> 💡 A senha de teste do login está definida diretamente no `script.js` (`senhaCorreta`). Por se tratar de um projeto educacional de interface, **não há autenticação real** — não use em produção.

## 📁 Estrutura

```
pagina-de-cadastro/
├── index.html      → tela de login
├── cadastro.html   → criação de conta
├── perfil.html     → perfil com foto
├── senha.html      → recuperação de senha
├── style.css       → estilos das telas
├── script.js       → validações e interações
├── imagens/        → logos e elementos visuais
└── README.md
```

## 📝 Sobre

Projeto criado para praticar UX/UI Design: o fluxo foi prototipado no Figma e depois implementado em HTML, CSS e JavaScript, com ênfase na aparência e na experiência do usuário.
