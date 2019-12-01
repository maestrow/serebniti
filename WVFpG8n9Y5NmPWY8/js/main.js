var youtube;
$(document).ready(function () {
  
  youtube = new YOUTUBE('https://youtu.be/9MdV5g5Gd0I', () => {});
  
  $('.btn-play').on('click', function (e) {
    e.preventDefault(); // prevent scroll page after click on fixed element
    console.log('play');
    youtube.play();
  });
  
  $('.btn-pause').on('click', function (e) {
    e.preventDefault();
    console.log('pause');
    youtube.pause();
  });

  $('.btn-toggle-player').on('click', function (e) {
    e.preventDefault();
    $('.video-player').toggle();
  })

  $('[data-t]').on('click', function () {
    const t = $(this).data('t');
    youtube.setTime(t);
  });
});
