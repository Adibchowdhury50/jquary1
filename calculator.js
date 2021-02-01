//function for insert number
function insertNumber (number){
   var existingNumbers = $("#result").val();
   $("#result").val(existingNumbers + number)
    

}
// function for clear
function clearAll(){
    $("#result").val("");
}

//for calculation
function calculate(){

    var result =eval($("#result").val())
    $("#result").val(result);
}

// for delete  number from right side
function deleteNumbers(){
 var presentValue = $("#result").val();
 if(presentValue!=''){
    $("#result").val(presentValue.slice(0,-1));
 }
 else{
    $("#result").val("");
 }


}