// array tha contain the function validation
Array_validation_function = [

// first function day validation
function day_validation() {
const day = document.getElementById("DD");
const error_day = document.getElementById("error_day");
if (day.value == "") {
   error_day.textContent = "This field is required";
   
}
else if (day.value > 30) {
   error_day.textContent = "Must be a valid day";
   
}
else if (day.value <= 30) {
    error_day.textContent = "";
    return true;
 }
else {
    error_day.textContent = "This field only accepts numerical input";
    
}
}
,
// second function month validation
function month_validation() {
    const month = document.getElementById("MM");
    const error_day = document.getElementById("error_month");
    if (month.value == "") {
       error_day.textContent = "This field is required";
       
    }
    else if (month.value > 12) {
       error_day.textContent = "Must be a valid month";
       
    }
    else if (month.value <= 12) {
        error_day.textContent = "";
        return true;
     }
    else {
        error_month.textContent = "This field only accepts numerical input";
        
    }
    }
    ,
    // third function year validation
    function year_validation() {
        const year = document.getElementById("YYYY");
        const error_day = document.getElementById("error_year");
        if (year.value == "") {
           error_day.textContent = "This field is required";
           
        }
        else if (year.value > 2023) {
           error_day.textContent = "Must be in the past";
           
        }
        else if (year.value <= 2023) {
            error_day.textContent = "";
            return true;
         }
        else {
            error_year.textContent = "This field only accepts numerical input";
            
        }
        }
    ];

// function that put the error color
function color_error_function() {
   let day = document.getElementById("input_day");
   let month = document.getElementById("input_month");
   let year = document.getElementById("input_year");
   let day_input = document.getElementById("DD");
   let month_input = document.getElementById("MM");
   let year_input = document.getElementById("YYYY");

   if ( Array_validation_function[0]() !== true) {
      day.style.color = "hsl(0, 100%, 67%)";
      day_input.style.borderColor = "hsl(0, 100%, 67%)";
  }
  else {
     day.style.color = "hsl(0, 0%, 47%)";
     day_input.style.borderColor = "hsl(0, 0%, 80%)";
  }
  if ( Array_validation_function[1]() !== true) {
   month.style.color = "hsl(0, 100%, 67%)";
   month_input.style.borderColor = "hsl(0, 100%, 67%)";
}
  else {
   month.style.color = "hsl(0, 0%, 47%)";
   month_input.style.borderColor = "hsl(0, 0%, 80%)";
}
  if ( Array_validation_function[2]() !== true) {
   year.style.color = "hsl(0, 100%, 67%)";
   year_input.style.borderColor = "hsl(0, 100%, 67%)";
}
  else {
   year.style.color = "hsl(0, 0%, 47%)";
   year_input.style.borderColor = "hsl(0, 0%, 80%)";
};
}

// function add hover
function addHover() {
   this.style.borderColor = "hsl(259, 100%, 65%)";
}
//function remove hover
function removeover() {
   this.style.borderColor = "hsl(0, 0%, 80%)"; 
}



var button = document.querySelector("button");
button.addEventListener("click",result);

// function that write the final result
function result() {

   if (Array_validation_function[0]() &&
       Array_validation_function[1]() && 
       Array_validation_function[2]()) {

      var array_p = document.querySelectorAll("p");
      var array_input = document.querySelectorAll("input");
      for (let i = 0; i < 3; i++) {
         array_p[i].style.color = "hsl(0, 0%, 47%)";
         array_input[i].style.borderColor = "hsl(0, 0%, 80%)";
         array_input[i].addEventListener("mouseover",addHover);
         array_input[i].addEventListener("mouseout",removeover);
      }
      // -----------------------------------------------------------------
      let day = prompt("write the current day");
      let month = prompt("write the current month");
      let year = prompt("write the current year");
      let input1 = document.getElementById("DD").value;
      let input2 = document.getElementById("MM").value;
      let input3 = document.getElementById("YYYY").value;
      let day_result = document.getElementById("days");
      let month_result = document.getElementById("months");
      let year_result = document.getElementById("years");
      
      rest1 = parseInt(day) - parseInt(input1);
      rest2 = parseInt(month) - parseInt(input2);
      rest3 = parseInt(year) - parseInt(input3);
   
      if (rest2 < 0) {
         --rest3;
         let months = 12 + rest2;
         let day = rest1;
         let year = rest3;
         day_result.textContent = day;       
         year_result.textContent = year;
         if (rest1 < 0) {
              day = 30 + rest1;
              --months;
              month_result.textContent = months;
              day_result.textContent = day;
         } 
         else {
            months = rest2;
            month_result.textContent = months;
         }
         }

         if (rest2 > 0) {
            months = rest2;
            year = rest3;
            day = rest1;
            month_result.textContent = months;       
            year_result.textContent = year;
            if (rest1 < 0) {
               --months;
               day = 30 + rest1;
               day_result.textContent = day; 
               month_result.textContent = months; 
            }
            else {
               day_result.textContent = rest1; 

            }
         }
     
        
      
     
         
   }  
     
   else {
       color_error_function();
    
   } 
}



        
       
