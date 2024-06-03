$(document).ready(function(){
    $('.nav-toggle').click(function(){
        $('.nav-list').addClass('openNav-menu');
    })


    $('.nav-create-btn').click(function(){
      $('.nav-list').removeClass('openNav-menu');
  })

  $('.nav-sign-in').click(function(){
    $('.nav-list').removeClass('openNav-menu');
})

    $('.close').click(function(){
        $('.nav-list').removeClass('openNav-menu');
    })


    $(function() {
        // Initialize the date range picker
        $('#daterange').daterangepicker();
      });

      $(function() {
        // Initialize the date range picker
        $('#daterange-main').daterangepicker();
      });



  $('.nav-sign-in').click(function(){
    $('.sign-in-sec').addClass('show-sign-in-card');
    $('body').css('overflow', 'hidden');
  })

  $('.close-card').click(function(){
    $('.sign-in-sec').removeClass('show-sign-in-card');
    $('body').css('overflow', 'auto');
  })

  $('.nav-create-btn').click(function(){
    $('.sign-up-sec').addClass('show-sign-up-card');
    $('body').css('overflow', 'hidden');
  })

  $('.close-card').click(function(){
    $('.sign-up-sec').removeClass('show-sign-up-card');
    $('body').css('overflow', 'auto');
  })


  $('.pop-btn-signup').click(function(){
    $('.sign-up-sec').addClass('show-sign-up-card');
    $('.sign-in-sec').removeClass('show-sign-in-card');
    $('body').css('overflow', 'hidden');
  })

  $('.pop-btn-signin').click(function(){
    $('.sign-in-sec').addClass('show-sign-in-card');
    $('.sign-up-sec').removeClass('show-sign-up-card');
    $('body').css('overflow', 'hidden');
  })






});



let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel li');
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
    const carouselWidth = totalSlides * slideWidth;

    document.querySelector('.carousel ul').style.width = carouselWidth + 'px';

    function showSlides() {
        const newPosition = -slideIndex * slideWidth;
        document.querySelector('.carousel ul').style.transform = `translateX(${newPosition}px)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }
        showSlides();
    });

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        showSlides();
    });

    showSlides();



    document.addEventListener('DOMContentLoaded', function() {
        const accordionItems = document.querySelectorAll('.accordion-item');
    
        accordionItems.forEach(item => {
          const header = item.querySelector('.accordion-header');
    
          header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
    
            accordionItems.forEach(item => {
              item.classList.remove('active');
            });
    
            if (!isActive) {
              item.classList.add('active');
            }
          });
        });
      });
