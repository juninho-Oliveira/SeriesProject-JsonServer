
const nome = localStorage.getItem('meu nome')
let span = document.getElementById('nomeId'); 

span.innerText = `${nome} !`;

//alert(nome);

async function editar(event) {
    event.preventDefault();

    try {

        const id = localStorage.getItem('meu id');
        //const nome = localStorage.getItem('meu nome');
        //alert(`meu id: ${id}, meu nome: ${nome}`)

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

        await fetch(`http://localhost:8081/series/${id}`, {
            method: "PUT",
            body: JSON.stringify(dadosEnviados),
        });

    } catch (error) {
        console(`ERRO: ${error}`)
    } finally {

        voltar()
    }


}

function voltar() {
    window.location.href = "/index.html"
}

