

function randomlize()
{
        randomNumber = Math.floor(Math.random() * 3)+1;
        console.log(randomNumber)
        if(randomNumber == 1)
        {
                document.getElementById("textbox1").style.display = "flex";
        }
        else if(randomNumber == 2)
        {
                document.getElementById("textbox2").style.display = "flex";
        }
        else if(randomNumber == 3)
        {
                document.getElementById("textbox3").style.display = "flex";
        }
        
}

