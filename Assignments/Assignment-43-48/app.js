// 1. Show an alert box on click on a link.

var link = document.getElementById("myLink");
link.addEventListener("click", function () {
  alert("You clicked the link!");
});


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

var images = document.getElementsByClassName("Assignments/Assignment-43-48/image 1.jpg");
var images = document.getElementsByClassName("Assignments/Assignment-43-48/image 2.jpg");
var images = document.getElementsByClassName("Assignments/Assignment-43-48/image 3.jpg");
for (var index = 0; index < images.length; index++) {
  images[index].addEventListener("click", function () {

    alert("Thanks for purchasing a phone from us");
  })
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. After click on delete button on “Mark ” row

function deleteStudent(row) {
  var table = document.getElementById("studentTable")
  table.deleteRow(row.rowIndex)
}
function createRows() {
  var table = document.getElementById("studentTable")
  for (var i = 0; i < 10; i++) {
    var row = table.insertRow()
    var idCell = row.insertCell()
    var nameCell = row.insertCell()
    var ageCell = row.insertCell()
    var actionCell = row.insertCell()
    idCell.innerHTML = i + 1
    nameCell.innerHTML = "Student " + (i + 1)
    ageCell.innerHTML = Math.floor(Math.random() * 10) + 18
    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.addEventListener("click", function () {
      deleteStudent(this.parentNode.parentNode)
    });
    actionCell.appendChild(deleteButton)
  }
}
createRows()


// // 4. Display an image in browser. Change the picture on mouseover and set the
// // first picture on mouseout.

var bulbOffSrc = "photo_48123160_bright-glowing-incandescent-light-bulb-on-a-white-background.html"
var bulbOnSrc = "photo_6109526_3d-render-of-light-bulb-on-white.html"
var image = document.getElementById("image")
function changeImage() {
  image.src = bulbOnSrc
}
function resetImage() {
  image.src = bulbOffSrc 
}


// // 5. Show a counter in browser. Counter should increase on click on increase
// // button and decrease on click on decrease button. And show updated counter
// // value in browser.

var count = 0
var countElement = document.getElementById("count")
countElement.innerText = count
function increase() {
  countElement.innerText = count++
}
function decrease() {
  if (count > 0) {
    countElement.innerText = count--
  }
}