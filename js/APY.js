var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQsgkcjQ5FZ2ufzE7HML6N1o5IHGdcAPgQeK5PkUQrefyZXc12aHA2mCqIA75XspSIo9G5hAd1w46dm/pubhtml?gid=0&single=true';
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