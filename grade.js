/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/



const number = 59;

if (number >= 90 && number <= 100){
    console.log("congratulations !! you got A")
}
else if (number >= 80 && number < 90){
    console.log("you got B")
}

else if (number >= 70 && number < 80){
    console.log("you got C")
}

else if(number >= 60 && number < 70){
    console.log("you got D")
}

else {
    console.log("you got F")
}