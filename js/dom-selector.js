// Option-1/ Document.getElementsByTagName
let var1 = document.getElementsByTagName('tagName');
for (let var2 of var1){
   console.log(var2.innerHTML);
}

// Option-2/ Document.getElementById
let var3 = document.getElementById('idName');
for (let var4 of var3){
   console.log(var4.innerHTML);
}

// Option-3/ Document.getElementsByClassName
let var5 = document.getElementsByClassName('className');
for (let var6 of var5){
   console.log(var6.innerHTML);
}
