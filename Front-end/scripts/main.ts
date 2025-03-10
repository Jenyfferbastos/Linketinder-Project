function switchTab(userType: string): void { // Definindo tipo para userType
    const candidatoTab = document.querySelector(".tab:nth-child(1)") as HTMLElement | null;
    const empresaTab = document.querySelector(".tab:nth-child(2)") as HTMLElement | null;
    const candidatoForm = document.getElementById("login-candidato") as HTMLElement | null;
    const empresaForm = document.getElementById("login-empresa") as HTMLElement | null;

    // Verificar se os elementos não são null antes de manipulá-los
    if (userType === "candidato") {
        if (candidatoTab && empresaTab && candidatoForm && empresaForm) {  // Verificando se os elementos existem
            candidatoTab.classList.add("active");
            empresaTab.classList.remove("active");
            candidatoForm.classList.add("active");
            empresaForm.classList.remove("active");
        }
    } else {
        if (empresaTab && candidatoTab && empresaForm && candidatoForm) {  // Verificando se os elementos existem
            empresaTab.classList.add("active");
            candidatoTab.classList.remove("active");
            empresaForm.classList.add("active");
            candidatoForm.classList.remove("active");
        }
    }
}
