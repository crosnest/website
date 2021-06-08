  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1ut6PZe7GcGd2TBqpVPQcERh2nkhfMNx-TKFj0l8paFU/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

function showInfo(data, tabletop) {
data.forEach(function(data) {
    cro_apy.innerHTML = data.header.replace(/\n/g, '');
    kava_apy.innerHTML = data.header2.replace(/\n/g, '');
    fetch_apy.innerHTML = data.header3.replace(/\n/g, '');
 });
}

window.addEventListener('DOMContentLoaded', init)