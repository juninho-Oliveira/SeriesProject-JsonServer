
async function potsSeries(event) {
  event.preventDefault();

  const nomeSeries = document.getElementById("nomeSerie").value;
  const numTemporada = document.getElementById("numTemporada").value;
  const nomeEstudio = document.getElementById("nomeEstudio").value;
  const anoLancamento = document.getElementById("anoLancamento").value;

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

      console.log(dadosEnviados)

}
