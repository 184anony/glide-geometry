window.function = function (address) {

  address = address.value;

  let url = 'https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + address;

  return url;
  
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       let text = Json.parse(data)
//       return text;
//     });
}
