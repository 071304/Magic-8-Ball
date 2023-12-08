const askButton = document.getElementById('button'); 
let created = false; 
const input = document.createElement('input');
let createdButton = false;
const displayAnswer = document.getElementById('display-answer');
const newButton = document.createElement('button');

let answers = ['Of course', 'Undoubtedly', "It's certain", "Definitely", "Never", "Definitely not", "Don't count on it", "Maybe", "In your dreams", "Ask me later"];


askButton.addEventListener('click', function() { 
  if(!created) { 
 
 input.type = "text"; 
 input.className = "input-field";

 const body = document.querySelector('body'); 
 body.appendChild(input);

 created = true;
  }

})

input.addEventListener('keypress', function(e) {  
  
  if (e.key === 'Enter') {
  
  
  newButton.id = 'submit-btn';
  newButton.innerHTML = 'SUBMIT';
  document.body.appendChild(newButton);
  
  }

})

newButton.addEventListener('click', function() { 
  displayAnswer.innerHTML = randomAnswer();
})

function randomAnswer()  {
  let random = Math.floor(Math.random() * answers.length); 
  return answers[random];
}






