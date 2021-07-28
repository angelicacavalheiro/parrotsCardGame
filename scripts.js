function comparador() { 
	return Math.random() - 0.5; 
}

function distribuirCartas(){

    let numCartas = Number(prompt("Com quantas cartas quer jogar?"))

    let cartas = document.querySelector(".cartas")

    let index = 0;

    let list = ""; 

    while ((numCartas > 14) || (numCartas % 2 !== 0) || (!numCartas)){
        numCartas = Number(prompt("Com quantas cartas quer jogar?"))
    }


    while (index < numCartas){ 
         list = list + `
         <div class="verso"></div>              
        `  
        index ++;
    }

    cartas.innerHTML = list; 

    list.sort(comparador);   

}

distribuirCartas(); 


