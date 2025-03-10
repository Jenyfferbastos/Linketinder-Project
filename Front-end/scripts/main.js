function switchTab(userType) {
    var candidatoTab = document.querySelector(".tab:nth-child(1)");
    var empresaTab = document.querySelector(".tab:nth-child(2)");
    var candidatoForm = document.getElementById("login-candidato");
    var empresaForm = document.getElementById("login-empresa");
    // Verificar se os elementos não são null antes de manipulá-los
    if (userType === "candidato") {
        if (candidatoTab && empresaTab && candidatoForm && empresaForm) { // Verificando se os elementos existem
            candidatoTab.classList.add("active");
            empresaTab.classList.remove("active");
            candidatoForm.classList.add("active");
            empresaForm.classList.remove("active");
        }
    }
    else {
        if (empresaTab && candidatoTab && empresaForm && candidatoForm) { // Verificando se os elementos existem
            empresaTab.classList.add("active");
            candidatoTab.classList.remove("active");
            empresaForm.classList.add("active");
            candidatoForm.classList.remove("active");
        }
    }
}
