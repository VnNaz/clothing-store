let clothTypes = document.querySelectorAll('.cloth-types');

for(let clothType of clothTypes)
{
    clothType.addEventListener('click', function(e){
        if(e.target.classList.contains('cloth-types'))
        {
            e.target.classList.toggle('active');
        }
    })
    clothType.addEventListener('mouseleave', function(e){
        if(e.target.classList.contains('cloth-types'))
        {
            e.target.classList.remove('active');
        }
    })
}