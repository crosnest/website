function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQsgkcjQ5FZ2ufzE7HML6N1o5IHGdcAPgQeK5PkUQrefyZXc12aHA2mCqIA75XspSIo9G5hAd1w46dm/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
              console.log(data[0].header)
              cro_apy.innerHTML = data[0].header;
              kava_apy.innerHTML = data[0].header2;
              fetch_apy.innerHTML = data[0].header3;
              osmosis_apy.innerHTML = data[0].header4
          }
        })
    }

window.addEventListener('DOMContentLoaded', init)