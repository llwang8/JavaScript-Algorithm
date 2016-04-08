
//JavaScript DOM [13 exercises with solution]

/*==============================

1. Here is a sample html file with a submit button. Now modify the style of the paragraph
text through javascript code. Go to the editor
Sample HTML file :

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html><br><head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head>
<body>
<p id ='text'>JavaScript Exercises - w3resource</p>
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>
Clicking on the button the font, font size, and color of the paragraph text will be changed.
==============================*/
function js_style(){
    text.style.fontFamily = "Comic Sans MS";
    text.style.fontSize = "14px";
    text.style.color = 'green';

}


/*==============================

2. Write a JavaScript function to get the values of First and Last name of the following form.
Sample HTML file :

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title>
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>
==============================*/
function getFormvalue(){
    var x = document.getElementById("form1")
    for (var i=0; i<x.length; i++){
        if(x.elements[i].value != 'submit'){
            console.log(x.elements[i].value);
        }
    }

}
/*==============================
3. Write a JavaScript program to set the background color of a paragraph.
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
<body>
<input type="button" value="Click to set paragraph background color" onclick="set_background()">
<p>w3resource JavaScript Exercises</p>
<p>w3resource PHP Exercises</p>
</body>
</html>
==============================*/
function setBackground(){
    var docBody = document.getElementsByTagName("body")[0];
    myBodyElements = docBody.getElementsByTagName("p");
    myp1 = myBodyElements[0];
    myp1.style.background = "rgb(255, 0, 0)";
    myp2 = myBodyElements[1];
    myp2.style.background = "rgb(255, 255, 0)";
}


/*==============================

4. Here is a sample html file with a submit button. Write a JavaScript function to get the value
of the href, hreflang, rel, target, and type attributes of the specified link.

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
</head>
<body>
<p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self"
href="http://www.w3resource.com/">w3resource</a></p>
<button onclick="getAttributes()">Click here to get  attributes value</button>
</body></html>
==============================*/
function getAttributes(){
    var h = document.getElementById("w3r").href;
    var l = document.getElementById("w3r").hreflang;
    var r = document.getElementById("w3r").rel;
    var tg = document.getElementById("w3r").target;
    var tp = document.getElementById("w3r").type;
}


/*==============================

5. Write a JavaScript function to add rows to a table. Go to the editor
Sample HTML file :

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html><head><br><meta charset=utf-8 />
<title>Insert row in a table - w3resource</title>
</head><body>
<table id="sampleTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
</table><br>
<input type="button" onclick="insert_Row()" value="Insert row">
</body></html>
==============================*/
function insert_Row(){
    var r = document.getElementById("sampleTable").insertRow(0);
    var c1 = x.insertCell(0);
    var c2 = x.insertCell(1);
    c1.innerHTML = "New Cell1";
    c2.innerHTML = "New Cell2";
}


/*==============================

6. Write a JavaScript function that accept row, column, (to identify a particular cell)
and a string to update the content of that cell.
Sample HTML file :

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html><head><br><meta charset=utf-8 />
<title>Change the content of a cell</title>
</head><body>
<table id="myTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
<tr><td>Row3 cell1</td>
<td>Row3 cell2</td></tr>
</table><form>
<input type="button" onclick="changeContent()" value="Change content">
</form></body></html>
==============================*/
function changeContent(){
    var rn = window.prompt("input the row number 0-2", "0");
    var cn = window.prompt("input the column number 0-1", "0");
    var content = windown.prompt("input the cell content");
    var x = document.getElementById("myTable").rows[parseInt(rn,10)].cells;
    x[parseInt(cn, 10)].innerHTML = content;
}


/*==============================

7. Write a JavaScript function that creates a table, accept row, column numbers from the
user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.
Sample HTML file :

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Change the content of a cell</title>
<style type="text/css">
body {margin: 30px;}
</style>
</head><body>
<table id="myTable" border="1">
</table><form>
<input type="button" onclick="createTable()" value="Create the table">
</form></body></html>
==============================*/
function createTable(){
    rn = window.prompt("Input number of rows", 1);
    cn = window.prompt("input number of columns", 1);
    for (var r=0; r<parseInt(rn, 10); r++){
        var x = document.getElementById('myTable').insertRow(r);
        for (var c=0; c<parseInt(cn, 10); c++){
            var y = x.insertCell(c);
            y.innerHTML = "Row-"+r+" Column-"+c;
        }
    }
}


/*==============================

8. Write a JavaScript program to remove items from a dropdown list.
Sample HTML file :

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Remove items from a dropdown list</title>
</head><body><form>
<select id="colorSelect">
<option>Red</option>
<option>Green</option>
<option>White</option>
<option>Black</option>
</select>
<input type="button" onclick="removecolor()" value="Select and Remove"><br></form></body></html>
==============================*/
function removeColor(){
    var x = document.getElementById('colorSelect');
    x.remove(x.selectedIndex);
}


/*==============================

9. Write a JavaScript program to count and display the items of a dropdown list, in an alert
window.
Sample HTML file :

view plaincopy to clipboardprint?
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<style type="text/css">
body {margin: 30px;}
</style>
<title>Count and display items of a dropdown list - w3resource</title>
</head><body><form>
Select your favorite Color :
<select id="mySelect">
<option>Red</option>
<option>Green</option>
<option>Blue</option>
<option>White</option>
</select>
<input type="button" onclick="getOptions()" value="Count and Output all items">
</form></body></html>
==============================*/
function displayListItems(){
    var result = "";
    var x = document.getElementById('mySelect');
    for (var i=0; i<x.options.length; i++){
        result += x.options[i].value + "\n";
    }
    alert(result);
}


/*==============================

10. Write a JavaScript program to calculate the volume of a sphere.
Sample Output of the form :

volume sphere html form

==============================*/
function volumeSphere(){
    var volume;
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volumen = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;
}
window.onload = document.getElementById('MyForm').onsubmit = volumeSphere();

/*==============================

11. Write a JavaScript program to display a random image (clicking on a button) from
the following list. Go to the editor
Sample Image information :

"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"
==============================*/
function display_random_image()   {
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];
    var preBuffer = []
    for (var i=0; j=theImages.length; i<j; i++){
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
    function getRandomInt(min, max){
        imn = Math.floor(Math.random()*(max - min + 1)) + min;
        return preBuffer[imn];
    }
    var newImage = getRandomInt(0, preBuffer.length - 1);

    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p=0; p<l; p++){
        images[0].parentNode.removeChild(images[0]);
    }
    doument.body.appendChild(newImage);

}

/*==============================

12. Write a JavaScript program to highlight the bold words of the following paragraph,
on mouse over a certain link. Go to the editor
Sample link and text :
[On mouse over here bold words of the following paragraph will be highlighted]
We have just started this section for the users (beginner to intermediate) who want to
work with various JavaScript problems and write scripts online to test their JavaScript skill.
<!doctype html>
  <html>
  <head>
  <meta charset="UTF-8">
  <title>Get And Style All Tags</title>
  </head>
  <body>
  <p>[<a href="#" onMouseOver="highlight()" onMouseOut="returnNormal()">On mouse over here bold words of the following paragraph will be highlighted</a>]</p>
<p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
  </body>
  </html>
==============================*/
var bold_Items;
window.onload = getBoldItems();
function getBoldItems(){
    boldItems = document.getElementByTagName('strong');
}
function hightlight(){
    for (var i=0; i<boldItems.length; i++){
        boldItems[i].style.color = "green";
    }
}
function returnNormal(){
    for (var i=0; i<boldItems.length; i++){
        boldItems[i].style.color = "black";
    }
}

/*==============================

13. Write a JavaScript program to get the width and height of the window (any time the window
is resized).
==============================*/
function getSize(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    document.getElementById('wh').innerHTML = "<h1></h1>";

}


/*==============================
