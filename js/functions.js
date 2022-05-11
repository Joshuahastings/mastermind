function writeAnswers() {
    var answers = document.getElementById('answerSquares');
    for (let i=1; i<=4; i++) {
        answers.innerHTML += '<div class="pt-1 ps-3 ms-3 col-3 color-guess secret-box" id="s' + i + '">?</div>';
    }
}

function writeGuesses() {
    var guesses = document.getElementById('guessContainer');
    var output = '';
    for (let j=10; j>0; j--) {

        output += '<div class="row my-2">';

        for (let k=1; k<=4; k++) {
            output += '<div class="py-2 ms-3 col color-guess" id="r' + j + 'c' + k + '"></div>';
        }

        output += '<div class="col-1 ms-3">';

        for (let l=1; l<=4; l++) {
            if(l==3){
                output += '</div>';
            }
            if(l==1 || l==3) {
                output += '<div class="row">';
            }
            output += '<div class="col-1 border border-white marking" id="r' + j + 'm' + l + '"></div>';
        }
        output += '</div>';
        output += '</div>';
        output += '</div>';
    }
    guesses.innerHTML = output;
}

function chooseColours() {
    var choice = document.getElementById('choiceContainer');
    output = '';
    let num = '';
    for (let m=1; m<=4; m++) {
        
        switch(m) {
            case 1:
            num = '1st';
            break;
            case 2:
            num = '2nd';
            break;
            case 3:
            num = '3rd';
            break;
            case 4:
            num = '4th';            
        }

        output += '<div class="btn-group">';
        output += '<button type="button" class="btn btn-info btn-sm dropdown-toggle ms-1 me-2" data-bs-toggle="dropdown">' + num + '</button>';
        output += '<div class="dropdown-menu colour-dropdown w-10 py-0 me-5">';

        output += '<button class="dropdown-item colour-select color-blue" href="#" onclick="colorSelect(' + m + ', \'blue\')"></button>';
        output += '<button class="dropdown-item colour-select color-red" href="#" onclick="colorSelect(' + m + ', \'red\')"></button>';
        output += '<button class="dropdown-item colour-select color-yellow" href="#" onclick="colorSelect(' + m + ', \'yellow\')"></button>';
        output += '<button class="dropdown-item colour-select color-green" href="#" onclick="colorSelect(' + m + ', \'green\')"></button>';
        output += '<button class="dropdown-item colour-select color-white" href="#" onclick="colorSelect(' + m + ', \'white\')"></button>';
        output += '<button class="dropdown-item colour-select color-black" href="#" onclick="colorSelect(' + m + ', \'black\')"></button>';

        output += '</div>';
        output += '</div>';
    }

    choice.innerHTML = output;    

}