document.addEventListener('keydown', function(ev){
  console.log(ev.which);
});
var e = new KeyboardEvent('keydown',{'keyCode':32,'which':32});
var y = document.getElementsByClassName('cw-TypedTextBox race-go')[0];
var l = document.getElementsByClassName('cw-QuotePanel-textToTypePanel')[0].innerText.split(' ').length;
while(l > 0){
x = document.getElementsByClassName('wordToType current-word')[0];
y.value = x.innerHTML;
y.dispatchEvent(e);
l--;
}
