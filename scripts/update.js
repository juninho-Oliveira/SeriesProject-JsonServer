async function EditarSeries(id) {
  alert("ola estou aqui ", id);

  try {
    await fetch(`http://localhost:8081/series/${id}`, {
      method: "PUT",
    });
  } catch (error) {}
}
