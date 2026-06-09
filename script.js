const botaoProjeto = document.getElementById("btnProjeto");

botaoProjeto.addEventListener("click", () => {
    alert(
        "O Agro Forte busca unir produtividade, tecnologia e preservação ambiental."
    );
});

const voltarTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        voltarTopo.style.display = "block";
    }else{
        voltarTopo.style.display = "none";
    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});