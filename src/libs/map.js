ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.760222, 37.618582],

    zoom: 13,
  });

  var myPlacemark = new ymaps.Placemark([55.76947, 37.638966], null, {
    iconLayout: "default#image",
    iconImageHref: "./img/location.svg",
    iconImageSize: [12, 12],
    iconImageOffset: [0, 0],
  });
  myMap.geoObjects.add(myPlacemark);
}
