$(document).ready(function() {
  //script for navigation

  $('.menu-link').menuFullpage({
    menu: '#menu',
    push: '.push',
    side: 'left',
    menuWidth: '100%',
    speed: '600',
    activeBtn: 'menu-open'
  })

  //contact budget

  $(document).on('input change', '#skill', function() {
    $('.skill-text').html($(this).val())
  })

  $(document).on('input change', '#desire', function() {
    $('.desire-text').html($(this).val())
  })
})
