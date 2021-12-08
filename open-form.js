function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("chat").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("chat").style.display = "block";
}

function myFunction() {
  var input = document.getElementById("message").value;
  var commentName = document.getElementById("name-6797").value.length;
  var commentMessage = document.getElementById("message-6797").value.length;

  if (input.length == 0) {
    alert("PESAN ERROR: Mohon melengkapi pesan yang ingin anda sampaikan");
  }
}

function myFunctionComment() {
  var commentName = document.getElementById("name-6797").value.length;
  var commentMessage = document.getElementById("message-6797").value.length;

  if(commentName == 0 && commentMessage == 0){
    alert("PESAN ERROR: Mohon melengkapi nama Anda dan komentar yang ingin disampaikan kepada toko");
  }else if(commentMessage == 0){
    alert("PESAN ERROR: Mohon melengkapi komentar yang ingin anda sampaikan");
  }else if(commentName == 0){
    alert("PESAN ERROR: Mohon melengkapi nama Anda");
  }
}
