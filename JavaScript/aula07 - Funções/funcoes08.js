//          Método MAP em JavaScript

const curso=['html', 'css', 'javascript', 'php', 'react']

// curso.map(elementos(que estão dentro do Array. ex: html), indice(posição dos elementos))

curso.map((el, ind) => {
    console.log(`Curso: ${el} - Posição: ${ind}`)
})