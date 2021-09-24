var score = 0;

function Clr() {
    
    "use strict";
    var t_f = document.getElementsByName("truefalse");
    var opt3 = document.getElementsByName("3options");
    var opt4 = document.getElementsByName("4options");
    var fill = document.getElementsByName("fill");
    
    for (var i = 0; i < t_f.length; i++){
        t_f[i].checked = false;
    }
    for (var j = 0; j < opt3.length; j++){
        opt3[j].checked = false;
    }
    for (var k = 0; k < opt4.length; k++){
        opt4[k].checked = false;
    }
    for (var l = 0; l < fill.length; l++){
        fill[l].checked = false;
    }
    
    document.getElementById("fill-1").value = "";
    document.getElementById("fill-2").value = "";
    
    score = 0;
    return;
}



var x = document.getElementsByName("3options");
var y = document.getElementsByName("4options");
var i;


function ans_bank(q1_1, q1_2, q2_1, q2_2, q3_a, q3_b, q3_c, q3_d, q4_a, q4_b, q4_c, q4_d, fill_1, fill_2) {
    score = 0;
    var checked_3 = 0;
    var checked_4 = 0;
    "use strict";
    
    if (q1_1.checked) {
        score += 0;
    }
    
    /* else if (q1_1.checked == false && q1_2.checked == false) {
        alert("Please select an answer for Question 1");
        score = 0; 
        
    }*/
    /* else if (q2_1.checked == false && q2_2.checked == false) {
        alert("Please select an answer for Question 2");
        score = 0; 
    } */
    for (i = 0; i < y.length; i ++){
        
        if (y[i].checked ){
            checked_4 += 1;
        }
    }
    for (i = 0; i < x.length; i ++){
        
        if (x[i].checked){
            checked_3 += 1;
        }
    }
    if (checked_3 > 2) {
        score += 0;
        
    } /* else if (checked_3 == 0) {
        alert("Please select an answer for Question 3");
        score = 0; 

    } */
    
    if (checked_4 > 2) {
        score += 0;
        
    } /* else if (checked_4 == 0){
        alert("Please select an answer for Question 4");
        score = 0; 

    } */
    if (q1_2.checked) {
        score += 1;
    }
   
    if (q2_1.checked) {
        score += 1;
    }
    
    if (q2_2.checked) {
        score += 0;
    }
    
    if ((q3_b.checked && q3_a.checked) || (q3_b.checked && q3_c.checked) || (q3_b.checked && q3_d.checked) ) {
        score += 0;
    }
    
    if (q3_b.checked && q3_a.checked == false && q3_c.checked == false && q4_d.checked == false) {
        score += 1;
    }
    else if (q3_a.checked || q3_c.checked || q3_d.checked) {
        score += 0;
    }
    if ((q4_c.checked && q4_a.checked) || (q4_c.checked && q4_b.checked) || (q4_c.checked && q4_d.checked) ) {
        score += 0;
    }
    
    if (q4_c.checked && q4_a.checked == false && q4_b.checked == false && q4_d.checked == false) {
        score += 1;
    }
    
    else if (q4_a.checked || q4_b.checked || q4_d.checked) {
        score += 0;
    }
    
    if( fill_1.toLowerCase() == "http"){
        score += 1;
        
    } else {
        score += 0;
    }
    
    /* else if (fill_1.length < 1){
        alert("Please type an answer for Question 5");
        score = 0; 
    } */
    
    if (fill_2.toLowerCase() == "favicon"){
        score += 1;
        
    } else {
        score += 0;
    }
    /*else if (fill_2.length < 1){
        alert("Please type an answer for Question 6")
        score = 0 
    } */
    
    
    
    
    if (q2_1.checked == false && q2_2.checked == false && q1_1.checked == false && q1_2.checked == false && checked_3 == 0 && checked_4 == 0 && fill_1.length == 0 && fill_2.length == 0) {
        alert("Please make sure all answers are selected/entered");
        score += 0;
    } else if (q1_1.checked == false && q1_2.checked == false) {
        alert("Please select an answer for Question 1");
        score = 0;
    }  else if (q2_1.checked == false && q2_2.checked == false) {
        alert("Please select an answer for Question 2");
        score = 0;
    } else if (checked_3 == 0) {
        alert("Please select an answer for Question 3");
        score = 0;
    } else if (checked_4 == 0){
        alert("Please select an answer for Question 4");
        score = 0;
    } else if (fill_1.length < 1){
        alert("Please type an answer for Question 5");
        score = 0;
    } else if (fill_2.length < 1){
        alert("Please type an answer for Question 6")
        score = 0
    }

    
    


if((q1_1.checked || q1_2.checked) && (q2_1.checked || q2_2.checked) && (q3_a.checked || q3_b.checked || q3_c.checked || q3_d.checked) && (q4_a.checked || q4_b.checked || q4_c.checked || q4_d.checked) && (fill_1.length > 1) && (fill_2.length > 1)) {
    
    
    alert("Your grade is "+score+"/6");
    score = 0;
}

}

