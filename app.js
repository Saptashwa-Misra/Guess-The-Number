num_rand=0;

var player = {
    tries: 1
}

let Score_Random = () => {
    num_rand = parseInt(Math.floor(Math.random()*100)+1);
}

window.onload = () => {
    //A random number is stored
    Score_Random();
}

let ButtonClick = () => {
    var button = document.getElementById("striker-button");
    var num = document.getElementById("entered_num").value;
    var result = document.getElementById("result");
    result.style.visibility="";
    //check if game is over or not
    if(num===''||num>100||num<1)
        button.textContent = "The input is not valid";
    else
    {
        var num = parseInt(document.getElementById("entered_num").value);
        if(num===num_rand){
            button.remove();
            result.textContent="Congratulations!! You have guessed the number correctly in "+player.tries+" attempts. The number was " + num_rand;
        }
        else{
            if(num_rand>num)
                {
                    button.textContent = "The number is greater than "+num +". Guess a larger number!!";
                }
            else
                {
                    button.textContent = "The number is less than "+num+". Guess a smaller number!!";
                }
            player.tries++;
        }
    }
}
