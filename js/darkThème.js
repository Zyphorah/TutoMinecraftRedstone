let bool = true;

function chargerThemeDark() 
{
    let head = document.getElementsByTagName('HEAD')[0]; 
    let link = document.createElement('link');
    
    link.rel = 'stylesheet'; 
    link.type = 'text/css'; 
    link.href = 'css/thèmeDark.css'; 
    
    head.appendChild(link);
    console.log('thèmeDark.css chargé');
}
function suprimerThemeDark()
{
    // Sélectionnez l'élément à supprimer
var element = document.querySelector('link[rel="stylesheet"][href="css/thèmeDark.css"]');

// Supprimez l'élément du DOM
if (element) {
  element.parentNode.removeChild(element);
}

    console.log('thèmeDark.css suprimée');
}

function condition()
{
    if(bool == true)
    {
        chargerThemeDark();
        bool = false;
    }
    else
    {
        suprimerThemeDark();
        bool = true;
    }

}

function main()
{
    let button = document.getElementById("c-button");

    button.addEventListener("click",condition);
}
main();