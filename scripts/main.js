var myImage = document.querySelector('img');

myImage.onclick = function(){
	var myImageSrc = myImage.getAttribute('src');
	if (myImageSrc === 'images/firefox-icon.png')
		myImage.setAttribute ('src','images/Snapshot_20140630.jpg');
	else
		myImage.setAttribute ('src','images/firefox-icon.png');
}


var myButton = document.querySelector('Button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(! localStorage.getItem('name'))
{
	setUserName();
}else
{
	myHeading.innerHTML = "Mozilla is coll " + localStorage.getItem('name');
}

myButton.onclick = function(){
	setUserName(); 
}