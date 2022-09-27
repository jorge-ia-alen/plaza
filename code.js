arrastrarElemento(document.getElementById('plaza1'));
arrastrarElemento(document.getElementById('plaza2'));
arrastrarElemento(document.getElementById('plaza3')); 
arrastrarElemento(document.getElementById('plaza4')); 
arrastrarElemento(document.getElementById('plaza5')); 
arrastrarElemento(document.getElementById('plaza6')); 
arrastrarElemento(document.getElementById('plaza7')); 
arrastrarElemento(document.getElementById('plaza8')); 
arrastrarElemento(document.getElementById('plaza9')); 
arrastrarElemento(document.getElementById('plaza10')); 
arrastrarElemento(document.getElementById('plaza11')); 
arrastrarElemento(document.getElementById('plaza12')); 
arrastrarElemento(document.getElementById('plaza13')); 
arrastrarElemento(document.getElementById('plaza14')); 
arrastrarElemento(document.getElementById('plaza15')); 
arrastrarElemento(document.getElementById('plaza16')); 
arrastrarElemento(document.getElementById('plaza17')); 
arrastrarElemento(document.getElementById('plaza18')); 

function arrastrarElemento(elementoDePlaza){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elementoDePlaza.onpointerdown = arrastarPuntero;
    
    function arrastarPuntero(e){
        e.preventDefault();
        console.log(e)
        pos3 = e.clientX; 
        pos4 = e.clientY; 
        document.onpointermove = arrastrarElemento;
        document.onpointerup = detenerArrastreElemento;
    }

    function arrastrarElemento(e){
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        elementoDePlaza.style.top = elementoDePlaza.offsetTop - pos2 + 'px';
        elementoDePlaza.style.left = elementoDePlaza.offsetLeft - pos1 + 'px'; 
    }

    function detenerArrastreElemento(){
        document.onpointerup = null;
        document.onpointermove = null; 
    }
}