# KimiCat - Boutique Felina 🐾

## 📌 Identificação do Projeto e Autor
* **Autor:** Elem Bernardi Marafigo
* **Projeto:** Landing Page - KimiCat (Boutique Felina)
* **Contexto:** Atividade de Desafio Extra do curso "Introdução à Programação Front-End e Back-End" do Programa SCTEC (Carreira Tech, Ciclo 2).
* **Ano:** 2026
* **Nota Importante:** Este projeto tem fins estritamente acadêmicos. A marca, os serviços e os valores descritos nesta página são fictícios, criados exclusivamente para cumprir os requisitos de avaliação do desafio.

---

## 🛠️ Descrição das Etapas de Desenvolvimento

O projeto foi construído usando HTML, CSS e JavaScript básicos. O foco foi deixar o código simples, organizado e criar uma página bonita e fácil de usar. Abaixo explico como cada parte foi feita:

### 1. Ideia Visual e Design
Criei a marca "KimiCat" pensando num espaço bem confortável e premium para gatos. Escolhi cores mais suaves, como um fundo creme (off-white), textos em marrom escuro e botões em laranja. A ideia foi usar cores inspiradas nos próprios gatos para deixar o site com uma cara acolhedora.Após a criação do conceito, passei um tempo estudando referências de sites para ver o que eu implementaria no meu desafio e ter uma ideia melhor de como montar a estrutura do html.

### 2. Estrutura da Página (HTML)
Usei as tags do HTML5 (como `header`, `main`, `section` e `footer`) para montar o esqueleto do site. Tentei deixar tudo bem separadinho e organizado por id's e classes, o que ajuda tanto a organizar o trabalho quanto a facilitar a leitura da página pelos navegadores, o que é essencial para a melhorar a acessibilidade. A finalização do html não foi linear, houveram coisas que mudei quando já estava estilizando.

### 3. Estilização e Layout (CSS)
Para não vcriar um arquivo extremamente extenso e dificil de interpretar, separei o estilo em vários arquivos e juntei tudo num arquivo principal chamado `global.css`. 
* Começando pelo topo da página, fiz uma barra de navegação que fica presa no topo da tela enquanto a página rola para baixo utilizando o position sticky.
* Na parte do header, usei o posicionamento do CSS para colocar a imagem e os textos no lugar certo. Também usei o border radius para a imagem ficar com a forma orgânica e uma div que a "abrassace" para o frame.
* Logo abaixo no sobre usei o display-flex para organizar e centralizar os cards de destaque e o título.
* Na seção de serviços, apliquei o CSS Grid para montar os cards num formato de Bento Grid, encaixando os serviços menores dentro de um card maior.
* Na seção "Contato", coloquei uma imagem de fundo com um efeito borrado atrás do formulário gerando profundidade e aconchego como se a imagem da butique abraçasse o usuário.
* Por fim utilizei o @media para responsividade e o -z index para profundidade na hora de posicionar os elementos em overlap.

### 4. Interatividade (JavaScript)
Usei o JavaScript para construir a interatividade da página aplicando a lógica para: 
* **Validação do Formulário:** O código confere se a pessoa preencheu o nome, colocou um e-mail válido e escolheu um serviço antes de enviar a mensagem. Se faltar alguma coisa, ele avisa antes de enviar mesmo se a pessoa clicar no botão de envio.
* **Atalho Inteligente:** Coloquei uma função nos botões dos cards de serviço. Se a pessoa clica neles, a página desce sozinha até o formulário de contato e já deixa a opção daquele serviço marcada, economizando tempo.

---

## 🚀 Como Abrir e Testar o Projeto

Para ver o site funcionando localmente na sua máquina, é super rápido e não precisa instalar nenhum programa especial:

1. Extraia a pasta `.zip` do projeto.
2. Não mude os arquivos de lugar (deixe as imagens, o CSS e o script nas suas próprias pastas).
3. Dê um duplo clique no arquivo `index.html`, ou clique com o botão direito e escolha abrir com o seu navegador favorito (Google Chrome, Firefox, Edge, etc).
4. O site vai abrir na mesma hora, já com todo o visual, as validações e as cores funcionando.

Ou você também pode acessar o link do meu repositório no github, onde publiquei com o github pages: 