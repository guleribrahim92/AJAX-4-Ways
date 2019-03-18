var url="https://ron-swanson-quotes.herokuapp.com/v2/quotes"
var xhrbtn=document.querySelector("#xhr")
var fetchbtn=document.querySelector("#fetch")
var jquerybtn=document.querySelector("#jquery")
var axiosbtn=document.querySelector("#axios")
var disp=document.querySelector("#ron")

//XHR

xhrbtn.addEventListener("click",function(){
 var XHR=new XMLHttpRequest(); 
  XHR.onreadystatechange=function(){
    if(XHR.status==200 && XHR.readyState==4){
      var quote=JSON.parse(XHR.responseText)[0];
      disp.innerText=quote;
    }
  }
  XHR.open("GET",url)
  XHR.send();
});

//FETCH

fetchbtn.addEventListener("click",function(){
 fetch(url)
.then(function(req){
  req.json().then(function(data){
     disp.innerText= data[0]
  })
  
})
.catch(function(){
   alert("error")
 })
  })

//jQuery

$("#jquery").click(function(){
  $.getJSON(url)
  .done(function(data){
    //$("#quote").text(data[0])
    disp.innerHTML=data[0]
  })
  .fail(function(){
    console.log("err");
  })
})

//Axios

axiosbtn.addEventListener("click",function(){
axios.get(url)
.then(function(res){
  disp.innerText=res.data[0]
  //console.log(data.data[0])
})
  
.catch(function(){
  alert("err");
}) 
})
