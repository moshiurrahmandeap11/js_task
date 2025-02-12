/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const number = 80;

if (number >= 80){
    console.log("i am inside my friends score")
    const myFriendNumber = 80;
    if(myFriendNumber >= 80){
        console.log("go for a launch")
    }
    else if (myFriendNumber < 80 && myFriendNumber >= 60){
        console.log("good luck for next time")
    }

    else if(myFriendNumber < 60 && myFriendNumber >= 40){
        console.log("i dont know you and act like he wasn't my friend")
    }

    else{
        console.log("block my friend")
    }
}
else{
    console.log("i need to go to home and sleep and act sad")
}