function comparador() { 
	return Math.random() - 0.5; 
}

function distribuirCartas(){

    let numCartas = Number(prompt("Com quantas cartas quer jogar?"))
    let cartas = document.querySelector(".cartas")
    let index = 0;
    let cont = 0;
    let list = ""; 
    const img_face = ["/assets/fiestaparrot.gif", "/assets/fiestaparrot.gif", "/assets/bobrossparrot.gif", "/assets/bobrossparrot.gif", "/assets/revertitparrot.gif","/assets/revertitparrot.gif", "/assets/explodyparrot.gif", "/assets/explodyparrot.gif", "assets/metalparrot.gif", "assets/metalparrot.gif", "/assets/tripletsparrot.gif",  "/assets/tripletsparrot.gif", "/assets/unicornparrot.gif",  "/assets/unicornparrot.gif"]


    while ((numCartas < 4) || (numCartas > 14) || (numCartas % 2 !== 0) || (!numCartas)){
        numCartas = Number(prompt("Com quantas cartas quer jogar?"))
    }

    let imagens = img_face.slice(0,numCartas); //fatiando a array de acordo com o numero de cartas que eu quero

    imagens.sort(comparador);  //está embaralhando o array fatiado  
    console.log(imagens) 

    while (index < numCartas){ 
         list = list + `
        <div class="pai">
         <div class="back-face face front">
         </div>
         <div class="front-face face">
            <img src=" ${imagens[index]}"/>
         </div>     
        </div>      
        `  
        index ++;
    }
    cartas.innerHTML = list; 

}

distribuirCartas(); 


//function marcarCarta(){
    
//}
//function virarCarta(){

    // para virar carta
    //alguma logica que pegue a carta selecionada e desvire
    
//     while (index < numCartas){ 
//         list[1].classList.add  `
//         <div class="back-face face front">
//         </div>
//         <div class="front-face face back">
//         //  onde vou adicionar código 1
//         </div>              
 
//        `  
//        index ++;
//    }
//}


//chamando as funções
//virarCarta();
//marcarCarta()