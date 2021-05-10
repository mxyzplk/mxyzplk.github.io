function selSection (selection) 
{
    var inputSel = selection.getAttribute('value');
    var menuItem = document.getElementById(inputSel);
    var menuItems = document.querySelectorAll("section.menu-section");

    for (var i = 0; i < menuItems.length; i++) 
    {
        menuItems[i].style.display = "none";
    }    

    menuItem.style.display = "block";

}


