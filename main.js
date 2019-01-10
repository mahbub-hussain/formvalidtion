$(document).ready(function(){

 
  
 var formFields = $('.form-group');
  
    formFields.each(function() {
      var field = $(this);
      var input = field.find('input.float-label');
      var label = field.find('label');
      
      function checkInput() {
        var valueLength = input.val().length;
        
        if (valueLength > 0 ) {
          label.addClass('stay')
        } else {
              label.removeClass('stay')
        }
      }
      input.change(function() {
        checkInput()
      })
    });


           
    
    $("#firstname").keyup(function(){
      let firstnameVal=$(this).val()
         let regx = /^([a-zA-Z]{5,30})$/;
         if(regx.test(firstnameVal)){ 
           $(this).closest(".form-control").addClass("thrive");
          
           $(this).closest(".form-control").removeClass("not-thrive");
     
           $(this).next().hide();
           $(this).prev().show();
         }
        
         else{
          $(this).closest(".form-control").addClass("not-thrive");
          $(this).closest(".form-control").removeClass("thrive")

        $(this).next().show();
        $(this).prev().hide();
         }
    })




    $("#lastname").keyup(function(){
      let lastnameVal=$(this).val()
         let regx = /^[a-zA-Z]{5,30}$/;
         if(regx.test(lastnameVal)){
           $(this).closest(".form-control").addClass("thrive");
          
           $(this).closest(".form-control").removeClass("not-thrive");



           $(this).next().hide();
           $(this).prev().show();
       
         }
            
   
         else{
          $(this).closest(".form-control").addClass("not-thrive");
          $(this).closest(".form-control").removeClass("thrive")
     

          $(this).next().show();
          $(this).prev().hide();

         }
    })




    $("#username").keyup(function(){
      let usernameVal=$(this).val();
      let usernameLength=$(this).val().length;
      
      let regx =/^[a-zA-Z]{1,30}[0-9]+$|^[a-zA-Z]{1,30}[(0-9)|(a-zA-Z)]-?_?[(a-zA-Z)|(0-9)|(a-zA-Z)]+$|^[a-zA-Z]+$/;
      if(regx.test(usernameVal) && usernameLength > 5){
        $(this).closest(".form-control").addClass("thrive");
        $(this).closest(".form-control").removeClass("not-thrive");

        $(this).next().hide();
        $(this).prev().show();
    
      }
         

      else{
       $(this).closest(".form-control").addClass("not-thrive");
       $(this).closest(".form-control").removeClass("thrive")
  

       $(this).next().show();
       $(this).prev().hide();

      }
 })



 $("#password").keyup(function(){
  let passwordVal=$(this).val();
  let regx =/[a-zA-Z0-9]{6,20}/;
  if(regx.test(passwordVal)){
    $(this).closest(".form-control").addClass("thrive");
   
    $(this).closest(".form-control").removeClass("not-thrive");

    

    $(this).next().hide();
    $(this).prev().show();

  }
     

  else{
   $(this).closest(".form-control").addClass("not-thrive");
   $(this).closest(".form-control").removeClass("thrive")


   $(this).next().show();
   $(this).prev().hide();

  }



    let pswddata = false;
   $("#passvisivility").click(function(){
    let getpswdinput = $("#password");
    if(pswddata === false){
           getpswdinput.attr("type","text");
           $("#eye-toggle").removeClass("fa-eye-slash")
           $("#eye-toggle").addClass("fa-eye").css({"color":"black"})
          
           pswddata = true;
    }
    else if(pswddata === true ){
      getpswdinput.attr("type","password");
      $("#eye-toggle").addClass("fa-eye-slash").css({"color": "darkgray"})
      $("#eye-toggle").removeClass("fa-eye")
      pswddata = false;
      
    }
})
  

  

})
   


$("#password2").keyup(function(){
  let passwordVal=$(this).val();
  let regx =/[a-zA-Z0-9]{6,20}/;
  if(regx.test(passwordVal)) {
    if( passwordVal == $("#password").val()){

    
    $(this).closest(".form-control").addClass("thrive");
   
    $(this).closest(".form-control").removeClass("not-thrive");

    

    $(this).next().hide();
    $(this).prev().show();
}
else{
  $(this).closest(".form-control").addClass("not-thrive");
  $(this).closest(".form-control").removeClass("thrive")

 
  $(this).next().show();
  $(this).prev().hide();

 }
  }
     

  else{
   $(this).closest(".form-control").addClass("not-thrive");
   $(this).closest(".form-control").removeClass("thrive")

  
   $(this).next().show();
   $(this).prev().hide();

  }
})

$("#email").keyup(function(){
  let passwordVal=$(this).val();
  let regx =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(regx.test(passwordVal)) {
    $(this).closest(".form-control").addClass("thrive");
   
    $(this).closest(".form-control").removeClass("not-thrive");

    

    $(this).next().hide();
    $(this).prev().show();

  }
     

  else{
   $(this).closest(".form-control").addClass("not-thrive");
   $(this).closest(".form-control").removeClass("thrive")

  
   $(this).next().show();
   $(this).prev().hide();

  }
})

$("#tel").keyup(function(){
  let passwordVal=$(this).val();
  let regx =/^[0-9]{11,14}$/;
  if(regx.test(passwordVal)) {
    $(this).closest(".form-control").addClass("thrive");
   
    $(this).closest(".form-control").removeClass("not-thrive");

    

    $(this).next().hide();
    $(this).prev().show();

  }
     

  else{
   $(this).closest(".form-control").addClass("not-thrive");
   $(this).closest(".form-control").removeClass("thrive")

  
   $(this).next().show();
   $(this).prev().hide();

  }
})



$("#submit").click(function(){
   if($("#password").val() !== $("#password2").val()){
    $("#password").next().show().text("Both password must be same")
   }
       
  if($("input").val()!="0"){
    (".form-error").text("wejhr")
  }

})

 })
