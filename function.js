import fetch from "node-fetch"

function geometry(address) {
  
  address = address.value;

  let url = 'https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + address;
  
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     });
  
  return url;
}
