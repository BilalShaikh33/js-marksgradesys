var maths;
maths = Number(prompt("Enter your Maths marks: "));
var computer;
computer = Number(prompt("Enter your computer marks: "));
var physics;
physics = Number(prompt("Enter your physics marks: "));
var english;
english = Number(prompt("Enter your english marks: "));
var sst;
sst = Number(prompt("Enter your sst marks: "));

var totalmarks = 500

obtmarks = maths + computer + physics + english + sst;
var percentage = (obtmarks / totalmarks) * 100;

if (typeof obtmarks != "number") {
    alert("Wrong input")
}
else {
    alert("Total Marks Are " + obtmarks)

    if (percentage <= 100 && percentage >= 80) {
        alert("A1 grade");
    }
    else if (percentage <= 79 && percentage >= 70) {
        alert("A grade");
    }
    else if (percentage <= 69 && percentage >= 60) {
        alert("B grade");
    }
    else if (percentage <= 59 && percentage >= 50) {
        alert("C grade");
    }
    else if (percentage <= 49 && percentage >= 40) {
        alert("D grade");
    }
    else if (percentage < 40) {
        alert("Fail");
    }
    else {
        alert("Wrong Input")
    }
}








