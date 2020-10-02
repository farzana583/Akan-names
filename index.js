var CC, DD, MM, YY, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate(){
    var genders = documents.geteElementsByname("gender");
    if(document.myForm.years.value =="" || document.myForm.years.value.length !=4 || document.myForm.years.value >2100 || document.myForm.value <=1900){
        alert("Please provide a valid year of birth! eg 2020");
        document.myForm.years.focus();
        return false;
    }
}