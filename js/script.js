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