//Get Modal
var modal = document.getElementById('myModal');

//Get the image
var imgModal = document.getElementById('image');
var captionModal = document.getElementById('caption-modal');

imgModal.onclick = function (){
  modal.style.display = 'block';
  imgModal.src = this.src;
  captionModal.innerHTML = "<dfn>" + this.title + "</dfn>";
}
//Close The Modal
var span = document.getElementsByClassName('close')[0];

span.onclick = function (){
  modal.style.display = 'none';
}
