let i = 1
let names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
function nextName(){
    let btn = document.getElementById('btn')
    let result
    if (i==names.length-1){
        i = 0
    }
    result = names[i++] 
    document.getElementById('result').innerText = result;
}
function previousName(){
    let btn = document.getElementById('btn')
    let result
    if (i===0){
        i = names.length
    }
    i=i-1
    result = names[i] 
    document.getElementById('result').innerText = result;
}