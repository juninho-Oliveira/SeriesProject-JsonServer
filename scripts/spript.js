//realizar o consumo da api

//get

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const url = "http://localhost:8081/series";

  async function getSeries() {
    try {
      const response = await fetch(url);
      //console.log(response);

      const dados = await response.json();
      console.log(dados);

      dados.forEach((series) => {
        const listasSeries = document.getElementById("listaSeries");

        console.log(series.id)

        const tr = document.createElement("tr");
        const div = document.createElement("div");

        const editar = document.createElement('button');
        const excluir = document.createElement('button');

        div.classList.add("botoes");
        editar.classList.add("bi", "bi-pencil-square");
        excluir.classList.add("bi", "bi-trash3");

        excluir.addEventListener('click', function() {
          deleteSeries(series.id);
        })

        editar.addEventListener('click', function() {
         EditarSeries(series.id);
        })

        //realizar a criação das celulas de cada elemento
        const nomeSerie = document.createElement("td");
        nomeSerie.textContent = series.nomeSeries;

        const numTemporada = document.createElement("td");
        numTemporada.textContent = series.numTemporada;

        const anoLancamento = document.createElement("td");
        anoLancamento.textContent = series.anoLancamento;

        const nomeEstudio = document.createElement("td");
        nomeEstudio.textContent = series.nomeEstudio;

        tr.appendChild(nomeSerie);
        tr.appendChild(numTemporada);
        tr.appendChild(anoLancamento);

        tr.appendChild(div);
        div.appendChild(editar);
        div.appendChild(excluir);

        listasSeries.appendChild(tr);
        
      });
  
    } catch (error) {
      console.log("deu erro " + error);
    }
  }

  getSeries();
});


