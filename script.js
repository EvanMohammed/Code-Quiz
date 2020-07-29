var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;


// VAR score = localStorage.setItem(JSON.stringify(test.innerHTML));
// if (score == null) {
//   score = "" ; 
// }
var questions = [
  {
      question: "Who won the World Cup in 1998?",
      a: "Brazil",
      b: "France",
      c: "Germany",
      answer: "B"
    },
  {
      question: "who named the player of the year in 2014?",
      a: "Messi",
      b: "Neuer",
      c: "Ronaldo",
      answer: "C"
    },
  {
      question: "_______ won the Uefa Champions League in 1997.",
      a: "Borussia Dortmond",
      b: "Real Madrid",
      c: "Barcelona",
      answer: "A"
    },
  {
      question: "the world cup 2022 will be held in _________",
      a: "USA",
      b: "France",
      c: "Qatar",
      answer: "C"
    }
  ];
 
function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";

    get("test_status").innerHTML = "Test completed";
   
    pos = 0;
    correct = 0;

    return false;
  }
  
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
 
  test.innerHTML = "<h3>"+question+"</h3>";
 
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
 
  if(choice == questions[pos].answer){
   
    correct++;
  }

  pos++;
 
  renderQuestion();
}

window.addEventListener("load", renderQuestion);