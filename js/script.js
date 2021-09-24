let navMenuElems = document.querySelectorAll('.navMenuElem');

for(var i = 0; i < navMenuElems.length;i++)
{
    navMenuElems[i].onclick = function(e) {        
        if(this.classList.contains('collapsed') == false)
        {
            for(var i = 0; i < navMenuElems.length;i++)
            {
                if(this != navMenuElems[i])
                    navMenuElems[i].classList.remove('collapsed');
            }
            this.classList.add('collapsed');            
        }
        else
        {
            this.classList.remove('collapsed');            
        }
        e.stopPropagation();
    };
}

document.body.onclick = function(e)
{
    for(var i = 0; i < navMenuElems.length;i++)
        navMenuElems[i].classList.remove('collapsed');
}


var icon = document.querySelector('.burgerIconWrapper');
icon.onclick = function()
{    
    var x = document.querySelector('.dropdownMenuWrapper');    
    var burgerIcon = document.querySelector('.burgerIcon');
    if (x.style.display === "none" || x.style.display === '')
    {
        burgerIcon.classList.add('collapsed');
        x.style.display = "block";
    }
    else
    {
        burgerIcon.classList.remove('collapsed');
        x.style.display = "none";
    }
}
