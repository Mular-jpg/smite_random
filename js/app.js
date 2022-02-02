/* 
API URL
EN https://cms.smitegame.com/wp-json/smite-api/all-gods/1
ES https://cms.smitegame.com/wp-json/smite-api/all-gods/9

El último número indica el idioma de respuesta, hacer pruebas con los otros idiomas
*/

let gods = {}

$(document).ready(function () {
  
  $.ajax({
    type: 'GET',
    url: 'https://cms.smitegame.com/wp-json/smite-api/all-gods/1',
    dataType: 'json'
  }).done(function (response) {
    gods = response;
    loadGods(gods);
  });
  
});

function loadGods(data = gods) {
  $('#all_gods').html('');
  
  $.each(data, function(index, god) {
    
    let html = '';
    
    let card = god.card.replace("'", '');
    
    html += `<div class="col-2 mb-4"><div class="god">`;
    html += `<div class="god-img"><img src="`+ card +`" alt="`+ god.name +` Card"></div>`;
    html += `<div class="god-detail"><div class="god-details"><div class="god-name">`+ god.name +`</div>`;
    html += `<div class="god-desc">`+ god.title +`</div></div></div></div></div>`;
    
    $('#all_gods').append(html);
    
  });
}

$('#random_god').click(function() {
  let number = Math.floor(Math.random() * (gods.length + 1));
  
  loadGods([gods[number]]);
});