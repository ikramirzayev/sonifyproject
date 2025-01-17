const label=document.getElementById('mylabel');
const label1=document.getElementById('mylabel1');
const label2=document.getElementById('mylabel2');
const label3=document.getElementById('mylabel3');
const photo=document.getElementById('block-1');
const photo1=document.getElementById('block-2');
const comment=document.getElementById('comment-form');
const visibility=document.getElementById('suggest');
label.addEventListener("click", function() {
    document.getElementById("p").innerHTML = "Walking On Sunshine";
    document.getElementById("p-1").innerHTML = "Happy";
    photo.style.backgroundImage="url('images/happy.jpeg')";
    photo1.style.backgroundImage="url('images/happy-1.jpeg')";
    visibility.style.visibility='visible';
    comment.style.marginTop="95px";
    comment.style.position="static";
    comment.style.top="0px";
  });
  label1.addEventListener("click", function() {
    document.getElementById("p").innerHTML = "Someone Like You";
    document.getElementById("p-1").innerHTML = "Hurt";
    photo.style.backgroundImage="url('images/sad.jpeg')";
    photo1.style.backgroundImage="url('images/sad-1.jpeg')";
    visibility.style.visibility='visible';
    comment.style.marginTop="95px";
    comment.style.position="static";
    comment.style.top="0px";
  });
  label2.addEventListener("click", function() {
    document.getElementById("p").innerHTML = "Weightless";
    document.getElementById("p-1").innerHTML = "Clair de Lune";
    photo.style.backgroundImage="url('images/relax.jpeg')";
    photo1.style.backgroundImage="url('images/relax-1.jpeg')";
    visibility.style.visibility='visible';
    comment.style.marginTop="95px";
    comment.style.position="static";
    comment.style.top="0px";
  });
  label3.addEventListener("click", function() {
    document.getElementById("p").innerHTML = "Yesterday";
    document.getElementById("p-1").innerHTML = "Time After Time";
    photo.style.backgroundImage="url('images/nostalgic.jpeg')";
    photo1.style.backgroundImage="url('images/nostalgic-1.jpeg')";
    visibility.style.visibility='visible';
    comment.style.marginTop="95px";
    comment.style.position="static";
    comment.style.top="0px";
  });