/**
 * Created by json on 16/4/25.
 */
var imgContainer,msgDiv;

window.onload = function () {
    imgContainer = document.getElementById("imgContainer");
     msgDiv = document.getElementById("msg");

    imgContainer.ondragover = function (e) {
        e.preventDefault()
    }
    imgContainer.ondrop = function (e) {
         e.preventDefault();
         // showObj(e.dataTransfer.files);
        var f = e.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            imgContainer.innerHTML = "<img src=\""+fileReader.result+"\">"
         showObj(e.target);
        }
        fileReader.readAsDataURL(f);
     }
}

function  showObj(obj) {
    var s = "";
    for(var k in obj){
        s+=k+":"+obj[k]+"<br/>"
    }
    msgDiv.innerHTML = s;
}