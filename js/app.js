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
    loadGods(gods).then(r => loadRoles());
  });
  
});

async function loadGods(data = gods) {
  $('#all_gods').html('');
  
  $.each(data, function(index, god) {
    
    let html = '';
    
    let card = god.card.replace("'", '');
    
    html += `<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2 mb-4"><div class="god">`;
    html += `<div class="god-img"><img src="`+ card +`" alt="`+ god.name +` Card"></div>`;
    html += `<div class="god-detail"><div class="god-details"><div class="god-name">`+ god.name +`</div>`;
    html += `<div class="god-desc">`+ god.title +`</div></div></div></div></div>`;
    
    $('#all_gods').append(html);
    
  });
}

function loadRoles(data = gods) {
  let $box = $('#filter-box').find('ul');
  let roles = [];
  let html = ``;
  
  $.each(data, function (index, god) {
    if (!roles.includes(god.role)) {
      roles.push(god.role);
      roles.sort();
    }
  });
  
  $.each(roles, function (index, role) {
    html += `<li>`;
    html += `<label class="role-option-container">` + role;
    html += `<input type="checkbox" name="role" value="`+ role +`">`;
    html += `<span class="role-option-mark"></span>`;
    html += `</label>`;
    html += `</li>`;
  });
  
  $box.append(html);
}

$('#random_god').click(function() {
  let filter = [];
  let number = Math.floor(Math.random() * (gods.length));
  let show = [];
  
  $.each($('#filter-box').find('input[name=role]:checked'), function(index, input) {
    if (!filter.includes(input)) {
      filter.push(input.value);
    }
  });
  
  if (filter.length > 0) {
    let tempData = {};
    $.each(gods, function(index, god) {
      if (filter.includes(god.role)) {
        tempData = {id: god.id, name: god.name, title: god.title, free: god.free, new: god.new, pantheon: god.pantheon, pros: god.pros, type: god.type, role: god.role, card: god.card, pantheon_EN: god.pantheon_EN, god_name_EN: god.god_name_EN};
        show.push(tempData);
      }
    });
    number = Math.floor(Math.random() * (show.length));
  }else {
    show = gods;
  }
  
  loadGods([show[number]]).then();
});

$('#filter-button').click(function () {
  $('#filter-box').toggleClass('d-block');
});
