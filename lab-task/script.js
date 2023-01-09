function myalert(){
    var forms=$('#email');
    
    if(forms.val()== ""){
        $("#email").addClass("green");
        alert("form is empty");
    }
    else{
    alert("button was clicked");
    }
}