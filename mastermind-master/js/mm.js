if (rightGuessCP==undefined) {
    // declare variable for right guess - colour and place
    var rightGuessCP =0;
}
if (rightGuessC==undefined) {
    // declare variable for right guess - colour only
    var rightGuessC =0;
}

if (rightColours==undefined) {
    // declare arrays for secret code and random number variable
    var rightColours = [];
    var wrongColours = [];
    var rando;
    for (let i=1; i < 5; i++) {
        do {
            rando = Math.floor(Math.random() * 6) + 1; 
        }
        // if colour is already used try again
        while (wrongColours.includes(rando));
        // store selected number into array
        wrongColours[i] = rando;
        switch (rando) {
            case 1:
                riteColour ="blue";
                break;
            case 2:
                riteColour ="red";
                break;
            case 3:
                riteColour ="yellow";
                break;
            case 4:
                riteColour ="green";
                break;
            case 5:
                riteColour ="white";
                break;
            case 6:
                riteColour ="black";
                break;
            }
        // save secret colours into array
        rightColours[i] = riteColour;  
        }         
}

if (row==undefined) {
    // variable storing the current row
    var row = 1;
}

if (colours==undefined) {
    // array for colours chosen by player
    var colours = [];
}

function guess() {
    for (let i=1; i<5; i++) {
        for (let j=1; j<5; j++) {
            // check if the colour is right
            if (rightColours[i] == colours[j]) {
            rightGuessC++;
            break;
            }
        }
    }

    for (let i=1; i<5; i++) {
        if(rightColours[i] == colours[i]) {
            // check if the colour and place are right
            rightGuessCP++;
            rightGuessC--;
        }    
    }

    for (i=1; i < (rightGuessCP + 1); i++) {
        var markyMark = "r" + row + "m" + i;
        var marking = document.getElementById(markyMark);
        // mark the guesses with black for correct colour and place 
        marking.style.backgroundColor = "black";
    }
    for (i=1; i < (rightGuessC + 1); i++) {
        var markyMark = "r" + row + "m" + (i + rightGuessCP);
        var marking = document.getElementById(markyMark);
        // mark the guesses with grey for correct colour, wrong place
        marking.style.backgroundColor = "#888";
    }
    if (rightGuessCP == 4) {
        alert("You win!");
        // Show answers
        var idName;
        for (let k=1; k<5; k++) {
            idName = "s" + k;
            document.getElementById(idName).style.backgroundColor = rightColours[k];
        }
    }
    else if (row == 10 && rightGuessCP < 4) {
        // on the last row, the player loses if they don't have all four colours correct
        alert ("Sorry, you lose. Try again!");   
        // Show answers
        var idName;
        for (let k=1; k<5; k++) {
            idName = "s" + k;
            document.getElementById(idName).style.backgroundColor = rightColours[k];
        }     
    }

    // reset correct guess counters
    rightGuessC = 0;
    rightGuessCP = 0;
    row++;
}

function colorSelect (col, colorChosen) {
    colours[col] = colorChosen;
    cellToChange = "r" + row + "c" + col;
    var elementToChange = document.getElementById(cellToChange);
    // change the colour of the cell to the users chosen colour
    elementToChange.style.backgroundColor = colorChosen;
}