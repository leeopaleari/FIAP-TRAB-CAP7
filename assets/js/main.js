window.onload = function () {
  const data = getSessionData();

  if (data) {
    // TODO: implementar lógica de "CRUD" usando localStorage
    createBillItem(data);
    window.sessionStorage.removeItem("novo");
  } else {
    console.log("Sem dados para carregar");
  }
};

function getSessionData() {
  return JSON.parse(window.sessionStorage.getItem("novo"));
}
