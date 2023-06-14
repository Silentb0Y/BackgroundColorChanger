const  button = document.querySelector('button')
const  body = document.querySelector('body')
const  h1 = document.querySelector('h1')
const color =['red','pink','green','white','blue','black','gray','yellow','purple']
body.style.backgroundColor = 'pink';
h1.innerHTML = 'Pink'
button.addEventListener('click',changeb)
function changeb(){
    const colorIndex = parseInt(Math.random()*color.length)
   const bg = body.style.backgroundColor = color[colorIndex]
   const text = h1.innerHTML = color[colorIndex]
 if(bg == text){
    h1.style.color = 'skyblue';
 }
 else{
    h1.style.color = 'while';
 }
    
}
