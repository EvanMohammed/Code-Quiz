var nameInput = document.querySelector("#nameText");
var scoreForm = document.querySelector("#scoreForm");
var scoreSheet = document.querySelector("#scoreSheet");
var scoreCountSpan = document.querySelector("#scoreCount");

VAR score = localStorage.getItem(JSON.parse(test.innerHTML))


function renderScore(params) {
    scoreSheet.innerHTML = "";
    scoreCountSpan.textContent = highScore.length;



    for (let i = 0; i < highScore.length; i++) {
        const element = highScore[i];

        var li = document.createElement("li");
        li.textContent = highScore;
        scoreSheet.appendChild(li);



    }
    scoreForm.addEventListener("click", function (event) {
        event.preventDefault();
        let inputName = nameInput.Value;
        highScore.push();
        renderScore(inputName);

    })
}

