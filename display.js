function display(message){
    var count = 0;
    var printout = "";
    var interval = setInterval(function(){
        printout += message[count];
        console.log(printout);
        count++;
        if (count > message.length - 1){
            clearInterval(interval);
        }
    }, 150);
}

function displayBackwards(message){
    var count = message.length - 1;
    var printout = "";
    var interval = setInterval(function(){
        printout += message[count];
        console.log(printout);
        count--;
        if (count < 0){
            clearInterval(interval);
        }
    }, 150);
}

display("Hello there!");
displayBackwards("Hello there!");
