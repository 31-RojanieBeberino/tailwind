// js for Create-Your-Listing-Main-Page-Add-Home-Tab.html
document.addEventListener('DOMContentLoaded', () => {
  const radioButtons = document.querySelectorAll('input[name="form-toggle"]');
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');

  radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
          if (radio.value === 'form1') {
              form1.style.display = 'flex';
              form2.style.display = 'none';
          } else if (radio.value === 'form2') {
              form1.style.display = 'none';
              form2.style.display = 'flex';
          }
      });
  });
});
//! js for Create-Your-Listing-Main-Page-Add-Home-Tab.html

// js for Create-Your-Listing-Main-Page-Add-Home-Tab-Step-2.html
  document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="form-toggle"]');
    const form1 = document.getElementById('step2form1');
    const form2 = document.getElementById('step2form2');
    const form3 = document.getElementById('step2form3');
    const form4 = document.getElementById('step2form4');
    const form5 = document.getElementById('step2form5');
    const form6 = document.getElementById('step2form6');
    const form7 = document.getElementById('step2form7');
  
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'step2form1') {
                form1.style.display = 'flex';
                form2.style.display = 'none';
                form3.style.display = 'none';
                form4.style.display = 'none';
                form5.style.display = 'none';
                form6.style.display = 'none';
                form7.style.display = 'none';
            } else if (radio.value === 'step2form2') {
                form1.style.display = 'none';
                form2.style.display = 'flex';
                form3.style.display = 'none';
                form4.style.display = 'none';
                form5.style.display = 'none';
                form6.style.display = 'none';
                form7.style.display = 'none';
            } else if (radio.value === 'step2form3') {
                form1.style.display = 'none';
                form2.style.display = 'none';
                form3.style.display = 'flex';
                form4.style.display = 'none';
                form5.style.display = 'none';
                form6.style.display = 'none';
                form7.style.display = 'none';
            } else if (radio.value === 'step2form4') {
                form1.style.display = 'none';
                form2.style.display = 'none';
                form3.style.display = 'none';
                form4.style.display = 'flex';
                form5.style.display = 'none';
                form6.style.display = 'none';
                form7.style.display = 'none';
            } else if (radio.value === 'step2form5') {
                form1.style.display = 'none';
                form2.style.display = 'none';
                form3.style.display = 'none';
                form4.style.display = 'none';
                form5.style.display = 'flex';
                form6.style.display = 'none';
                form7.style.display = 'none';
            } else if (radio.value === 'step2form6') {
                form1.style.display = 'none';
                form2.style.display = 'none';
                form3.style.display = 'none';
                form4.style.display = 'none';
                form5.style.display = 'none';
                form6.style.display = 'flex';
                form7.style.display = 'none';
            } else if (radio.value === 'step2form7') {
                form1.style.display = 'none';
                form2.style.display = 'none';
                form3.style.display = 'none';
                form4.style.display = 'none';
                form5.style.display = 'none';
                form6.style.display = 'none';
                form7.style.display = 'flex';
            } 
        });
    });
  });
//! js for Create-Your-Listing-Main-Page-Add-Home-Tab-Step-2.html



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
