var gamePlaceX = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var gamePlaceO = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var openCell = [];
var mark = 1;

for (i = 0; i < 9; i++) {
    $('ul').append('<li style="background-color: #777" value="' + i + '"></li>');
}

$('li').click(function () {
    if (mark) {
        if (($(this).attr('class') != "filled")) {

            $(this).html("X");
            $(this).addClass('filled');
            gamePlaceX[this.value] = 1;

            for (i = 0; i < 1; i++) {
                if (
                    (gamePlaceX[0] && gamePlaceX[1] && gamePlaceX[2]) ||
                    (gamePlaceX[3] && gamePlaceX[4] && gamePlaceX[5]) ||
                    (gamePlaceX[6] && gamePlaceX[7] && gamePlaceX[8]) ||
                    (gamePlaceX[0] && gamePlaceX[3] && gamePlaceX[6]) ||
                    (gamePlaceX[1] && gamePlaceX[4] && gamePlaceX[7]) ||
                    (gamePlaceX[2] && gamePlaceX[5] && gamePlaceX[8]) ||
                    (gamePlaceX[0] && gamePlaceX[4] && gamePlaceX[8]) ||
                    (gamePlaceX[2] && gamePlaceX[4] && gamePlaceX[6])
                ) {
                    setTimeout(function () {
                        alert("Player WIN");
                        window.location = "index.html";
                    }, 400);
                }
            }
            openCell++;
            if (openCell == 9) {
                alert("Nobody WIN");
                window.location = "index.html";
            }
            mark = !mark;
        }
        else {
            alert("Filled");
        }
    }
    else {
        if (($(this).attr('class') != "filled")) {
            $(this).html("0");
            $(this).addClass('filled');
            gamePlaceO[this.value] = 1;
            for (i = 0; i < 1; i++) {
                if (
                    (gamePlaceO[0] && gamePlaceO[1] && gamePlaceO[2]) ||
                    (gamePlaceO[3] && gamePlaceO[4] && gamePlaceO[5]) ||
                    (gamePlaceO[6] && gamePlaceO[7] && gamePlaceO[8]) ||
                    (gamePlaceO[0] && gamePlaceO[3] && gamePlaceO[6]) ||
                    (gamePlaceO[1] && gamePlaceO[4] && gamePlaceO[7]) ||
                    (gamePlaceO[2] && gamePlaceO[5] && gamePlaceO[8]) ||
                    (gamePlaceO[0] && gamePlaceO[4] && gamePlaceO[8]) ||
                    (gamePlaceO[2] && gamePlaceO[4] && gamePlaceO[6])
                ) {
                    setTimeout(function () {
                        alert("COMP WIN");
                        window.location = "index.html";
                    }, 400);
                }
            }
            openCell++;
            mark = !mark;
        }
        else {
            alert("Filled");
        }
    }
});