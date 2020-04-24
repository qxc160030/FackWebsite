
//iteration
function randomlize()
{
        if(typeof(Storage) !== "undefined") {
                if (sessionStorage.clickcount) {
                  sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
                } else {
                  sessionStorage.clickcount = 1;
                }
        }

        if( sessionStorage.clickcount == 1)
        {
                document.getElementById("textbox1").style.display = "flex";
        }
        else if(sessionStorage.clickcount == 2)
        {
                document.getElementById("textbox2").style.display = "flex";
        }
        else
        {
                document.getElementById("textbox3").style.display = "flex";
        }
       
        
}



