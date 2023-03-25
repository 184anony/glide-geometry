window.function = function (address) {

  address = address.value;

  let url = 'https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + address;
  
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.addEventListener("load", function () {
    return this.responseText;
  });
}
