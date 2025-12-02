var input1 = document.querySelector(".input1")
var input2 = document.querySelector(".input2")
var input3 = document.querySelector(".input3")


function cocorico(){
  if(input1.value.length < 1 || input2.value.length < 1 || input3.value.length < 1 ){
    alert("preenche ai calango")
  
  }else{
      alert(" nome:" + input1.value +" email:" + input2.value + " mensagem" + input3.value )
   
  }
  if(input1.value.length > 1 & input2.value.length > 1 & input3.value.length > 1 ){
    
   
  }

}