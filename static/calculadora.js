var fatores = {
    estagioInicial: {
        titulo: "Estágio Inicial de Regeneração",
        grupo: "estagioInicial",
        pesos: {
            estagioInicial_muitoAlta: {
                id: "estagioInicial_muitoAlta",
                nome: "Muito Alta",
                valor: 2
            }, 
            estagioInicial_alta: {
                id: "estagioInicial_alta",
                nome: "Alta",
                valor: 1.8
            }, 
            estagioInicial_media: {
                id: "estagioInicial_media",
                nome: "Média",
                valor: 1.5
            }, 
            estagioInicial_baixa: {
                id: "estagioInicial_baixa",
                nome: "Baixa",
                valor: 1.25
            }
        } 
    },
    estagioMedio: {
        titulo: "Estágio Médio de Regeneração",
        grupo: "estagioMedio",
        pesos:{
            estagioMedio_muitoAlta: {
                id: "estagioMedio_muitoAlta",
                nome: "Muito Alta",
                valor: 3
            }, 
            estagioMedio_alta: {
                id: "estagioMedio_alta",
                nome: "Alta",
                valor: 2.5
            }, 
            estagioMedio_media: {
                id: "estagioMedio_media",
                nome: "Média",
                valor: 2
            }, 
            estagioMedio_baixa: {
                id: "estagioMedio_baixa",
                nome: "Baixa",
                valor: 1.5
            }
        }
    },
    estagioAvancado: {
        titulo: "Estágio Avançado de Regeneração",
        grupo: "estagioAvancado",
        pesos:{
            estagioAvancado_muitoAlta: {
                id: "estagioAvancado_muitoAlta",
                nome: "Muito Alta",
                valor: 6
            }, 
            estagioAvancado_alta: {
                id: "estagioAvancado_alta",
                nome: "Alta",
                valor: 5
            }, 
            estagioAvancado_media: {
                id: "estagioAvancado_media",
                nome: "Média",
                valor: 3
            }, 
            estagioAvancado_baixa: {
                id: "estagioAvancado_baixa",
                nome: "Baixa",
                valor: 2
            }
        }
    },
    arvoresIsoladas: {
        titulo: "Árvores Isoladas",
        grupo: "arvoresIsoladas",
        pesos: {
            arvoresIsoladas_maiorIgual20: {
                id: "arvoresIsoladas_maiorIgual20",
                nome: "Maior ou igual a 20",
                valor: 0.006
            },
            arvoresIsoladas_entre20e5: {
                id: "arvoresIsoladas_entre20e5",
                nome: "Entre 20 e 5",
                valor: 0.009
            },
            arvoresIsoladas_menorIgual5: {
                id: "arvoresIsoladas_menorIgual5",
                nome: "Menor ou igual a 5",
                valor: 0.015
            },
            arvoresIsoladas_ameacada: {
                id: "arvoresIsoladas_ameacada",
                nome: "Espécie Ameaçada",
                valor: 0.018
            }
        }
    },
    app: {
        titulo: "APP",
        grupo: "app",
        pesos:{
            app_muitoAlta: {
                id: "app_muitoAlta",
                nome: "Muito Alta",
                valor: 2
            }, 
            app_alta: {
                id: "app_alta",
                nome: "Alta",
                valor: 1.6
            }, 
            app_media: {
                id: "app_media",
                nome: "Média",
                valor: 1.4
            }, 
            app_baixa: {
                id: "app_baixa",
                nome: "Baixa",
                valor: 1.2
            }

        }
    },
    mangue: {
        titulo: "Mangue",
        grupo: "mangue",
        pesos: {
            mangue_mangueFator: {
                id: "mangue_mangueFator",
                nome: "Mangue",
                valor: 6
            }
        }
        
    },
    cerrado: {
        titulo: "Cerrado",
        grupo: "cerrado",
        pesos: {
            cerrado_cerradoFator: {
                id: "cerrado_cerradoFator",
                nome: "Cerrado",
                valor: 3
            }
        }
        
    }
}

// Pega a div de destino da calculadora
var divDestino = document.getElementById("destino")

for (i in fatores){
    
    // Cria a div da calculadora
    var calculadora = document.createElement("div")
    calculadora.setAttribute("class", "col-lg-4 col-md-6 text-center calculadora")
    calculadora.setAttribute("id", i)
    divDestino.appendChild(calculadora)
    
    //// Cria título da calculadora (botão liga/desliga)
    var titulo = document.createElement("a")
    titulo.setAttribute("class", "btn btn-primary titulo")
    titulo.setAttribute("data-toggle", "collapse")
    titulo.setAttribute("href", "#" + i + "Table")
    titulo.setAttribute("aria-controls", i + "Table")
    titulo.setAttribute("role", "button")
    titulo.setAttribute("aria-expanded", "false")
    var tituloTexto = document.createTextNode(fatores[i].titulo)
    titulo.appendChild(tituloTexto)
    calculadora.appendChild(titulo)

    //// Cria tabela
    var tabela = document.createElement("table")
    tabela.setAttribute("class", "table table-borderless table-dark collapse")
    tabela.setAttribute("id", i + "Table")
    calculadora.appendChild(tabela)
    ////// Cria header da tabela
    var tabelaHead = document.createElement("thead")
    tabela.appendChild(tabelaHead)
    //////// Cria linha do header da tabela
    var tabelaHeadRow = document.createElement("tr")
    tabelaHead.appendChild(tabelaHeadRow)
    ////////// Cria conteudo da linha do header da tabela
    //////////// Cria coluna 1
    var coluna1 = document.createElement("th")
    coluna1.setAttribute("scope", "col")
    //////////// Verifica condição para preencher o título da Colua 1
    if (i == "arvoresIsoladas"){
        var coluna1Text = document.createTextNode("Cobertura Vegetal Local (%)")
        coluna1.appendChild(coluna1Text)
        tabelaHeadRow.appendChild(coluna1)
    } else if (i == "mangue" || i == "cerrado"){
        var coluna1Text = document.createTextNode("")
        coluna1.appendChild(coluna1Text)
        tabelaHeadRow.appendChild(coluna1)
    } else {
        var coluna1Text = document.createTextNode("Prioridade")
        coluna1.appendChild(coluna1Text)
        tabelaHeadRow.appendChild(coluna1)
    }
    //////////// Cria coluna 2
    var coluna2 = document.createElement("th")
    coluna2.setAttribute("scope", "col")
    //////////// Verifica condição para preencher o título da Colua 2
    if (i == "arvoresIsoladas"){
        var coluna2Text = document.createTextNode("N° de árvores")
        coluna2.appendChild(coluna2Text)
        tabelaHeadRow.appendChild(coluna2)
    } else{
        var coluna2Text = document.createTextNode("Área (ha)")
        coluna2.appendChild(coluna2Text)
        tabelaHeadRow.appendChild(coluna2)
    }
    //////////// Cria coluna 3
    var coluna3 = document.createElement("th")
    coluna3.setAttribute("scope", "col")
    var coluna3Text = document.createTextNode("Compensar (ha)")
    coluna3.appendChild(coluna3Text)
    tabelaHeadRow.appendChild(coluna3)
    ///// Cria body da tabela
    var tabelaBody = document.createElement("tbody")
    tabela.appendChild(tabelaBody)
    //////// Cria linhas de conteudo da tabela
    var pesos = fatores[i].pesos
    for (peso in pesos){
        var tabelaLinha = document.createElement("tr")
        tabelaBody.appendChild(tabelaLinha)
        ////// Conteudo da linha na coluna 1
        var dadoColuna1 = document.createElement("th")
        dadoColuna1.setAttribute("scope", "row")
        var dadoColuna1Text = document.createTextNode(pesos[peso].nome)
        dadoColuna1.appendChild(dadoColuna1Text)
        tabelaLinha.appendChild(dadoColuna1)
        ////// Conteudo da linha na coluna 2
        var dadoColuna2 = document.createElement("td")
        var entrada = document.createElement("input")
        entrada.setAttribute("type", "number")
        entrada.setAttribute("class", pesos[peso].id)
        entrada.setAttribute("id", pesos[peso].id)
        dadoColuna2.appendChild(entrada)
        tabelaLinha.appendChild(dadoColuna2)
        ////// Conteudo da linha na coluna 3
        var dadoColuna3 = document.createElement("td")
        dadoColuna3.setAttribute("class", pesos[peso].id)
        var dadoColuna3Text = document.createTextNode("...")
        dadoColuna3.appendChild(dadoColuna3Text)
        tabelaLinha.appendChild(dadoColuna3)
    }
    ////// Cria a linha do resultado de cada tabela
    var totalLinha = document.createElement("tr")
    tabelaBody.appendChild(totalLinha)
    ////// Conteudo na linha do resultado na coluna 1 
    var totalColuna1 = document.createElement("th")
    totalColuna1.setAttribute("scope", "row")
    var totalColuna1Text = document.createTextNode("TOTAL")
    totalColuna1.appendChild(totalColuna1Text)
    totalLinha.appendChild(totalColuna1)
    ////// Conteudo na linha do resultado na coluna 2
    var totalColuna2 = document.createElement("td")
    totalLinha.appendChild(totalColuna2)
    ////// Conteudo na linha do resultado na coluna 3
    var totalColuna3 = document.createElement("td")
    totalColuna3.setAttribute("class", i)
    var totalColuna3Text = document.createTextNode("...")
    totalColuna3.appendChild(totalColuna3Text)
    totalLinha.appendChild(totalColuna3) 
}

// Cria a div do resultado final
var divResultado = document.createElement("div")
divResultado.setAttribute("class", "col-lg-4 col-md-6 text-center resultado")
divResultado.setAttribute("id", "resultadofinal")
divDestino.appendChild(divResultado)
//// Cria título da div resultado
var divResultadoTitulo = document.createElement("a")
divResultadoTitulo.setAttribute("class", "btn btn-primary")
divResultadoTitulo.setAttribute("id", "resultadofinaltitulo")
var divResultadoTituloTexto = document.createTextNode("TOTAL FINAL = ")
divResultadoTitulo.appendChild(divResultadoTituloTexto)
divResultado.appendChild(divResultadoTitulo)
////// Conteudo na linha do resultado na coluna 2
var resultadoSpan = document.createElement("span")
resultadoSpan.setAttribute("id", "totalFinal")
var resultadoSpanText = document.createTextNode("(ha)")
resultadoSpan.appendChild(resultadoSpanText)
divResultadoTitulo.appendChild(resultadoSpan)



// Função calcular
function calcular(){
    var resultadoArray = []
    var listaDivs = document.querySelectorAll(".calculadora")
    for (div=0; div < listaDivs.length; div++){
        var somaArray = []
        var elemento = listaDivs[div]
        var elementoID = listaDivs[div].attributes.id.value
        
        var listaInputs = elemento.querySelectorAll("input")
        for (input=0; input < listaInputs.length; input++){
            var entrada = listaInputs[input]
            var entradaID = entrada.id
            var entradaValor = entrada.value
            var multiplicador = fatores[elementoID].pesos[entrada.id].valor
            var resultado = entradaValor*multiplicador
            var elementoSaida = elemento.querySelector("td." + entradaID)
            elementoSaida.innerHTML = resultado.toFixed(2).replace(".", ",")
            somaArray.push(resultado)
        }

        var soma = somaArray.reduce((somaFinal, currentElement) => somaFinal + currentElement)
        var elementoResultado = elemento.querySelector("td." + elementoID)
        elementoResultado.innerHTML = soma.toFixed(2).replace(".", ",")
        resultadoArray.push(soma)

    }

    var resultadoFinal = resultadoArray.reduce((final, current) => final + current)
    var elementoFinal = document.querySelector("#totalFinal")
    elementoFinal.innerHTML = resultadoFinal.toFixed(2).replace(".", ",") + " (ha)"
}

// Cria a div do botão calcular
var divBotaoCalcular = document.createElement("div")
divBotaoCalcular.setAttribute("class", "col-lg-4 col-md-6 text-center")
divDestino.appendChild(divBotaoCalcular)
// Cria o botão "Calcular"
var botaoCalcular = document.createElement("a")
botaoCalcular.setAttribute("class", "btn btn-primary")
botaoCalcular.setAttribute("id", "botaoCalcular")
//// Cria o texto do botão "Calcular"
var botaoText = document.createTextNode("Calcular")
botaoCalcular.appendChild(botaoText)
////Adicionar a função ao botão
botaoCalcular.addEventListener("click", calcular)
//// Adicionao o botão ao "container"(div)
divBotaoCalcular.appendChild(botaoCalcular)