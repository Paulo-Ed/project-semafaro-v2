function acendeVermelho(){
    document.getElementById('vermelho').style.backgroundColor = '#ff0000'
    document.getElementById('amarelo').style.backgroundColor = '#000'
    document.getElementById('verde').style.backgroundColor = '#000'
    document.getElementById('numero').style.color = '#ff0000'
}

function acendeAmarelo(){
    document.getElementById('vermelho').style.backgroundColor = '#000'
    document.getElementById('amarelo').style.backgroundColor = '#ffd700'
    document.getElementById('verde').style.backgroundColor = '#000'
    document.getElementById('numero').style.color = 'rgba(21, 21, 21, 0.5)'
}

function acendeVerde(){
    document.getElementById('vermelho').style.backgroundColor = '#000'
    document.getElementById('amarelo').style.backgroundColor = '#000'
    document.getElementById('verde').style.backgroundColor = '#00ff00'
    document.getElementById('numero').style.color = '#00ff00'
    
}