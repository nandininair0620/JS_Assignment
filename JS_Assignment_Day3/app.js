function getRandomColor(){
    let colours = ["blue","green","yellow","orange","red","grey","purple","pink"]
    let randomColour = colours[Math.floor(Math.random()*colours.length)]
    return randomColour
}

function changeBackgroundColor(){
    let randomColour = getRandomColor()
    document.body.style.background = randomColour

}