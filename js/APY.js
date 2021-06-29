  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1ut6PZe7GcGd2TBqpVPQcERh2nkhfMNx-TKFj0l8paFU/edit?usp=sharing';
  var osmosisStatus = 'https://api-osmosis.cosmostation.io/v1/status'
  //var osmosisStatus = 'json/status.json'

$.getJSON(osmosisStatus, function(json) {
    osmosis_apy.innerHTML = (0.95 * (75000000 / (json.bonded_tokens / 1000000)) * 100).toFixed(2) + '%';
});

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