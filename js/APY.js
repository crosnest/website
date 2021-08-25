var publicSpreadsheetUrl = '18SgICfA4La3UDA-JoaYjqhUEtRU9kAkEeqPMzXHnw-M';
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
    osmosis_apy.innerHTML = data.header4.replace(/\n/g, '');
 });
}

window.addEventListener('DOMContentLoaded', init)