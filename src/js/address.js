var addressList = document.querySelectorAll(".service-list__city-name");
var body = document.querySelector("body");

$(document).ready(function() {
  if (addressList) {
    var openServiceAddressInfo = function(elem) {
      elem.addEventListener("click", function(e) {
        e.stopPropagation();
        var addressInfoBlockActive = document.querySelectorAll(
          ".service-address.active"
        );
        addressInfoBlockActive.forEach(function(item) {
          item.classList.remove("active");
        });
        var addressInfoBlock = elem.querySelector(".service-address");
        if (addressInfoBlock) {
          addressInfoBlock.classList.add("active");
        }
      });
    };

    addressList.forEach(openServiceAddressInfo);

    body.addEventListener("click", function(e) {
      e.stopPropagation();
      var addressInfoBlockActive = document.querySelector(
        ".service-address.active"
      );
      addressInfoBlockActive.classList.remove("active");
    });
  }
});
