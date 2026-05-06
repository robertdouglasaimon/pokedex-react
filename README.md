# 📖 Projeto Pokédex - Turma Web Mobile

## 👨‍🏫 Professor
**Robson Souza**

## 👨‍🎓 Aluno
**Robert Douglas**

---

## ⚠️ Aviso Importante
Este projeto **não é responsivo**. Foi desenvolvido com layout fixo para fins acadêmicos.  
No mobile ou em telas menores, a interface pode quebrar. A responsividade não foi objetivo deste exercício.

---

## 📝 Descrição
Este projeto é um exercício final da disciplina de **Componentes Web Mobile**, simulando uma **Pokédex** interativa que consome dados da [PokéAPI](https://pokeapi.co/).  
A aplicação exibe sprites, tipos, descrição e até o **cry (som)** dos Pokémon, além de permitir navegação por **nome** ou **ID numérico**.

---

## 🛠️ Estrutura do Projeto

```bash
    src/
    ├── App.jsx              # Componente principal da Pokédex
    ├── assets/
    │   ├── css/App.css      # Estilos da Pokédex
    │   ├── img/             # Imagens da Pokédex (fundo, template, etc.)
    │   └── components/
    │       └── Luz.jsx      # Componente da luz que muda de cor/pisca
```


---

## 🎨 Funcionalidades

- **Busca por Nome ou ID**  
  Digite o nome (`pikachu`) ou ID (`25`) para carregar o Pokémon.

- **Sprites estilo Showdown/3DS**  
  Exibição dos sprites animados dos Pokémon.

- **Descrição e Tipos**  
  Dados vindos da PokéAPI, exibidos em campos fixos da Pokédex.

- **Cry (Som do Pokémon)**  
  Integração com áudios hospedados pelo Pokémon Showdown.

- **Botões Avançar/Voltar**  
  Navegação sequencial pelos IDs dos Pokémon.

- **Luz Dinâmica**  
  - Azul: estado inicial  
  - Verde: Pokémon encontrado  
  - Vermelho piscando: erro ou não encontrado  

---

## 🏷️ Badges

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![PokéAPI](https://img.shields.io/badge/API-PokéAPI-red?logo=pokemon)
![Status](https://img.shields.io/badge/Status-Acadêmico-yellow)
![Responsividade](https://img.shields.io/badge/Responsivo-Não-critical)

---

## 🚀 Como Rodar

1. Clone o repositório:
```bash
   git clone <url-do-repo>
```
2. Instale as dependências:
```bash
   npm install
```
3. Rode o projeto:
```bash
   npm run dev
```

## 📌 Observações
O layout foi travado em 800x500px para simular a Pokédex clássica.
Responsividade não foi implementada (alerta acadêmico).
Este projeto é exercício de fim de componente, não produto final.

##  🎉 Conclusão
Projeto finalizado com sucesso!
Pokédex funcional, integrando API, sprites, tipos, descrição e cries.

Aluno: Robert Douglas <br>
Professor: Robson Souza <br>
Turma: Web Mobile (Turma 1 - Noturno) <br>

Nota: Comtemple o melhor inicial de todos, charmander é para os fracos! Aqui é time tartaruga bolada de oculos escuros! :P
![alt Contemple o melhor pokemon da terra - Squirtle de oculos escuros](pokemon-squirtle.gif)