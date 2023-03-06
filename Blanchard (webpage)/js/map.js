// map
ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      zoom: 14,
    }),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Blanchard",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "./img/contacts-map-img.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      }
    );
  myMap.geoObjects.add(myPlacemark);
});
