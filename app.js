var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var ext = ['com', 'net', 'us', 'io'];
let domain = "";
/*
function domainGen(){
    let x = Math.floor(Math.random() * pronoun.length);
    domain = pronoun[x]
    x = Math.floor(Math.random() * adj.length);
    domain += adj[x]
    x = Math.floor(Math.random() * noun.length);
    domain += noun[x]
    x = Math.floor(Math.random() * ext.length);
    domain += "."+ext[x]
    return domain
   // console.log(domain)
}
*/
function domainGen2 (){
    let element = ""; //variable string para obtener el domain
    let element2 = ""; //variable string para mantener el pronoun antes de agregarle el adjetivo
    let element3 = ""; // variable string para mantener el pronoun + adjetivo antes de agregarle el sustantivo
    let element4 = ""; // variable string para mantener el pronoun + adjetivo + sustantivo antes de agregarle la extension
    let a = 0;
    for (i = 0; i < pronoun.length; i++) {
        element = pronoun[i];
        for (c = 0; c < adj.length; c++){
            element2 = element //
            element += adj[c]
            for(x = 0; x < noun.length; x++){
                element3 = element
                element += noun[x]
                for (j = 0; j < ext.length; j++){
                    element4 = element
                    element += "."+ext[j]
                    console.log(element)
                    a++
                    element = element4
                }
                element = element3
                
            }
            element = element2
            
        }    
        
    }
    return "Se encontraron "+ a +" posibles combinaciones"
}



console.log(domainGen2())
