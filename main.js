const form =document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();


    
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroConta = document.getElementById("numero-conta");
    const valor = document.getElementById("valor");
    const mensagemDeSucceso = `montante: <b>${valor.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`

    if (!validaNome(nomeBeneficiario.value)) {
        const mensagemDeErro = `o nome nao esta completo`;
        const Errormessage = document.querySelector(".error-message")
        Errormessage.innerHTML = mensagemDeErro;
        Errormessage.style.display = 'block'
        document.querySelector(".success").style.display = 'none'
    } else {
        const ContainerMessage = document.querySelector(".success")
        ContainerMessage.innerHTML = mensagemDeSucceso;
        ContainerMessage.style.display = 'block'
        document.querySelector(".error-message").style.display = 'none'
    }
})

console.log(form);
