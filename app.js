 //Instance Variables
 let mcqValue = 25;
 let frq1Value = 4;
 let frq2Value = 4;
 let frq3Value = 4;
 let frq4Value = 4;
 let frq5Value = 4;
 let frq6Value = 4;
 let compScore  = 50;
 let score = 3;
 //Max Variables
 let mcqMax =   50;
 let frqMax =   14;
 let totalMax = 100;
 //Score Variables
 let five =  85;
 let four =  65;
 let three = 45;
 let two =   25;

 //Multiple Choice Score
 function mcqScore(value) {
     //Gets info from slider and updates 
     document.getElementById('mcq1').innerHTML = value;
     document.getElementById('mcqScore').innerHTML = value + "/" + mcqMax;
     //Updating compScore, APScore, color
     mcqValue = parseInt(value);
     compositeScore();
     colorChange(mcqValue*2, 'mcqBox', "background");
     colorChange(mcqValue*2, 'mcq1_slider', "slider");
 }

 function frq1Score(value) {
     //Gets info from slider and updates 
     document.getElementById('frq1').innerHTML = value;
     //Updating compScore, APScore, color
     frq1Value = parseInt(value);
     compositeScore();
     colorChange(Math.round(frq1Value/(frqMax/2)*100), 'frq1_slider', 'slider');

 }
 function frq2Score(value) {
     //Gets info from slider and updates
     document.getElementById('frq2').innerHTML = value;
     //Updating compScore, APScore, color
     frq2Value = parseInt(value);
     compositeScore();
     colorChange(Math.round(frq2Value/(frqMax/2)*100), 'frq2_slider', 'slider');
 }
 function compositeScore(){
     //Calculating FRQ Score
     let frqScore = frq2Value + frq1Value;
     document.getElementById('frqScore').innerHTML = frqScore + "/" + frqMax;
     frqScore = Math.round((frqScore/frqMax) * 50);

     colorChange(frqScore*2, 'frqBox', "background");
     

     //calculating total score
     compScore = frqScore + mcqValue;
     document.getElementById('cScore').innerHTML = compScore + "/" + totalMax;
     colorChange(compScore, 'cBox', "background");
     apScore();
 }
 function apScore(){
     //Checking what AP Score you got
     if(compScore >= five)
         score = 5;
     else if(compScore >= four)
         score = 4;
     else if(compScore >= three)
         score = 3;
     else if(compScore >= two)
         score = 2;
     else 
         score = 1;

     colorChange(compScore, 'youFailedBozo', "text")

     document.getElementById('youFailedBozo').innerHTML = score;
 }

 function colorChange(value, id, type)
 {   
     //Changes the background color if thats wanted
     if(type === "background")
     {
         if(value >= five)
             document.getElementById(id).style.backgroundColor = "#68855F"; 

         else if(value >= four)
             document.getElementById(id).style.backgroundColor = "#95a66d"; 

         else if(value >= three)
             document.getElementById(id).style.backgroundColor = "#ffd166"; 
         
         else if(value >= two)
             document.getElementById(id).style.backgroundColor = "#f4a261"; 
             
         else 
             document.getElementById(id).style.backgroundColor = "#e76f51"; 
     }
     //Changes Slider color
     else if(type === "slider")
     {
         if(value >= five)
             document.getElementById(id).style.outlineColor = "#68855F"; 

         else if(value >= four)
             document.getElementById(id).style.outlineColor = "#95a66d"; 

         else if(value >= three)
             document.getElementById(id).style.outlineColor = "#ffd166"; 
         
         else if(value >= two)
             document.getElementById(id).style.outlineColor = "#f4a261"; 
             
         else 
             document.getElementById(id).style.outlineColor = "#e76f51";
     }
     // Only other option is text so it changes that
     else 
     {
         if(value >= five)
             document.getElementById(id).style.color = "#68855F"; 

         else if(value >= four)
             document.getElementById(id).style.color = "#95a66d"; 

         else if(value >= three)
             document.getElementById(id).style.color = "#ffd166"; 

         else if(value >= two)
             document.getElementById(id).style.color = "#f4a261"; 

         else 
             document.getElementById(id).style.color = "#e76f51"; 
     }
     
 }