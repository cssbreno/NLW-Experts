const perguntas = [
    {
      pergunta: "Qual função é usada para exibir uma mensagem de alerta?",
      resposta: [
        "popup()",
        "alert()",
        "message()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma função em JavaScript?",
      resposta: [
        "function",
        "def",
        "declare",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um evento a um elemento HTML em JavaScript?",
      resposta: [
        "addEvent()",
        "addEventListener()",
        "attachEvent()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de várias linhas em JavaScript?",
      resposta: [
        "// This is a comment //",
        "/* This is a comment */",
        "<!-- This is a comment -->",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para converter uma string em minúsculas em JavaScript?",
      resposta: [
        "toLowerCase()",
        "toLower()",
        "lowerCase()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para verificar se dois valores são diferentes em JavaScript?",
      resposta: [
        "!=",
        "==",
        "<>",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
      resposta: [
        "round()",
        "floor()",
        "ceil()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover espaços em branco do início e do final de uma string em JavaScript?",
      resposta: [
        "trim()",
        "removeSpaces()",
        "clean()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o valor da expressão (10 > 5) em JavaScript?",
      resposta: [
        "True",
        "False",
        "Undefined",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para encontrar a posição de um elemento em uma string em JavaScript?",
      resposta: [
        "find()",
        "search()",
        "locate()",
      ],
      correta: 1
    },
  ];
  
  // busca um elemento HTML (no caso, o ID quiz) e adiciona a variável (no caso, const quiz)
  const quiz = document.querySelector('#quiz')
  // adiciona o template HMTL para dentro do objeto HTML
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // estrutura de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    // seleciona dentro do HMTL, o item pergunta com formatação H3
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta){
        // busca a 
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
         // seleciona dentro do HMTL, o item span que contenha reposta
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        dt.querySelector('input').onchange = (event) =>  {
          const estaCorreta = event.target.value == item.correta
          
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
          }
  
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }
  // busca a tag dl e remove a tag dt dentro dela
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
