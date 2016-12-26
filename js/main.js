
//.parallax(xPosition, speedFactor, outerHeight) options:
//xPosition - Horizontal position of the element
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
$('#intro').parallax("50%", 0.1);
$('#second').parallax("50%", 0.1);
$('#third').parallax("50%", 0.3);
$('#footer').parallax("50%", 0.3);

//NOTE: Not used in this demo by available in the plugin - outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
