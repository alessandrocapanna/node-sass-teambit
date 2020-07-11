$('.nav-burger i.fa-bars').click(
  function(){
    $('.burger-list, i.fa-times').show(500);
    $('i.fa-bars').hide(0);
  }
);
$('.nav-burger i.fa-times').click(
  function(){
    $('.burger-list, i.fa-times').hide(500);
    $('i.fa-bars').show(0);
  }
);

// $(document).on('click', '.nav-burger i.fa-times'
//   function(){
//     $('.burger-list').hide(500);
//     $('i.fa-bars').removeClass('fa-times').addClass('fa-bars');
//   }
// );
