window.function = function (address) {

  import fetch from "node-fetch"
  
  address = address.value;

  let url = 'https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + address;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
