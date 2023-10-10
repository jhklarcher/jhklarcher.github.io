function returnValue() {
    document.getElementById("resultado").innerHTML = "Verificando..." + "<br>" + '<div class="progress progress-striped active"><div class="progress-bar" style="width: 100%"></div></div>';
    document.getElementById("resultado").setAttribute("class", null);
    document.getElementById("prob").innerHTML = ""
    document.getElementById("prob").setAttribute("class", null);

     const api_url = 'https://detector-fake-news.herokuapp.com';
     
     const noticia = {
         url: document.getElementById("noticia_url").value
        };
        
    axios.post(api_url, noticia)
        
    .then(function(response){
        //document.getElementById("resultado").innerHTML = response.data.results.resultado;

        if (response.data.results.resultado == "true") {
            document.getElementById("resultado").setAttribute("class", "btn btn-success btn-lg");
            document.getElementById("resultado").innerHTML = "Verdadeiro";
        } else {
            document.getElementById("resultado").setAttribute("class", "btn btn-warning btn-lg");
            document.getElementById("resultado").innerHTML = "Falso";
        }
        document.getElementById("prob").setAttribute("class", "btn btn-default disabled btn-lg");
        document.getElementById("prob").innerHTML = "Probabilidade de ser falsa: " + 
        (100*response.data.results.probabilidade).toFixed(3) + "%";
        console.log(response.data);
    });
}
