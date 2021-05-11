function openBtn() {
    var element = document.getElementById('menu-btn');
    var menu = document.getElementById('menu-section');
    let menuOpen = false;
    element.classList.toggle('open');
    menu.classList.toggle('open');
}
function ModalOpen() {
    var modal = document.getElementById('donation-box');
    modal.classList.toggle('open');
}
function CloseBox() {
  var element = document.getElementById('donation-box');
  $(element).removeClass('open')
}

$(function() {                       
    $(".container-checkbox").click(function() {  
      $('.container-checkbox').removeClass('selected')
      $(this).toggleClass('selected').siblings().removeClass('selected');
    });
  });

$(function() {                       
  $(".donation-items").click(function() {  
    $('.donation-items').removeClass('selected')
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
});

$(function() {                       
  $(".card-top-button").click(function() {  
    $('.donation-box').addClass('open');
  });
});

$('.donation-items').change(function(){
    if ($(this).find('.pladge-section').hasClass('open')){
    }
    else {
      $('.donation-items').find('.pladge-section').removeClass('open');
      $(this).find('.pladge-section').addClass('open');
    }
});

function soma() {
    var menu = document.getElementById('donation-box');
    var thanks = document.getElementById('thanks-box');
    var total = 89914;
    var cost = parseInt(document.querySelector("#pledge-value").value);
    total = total + cost
    document.getElementById('numerical').innerHTML = total;
    if (total === 91000) {
      document.getElementById('bar').style.width = '91%'
    }
    if (total >= 92000) {
      document.getElementById('bar').style.width = '92%'
    }
    if (total >= 93000) {
      document.getElementById('bar').style.width = '93%'
    }
    if (total >= 94000) {
      document.getElementById('bar').style.width = '94%'
    }
    if (total >= 95000) {
      document.getElementById('bar').style.width = '95%'
    }
    if (total >= 96000) {
      document.getElementById('bar').style.width = '96%'
    }
    if (total >= 97000) {
      document.getElementById('bar').style.width = '97%'
    }
    if (total >= 98000) {
      document.getElementById('bar').style.width = '98%'
    }
    if (total >= 99000) {
      document.getElementById('bar').style.width = '99%'
    }
    if (total >= 100000) {
      document.getElementById('bar').style.width = '100%'
    };
    $(menu).removeClass('open');
    $(thanks).addClass('open')
}

$(function(){
  var counter = 5007
   $('.pledge-continue').click(function(){
     counter = counter + 1
     document.getElementById('backers').innerHTML = counter
   })
})

$(function(){
  $('.thanks-button').click(function(){
    $('.thanks-box').removeClass('open');
  })
})

$(function(){
  $('.bookmark').click(function(){
    $('.card-top-bookmark').toggleClass('filter');
    $('.card-top-bookmark-check').toggleClass('filter');
  })
})



/** gambiarra das somas pq por algum motivo nao quer funcionar normalmente **/


function soma1() {
    var menu = document.getElementById('donation-box');
    var thanks = document.getElementById('thanks-box');
    var total = 89914;
    var cost = parseInt(document.querySelector("#pledge-value1").value);
    total = total + cost
    document.getElementById('numerical').innerHTML = total;
    $(menu).removeClass('open');
    $(thanks).addClass('open')
}
function soma2() {
    var menu = document.getElementById('donation-box');
    var thanks = document.getElementById('thanks-box');
    var total = 89914;
    var cost = parseInt(document.querySelector("#pledge-value2").value);
    total = total + cost
    document.getElementById('numerical').innerHTML = total;
    $(menu).removeClass('open');
    $(thanks).addClass('open')
}
function soma3() {
    var menu = document.getElementById('donation-box');
    var thanks = document.getElementById('thanks-box');
    var total = 89914;
    var cost = parseInt(document.querySelector("#pledge-value3").value);
    total = total + cost
    document.getElementById('numerical').innerHTML = total;
    $(menu).removeClass('open');
    $(thanks).addClass('open')
}

/** fim da gambiarra **/

