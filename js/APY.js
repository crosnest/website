function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQsgkcjQ5FZ2ufzE7HML6N1o5IHGdcAPgQeK5PkUQrefyZXc12aHA2mCqIA75XspSIo9G5hAd1w46dm/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
            console.log(data[0])
            console.log(data[0].1)
            console.log(data[0[0]])
            cro_apy.innerHTML = data[0].1
          }
        })
    }
function showInfo(data) {
data.forEach(function(data) {
    cro_apy.innerHTML = data[0];
    console.log(cro_apy.innerHTML);
    kava_apy.innerHTML = data.header2.replace(/\n/g, '');
    fetch_apy.innerHTML = data.header3.replace(/\n/g, '');
    osmosis_apy.innerHTML = data.header4.replace(/\n/g, '');
    console.log(osmosis_apy.innerHTML)
 });
}

window.addEventListener('DOMContentLoaded', init)