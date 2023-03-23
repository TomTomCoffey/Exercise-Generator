import { User  } from "./model/session";
import { Workout } from "./model/workout";
import { Cardio }  from "./model/cardio";


document.getElementById("submission").onclick = function()
{

    

    var exType = document.getElementById("eT").value;
    var numSet = document.getElementById("nS").value;
    var numRep = document.getElementById("nR").value;
    var weight = document.getElementById("wht").value;

    var output1 = document.getElementById("out1");
    var output2 = document.getElementById("out2");
    var output3 = document.getElementById("out3");
    var output4 = document.getElementById("out4");

    output1.innerHTML = exType;
    output2.innerHTML = numSet;
    output3.innerHTML = numRep;
    output4.innerHTML = weight;
}