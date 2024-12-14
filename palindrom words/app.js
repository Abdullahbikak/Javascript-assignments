var word = prompt();

var check = "";

for(i = word.length -1; i >= 0 ; i--){
    check += word[i];
}

if(check === word){
    console.log(word + " Is palindrome word");
}else{
    console.log(word + " Is not palindrome word");
}