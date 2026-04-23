function buscarProduto(){

    let produto = document.getElementById("produto").value;

    if(produto == ""){
        alert("Selecione um produto!");
        return;
    }

    switch(produto){

        case "Blush":
            document.getElementById("status").src = "blush.webp";
            document.getElementById("resultado").innerText = 
        "Blush deixa a pele com aparência saudável.\nValor: R$ 25,00";
        break;
        
        case "Kit Pincel de Maquiagem":
            document.getElementById("status").src = "pincel.jpg";
            document.getElementById("resultado").innerText = 
        "Kit com pincéis para maquiagem.\nValor: R$ 80,00";
        break;

        case "Rimel":
            document.getElementById("status").src = "rimel.webp";
            document.getElementById("resultado").innerText = 
        "Rímel aumenta o volume dos cílios.\nValor: R$ 30,00";
        break;

        default:
            document.getElementById("status").src = "baner.png";
            document.getElementById("resultado").innerText = 
        "Selecione um produto.";
    }
}

function limparBusca(){
    document.getElementById("produto").value = "";

    document.getElementById("resultado").innerHTML = "";

    document.getElementById("status").src = "baner.png";
}
