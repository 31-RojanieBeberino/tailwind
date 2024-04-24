$(document).ready(function(){
    $('.nav-toggle').click(function(){
        $('.nav-list').addClass('openNav-menu');
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
