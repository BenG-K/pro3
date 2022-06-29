var rotation = 0;
var image = document.getElementById("cat");

var timeInterval = 25;
var animation;


var memes = ["https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg", "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEpPi8Xx7-5XkP2Ch9TX_pqkUe4BmARMLaA&usqp=CAU", "https://s28151.pcdn.co/wp-content/uploads/sites/2/2022/03/Coyote-animal-sentience-research.jpg", "https://i.cbc.ca/1.6367775.1646085911!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/sleeping-animals-koala.jpg", "https://ideas.ted.com/wp-content/uploads/sites/3/2020/03/final_credit-alamy-1.jpg", "https://images.squarespace-cdn.com/content/v1/5a6af6418dd0410bf87e4957/1643719920297-NZPFCXM8WT06BUM31GNN/unsplash-image-5-ckjYvTZQw.jpg"]

startSpin();

function startSpin(){
  image.onclick = pickMeme;
 animation = setInterval(spin,timeInterval);
    image.src ="https://media.istockphoto.com/vectors/red-button-in-round-silver-frame-vector-illustration-3d-realistic-vector-id1397319873?b=1&k=20&m=1397319873&s=612x612&w=0&h=rWXmcUo67RhMK1tdSexvqOJUrrDzSiOTLNv_6TNVAzE="
}
function spin(){
 rotation +=20;
  if(rotation >= 360){
    rotation -= 360;
  }
 image.style.transform = "rotate("+rotation+"deg)";
}

function pickMeme(){
  var index = Math.floor(rotation / (360 / memes.length));
  image.src = memes[index];
  clearInterval(animation);
  image.style.transform = "rotate(0deg)"

  image.onclick= startSpin;
  console.log("click");

}
