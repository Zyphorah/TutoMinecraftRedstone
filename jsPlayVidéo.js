       
// Sélectionnez votre élément vidéo
var video = document.querySelector('video');

// Ajoutez un écouteur d'événements pour 'ended', qui est déclenché lorsque la vidéo se termine
 video.addEventListener('ended', function() 
{
    // Quand la vidéo se termine, remettez le temps à 0
    video.currentTime = 0;
          // Et jouez la vidéo à nouveau
          video.play();
});