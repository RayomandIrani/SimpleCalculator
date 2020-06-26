function reset(){
    let input=document.getElementById("textBox").value="";
}
function deleteFunc(){
    let input = document.getElementById("textBox").value;
    document.getElementById("textBox").value = input.substr(0, input.length - 1);
}
function number(val) {
    document.getElementById("textBox").value+=val;
}
function evaluateNum(){
   let input= document.getElementById("textBox").value;
   let sol=eval(input).toString();
   document.getElementById("textBox").value="";
   document.getElementById("textBox").value=sol;
}
function placeBracket(){
    let input= document.getElementById("textBox").value.toString();
    console.log(input);
    let check=input.indexOf('(');
    console.log(check);
    if(check==-1){
        document.getElementById("textBox").value+='(';
    }
    else{
        document.getElementById("textBox").value+=')';
    }
}