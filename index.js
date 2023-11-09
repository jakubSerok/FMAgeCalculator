//outputs
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit");

//inputs 
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

//errors
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

submit_btn.addEventListener('click', ()=>{
    const D = input_day.value;
    const M = input_month.value;
    const Y = input_year.value;
    const birthday = `${Y}-${M}-${D}`;

    if(validDay(Y,M,D)&&validMonth(M)&&validYear(Y,M,D)){
        // Age Calculation
        let years = new Date().getFullYear() - new Date(birthday).getFullYear();
        let months = new Date().getMonth() - new Date(birthday).getMonth();
        let days = new Date().getDate() - Number(D);
        if (months < 0) {
            years = years - 1;
            months = months + 12;
        }
        if (days < 0) {
            days += getNoOfDays(Y, M - 1);
        }
        output_day.innerText = days; 
        output_month.innerText = months; 
        output_year.innerText = years; 

        input_day.classList.remove("error");
        error_day.innerText = '';
        input_month.classList.remove("error");
        error_month.innerText = '';
        input_year.classList.remove("error");
        error_year.innerText = '';
    }
    else{
        if(D==''){
            error_day.innerText = 'This field is required';
            input_day.classList.add("error");
        }
        else if(!validDay(Y,M,D)){
            error_day.innerText = 'Must be a valid day';
            input_day.classList.add("error");
        }
        if(M==''){
            error_month.innerText = 'This field is required';
            input_month.classList.add("error");
        }
        else if(!validMonth(M)){
            error_month.innerText = 'Must be a valid day';
            input_month.classList.add("error");
        }
        if(Y==''){
            error_year.innerText = 'This field is required';
            input_year.classList.add("error");
        }
        else if(!validYear(Y,M,D)){
            error_year.innerText = 'Must be a valid day';
            input_year.classList.add("error");
        }
    }
})

function getNoOfDays(y, m) {
    return new Date(y, m, 0).getDate();
  }
function validDay(y,m,d){   
    if(d>getNoOfDays(y, m)||d<1)return false;    
    return true;
}
function validMonth(m){
    if(m>12||m<1)return false;
    return true;
}
function validYear(y,m,d){
    const todayDate = new Date();
    const inputDate = new Date(`${y}-${m}-${d}`);
    if(inputDate.setHours(0,0,0,0)<=todayDate.setHours(0,0,0,)){
        return true;
    }
    return false;
}