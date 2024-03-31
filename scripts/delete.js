async function deleteSeries(id) {
  try {
    await fetch(`http://localhost:8081/series/${id}`, {
      method: 'DELETE',
    });

    const seriesToDelete = document.getElementById(`series-${id}`);
    if (seriesToDelete) {
      seriesToDelete.remove();
    }
  } catch (error) {
    console.error("Erro ao deletar série: ", error);
  }
}
