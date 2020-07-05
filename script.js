setInterval(function(){
    let novaHora = new Date();

    let hora = novaHora.getHours();
    let minutes = novaHora.getMinutes();
    let segundos = novaHora.getSeconds();
    minutes = zero(minutes)
    segundos =zero(segundos)

    document.getElementById('hours').textContent=hora
    document.getElementById("minutes").textContent=minutes
    document.getElementById("seconds").textContent = segundos

},1000)

function zero(x){
    if(x<10){
        x ='0'+ x;
    }return x;
}