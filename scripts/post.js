
async function potsSeries(event) {
  event.preventDefault();

  const nomeSeries = document.getElementById("nomeSerie").value;
  const numTemporada = document.getElementById("numTemporada").value;
  const nomeEstudio = document.getElementById("nomeEstudio").value;
  const anoLancamento = document.getElementById("anoLancamento").value;


  if (nomeSeries === "") {
    alert('Nome da serie obrigatório!')
  } else if (numTemporada === "") {
    alert('Numero de temporadas obrigatório!')
  } else if (nomeEstudio === "") {
    alert('Nome do estudio obrigatório!')
  } else if (anoLancamento === "") {
    alert('ano de lançamento obrigatório!')
  } else {

    const dadosEnviados = {
      numTemporada,
      nomeSeries,
      nomeEstudio,
      anoLancamento,
    }
    
    const response = await fetch('http://localhost:8081/series', {
          method: 'POST',
          body: JSON.stringify(dadosEnviados),
        });
    
        //console.log(dadosEnviados)

  }


}


