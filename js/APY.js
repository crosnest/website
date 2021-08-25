var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ33O19IECOG6D5fj7IS65kI2BCcFdfCjA63tFlMIeRXVCfLwIc7VDpLrtdKyDkC49Zt5l4AEDzcq2u/pubhtml';
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