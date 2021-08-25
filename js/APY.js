function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQsgkcjQ5FZ2ufzE7HML6N1o5IHGdcAPgQeK5PkUQrefyZXc12aHA2mCqIA75XspSIo9G5hAd1w46dm/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
          }
        })
    }
function showInfo(data) {
data.forEach(function(data) {
    cro_apy.innerHTML = data.header;
    console.log(data.header);
    kava_apy.innerHTML = data.header2.replace(/\n/g, '');
    fetch_apy.innerHTML = data.header3.replace(/\n/g, '');
    osmosis_apy.innerHTML = data.header4.replace(/\n/g, '');
 });
}

window.addEventListener('DOMContentLoaded', init)