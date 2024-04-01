async function EditarSeries(id) {
  //alert(`ola estou aqui ${id}` );

  const nomeSeries = prompt('Digite o nome da serie ')//document.getElementById("nomeSerie").value;
  const numTemporada = prompt('Digite a quantidade de temporadas ') //document.getElementById("numTemporada").value;
  const nomeEstudio = prompt('Digite o nome do estudio ') //document.getElementById("nomeEstudio").value;
  const anoLancamento = prompt('Digite o ano de lançamento ') //document.getElementById("anoLancamento").value;

  const dadosEnviados = {
    numTemporada,
    nomeSeries,
    nomeEstudio,
    anoLancamento,
  }

  try {
    await fetch(`http://localhost:8081/series/${id}`, {
      method: "PUT",
      body: JSON.stringify(dadosEnviados),
    });
  } catch (error) {}
}
