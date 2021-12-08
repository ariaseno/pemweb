//Get Modal
var modal = document.getElementById('myModal');


//Close The Modal
var span = document.getElementsByClassName('close')[0];

span.onclick = function (){
  modal.style.display = 'none';
}
//Get the image
var imgModal = document.getElementById('myImg');
var imageTarget = document.getElementById('image');
var captionModal = document.getElementById('caption-modal');
const imageContent = document.querySelectorAll('.develop')

for (let listImage of imageContent){
  listImage.addEventListener('click', function(event){
    const target = event.target;

    modal.style.display = 'block';
    imgModal.src = target.src;
    captionModal.innerHTML = "<dfn>" + target.title + "</dfn>";
  })
}


imageTarget.onclick = function (){
  modal.style.display = 'block';
  imgModal.src = this.src;
  captionModal.innerHTML = "<dfn>" + this.title + "</dfn>";
}
