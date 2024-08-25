console.log('Hello world');
const start = () => {
    let x = Math.floor(Math.random()*1000);
    let y = Math.floor(Math.random()*1000);
    let z = Math.floor(Math.random()*1000);
    if(x<=225&&y<=225&&z<=225){
        document.getElementById('box').style.backgroundColor = 'rgb('+x+','+y+','+z+')';
        document.getElementById('write').innerHTML = 'rgb('+x+','+y+','+z+')';
    }
    else{
        start();
    }
}
const gen = () => {
    let a = document.getElementById('chosen').value;
    document.getElementById('chosenWrite').innerHTML = 'The color is '+a;
}
document.getElementById('play').addEventListener("click",start);
document.getElementById('enter').addEventListener("click",gen);
