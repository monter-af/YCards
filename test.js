ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager();

    myMap.geoObjects.add(objectManager);
var data, ttt;

ttt = `
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 0,
      "geometry": {
        "type": "Point",
        "coordinates": [44.154019, 133.274163]
      },
      "properties": {
        "balloonContent": "г. Арсеньев, ул. Жуковского, д. 41",
        "hintContent": "г. Арсеньев, ул. Жуковского, д. 41",
        "clusterCaption": "Арс"
      },
      "options": {
        "iconColor": "#3300ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": [44.158003, 133.272789]
      },
      "properties": {
        "balloonContent": "г. Арсеньев, ул. Островского, д. 11",
        "hintContent": "г. Арсеньев, ул. Островского, д. 11",
        "clusterCaption": "Арс"
      },
      "options": {
        "iconColor": "#3300ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 2,
      "geometry": {
        "type": "Point",
        "coordinates": [44.157156, 133.27154]
      },
      "properties": {
        "balloonContent": "г. Арсеньев, ул. Островского, д. 7",
        "hintContent": "г. Арсеньев, ул. Островского, д. 7",
        "clusterCaption": "Арс"
      },
      "options": {
        "iconColor": "#3300ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 3,
      "geometry": {
        "type": "Point",
        "coordinates": [44.159736, 133.272555]
      },
      "properties": {
        "balloonContent": "г. Арсеньев, ул. Садовая, д. 12",
        "hintContent": "г. Арсеньев, ул. Садовая, д. 12",
        "clusterCaption": "Арс"
      },
      "options": {
        "iconColor": "#ccff00",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 4,
      "geometry": {
        "type": "Point",
        "coordinates": [43.32865, 132.102024]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Берзарина, д. 11",
        "hintContent": "г. Артем, ул. Берзарина, д. 11",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 5,
      "geometry": {
        "type": "Point",
        "coordinates": [43.358088, 132.167619]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Вокзальная, д. 35/4",
        "hintContent": "г. Артем, ул. Вокзальная, д. 35/4",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 6,
      "geometry": {
        "type": "Point",
        "coordinates": [43.358232, 132.168508]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Вокзальная, д. 49/3",
        "hintContent": "г. Артем, ул. Вокзальная, д. 49/3",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 7,
      "geometry": {
        "type": "Point",
        "coordinates": [43.358383, 132.169388]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Вокзальная, д. 49А",
        "hintContent": "г. Артем, ул. Вокзальная, д. 49А",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 8,
      "geometry": {
        "type": "Point",
        "coordinates": [43.359412, 132.20012]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Горького, д. 8/1",
        "hintContent": "г. Артем, ул. Горького, д. 8/1",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 9,
      "geometry": {
        "type": "Point",
        "coordinates": [43.35835, 132.189313]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Дзержинского, д. 23",
        "hintContent": "г. Артем, ул. Дзержинского, д. 23",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 10,
      "geometry": {
        "type": "Point",
        "coordinates": [43.359621, 132.207594]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Кирова, д. 66/1",
        "hintContent": "г. Артем, ул. Кирова, д. 66/1",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#333333",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 11,
      "geometry": {
        "type": "Point",
        "coordinates": [43.362197, 132.212831]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Кирова, д. 74",
        "hintContent": "г. Артем, ул. Кирова, д. 74",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#333333",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 12,
      "geometry": {
        "type": "Point",
        "coordinates": [43.363777, 132.214906]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Кирова, д. 78Б",
        "hintContent": "г. Артем, ул. Кирова, д. 78Б",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 13,
      "geometry": {
        "type": "Point",
        "coordinates": [43.347612, 132.190032]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Ключевая",
        "hintContent": "г. Артем, ул. Ключевая",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 14,
      "geometry": {
        "type": "Point",
        "coordinates": [43.35401, 132.201988]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Куйбышева, д. 1",
        "hintContent": "г. Артем, ул. Куйбышева, д. 1",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 15,
      "geometry": {
        "type": "Point",
        "coordinates": [43.361483, 132.200973]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Куйбышева, д. 4",
        "hintContent": "г. Артем, ул. Куйбышева, д. 4",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 16,
      "geometry": {
        "type": "Point",
        "coordinates": [43.359398, 132.201647]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Куйбышева, д. 9",
        "hintContent": "г. Артем, ул. Куйбышева, д. 9",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 17,
      "geometry": {
        "type": "Point",
        "coordinates": [43.357871, 132.19959]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Лазо, д. 35",
        "hintContent": "г. Артем, ул. Лазо, д. 35",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 18,
      "geometry": {
        "type": "Point",
        "coordinates": [43.372912, 132.227276]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Ляпидевского",
        "hintContent": "г. Артем, ул. Ляпидевского",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 19,
      "geometry": {
        "type": "Point",
        "coordinates": [43.353853, 132.195574]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Октябрьская, д. 25",
        "hintContent": "г. Артем, ул. Октябрьская, д. 25",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 20,
      "geometry": {
        "type": "Point",
        "coordinates": [43.351565, 132.174598]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Партизанская, д. 4",
        "hintContent": "г. Артем, ул. Партизанская, д. 4",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 21,
      "geometry": {
        "type": "Point",
        "coordinates": [43.350516, 132.177689]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Первомайская, д. 9",
        "hintContent": "г. Артем, ул. Первомайская, д. 9",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 22,
      "geometry": {
        "type": "Point",
        "coordinates": [43.363534, 132.203497]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Полтавская, д. 1А",
        "hintContent": "г. Артем, ул. Полтавская, д. 1А",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 23,
      "geometry": {
        "type": "Point",
        "coordinates": [43.344452, 132.138037]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Совхозная, д. 10А/1",
        "hintContent": "г. Артем, ул. Совхозная, д. 10А/1",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 24,
      "geometry": {
        "type": "Point",
        "coordinates": [43.344452, 132.138037]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Совхозная, д. 10А/2",
        "hintContent": "г. Артем, ул. Совхозная, д. 10А/2",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 25,
      "geometry": {
        "type": "Point",
        "coordinates": [43.344452, 132.138037]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Совхозная, д. 10А/3",
        "hintContent": "г. Артем, ул. Совхозная, д. 10А/3",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 26,
      "geometry": {
        "type": "Point",
        "coordinates": [43.344452, 132.138037]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Совхозная, д. 10А/4",
        "hintContent": "г. Артем, ул. Совхозная, д. 10А/4",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 27,
      "geometry": {
        "type": "Point",
        "coordinates": [43.344452, 132.138037]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Совхозная, д. 10А/5",
        "hintContent": "г. Артем, ул. Совхозная, д. 10А/5",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 28,
      "geometry": {
        "type": "Point",
        "coordinates": [43.341515, 132.178461]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Тигровая",
        "hintContent": "г. Артем, ул. Тигровая",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 29,
      "geometry": {
        "type": "Point",
        "coordinates": [43.362695, 132.220107]
      },
      "properties": {
        "balloonContent": "г. Артем, ул. Хасанская, д. 16",
        "hintContent": "г. Артем, ул. Хасанская, д. 16",
        "clusterCaption": "Арт"
      },
      "options": {
        "iconColor": "#cccccc",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 30,
      "geometry": {
        "type": "Point",
        "coordinates": [43.113983, 132.358879]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 12А",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 12А",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 31,
      "geometry": {
        "type": "Point",
        "coordinates": [43.113285, 132.359544]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 14",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 14",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 32,
      "geometry": {
        "type": "Point",
        "coordinates": [43.11289, 132.359741]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 16",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 16",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 33,
      "geometry": {
        "type": "Point",
        "coordinates": [43.108579, 132.36028]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 22",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 22",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 34,
      "geometry": {
        "type": "Point",
        "coordinates": [43.107809, 132.361188]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 25",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 25",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 35,
      "geometry": {
        "type": "Point",
        "coordinates": [43.107223, 132.361017]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 27",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 27",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 36,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119149, 132.356256]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 4",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 4",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 37,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118563, 132.35657]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Академика Курчатова, д. 6",
        "hintContent": "г. Большой Камень, ул. Академика Курчатова, д. 6",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 38,
      "geometry": {
        "type": "Point",
        "coordinates": [43.113937, 132.348746]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Аллея Труда, д. 12",
        "hintContent": "г. Большой Камень, ул. Аллея Труда, д. 12",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 39,
      "geometry": {
        "type": "Point",
        "coordinates": [43.112396, 132.343185]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Блюхера, д. 10/1",
        "hintContent": "г. Большой Камень, ул. Блюхера, д. 10/1",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#cc9900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 40,
      "geometry": {
        "type": "Point",
        "coordinates": [43.108652, 132.346365]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Блюхера, д. 5",
        "hintContent": "г. Большой Камень, ул. Блюхера, д. 5",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 41,
      "geometry": {
        "type": "Point",
        "coordinates": [43.110777, 132.359418]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Гагарина, д. 18",
        "hintContent": "г. Большой Камень, ул. Гагарина, д. 18",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 42,
      "geometry": {
        "type": "Point",
        "coordinates": [43.110462, 132.355591]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Гагарина, д. 25",
        "hintContent": "г. Большой Камень, ул. Гагарина, д. 25",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 43,
      "geometry": {
        "type": "Point",
        "coordinates": [43.11029, 132.356471]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Гагарина, д. 29",
        "hintContent": "г. Большой Камень, ул. Гагарина, д. 29",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 44,
      "geometry": {
        "type": "Point",
        "coordinates": [43.111732, 132.356624]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Гагарина, д. 39",
        "hintContent": "г. Большой Камень, ул. Гагарина, д. 39",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 45,
      "geometry": {
        "type": "Point",
        "coordinates": [43.112258, 132.35922]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Гагарина, д. 41",
        "hintContent": "г. Большой Камень, ул. Гагарина, д. 41",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 46,
      "geometry": {
        "type": "Point",
        "coordinates": [43.112192, 132.358331]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Гагарина, д. 45",
        "hintContent": "г. Большой Камень, ул. Гагарина, д. 45",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 47,
      "geometry": {
        "type": "Point",
        "coordinates": [43.10958, 132.350345]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Карла Маркса, д. 33",
        "hintContent": "г. Большой Камень, ул. Карла Маркса, д. 33",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 48,
      "geometry": {
        "type": "Point",
        "coordinates": [43.109672, 132.34023]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Комсомольская, д. 3",
        "hintContent": "г. Большой Камень, ул. Комсомольская, д. 3",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 49,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115681, 132.355744]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Крылова, д. 2",
        "hintContent": "г. Большой Камень, ул. Крылова, д. 2",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 50,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116227, 132.354747]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Крылова, д. 4",
        "hintContent": "г. Большой Камень, ул. Крылова, д. 4",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 51,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116279, 132.358133]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Курчатова, д. 10",
        "hintContent": "г. Большой Камень, ул. Курчатова, д. 10",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 52,
      "geometry": {
        "type": "Point",
        "coordinates": [43.108566, 132.361259]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Курчатова, д. 21",
        "hintContent": "г. Большой Камень, ул. Курчатова, д. 21",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#cc9900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 53,
      "geometry": {
        "type": "Point",
        "coordinates": [43.107579, 132.340975]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Ленина, д. 12/1",
        "hintContent": "г. Большой Камень, ул. Ленина, д. 12/1",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#cc9900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 54,
      "geometry": {
        "type": "Point",
        "coordinates": [43.107579, 132.340975]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Ленина, д. 12/2",
        "hintContent": "г. Большой Камень, ул. Ленина, д. 12/2",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#cc9900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 55,
      "geometry": {
        "type": "Point",
        "coordinates": [43.108, 132.341604]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Ленина, д. 14",
        "hintContent": "г. Большой Камень, ул. Ленина, д. 14",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#cc9900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 56,
      "geometry": {
        "type": "Point",
        "coordinates": [43.106486, 132.356651]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Приморского Комсомола, д. 31",
        "hintContent": "г. Большой Камень, ул. Приморского Комсомола, д. 31",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 57,
      "geometry": {
        "type": "Point",
        "coordinates": [43.107019, 132.357513]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Приморского Комсомола, д. 33",
        "hintContent": "г. Большой Камень, ул. Приморского Комсомола, д. 33",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 58,
      "geometry": {
        "type": "Point",
        "coordinates": [43.106644, 132.3579]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Приморского Комсомола, д. 37",
        "hintContent": "г. Большой Камень, ул. Приморского Комсомола, д. 37",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 59,
      "geometry": {
        "type": "Point",
        "coordinates": [43.108744, 132.35074]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Приморского Комсомола, д. 5А",
        "hintContent": "г. Большой Камень, ул. Приморского Комсомола, д. 5А",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 60,
      "geometry": {
        "type": "Point",
        "coordinates": [43.104334, 132.349348]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 37",
        "hintContent": "г. Большой Камень, ул. Южная, д. 37",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 61,
      "geometry": {
        "type": "Point",
        "coordinates": [43.104939, 132.349465]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 39",
        "hintContent": "г. Большой Камень, ул. Южная, д. 39",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 62,
      "geometry": {
        "type": "Point",
        "coordinates": [43.105545, 132.349456]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 41",
        "hintContent": "г. Большой Камень, ул. Южная, д. 41",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 63,
      "geometry": {
        "type": "Point",
        "coordinates": [43.105255, 132.348961]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 43",
        "hintContent": "г. Большой Камень, ул. Южная, д. 43",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 64,
      "geometry": {
        "type": "Point",
        "coordinates": [43.10434, 132.348503]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 45",
        "hintContent": "г. Большой Камень, ул. Южная, д. 45",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 65,
      "geometry": {
        "type": "Point",
        "coordinates": [43.104926, 132.348548]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 47",
        "hintContent": "г. Большой Камень, ул. Южная, д. 47",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 66,
      "geometry": {
        "type": "Point",
        "coordinates": [43.104426, 132.347946]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 49",
        "hintContent": "г. Большой Камень, ул. Южная, д. 49",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 67,
      "geometry": {
        "type": "Point",
        "coordinates": [43.104623, 132.347354]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 51",
        "hintContent": "г. Большой Камень, ул. Южная, д. 51",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 68,
      "geometry": {
        "type": "Point",
        "coordinates": [43.104623, 132.346788]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 53",
        "hintContent": "г. Большой Камень, ул. Южная, д. 53",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#006633",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 69,
      "geometry": {
        "type": "Point",
        "coordinates": [43.104939, 132.346105]
      },
      "properties": {
        "balloonContent": "г. Большой Камень, ул. Южная, д. 55",
        "hintContent": "г. Большой Камень, ул. Южная, д. 55",
        "clusterCaption": "БК"
      },
      "options": {
        "iconColor": "#cc9900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 70,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116062, 131.892006]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пер. Почтовый, д. 9А",
        "hintContent": "г. Владивосток, пер. Почтовый, д. 9А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 71,
      "geometry": {
        "type": "Point",
        "coordinates": [43.162592, 131.91159]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 103",
        "hintContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 103",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 72,
      "geometry": {
        "type": "Point",
        "coordinates": [43.177511, 131.921606]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 130В",
        "hintContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 130В",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 73,
      "geometry": {
        "type": "Point",
        "coordinates": [43.193734, 131.920627]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 163",
        "hintContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 163",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 74,
      "geometry": {
        "type": "Point",
        "coordinates": [43.193734, 131.920627]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 163/1",
        "hintContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 163/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 75,
      "geometry": {
        "type": "Point",
        "coordinates": [43.188114, 131.925621]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 180",
        "hintContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 180",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 76,
      "geometry": {
        "type": "Point",
        "coordinates": [43.149261, 131.908284]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 30Д",
        "hintContent": "г. Владивосток, пр-т 100 лет Владивостока, д. 30Д",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 77,
      "geometry": {
        "type": "Point",
        "coordinates": [43.125091, 131.935898]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т Красного Знамени, д. 133/4к1",
        "hintContent": "г. Владивосток, пр-т Красного Знамени, д. 133/4к1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 78,
      "geometry": {
        "type": "Point",
        "coordinates": [43.125091, 131.935898]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т Красного Знамени, д. 133/4к2",
        "hintContent": "г. Владивосток, пр-т Красного Знамени, д. 133/4к2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 79,
      "geometry": {
        "type": "Point",
        "coordinates": [43.125091, 131.935898]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т Красного Знамени, д. 133/4к3",
        "hintContent": "г. Владивосток, пр-т Красного Знамени, д. 133/4к3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 80,
      "geometry": {
        "type": "Point",
        "coordinates": [43.130243, 131.894135]
      },
      "properties": {
        "balloonContent": "г. Владивосток, пр-т Океанский, д. 52",
        "hintContent": "г. Владивосток, пр-т Океанский, д. 52",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 81,
      "geometry": {
        "type": "Point",
        "coordinates": [43.262667, 132.03403]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 12К1",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 12К1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 82,
      "geometry": {
        "type": "Point",
        "coordinates": [43.262772, 132.033356]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 12К3",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 12К3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 83,
      "geometry": {
        "type": "Point",
        "coordinates": [43.262693, 132.032593]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 12К5",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 12К5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 84,
      "geometry": {
        "type": "Point",
        "coordinates": [43.262739, 132.032108]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 12К7",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 12К7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 85,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260094, 132.02847]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 19",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 19",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 86,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260126, 132.02917]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 19А",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 19А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 87,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260054, 132.027616]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 19Б",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 19Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 88,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260081, 132.026889]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 19В",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 19В",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 89,
      "geometry": {
        "type": "Point",
        "coordinates": [43.26163, 132.029027]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 19Дк1",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 19Дк1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 90,
      "geometry": {
        "type": "Point",
        "coordinates": [43.261531, 132.028371]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 19Дк2",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 19Дк2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 91,
      "geometry": {
        "type": "Point",
        "coordinates": [43.261709, 132.027616]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 19Дк3",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 19Дк3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 92,
      "geometry": {
        "type": "Point",
        "coordinates": [43.264039, 132.029314]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Линейная, д. 20",
        "hintContent": "г. Владивосток, ул. 2-я Линейная, д. 20",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 93,
      "geometry": {
        "type": "Point",
        "coordinates": [43.085459, 131.909272]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/1",
        "hintContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 94,
      "geometry": {
        "type": "Point",
        "coordinates": [43.085459, 131.909272]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/2",
        "hintContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 95,
      "geometry": {
        "type": "Point",
        "coordinates": [43.085459, 131.909272]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/3",
        "hintContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 96,
      "geometry": {
        "type": "Point",
        "coordinates": [43.085459, 131.909272]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/4",
        "hintContent": "г. Владивосток, ул. 2-я Поселковая, д. 1/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 97,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084077, 131.909218]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Поселковая, д. 3",
        "hintContent": "г. Владивосток, ул. 2-я Поселковая, д. 3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 98,
      "geometry": {
        "type": "Point",
        "coordinates": [43.085598, 131.903065]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Поселковая, д. 35",
        "hintContent": "г. Владивосток, ул. 2-я Поселковая, д. 35",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 99,
      "geometry": {
        "type": "Point",
        "coordinates": [43.090529, 131.956236]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Строительная, д. 25",
        "hintContent": "г. Владивосток, ул. 2-я Строительная, д. 25",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 100,
      "geometry": {
        "type": "Point",
        "coordinates": [43.090839, 131.957341]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 2-я Строительная, д. 27",
        "hintContent": "г. Владивосток, ул. 2-я Строительная, д. 27",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 101,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083859, 131.902822]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 15/1",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 15/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 102,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083859, 131.902822]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 15/2",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 15/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 103,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084933, 131.912389]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/1",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 104,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084577, 131.908167]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/14",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/14",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 105,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084432, 131.91256]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/2",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 106,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084564, 131.911707]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/3",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 16/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 107,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083471, 131.908428]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 22/1",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 22/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 108,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083524, 131.907332]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 3-я Поселковая, д. 22/2",
        "hintContent": "г. Владивосток, ул. 3-я Поселковая, д. 22/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 109,
      "geometry": {
        "type": "Point",
        "coordinates": [43.10178, 131.938252]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. 50 лет Октября, д. 1",
        "hintContent": "г. Владивосток, ул. 50 лет Октября, д. 1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 110,
      "geometry": {
        "type": "Point",
        "coordinates": [43.164657, 131.946148]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Горшкова, д. 5",
        "hintContent": "г. Владивосток, ул. Адмирала Горшкова, д. 5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 111,
      "geometry": {
        "type": "Point",
        "coordinates": [43.167859, 131.963881]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Горшкова, д. 50",
        "hintContent": "г. Владивосток, ул. Адмирала Горшкова, д. 50",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 112,
      "geometry": {
        "type": "Point",
        "coordinates": [43.167333, 131.967276]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Горшкова, д. 52/1",
        "hintContent": "г. Владивосток, ул. Адмирала Горшкова, д. 52/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 113,
      "geometry": {
        "type": "Point",
        "coordinates": [43.167609, 131.966585]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Горшкова, д. 52/2",
        "hintContent": "г. Владивосток, ул. Адмирала Горшкова, д. 52/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 114,
      "geometry": {
        "type": "Point",
        "coordinates": [43.167859, 131.965911]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Горшкова, д. 52/3",
        "hintContent": "г. Владивосток, ул. Адмирала Горшкова, д. 52/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 115,
      "geometry": {
        "type": "Point",
        "coordinates": [43.167622, 131.955445]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Горшкова, д. 57",
        "hintContent": "г. Владивосток, ул. Адмирала Горшкова, д. 57",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 116,
      "geometry": {
        "type": "Point",
        "coordinates": [43.162565, 131.94896]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Горшкова, д. 8",
        "hintContent": "г. Владивосток, ул. Адмирала Горшкова, д. 8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 117,
      "geometry": {
        "type": "Point",
        "coordinates": [43.167234, 131.960674]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Смирнова, д. 2",
        "hintContent": "г. Владивосток, ул. Адмирала Смирнова, д. 2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 118,
      "geometry": {
        "type": "Point",
        "coordinates": [43.165531, 131.962461]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Смирнова, д. 8",
        "hintContent": "г. Владивосток, ул. Адмирала Смирнова, д. 8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 119,
      "geometry": {
        "type": "Point",
        "coordinates": [43.125064, 131.944827]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Адмирала Юмашева, д. 14В/1",
        "hintContent": "г. Владивосток, ул. Адмирала Юмашева, д. 14В/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 120,
      "geometry": {
        "type": "Point",
        "coordinates": [43.126275, 131.884155]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Алеутская, д. 65А/1",
        "hintContent": "г. Владивосток, ул. Алеутская, д. 65А/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 121,
      "geometry": {
        "type": "Point",
        "coordinates": [43.126275, 131.884155]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Алеутская, д. 65А/2",
        "hintContent": "г. Владивосток, ул. Алеутская, д. 65А/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 122,
      "geometry": {
        "type": "Point",
        "coordinates": [43.126275, 131.884155]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Алеутская, д. 65А/3",
        "hintContent": "г. Владивосток, ул. Алеутская, д. 65А/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 123,
      "geometry": {
        "type": "Point",
        "coordinates": [43.158909, 131.953945]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Анны Щетининой, д. 12",
        "hintContent": "г. Владивосток, ул. Анны Щетининой, д. 12",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 124,
      "geometry": {
        "type": "Point",
        "coordinates": [43.159593, 131.955661]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Анны Щетининой, д. 14",
        "hintContent": "г. Владивосток, ул. Анны Щетининой, д. 14",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 125,
      "geometry": {
        "type": "Point",
        "coordinates": [43.160856, 131.956317]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Анны Щетининой, д. 20",
        "hintContent": "г. Владивосток, ул. Анны Щетининой, д. 20",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 126,
      "geometry": {
        "type": "Point",
        "coordinates": [43.15935, 131.951655]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Анны Щетининой, д. 7/1",
        "hintContent": "г. Владивосток, ул. Анны Щетининой, д. 7/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 127,
      "geometry": {
        "type": "Point",
        "coordinates": [43.159803, 131.953541]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Анны Щетининой, д. 9Б",
        "hintContent": "г. Владивосток, ул. Анны Щетининой, д. 9Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 128,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084525, 131.954143]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Архангельская, д. 23к1",
        "hintContent": "г. Владивосток, ул. Архангельская, д. 23к1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 129,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084393, 131.954799]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Архангельская, д. 23к2",
        "hintContent": "г. Владивосток, ул. Архангельская, д. 23к2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 130,
      "geometry": {
        "type": "Point",
        "coordinates": [43.085585, 131.96159]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Архангельская, д. 27",
        "hintContent": "г. Владивосток, ул. Архангельская, д. 27",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 131,
      "geometry": {
        "type": "Point",
        "coordinates": [43.130486, 131.943615]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Баляева, д. 49",
        "hintContent": "г. Владивосток, ул. Баляева, д. 49",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 132,
      "geometry": {
        "type": "Point",
        "coordinates": [43.071302, 131.929664]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Бархатная, д. 10Б",
        "hintContent": "г. Владивосток, ул. Бархатная, д. 10Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 133,
      "geometry": {
        "type": "Point",
        "coordinates": [43.081219, 131.956065]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 2",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 134,
      "geometry": {
        "type": "Point",
        "coordinates": [43.081219, 131.956065]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 2к3",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 2к3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 135,
      "geometry": {
        "type": "Point",
        "coordinates": [43.078295, 131.958787]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 3",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 136,
      "geometry": {
        "type": "Point",
        "coordinates": [43.078875, 131.962021]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 4/1",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 4/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 137,
      "geometry": {
        "type": "Point",
        "coordinates": [43.078875, 131.962021]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 4/2",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 4/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 138,
      "geometry": {
        "type": "Point",
        "coordinates": [43.078875, 131.962021]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 4/3",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 4/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 139,
      "geometry": {
        "type": "Point",
        "coordinates": [43.078295, 131.958787]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 5/1",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 5/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 140,
      "geometry": {
        "type": "Point",
        "coordinates": [43.078295, 131.958787]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Басаргина, д. 5/2",
        "hintContent": "г. Владивосток, ул. Басаргина, д. 5/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 141,
      "geometry": {
        "type": "Point",
        "coordinates": [43.089693, 131.970708]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Беляева, д. 4",
        "hintContent": "г. Владивосток, ул. Беляева, д. 4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 142,
      "geometry": {
        "type": "Point",
        "coordinates": [43.084446, 131.964132]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Борисенко, д. 100Д",
        "hintContent": "г. Владивосток, ул. Борисенко, д. 100Д",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 143,
      "geometry": {
        "type": "Point",
        "coordinates": [43.085552, 131.963638]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Борисенко, д. 100Е",
        "hintContent": "г. Владивосток, ул. Борисенко, д. 100Е",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 144,
      "geometry": {
        "type": "Point",
        "coordinates": [43.087303, 131.964321]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Борисенко, д. 100К",
        "hintContent": "г. Владивосток, ул. Борисенко, д. 100К",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 145,
      "geometry": {
        "type": "Point",
        "coordinates": [43.091991, 131.962767]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Борисенко, д. 110",
        "hintContent": "г. Владивосток, ул. Борисенко, д. 110",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 146,
      "geometry": {
        "type": "Point",
        "coordinates": [43.096191, 131.953855]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Борисенко, д. 48",
        "hintContent": "г. Владивосток, ул. Борисенко, д. 48",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 147,
      "geometry": {
        "type": "Point",
        "coordinates": [43.231613, 132.028937]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Брусничная, д. 3",
        "hintContent": "г. Владивосток, ул. Брусничная, д. 3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 148,
      "geometry": {
        "type": "Point",
        "coordinates": [43.231554, 132.029655]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Брусничная, д. 5",
        "hintContent": "г. Владивосток, ул. Брусничная, д. 5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 149,
      "geometry": {
        "type": "Point",
        "coordinates": [43.098475, 131.900954]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Брянская, д. 12",
        "hintContent": "г. Владивосток, ул. Брянская, д. 12",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 150,
      "geometry": {
        "type": "Point",
        "coordinates": [43.127308, 131.930302]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Верхняя, д. 20/1",
        "hintContent": "г. Владивосток, ул. Верхняя, д. 20/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 151,
      "geometry": {
        "type": "Point",
        "coordinates": [43.127308, 131.930302]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Верхняя, д. 20/2",
        "hintContent": "г. Владивосток, ул. Верхняя, д. 20/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 152,
      "geometry": {
        "type": "Point",
        "coordinates": [43.126683, 131.928981]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Верхняя, д. 7",
        "hintContent": "г. Владивосток, ул. Верхняя, д. 7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 153,
      "geometry": {
        "type": "Point",
        "coordinates": [43.099259, 131.925469]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Вилкова, д. 11",
        "hintContent": "г. Владивосток, ул. Вилкова, д. 11",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 154,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117694, 131.906299]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Володарского, д. 1",
        "hintContent": "г. Владивосток, ул. Володарского, д. 1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 155,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117247, 131.909137]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Володарского, д. 27",
        "hintContent": "г. Владивосток, ул. Володарского, д. 27",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 156,
      "geometry": {
        "type": "Point",
        "coordinates": [43.23294, 132.006551]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Вторая, д. 25А",
        "hintContent": "г. Владивосток, ул. Вторая, д. 25А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 157,
      "geometry": {
        "type": "Point",
        "coordinates": [43.233255, 132.006263]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Вторая, д. 25Б",
        "hintContent": "г. Владивосток, ул. Вторая, д. 25Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 158,
      "geometry": {
        "type": "Point",
        "coordinates": [43.233288, 132.006658]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Вторая, д. 25В",
        "hintContent": "г. Владивосток, ул. Вторая, д. 25В",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 159,
      "geometry": {
        "type": "Point",
        "coordinates": [43.128315, 131.93085]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Высокая, д. 27К1",
        "hintContent": "г. Владивосток, ул. Высокая, д. 27К1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 160,
      "geometry": {
        "type": "Point",
        "coordinates": [43.128315, 131.93085]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Высокая, д. 27К2",
        "hintContent": "г. Владивосток, ул. Высокая, д. 27К2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 161,
      "geometry": {
        "type": "Point",
        "coordinates": [43.158521, 131.91742]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гамарника, д. 18Б",
        "hintContent": "г. Владивосток, ул. Гамарника, д. 18Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 162,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119293, 131.962003]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гамзатова, д. 1",
        "hintContent": "г. Владивосток, ул. Гамзатова, д. 1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 163,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119122, 131.964608]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гамзатова, д. 7к1",
        "hintContent": "г. Владивосток, ул. Гамзатова, д. 7к1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 164,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119109, 131.965246]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гамзатова, д. 7к2",
        "hintContent": "г. Владивосток, ул. Гамзатова, д. 7к2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 165,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119122, 131.965902]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гамзатова, д. 7к3",
        "hintContent": "г. Владивосток, ул. Гамзатова, д. 7к3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 166,
      "geometry": {
        "type": "Point",
        "coordinates": [43.253528, 132.033743]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/1",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 167,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252865, 132.033779]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/10",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/10",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 168,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252622, 132.034578]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/2",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 169,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252425, 132.035252]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/3",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 170,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252865, 132.033779]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/4",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 171,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252865, 132.033779]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/5",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 172,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252865, 132.033779]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/6",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 173,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252865, 132.033779]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/7",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 174,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252865, 132.033779]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/8",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 175,
      "geometry": {
        "type": "Point",
        "coordinates": [43.252865, 132.033779]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 31/9",
        "hintContent": "г. Владивосток, ул. Главная, д. 31/9",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 176,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263777, 132.035018]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 32Г",
        "hintContent": "г. Владивосток, ул. Главная, д. 32Г",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 177,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263626, 132.033824]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 32Д",
        "hintContent": "г. Владивосток, ул. Главная, д. 32Д",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 178,
      "geometry": {
        "type": "Point",
        "coordinates": [43.251985, 132.025586]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Главная, д. 62/2",
        "hintContent": "г. Владивосток, ул. Главная, д. 62/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 179,
      "geometry": {
        "type": "Point",
        "coordinates": [43.121445, 131.902427]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гоголя, д. 29",
        "hintContent": "г. Владивосток, ул. Гоголя, д. 29",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 180,
      "geometry": {
        "type": "Point",
        "coordinates": [43.122294, 131.903056]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гоголя, д. 33",
        "hintContent": "г. Владивосток, ул. Гоголя, д. 33",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 181,
      "geometry": {
        "type": "Point",
        "coordinates": [43.121333, 131.905724]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грибоедова, д. 25",
        "hintContent": "г. Владивосток, ул. Грибоедова, д. 25",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 182,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119859, 131.911177]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грибоедова, д. 46А",
        "hintContent": "г. Владивосток, ул. Грибоедова, д. 46А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 183,
      "geometry": {
        "type": "Point",
        "coordinates": [43.098054, 131.942725]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Гризодубовой, д. 45",
        "hintContent": "г. Владивосток, ул. Гризодубовой, д. 45",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 184,
      "geometry": {
        "type": "Point",
        "coordinates": [43.256962, 132.026565]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 185,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/1",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 186,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/2",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 187,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/3",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 188,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/4",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 189,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/5",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 190,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/6",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 191,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/7",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 192,
      "geometry": {
        "type": "Point",
        "coordinates": [43.260494, 132.025442]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23А/8",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23А/8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 193,
      "geometry": {
        "type": "Point",
        "coordinates": [43.262385, 132.027374]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23В",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23В",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 194,
      "geometry": {
        "type": "Point",
        "coordinates": [43.262602, 132.026745]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Грязелечебница, д. 23Д",
        "hintContent": "г. Владивосток, ул. Грязелечебница, д. 23Д",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 195,
      "geometry": {
        "type": "Point",
        "coordinates": [43.227264, 131.977293]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Двенадцатая, д. 12",
        "hintContent": "г. Владивосток, ул. Двенадцатая, д. 12",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 196,
      "geometry": {
        "type": "Point",
        "coordinates": [43.226883, 131.976969]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Двенадцатая, д. 14",
        "hintContent": "г. Владивосток, ул. Двенадцатая, д. 14",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 197,
      "geometry": {
        "type": "Point",
        "coordinates": [43.227514, 131.97776]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Двенадцатая, д. 16",
        "hintContent": "г. Владивосток, ул. Двенадцатая, д. 16",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 198,
      "geometry": {
        "type": "Point",
        "coordinates": [43.22802, 131.977373]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Двенадцатая, д. 18",
        "hintContent": "г. Владивосток, ул. Двенадцатая, д. 18",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 199,
      "geometry": {
        "type": "Point",
        "coordinates": [43.228381, 131.976942]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Двенадцатая, д. 20",
        "hintContent": "г. Владивосток, ул. Двенадцатая, д. 20",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 200,
      "geometry": {
        "type": "Point",
        "coordinates": [43.226424, 131.974463]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Двенадцатая, д. 5",
        "hintContent": "г. Владивосток, ул. Двенадцатая, д. 5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 201,
      "geometry": {
        "type": "Point",
        "coordinates": [43.225307, 131.978182]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Двенадцатая, д. 8",
        "hintContent": "г. Владивосток, ул. Двенадцатая, д. 8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 202,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115542, 131.885494]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Державина, 23, д. 23",
        "hintContent": "г. Владивосток, ул. Державина, 23, д. 23",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 203,
      "geometry": {
        "type": "Point",
        "coordinates": [43.153385, 131.941791]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Днепровская, д. 100",
        "hintContent": "г. Владивосток, ул. Днепровская, д. 100",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 204,
      "geometry": {
        "type": "Point",
        "coordinates": [43.142624, 131.922154]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Днепровская, д. 25/1",
        "hintContent": "г. Владивосток, ул. Днепровская, д. 25/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 205,
      "geometry": {
        "type": "Point",
        "coordinates": [43.144893, 131.914231]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Днепровская, д. 39",
        "hintContent": "г. Владивосток, ул. Днепровская, д. 39",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 206,
      "geometry": {
        "type": "Point",
        "coordinates": [43.124156, 131.906344]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Достоевского, д. 7",
        "hintContent": "г. Владивосток, ул. Достоевского, д. 7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 207,
      "geometry": {
        "type": "Point",
        "coordinates": [43.169752, 131.905517]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Енисейская, д. 14В",
        "hintContent": "г. Владивосток, ул. Енисейская, д. 14В",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 208,
      "geometry": {
        "type": "Point",
        "coordinates": [43.169489, 131.903289]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Енисейская, д. 7/1",
        "hintContent": "г. Владивосток, ул. Енисейская, д. 7/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 209,
      "geometry": {
        "type": "Point",
        "coordinates": [43.169713, 131.906631]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Енисейская, д. 7/2",
        "hintContent": "г. Владивосток, ул. Енисейская, д. 7/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 210,
      "geometry": {
        "type": "Point",
        "coordinates": [43.168858, 131.901681]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Енисейская, д. 7/3",
        "hintContent": "г. Владивосток, ул. Енисейская, д. 7/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 211,
      "geometry": {
        "type": "Point",
        "coordinates": [43.128782, 131.925738]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Жигура, д. 26",
        "hintContent": "г. Владивосток, ул. Жигура, д. 26",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 212,
      "geometry": {
        "type": "Point",
        "coordinates": [43.126361, 131.924903]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Жигура, д. 8",
        "hintContent": "г. Владивосток, ул. Жигура, д. 8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 213,
      "geometry": {
        "type": "Point",
        "coordinates": [43.098225, 131.918103]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Запорожская, д. 2",
        "hintContent": "г. Владивосток, ул. Запорожская, д. 2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 214,
      "geometry": {
        "type": "Point",
        "coordinates": [43.283048, 132.074185]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Заречная, д. 47",
        "hintContent": "г. Владивосток, ул. Заречная, д. 47",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 215,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115885, 131.93385]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Зейская, д. 14/1",
        "hintContent": "г. Владивосток, ул. Зейская, д. 14/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 216,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116937, 131.935072]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Зейская, д. 4",
        "hintContent": "г. Владивосток, ул. Зейская, д. 4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 217,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119761, 131.970645]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Зеленый бульвар, д. 19",
        "hintContent": "г. Владивосток, ул. Зеленый бульвар, д. 19",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 218,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119761, 131.970645]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Зеленый бульвар, д. 19/1",
        "hintContent": "г. Владивосток, ул. Зеленый бульвар, д. 19/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 219,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117865, 131.970295]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Зеленый бульвар, д. 25",
        "hintContent": "г. Владивосток, ул. Зеленый бульвар, д. 25",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 220,
      "geometry": {
        "type": "Point",
        "coordinates": [43.162907, 131.925747]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Иртышская, д. 19/1",
        "hintContent": "г. Владивосток, ул. Иртышская, д. 19/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 221,
      "geometry": {
        "type": "Point",
        "coordinates": [43.162907, 131.925747]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Иртышская, д. 19/2",
        "hintContent": "г. Владивосток, ул. Иртышская, д. 19/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 222,
      "geometry": {
        "type": "Point",
        "coordinates": [43.155831, 131.927894]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Карбышева, д. 11/1",
        "hintContent": "г. Владивосток, ул. Карбышева, д. 11/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 223,
      "geometry": {
        "type": "Point",
        "coordinates": [43.156344, 131.928712]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Карбышева, д. 11/2",
        "hintContent": "г. Владивосток, ул. Карбышева, д. 11/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 224,
      "geometry": {
        "type": "Point",
        "coordinates": [43.15566, 131.930023]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Карбышева, д. 11/3",
        "hintContent": "г. Владивосток, ул. Карбышева, д. 11/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 225,
      "geometry": {
        "type": "Point",
        "coordinates": [43.154351, 131.924265]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Карбышева, д. 22/1",
        "hintContent": "г. Владивосток, ул. Карбышева, д. 22/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 226,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/1",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 227,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/2",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 228,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/3",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 229,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/4",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 230,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/5",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 231,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/6",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 232,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/7",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 233,
      "geometry": {
        "type": "Point",
        "coordinates": [43.075069, 131.942761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Катерная, д. 16/8",
        "hintContent": "г. Владивосток, ул. Катерная, д. 16/8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 234,
      "geometry": {
        "type": "Point",
        "coordinates": [43.101773, 131.905921]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Кизлярская, д. 3/1",
        "hintContent": "г. Владивосток, ул. Кизлярская, д. 3/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 235,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/1",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 236,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/10",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/10",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 237,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/11",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/11",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 238,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/2",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 239,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/3",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 240,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/4",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 241,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/5",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 242,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/6",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 243,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/7",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 244,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/8",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 245,
      "geometry": {
        "type": "Point",
        "coordinates": [43.258485, 132.013387]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Коммуны, д. 14/9",
        "hintContent": "г. Владивосток, ул. Коммуны, д. 14/9",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 246,
      "geometry": {
        "type": "Point",
        "coordinates": [43.129091, 131.927193]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Котельникова, д. 7Б",
        "hintContent": "г. Владивосток, ул. Котельникова, д. 7Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 247,
      "geometry": {
        "type": "Point",
        "coordinates": [43.122202, 131.904493]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Крылова, д. 10",
        "hintContent": "г. Владивосток, ул. Крылова, д. 10",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 248,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119971, 131.951637]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Ладыгина, д. 15/1",
        "hintContent": "г. Владивосток, ул. Ладыгина, д. 15/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 249,
      "geometry": {
        "type": "Point",
        "coordinates": [43.090259, 131.857978]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Леонова, д. 54/1",
        "hintContent": "г. Владивосток, ул. Леонова, д. 54/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 250,
      "geometry": {
        "type": "Point",
        "coordinates": [43.090259, 131.857978]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Леонова, д. 54/2",
        "hintContent": "г. Владивосток, ул. Леонова, д. 54/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 251,
      "geometry": {
        "type": "Point",
        "coordinates": [43.184328, 131.922199]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Лесная, д. 1В/1",
        "hintContent": "г. Владивосток, ул. Лесная, д. 1В/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 252,
      "geometry": {
        "type": "Point",
        "coordinates": [43.181061, 131.920815]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Лесная, д. 1В/2",
        "hintContent": "г. Владивосток, ул. Лесная, д. 1В/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 253,
      "geometry": {
        "type": "Point",
        "coordinates": [43.181889, 131.921193]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Лесная, д. 1В/3",
        "hintContent": "г. Владивосток, ул. Лесная, д. 1В/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 254,
      "geometry": {
        "type": "Point",
        "coordinates": [43.221405, 131.972388]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 126",
        "hintContent": "г. Владивосток, ул. Маковского, д. 126",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 255,
      "geometry": {
        "type": "Point",
        "coordinates": [43.206227, 131.950101]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 32",
        "hintContent": "г. Владивосток, ул. Маковского, д. 32",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 256,
      "geometry": {
        "type": "Point",
        "coordinates": [43.222535, 131.968067]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 55/1",
        "hintContent": "г. Владивосток, ул. Маковского, д. 55/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 257,
      "geometry": {
        "type": "Point",
        "coordinates": [43.222535, 131.968067]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 55/2",
        "hintContent": "г. Владивосток, ул. Маковского, д. 55/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 258,
      "geometry": {
        "type": "Point",
        "coordinates": [43.222535, 131.968067]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 55/3",
        "hintContent": "г. Владивосток, ул. Маковского, д. 55/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 259,
      "geometry": {
        "type": "Point",
        "coordinates": [43.222535, 131.968067]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 55/4",
        "hintContent": "г. Владивосток, ул. Маковского, д. 55/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 260,
      "geometry": {
        "type": "Point",
        "coordinates": [43.132111, 131.923681]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Марченко, д. 4/1",
        "hintContent": "г. Владивосток, ул. Марченко, д. 4/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 261,
      "geometry": {
        "type": "Point",
        "coordinates": [43.087856, 131.95267]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Можайская, д. 5",
        "hintContent": "г. Владивосток, ул. Можайская, д. 5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 262,
      "geometry": {
        "type": "Point",
        "coordinates": [43.194233, 131.92661]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мусоргского, д. 72",
        "hintContent": "г. Владивосток, ул. Мусоргского, д. 72",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 263,
      "geometry": {
        "type": "Point",
        "coordinates": [43.194233, 131.92661]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мусоргского, д. 74/1",
        "hintContent": "г. Владивосток, ул. Мусоргского, д. 74/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 264,
      "geometry": {
        "type": "Point",
        "coordinates": [43.194233, 131.92661]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мусоргского, д. 74/2",
        "hintContent": "г. Владивосток, ул. Мусоргского, д. 74/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 265,
      "geometry": {
        "type": "Point",
        "coordinates": [43.194233, 131.92661]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мусоргского, д. 74/3",
        "hintContent": "г. Владивосток, ул. Мусоргского, д. 74/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 266,
      "geometry": {
        "type": "Point",
        "coordinates": [43.131473, 131.885575]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мыс Кунгасный, д. 1А",
        "hintContent": "г. Владивосток, ул. Мыс Кунгасный, д. 1А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 267,
      "geometry": {
        "type": "Point",
        "coordinates": [43.132934, 131.88623]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мыс Кунгасный, д. 3Б",
        "hintContent": "г. Владивосток, ул. Мыс Кунгасный, д. 3Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 268,
      "geometry": {
        "type": "Point",
        "coordinates": [43.132631, 131.885862]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мыс Кунгасный, д. 4/1",
        "hintContent": "г. Владивосток, ул. Мыс Кунгасный, д. 4/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 269,
      "geometry": {
        "type": "Point",
        "coordinates": [43.26505, 132.017223]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мысовая, д. 7А",
        "hintContent": "г. Владивосток, ул. Мысовая, д. 7А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 270,
      "geometry": {
        "type": "Point",
        "coordinates": [43.264998, 132.017735]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мысовая, д. 7Б",
        "hintContent": "г. Владивосток, ул. Мысовая, д. 7Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 271,
      "geometry": {
        "type": "Point",
        "coordinates": [43.26463, 132.017205]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Мысовая, д. 7В",
        "hintContent": "г. Владивосток, ул. Мысовая, д. 7В",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 272,
      "geometry": {
        "type": "Point",
        "coordinates": [43.098179, 131.893992]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Надибаидзе, д. 17",
        "hintContent": "г. Владивосток, ул. Надибаидзе, д. 17",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 273,
      "geometry": {
        "type": "Point",
        "coordinates": [43.235245, 132.053012]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Находкинская, д. 24",
        "hintContent": "г. Владивосток, ул. Находкинская, д. 24",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 274,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115542, 131.885494]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Невельского, 4,, д. 4",
        "hintContent": "г. Владивосток, ул. Невельского, 4,, д. 4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 275,
      "geometry": {
        "type": "Point",
        "coordinates": [43.098179, 131.893992]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Невельского, д. 5",
        "hintContent": "г. Владивосток, ул. Невельского, д. 5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 276,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115727, 131.967707]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 135к1",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 135к1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 277,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116332, 131.967905]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 135к2",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 135к2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 278,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116332, 131.967905]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 135к3",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 135к3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 279,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118208, 131.96574]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 135к4",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 135к4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 280,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116332, 131.967905]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 135к5",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 135к5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 281,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116332, 131.967905]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 135к6",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 135к6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 282,
      "geometry": {
        "type": "Point",
        "coordinates": [43.116332, 131.967905]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 135к7",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 135к7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 283,
      "geometry": {
        "type": "Point",
        "coordinates": [43.121136, 131.967959]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 137/1",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 137/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 284,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119432, 131.968642]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 137/4",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 137/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 285,
      "geometry": {
        "type": "Point",
        "coordinates": [43.119432, 131.968642]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 137/5",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 137/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 286,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 287,
      "geometry": {
        "type": "Point",
        "coordinates": [43.102339, 131.963423]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 2Ак1",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 2Ак1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 288,
      "geometry": {
        "type": "Point",
        "coordinates": [43.102813, 131.963575]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 2Ак2",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 2Ак2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 289,
      "geometry": {
        "type": "Point",
        "coordinates": [43.103313, 131.963692]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 2Ак3",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 2Ак3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 290,
      "geometry": {
        "type": "Point",
        "coordinates": [43.103959, 131.963324]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 2Ак4",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 2Ак4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 291,
      "geometry": {
        "type": "Point",
        "coordinates": [43.10278, 131.962354]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 4А",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 4А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 292,
      "geometry": {
        "type": "Point",
        "coordinates": [43.1033, 131.962686]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 4Б",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 4Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 293,
      "geometry": {
        "type": "Point",
        "coordinates": [43.123597, 131.894809]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нерчинская, д. 10/1",
        "hintContent": "г. Владивосток, ул. Нерчинская, д. 10/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 294,
      "geometry": {
        "type": "Point",
        "coordinates": [43.100207, 131.946561]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нестерова, д. 1/1",
        "hintContent": "г. Владивосток, ул. Нестерова, д. 1/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 295,
      "geometry": {
        "type": "Point",
        "coordinates": [43.089621, 131.956362]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Новожилова, д. 21/3",
        "hintContent": "г. Владивосток, ул. Новожилова, д. 21/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 296,
      "geometry": {
        "type": "Point",
        "coordinates": [43.12542, 131.886482]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Октябрьская, д. 25Б",
        "hintContent": "г. Владивосток, ул. Октябрьская, д. 25Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 297,
      "geometry": {
        "type": "Point",
        "coordinates": [43.257973, 132.027329]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Опорная, д. 18А",
        "hintContent": "г. Владивосток, ул. Опорная, д. 18А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 298,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083306, 131.901708]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Острогорная, д. 13/1",
        "hintContent": "г. Владивосток, ул. Острогорная, д. 13/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 299,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083306, 131.901708]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Острогорная, д. 13/2",
        "hintContent": "г. Владивосток, ул. Острогорная, д. 13/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 300,
      "geometry": {
        "type": "Point",
        "coordinates": [43.101543, 131.900262]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Очаковская, д. 7",
        "hintContent": "г. Владивосток, ул. Очаковская, д. 7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 301,
      "geometry": {
        "type": "Point",
        "coordinates": [43.178576, 131.908077]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Пархоменко, д. 4",
        "hintContent": "г. Владивосток, ул. Пархоменко, д. 4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 302,
      "geometry": {
        "type": "Point",
        "coordinates": [43.096579, 131.890686]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Пихтовая, д. 34",
        "hintContent": "г. Владивосток, ул. Пихтовая, д. 34",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 303,
      "geometry": {
        "type": "Point",
        "coordinates": [43.095381, 131.890893]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Пихтовая, д. 35",
        "hintContent": "г. Владивосток, ул. Пихтовая, д. 35",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 304,
      "geometry": {
        "type": "Point",
        "coordinates": [43.122919, 131.880867]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Пограничная, д. 13/1",
        "hintContent": "г. Владивосток, ул. Пограничная, д. 13/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 305,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117609, 131.879924]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Пограничная, д. 4",
        "hintContent": "г. Владивосток, ул. Пограничная, д. 4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 306,
      "geometry": {
        "type": "Point",
        "coordinates": [43.086513, 131.853747]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полевая, д. 6/1",
        "hintContent": "г. Владивосток, ул. Полевая, д. 6/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 307,
      "geometry": {
        "type": "Point",
        "coordinates": [43.213442, 131.95205]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полетаева, д. 23А",
        "hintContent": "г. Владивосток, ул. Полетаева, д. 23А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 308,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170502, 131.955158]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 12",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 12",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 309,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170502, 131.955158]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 14",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 14",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 310,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170502, 131.955158]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 16",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 16",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 311,
      "geometry": {
        "type": "Point",
        "coordinates": [43.171212, 131.961267]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 17",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 17",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 312,
      "geometry": {
        "type": "Point",
        "coordinates": [43.171212, 131.961267]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 17/1",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 17/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 313,
      "geometry": {
        "type": "Point",
        "coordinates": [43.171212, 131.961267]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 17/1",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 17/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 314,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170318, 131.956182]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 18",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 18",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 315,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170232, 131.957071]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 20",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 20",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 316,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170232, 131.957934]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 22",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 22",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 317,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170502, 131.955158]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 6/1",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 6/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 318,
      "geometry": {
        "type": "Point",
        "coordinates": [43.170502, 131.955158]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 6/2",
        "hintContent": "г. Владивосток, ул. Полковника Виктора Фесюна, д. 6/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 319,
      "geometry": {
        "type": "Point",
        "coordinates": [43.120544, 131.897064]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Полонского, д. 5/3",
        "hintContent": "г. Владивосток, ул. Полонского, д. 5/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 320,
      "geometry": {
        "type": "Point",
        "coordinates": [43.121465, 131.889356]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Прапорщика Комарова, д. 34",
        "hintContent": "г. Владивосток, ул. Прапорщика Комарова, д. 34",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 321,
      "geometry": {
        "type": "Point",
        "coordinates": [43.175552, 131.933589]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 57",
        "hintContent": "г. Владивосток, ул. Русская, д. 57",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 322,
      "geometry": {
        "type": "Point",
        "coordinates": [43.176288, 131.935602]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 57/1",
        "hintContent": "г. Владивосток, ул. Русская, д. 57/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 323,
      "geometry": {
        "type": "Point",
        "coordinates": [43.177031, 131.93579]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 57/2",
        "hintContent": "г. Владивосток, ул. Русская, д. 57/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 324,
      "geometry": {
        "type": "Point",
        "coordinates": [43.175552, 131.933589]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 57/3",
        "hintContent": "г. Владивосток, ул. Русская, д. 57/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 325,
      "geometry": {
        "type": "Point",
        "coordinates": [43.169522, 131.924337]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 59к1",
        "hintContent": "г. Владивосток, ул. Русская, д. 59к1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 326,
      "geometry": {
        "type": "Point",
        "coordinates": [43.169463, 131.925118]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 59к2",
        "hintContent": "г. Владивосток, ул. Русская, д. 59к2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 327,
      "geometry": {
        "type": "Point",
        "coordinates": [43.169411, 131.925909]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 59к3",
        "hintContent": "г. Владивосток, ул. Русская, д. 59к3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 328,
      "geometry": {
        "type": "Point",
        "coordinates": [43.168648, 131.907251]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 5А",
        "hintContent": "г. Владивосток, ул. Русская, д. 5А",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 329,
      "geometry": {
        "type": "Point",
        "coordinates": [43.178727, 131.934667]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 63л1",
        "hintContent": "г. Владивосток, ул. Русская, д. 63л1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 330,
      "geometry": {
        "type": "Point",
        "coordinates": [43.178977, 131.935674]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 63л2",
        "hintContent": "г. Владивосток, ул. Русская, д. 63л2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 331,
      "geometry": {
        "type": "Point",
        "coordinates": [43.179562, 131.935449]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 63л3",
        "hintContent": "г. Владивосток, ул. Русская, д. 63л3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 332,
      "geometry": {
        "type": "Point",
        "coordinates": [43.171955, 131.933805]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 75",
        "hintContent": "г. Владивосток, ул. Русская, д. 75",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 333,
      "geometry": {
        "type": "Point",
        "coordinates": [43.177182, 131.939707]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 99/1",
        "hintContent": "г. Владивосток, ул. Русская, д. 99/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 334,
      "geometry": {
        "type": "Point",
        "coordinates": [43.177182, 131.939707]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 99/2",
        "hintContent": "г. Владивосток, ул. Русская, д. 99/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 335,
      "geometry": {
        "type": "Point",
        "coordinates": [43.177281, 131.940372]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Русская, д. 99/3",
        "hintContent": "г. Владивосток, ул. Русская, д. 99/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 336,
      "geometry": {
        "type": "Point",
        "coordinates": [43.130427, 131.954862]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 1/1",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 1/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 337,
      "geometry": {
        "type": "Point",
        "coordinates": [43.130137, 131.955203]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 1/2",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 1/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 338,
      "geometry": {
        "type": "Point",
        "coordinates": [43.129835, 131.955562]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 1/3",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 1/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 339,
      "geometry": {
        "type": "Point",
        "coordinates": [43.129144, 131.946399]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 2/1",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 2/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 340,
      "geometry": {
        "type": "Point",
        "coordinates": [43.129144, 131.946399]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 2/2",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 2/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 341,
      "geometry": {
        "type": "Point",
        "coordinates": [43.129144, 131.946399]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 2/3",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 2/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 342,
      "geometry": {
        "type": "Point",
        "coordinates": [43.129144, 131.946399]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 2/4",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 2/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 343,
      "geometry": {
        "type": "Point",
        "coordinates": [43.128815, 131.954179]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 22",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 22",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 344,
      "geometry": {
        "type": "Point",
        "coordinates": [43.128815, 131.954179]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 22/1",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 22/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 345,
      "geometry": {
        "type": "Point",
        "coordinates": [43.128815, 131.954179]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 22/2",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 22/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 346,
      "geometry": {
        "type": "Point",
        "coordinates": [43.127203, 131.955445]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 22/3",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 22/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 347,
      "geometry": {
        "type": "Point",
        "coordinates": [43.128881, 131.95761]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сабанеева, д. 25",
        "hintContent": "г. Владивосток, ул. Сабанеева, д. 25",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 348,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263376, 132.022882]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 28Б",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 28Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 349,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263599, 132.025173]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 30/1",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 30/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 350,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263639, 132.025658]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 30/2",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 30/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 351,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263718, 132.026125]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 30/3",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 30/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 352,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263173, 132.025083]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 30/4",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 30/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 353,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263271, 132.025568]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 30/5",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 30/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 354,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263199, 132.026062]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 30/6",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 30/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 355,
      "geometry": {
        "type": "Point",
        "coordinates": [43.263278, 132.026529]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Садгородская, д. 30/7",
        "hintContent": "г. Владивосток, ул. Садгородская, д. 30/7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 356,
      "geometry": {
        "type": "Point",
        "coordinates": [43.097554, 131.949247]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сафонова, д. 7",
        "hintContent": "г. Владивосток, ул. Сафонова, д. 7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 357,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083471, 131.960826]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Североморская, д. 5/1",
        "hintContent": "г. Владивосток, ул. Североморская, д. 5/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 358,
      "geometry": {
        "type": "Point",
        "coordinates": [43.083517, 131.959775]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Североморская, д. 5/2",
        "hintContent": "г. Владивосток, ул. Североморская, д. 5/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 359,
      "geometry": {
        "type": "Point",
        "coordinates": [43.093077, 131.933814]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 16/1",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 16/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 360,
      "geometry": {
        "type": "Point",
        "coordinates": [43.093314, 131.933958]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 16/2",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 16/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 361,
      "geometry": {
        "type": "Point",
        "coordinates": [43.094703, 131.930418]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 5А/1",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 5А/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 362,
      "geometry": {
        "type": "Point",
        "coordinates": [43.094703, 131.930418]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 5А/2",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 5А/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 363,
      "geometry": {
        "type": "Point",
        "coordinates": [43.094703, 131.930418]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 5А/3",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 5А/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 364,
      "geometry": {
        "type": "Point",
        "coordinates": [43.094703, 131.930418]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 5А/4",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 5А/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 365,
      "geometry": {
        "type": "Point",
        "coordinates": [43.094703, 131.930418]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 5А/5",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 5А/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 366,
      "geometry": {
        "type": "Point",
        "coordinates": [43.094703, 131.930418]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 5А/6",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 5А/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 367,
      "geometry": {
        "type": "Point",
        "coordinates": [43.094703, 131.930418]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Слуцкого, д. 5А/6",
        "hintContent": "г. Владивосток, ул. Слуцкого, д. 5А/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 368,
      "geometry": {
        "type": "Point",
        "coordinates": [43.139111, 131.93518]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Снеговая, д. 9к8",
        "hintContent": "г. Владивосток, ул. Снеговая, д. 9к8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 369,
      "geometry": {
        "type": "Point",
        "coordinates": [43.139111, 131.93518]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Снеговая, д. 9к9",
        "hintContent": "г. Владивосток, ул. Снеговая, д. 9к9",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 370,
      "geometry": {
        "type": "Point",
        "coordinates": [43.080923, 131.958105]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сочинская, д. 10",
        "hintContent": "г. Владивосток, ул. Сочинская, д. 10",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 371,
      "geometry": {
        "type": "Point",
        "coordinates": [43.080501, 131.958823]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сочинская, д. 12",
        "hintContent": "г. Владивосток, ул. Сочинская, д. 12",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 372,
      "geometry": {
        "type": "Point",
        "coordinates": [43.080916, 131.960997]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Сочинская, д. 17",
        "hintContent": "г. Владивосток, ул. Сочинская, д. 17",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 373,
      "geometry": {
        "type": "Point",
        "coordinates": [43.274004, 132.081856]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Старцева, д. 57",
        "hintContent": "г. Владивосток, ул. Старцева, д. 57",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 374,
      "geometry": {
        "type": "Point",
        "coordinates": [43.105157, 131.950711]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Стрелковая, д. 18/1",
        "hintContent": "г. Владивосток, ул. Стрелковая, д. 18/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 375,
      "geometry": {
        "type": "Point",
        "coordinates": [43.096356, 131.915452]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Терешковой, д. 5",
        "hintContent": "г. Владивосток, ул. Терешковой, д. 5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 376,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115542, 131.885494]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Тополевая, 30,, д. 30",
        "hintContent": "г. Владивосток, ул. Тополевая, 30,, д. 30",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 377,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115542, 131.885494]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Третья, 5В,, д. 5В",
        "hintContent": "г. Владивосток, ул. Третья, 5В,, д. 5В",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 378,
      "geometry": {
        "type": "Point",
        "coordinates": [43.160007, 131.932458]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Тухачевского, д. 72/1",
        "hintContent": "г. Владивосток, ул. Тухачевского, д. 72/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 379,
      "geometry": {
        "type": "Point",
        "coordinates": [43.156101, 131.936716]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Тухачевского, д. 80",
        "hintContent": "г. Владивосток, ул. Тухачевского, д. 80",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 380,
      "geometry": {
        "type": "Point",
        "coordinates": [43.099127, 131.899139]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Фастовская, д. 25",
        "hintContent": "г. Владивосток, ул. Фастовская, д. 25",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 381,
      "geometry": {
        "type": "Point",
        "coordinates": [43.099805, 131.897307]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Фастовская, д. 33",
        "hintContent": "г. Владивосток, ул. Фастовская, д. 33",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 382,
      "geometry": {
        "type": "Point",
        "coordinates": [43.122103, 131.878271]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Фонтанная, д. 3",
        "hintContent": "г. Владивосток, ул. Фонтанная, д. 3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 383,
      "geometry": {
        "type": "Point",
        "coordinates": [43.100002, 131.910117]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Харьковская, д. 2/1",
        "hintContent": "г. Владивосток, ул. Харьковская, д. 2/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 384,
      "geometry": {
        "type": "Point",
        "coordinates": [43.100002, 131.910117]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Харьковская, д. 2/2",
        "hintContent": "г. Владивосток, ул. Харьковская, д. 2/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 385,
      "geometry": {
        "type": "Point",
        "coordinates": [43.229025, 131.994154]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Четвертая, д. 8",
        "hintContent": "г. Владивосток, ул. Четвертая, д. 8",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 386,
      "geometry": {
        "type": "Point",
        "coordinates": [43.228224, 131.994621]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Четвертая, д. 8Б",
        "hintContent": "г. Владивосток, ул. Четвертая, д. 8Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 387,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117161, 131.918076]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Шефнера, д. 23/1",
        "hintContent": "г. Владивосток, ул. Шефнера, д. 23/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 388,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117161, 131.918076]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Шефнера, д. 23/2",
        "hintContent": "г. Владивосток, ул. Шефнера, д. 23/2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 389,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117161, 131.918076]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Шефнера, д. 23/3",
        "hintContent": "г. Владивосток, ул. Шефнера, д. 23/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 390,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117161, 131.918076]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Шефнера, д. 23/4",
        "hintContent": "г. Владивосток, ул. Шефнера, д. 23/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 391,
      "geometry": {
        "type": "Point",
        "coordinates": [43.117161, 131.918076]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Шефнера, д. 23/5",
        "hintContent": "г. Владивосток, ул. Шефнера, д. 23/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 392,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118069, 131.931919]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Шилкинская, д. 36",
        "hintContent": "г. Владивосток, ул. Шилкинская, д. 36",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 393,
      "geometry": {
        "type": "Point",
        "coordinates": [43.115542, 131.885494]
      },
      "properties": {
        "balloonContent": "г. Владивосток",
        "hintContent": "г. Владивосток",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 394,
      "geometry": {
        "type": "Point",
        "coordinates": [42.784713, 132.856213]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Находкинский, д. 100",
        "hintContent": "г. Находка, пр-т Находкинский, д. 100",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 395,
      "geometry": {
        "type": "Point",
        "coordinates": [42.783886, 132.854776]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Находкинский, д. 104",
        "hintContent": "г. Находка, пр-т Находкинский, д. 104",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 396,
      "geometry": {
        "type": "Point",
        "coordinates": [42.783297, 132.853779]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Находкинский, д. 106",
        "hintContent": "г. Находка, пр-т Находкинский, д. 106",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 397,
      "geometry": {
        "type": "Point",
        "coordinates": [42.840103, 132.880162]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Северный, д. 14",
        "hintContent": "г. Находка, пр-т Северный, д. 14",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 398,
      "geometry": {
        "type": "Point",
        "coordinates": [42.840916, 132.881591]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Северный, д. 18",
        "hintContent": "г. Находка, пр-т Северный, д. 18",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 399,
      "geometry": {
        "type": "Point",
        "coordinates": [42.847487, 132.895757]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Северный, д. 9",
        "hintContent": "г. Находка, пр-т Северный, д. 9",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 400,
      "geometry": {
        "type": "Point",
        "coordinates": [42.78554, 132.851488]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. 25 Октября, д. 15",
        "hintContent": "г. Находка, ул. 25 Октября, д. 15",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 401,
      "geometry": {
        "type": "Point",
        "coordinates": [42.770922, 132.853123]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Бокситогорская, д. 38",
        "hintContent": "г. Находка, ул. Бокситогорская, д. 38",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 402,
      "geometry": {
        "type": "Point",
        "coordinates": [42.841068, 132.889648]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Дзержинского, д. 13/1",
        "hintContent": "г. Находка, ул. Дзержинского, д. 13/1",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 403,
      "geometry": {
        "type": "Point",
        "coordinates": [42.842463, 132.887331]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Дзержинского, д. 18",
        "hintContent": "г. Находка, ул. Дзержинского, д. 18",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 404,
      "geometry": {
        "type": "Point",
        "coordinates": [42.842463, 132.887331]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Дзержинского, д. 18/1",
        "hintContent": "г. Находка, ул. Дзержинского, д. 18/1",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 405,
      "geometry": {
        "type": "Point",
        "coordinates": [42.842463, 132.887331]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Дзержинского, д. 18/2",
        "hintContent": "г. Находка, ул. Дзержинского, д. 18/2",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 406,
      "geometry": {
        "type": "Point",
        "coordinates": [42.842463, 132.887331]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Дзержинского, д. 18/3",
        "hintContent": "г. Находка, ул. Дзержинского, д. 18/3",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 407,
      "geometry": {
        "type": "Point",
        "coordinates": [42.787664, 132.85412]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Добролюбова, д. 1",
        "hintContent": "г. Находка, ул. Добролюбова, д. 1",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 408,
      "geometry": {
        "type": "Point",
        "coordinates": [42.787386, 132.853617]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Добролюбова, д. 3",
        "hintContent": "г. Находка, ул. Добролюбова, д. 3",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 409,
      "geometry": {
        "type": "Point",
        "coordinates": [42.787002, 132.852925]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Добролюбова, д. 5",
        "hintContent": "г. Находка, ул. Добролюбова, д. 5",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 410,
      "geometry": {
        "type": "Point",
        "coordinates": [42.786625, 132.852252]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Добролюбова, д. 9",
        "hintContent": "г. Находка, ул. Добролюбова, д. 9",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 411,
      "geometry": {
        "type": "Point",
        "coordinates": [42.845378, 132.891158]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Комсомольская, д. 34А",
        "hintContent": "г. Находка, ул. Комсомольская, д. 34А",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 412,
      "geometry": {
        "type": "Point",
        "coordinates": [42.823633, 132.879273]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Мичурина, д. 12",
        "hintContent": "г. Находка, ул. Мичурина, д. 12",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 413,
      "geometry": {
        "type": "Point",
        "coordinates": [42.821299, 132.875428]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Пограничная, д. 38",
        "hintContent": "г. Находка, ул. Пограничная, д. 38",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 414,
      "geometry": {
        "type": "Point",
        "coordinates": [42.850177, 132.895047]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Сидоренко, д. 10А",
        "hintContent": "г. Находка, ул. Сидоренко, д. 10А",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 415,
      "geometry": {
        "type": "Point",
        "coordinates": [42.825194, 132.875581]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Советская, д. 13",
        "hintContent": "г. Находка, ул. Советская, д. 13",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#99ff99",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 416,
      "geometry": {
        "type": "Point",
        "coordinates": [42.771286, 132.855818]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Спортивная, д. 26",
        "hintContent": "г. Находка, ул. Спортивная, д. 26",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 417,
      "geometry": {
        "type": "Point",
        "coordinates": [42.77204, 132.857956]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Спортивная, д. 32/1",
        "hintContent": "г. Находка, ул. Спортивная, д. 32/1",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 418,
      "geometry": {
        "type": "Point",
        "coordinates": [42.77204, 132.857956]
      },
      "properties": {
        "balloonContent": "г. Находка, ул. Спортивная, д. 34",
        "hintContent": "г. Находка, ул. Спортивная, д. 34",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 419,
      "geometry": {
        "type": "Point",
        "coordinates": [43.786412, 131.971822]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Александра Францева, д. 40",
        "hintContent": "г. Уссурийск, ул. Александра Францева, д. 40",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#cc0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 420,
      "geometry": {
        "type": "Point",
        "coordinates": [43.783132, 131.978936]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Андрея Кушнира, д. 26",
        "hintContent": "г. Уссурийск, ул. Андрея Кушнира, д. 26",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 421,
      "geometry": {
        "type": "Point",
        "coordinates": [43.783796, 131.980311]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Андрея Кушнира, д. 30",
        "hintContent": "г. Уссурийск, ул. Андрея Кушнира, д. 30",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 422,
      "geometry": {
        "type": "Point",
        "coordinates": [43.782852, 131.980104]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Андрея Кушнира, д. 32",
        "hintContent": "г. Уссурийск, ул. Андрея Кушнира, д. 32",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 423,
      "geometry": {
        "type": "Point",
        "coordinates": [43.79141, 131.973259]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Бирюкова, д. 16",
        "hintContent": "г. Уссурийск, ул. Бирюкова, д. 16",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#cc0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 424,
      "geometry": {
        "type": "Point",
        "coordinates": [43.791651, 131.946669]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Володарского, д. 46",
        "hintContent": "г. Уссурийск, ул. Володарского, д. 46",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 425,
      "geometry": {
        "type": "Point",
        "coordinates": [43.802035, 131.960692]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Волочаевская, д. 82",
        "hintContent": "г. Уссурийск, ул. Волочаевская, д. 82",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 426,
      "geometry": {
        "type": "Point",
        "coordinates": [43.802465, 131.942375]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Горького, д. 81",
        "hintContent": "г. Уссурийск, ул. Горького, д. 81",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 427,
      "geometry": {
        "type": "Point",
        "coordinates": [43.774202, 131.982889]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Заречная, д. 6Г/3с1",
        "hintContent": "г. Уссурийск, ул. Заречная, д. 6Г/3с1",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 428,
      "geometry": {
        "type": "Point",
        "coordinates": [43.774202, 131.982889]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Заречная, д. 6Г/3с2",
        "hintContent": "г. Уссурийск, ул. Заречная, д. 6Г/3с2",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 429,
      "geometry": {
        "type": "Point",
        "coordinates": [43.8113, 131.937973]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Комарова, д. 4",
        "hintContent": "г. Уссурийск, ул. Комарова, д. 4",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 430,
      "geometry": {
        "type": "Point",
        "coordinates": [43.803265, 131.939348]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Комсомольская, д. 15/1",
        "hintContent": "г. Уссурийск, ул. Комсомольская, д. 15/1",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 431,
      "geometry": {
        "type": "Point",
        "coordinates": [43.795132, 131.95938]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Краснознаменная, д. 103",
        "hintContent": "г. Уссурийск, ул. Краснознаменная, д. 103",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 432,
      "geometry": {
        "type": "Point",
        "coordinates": [43.803851, 131.974759]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Крестьянская, д. 175",
        "hintContent": "г. Уссурийск, ул. Крестьянская, д. 175",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 433,
      "geometry": {
        "type": "Point",
        "coordinates": [43.801476, 131.957853]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Крестьянская, д. 94",
        "hintContent": "г. Уссурийск, ул. Крестьянская, д. 94",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 434,
      "geometry": {
        "type": "Point",
        "coordinates": [43.804625, 131.962048]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Кузнечная, д. 108",
        "hintContent": "г. Уссурийск, ул. Кузнечная, д. 108",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#cc0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 435,
      "geometry": {
        "type": "Point",
        "coordinates": [43.802049, 131.955077]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Ленина, д. 134А",
        "hintContent": "г. Уссурийск, ул. Ленина, д. 134А",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 436,
      "geometry": {
        "type": "Point",
        "coordinates": [43.790714, 131.973933]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Мичурина, д. 8А",
        "hintContent": "г. Уссурийск, ул. Мичурина, д. 8А",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 437,
      "geometry": {
        "type": "Point",
        "coordinates": [43.789425, 131.936895]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Нахимова, д. 11/1",
        "hintContent": "г. Уссурийск, ул. Нахимова, д. 11/1",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 438,
      "geometry": {
        "type": "Point",
        "coordinates": [43.789419, 131.937515]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Нахимова, д. 11/2",
        "hintContent": "г. Уссурийск, ул. Нахимова, д. 11/2",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 439,
      "geometry": {
        "type": "Point",
        "coordinates": [43.789965, 131.937497]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Нахимова, д. 13",
        "hintContent": "г. Уссурийск, ул. Нахимова, д. 13",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 440,
      "geometry": {
        "type": "Point",
        "coordinates": [43.81236, 131.947468]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Некрасова, д. 149",
        "hintContent": "г. Уссурийск, ул. Некрасова, д. 149",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 441,
      "geometry": {
        "type": "Point",
        "coordinates": [43.839044, 131.944297]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Некрасова, д. 272",
        "hintContent": "г. Уссурийск, ул. Некрасова, д. 272",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 442,
      "geometry": {
        "type": "Point",
        "coordinates": [43.798834, 131.972765]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Октябрьская, д. 132Б",
        "hintContent": "г. Уссурийск, ул. Октябрьская, д. 132Б",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 443,
      "geometry": {
        "type": "Point",
        "coordinates": [43.787401, 131.940515]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Пархоменко, д. 1",
        "hintContent": "г. Уссурийск, ул. Пархоменко, д. 1",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 444,
      "geometry": {
        "type": "Point",
        "coordinates": [43.807104, 131.975765]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Плантационная, д. 36",
        "hintContent": "г. Уссурийск, ул. Плантационная, д. 36",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 445,
      "geometry": {
        "type": "Point",
        "coordinates": [43.79847, 131.953936]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Плеханова, д. 75",
        "hintContent": "г. Уссурийск, ул. Плеханова, д. 75",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#cc0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 446,
      "geometry": {
        "type": "Point",
        "coordinates": [43.797104, 131.97802]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Приморская, д. 11",
        "hintContent": "г. Уссурийск, ул. Приморская, д. 11",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 447,
      "geometry": {
        "type": "Point",
        "coordinates": [43.780262, 131.952328]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Раздольная, д. 51",
        "hintContent": "г. Уссурийск, ул. Раздольная, д. 51",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 448,
      "geometry": {
        "type": "Point",
        "coordinates": [43.813128, 131.98005]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Садовая, д. 13",
        "hintContent": "г. Уссурийск, ул. Садовая, д. 13",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 449,
      "geometry": {
        "type": "Point",
        "coordinates": [43.783978, 131.983203]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Сергей Ушакова, д. 5",
        "hintContent": "г. Уссурийск, ул. Сергей Ушакова, д. 5",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 450,
      "geometry": {
        "type": "Point",
        "coordinates": [43.784941, 131.980994]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Сергея Ушакова, д. 7",
        "hintContent": "г. Уссурийск, ул. Сергея Ушакова, д. 7",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 451,
      "geometry": {
        "type": "Point",
        "coordinates": [43.788137, 131.980886]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Сергея Ушакова, д. 8А",
        "hintContent": "г. Уссурийск, ул. Сергея Ушакова, д. 8А",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 452,
      "geometry": {
        "type": "Point",
        "coordinates": [43.795483, 131.957062]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Фрунзе, д. 111/1",
        "hintContent": "г. Уссурийск, ул. Фрунзе, д. 111/1",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 453,
      "geometry": {
        "type": "Point",
        "coordinates": [43.795483, 131.957062]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Фрунзе, д. 111/2",
        "hintContent": "г. Уссурийск, ул. Фрунзе, д. 111/2",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 454,
      "geometry": {
        "type": "Point",
        "coordinates": [43.794071, 131.942968]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Фрунзе, д. 28",
        "hintContent": "г. Уссурийск, ул. Фрунзе, д. 28",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 455,
      "geometry": {
        "type": "Point",
        "coordinates": [43.795197, 131.957539]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Фрунзе, д. 80",
        "hintContent": "г. Уссурийск, ул. Фрунзе, д. 80",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 456,
      "geometry": {
        "type": "Point",
        "coordinates": [43.794319, 131.9714]
      },
      "properties": {
        "balloonContent": "г. Уссурийск, ул. Чичерина, д. 139Б",
        "hintContent": "г. Уссурийск, ул. Чичерина, д. 139Б",
        "clusterCaption": "УСС"
      },
      "options": {
        "iconColor": "#ff0099",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 457,
      "geometry": {
        "type": "Point",
        "coordinates": [43.327659, 131.99843]
      },
      "properties": {
        "balloonContent": "п. Зима Южная, пер. Вишневый, д. 11",
        "hintContent": "п. Зима Южная, пер. Вишневый, д. 11",
        "clusterCaption": "З-Ю"
      },
      "options": {
        "iconColor": "#663300",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 458,
      "geometry": {
        "type": "Point",
        "coordinates": [43.33002, 132.005158]
      },
      "properties": {
        "balloonContent": "п. Зима Южная, ул. Озерная, д. 13",
        "hintContent": "п. Зима Южная, ул. Озерная, д. 13",
        "clusterCaption": "З-Ю"
      },
      "options": {
        "iconColor": "#663300",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 459,
      "geometry": {
        "type": "Point",
        "coordinates": [43.330256, 132.004826]
      },
      "properties": {
        "balloonContent": "п. Зима Южная, ул. Озерная, д. 14",
        "hintContent": "п. Зима Южная, ул. Озерная, д. 14",
        "clusterCaption": "З-Ю"
      },
      "options": {
        "iconColor": "#663300",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 460,
      "geometry": {
        "type": "Point",
        "coordinates": [43.32661, 132.006308]
      },
      "properties": {
        "balloonContent": "п. Зима Южная, ул. Озерная, д. 25",
        "hintContent": "п. Зима Южная, ул. Озерная, д. 25",
        "clusterCaption": "З-Ю"
      },
      "options": {
        "iconColor": "#663300",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 461,
      "geometry": {
        "type": "Point",
        "coordinates": [43.327273, 132.00232]
      },
      "properties": {
        "balloonContent": "п. Зима Южная, ул. Центральная, д. 6",
        "hintContent": "п. Зима Южная, ул. Центральная, д. 6",
        "clusterCaption": "З-Ю"
      },
      "options": {
        "iconColor": "#663300",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 462,
      "geometry": {
        "type": "Point",
        "coordinates": [43.327863, 132.003299]
      },
      "properties": {
        "balloonContent": "п. Зима Южная, ул. Центральная, д. 8",
        "hintContent": "п. Зима Южная, ул. Центральная, д. 8",
        "clusterCaption": "З-Ю"
      },
      "options": {
        "iconColor": "#663300",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 463,
      "geometry": {
        "type": "Point",
        "coordinates": [43.363587, 132.020286]
      },
      "properties": {
        "balloonContent": "п. Новый, ул. Грибоедова, 4Б, д. 4Б",
        "hintContent": "п. Новый, ул. Грибоедова, 4Б, д. 4Б",
        "clusterCaption": "Нов"
      },
      "options": {
        "iconColor": "#ffff00",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 464,
      "geometry": {
        "type": "Point",
        "coordinates": [43.362853, 132.0161]
      },
      "properties": {
        "balloonContent": "п. Новый, ул. Ленина, д. 16А",
        "hintContent": "п. Новый, ул. Ленина, д. 16А",
        "clusterCaption": "Нов"
      },
      "options": {
        "iconColor": "#ffff00",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 465,
      "geometry": {
        "type": "Point",
        "coordinates": [43.363587, 132.020286]
      },
      "properties": {
        "balloonContent": "п. Новый, ул. Ленинская, д. 6",
        "hintContent": "п. Новый, ул. Ленинская, д. 6",
        "clusterCaption": "Нов"
      },
      "options": {
        "iconColor": "#ffff00",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 466,
      "geometry": {
        "type": "Point",
        "coordinates": [43.362761, 132.023403]
      },
      "properties": {
        "balloonContent": "п. Новый, ул. Молодёжная, д. 5",
        "hintContent": "п. Новый, ул. Молодёжная, д. 5",
        "clusterCaption": "Нов"
      },
      "options": {
        "iconColor": "#ffff00",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 467,
      "geometry": {
        "type": "Point",
        "coordinates": [43.371484, 132.028577]
      },
      "properties": {
        "balloonContent": "п. Новый, ул. Ореховая, д. 7/1",
        "hintContent": "п. Новый, ул. Ореховая, д. 7/1",
        "clusterCaption": "Нов"
      },
      "options": {
        "iconColor": "#ffff00",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 468,
      "geometry": {
        "type": "Point",
        "coordinates": [43.300392, 132.063243]
      },
      "properties": {
        "balloonContent": "п. Трудовое, ул. 2-я Лесная, д. 1Б",
        "hintContent": "п. Трудовое, ул. 2-я Лесная, д. 1Б",
        "clusterCaption": "Трд"
      },
      "options": {
        "iconColor": "#cc33ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 469,
      "geometry": {
        "type": "Point",
        "coordinates": [43.304643, 132.105725]
      },
      "properties": {
        "balloonContent": "п. Трудовое, ул. 50 лет Октября, д. 1",
        "hintContent": "п. Трудовое, ул. 50 лет Октября, д. 1",
        "clusterCaption": "Трд"
      },
      "options": {
        "iconColor": "#cc33ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 470,
      "geometry": {
        "type": "Point",
        "coordinates": [43.300392, 132.063243]
      },
      "properties": {
        "balloonContent": "п. Трудовое, ул. ЖК Солнечная Долина, д. 4",
        "hintContent": "п. Трудовое, ул. ЖК Солнечная Долина, д. 4",
        "clusterCaption": "Трд"
      },
      "options": {
        "iconColor": "#cc33ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 471,
      "geometry": {
        "type": "Point",
        "coordinates": [43.300392, 132.063243]
      },
      "properties": {
        "balloonContent": "п. Трудовое, ул. ЖК Солнечная Долина, д. 5",
        "hintContent": "п. Трудовое, ул. ЖК Солнечная Долина, д. 5",
        "clusterCaption": "Трд"
      },
      "options": {
        "iconColor": "#cc33ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 472,
      "geometry": {
        "type": "Point",
        "coordinates": [43.301225, 132.089968]
      },
      "properties": {
        "balloonContent": "п. Трудовое, ул. Клары Цеткин, д. 31",
        "hintContent": "п. Трудовое, ул. Клары Цеткин, д. 31",
        "clusterCaption": "Трд"
      },
      "options": {
        "iconColor": "#cc33ff",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 473,
      "geometry": {
        "type": "Point",
        "coordinates": [43.124156, 131.906344]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Достоевского, д. 7",
        "hintContent": "г. Владивосток, ул. Достоевского, д. 7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 474,
      "geometry": {
        "type": "Point",
        "coordinates": [43.102747, 131.905293]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Кизлярская, д. 20",
        "hintContent": "г. Владивосток, ул. Кизлярская, д. 20",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 475,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 476,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 477,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141/3",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141/3",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 478,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141/4",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141/4",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 479,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141/5",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141/5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 480,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141/6",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141/6",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 481,
      "geometry": {
        "type": "Point",
        "coordinates": [43.118392, 131.968112]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 141/7",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 141/7",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 482,
      "geometry": {
        "type": "Point",
        "coordinates": [43.12542, 131.886482]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Октябрьская, д. 25Б",
        "hintContent": "г. Владивосток, ул. Октябрьская, д. 25Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 483,
      "geometry": {
        "type": "Point",
        "coordinates": [42.835779, 132.879947]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Мира, д. 71/1",
        "hintContent": "г. Находка, пр-т Мира, д. 71/1",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 484,
      "geometry": {
        "type": "Point",
        "coordinates": [42.835779, 132.879947]
      },
      "properties": {
        "balloonContent": "г. Находка, пр-т Мира, д. 71/2",
        "hintContent": "г. Находка, пр-т Мира, д. 71/2",
        "clusterCaption": "НКХ"
      },
      "options": {
        "iconColor": "#330000",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 485,
      "geometry": {
        "type": "Point",
        "coordinates": [43.09548, 131.940956]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Часовитина, д. 5",
        "hintContent": "г. Владивосток, ул. Часовитина, д. 5",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#339900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 486,
      "geometry": {
        "type": "Point",
        "coordinates": [43.229334, 131.998187]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Четвертая, д. 4к2",
        "hintContent": "г. Владивосток, ул. Четвертая, д. 4к2",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 487,
      "geometry": {
        "type": "Point",
        "coordinates": [43.229938, 131.998322]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Четвертая, д. 6Б",
        "hintContent": "г. Владивосток, ул. Четвертая, д. 6Б",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 488,
      "geometry": {
        "type": "Point",
        "coordinates": [43.230641, 131.998394]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Четвертая, д. 6Д",
        "hintContent": "г. Владивосток, ул. Четвертая, д. 6Д",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 489,
      "geometry": {
        "type": "Point",
        "coordinates": [43.109323, 131.963414]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Нейбута, д. 45/1",
        "hintContent": "г. Владивосток, ул. Нейбута, д. 45/1",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 490,
      "geometry": {
        "type": "Point",
        "coordinates": [43.220886, 131.969396]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 120",
        "hintContent": "г. Владивосток, ул. Маковского, д. 120",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    },
    {
      "type": "Feature",
      "id": 491,
      "geometry": {
        "type": "Point",
        "coordinates": [43.265648, 132.072765]
      },
      "properties": {
        "balloonContent": "г. Владивосток, ул. Маковского, д. 290",
        "hintContent": "г. Владивосток, ул. Маковского, д. 290",
        "clusterCaption": "ВЛД"
      },
      "options": {
        "iconColor": "#009900",
        "preset": "islands#blueCircleDotIcon"
      }
    }
  ]
}
`;

// ttt=`
// {
//     "type": "FeatureCollection",
//     "features": [
//         {"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Метка с iconContent", "hintContent": "Текст подсказки", "iconContent": "1"}, "options": {"iconColor": "#ff0000", "preset": "islands#blueCircleIcon"}},
//         {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}, "options": {"preset": "islands#blueSportCircleIcon"}},
//         {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [55.763338, 37.665466]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}, "options": {"preset": "islands#blueSportIcon"}},
//         {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [55.744522, 37.616378]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки", "iconContent": "22"}, "options": {"preset": "islands#blueIcon"}},
//         {"type": "Feature", "id": 4, "geometry": {"type": "Point", "coordinates": [55.780898, 37.642889]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки", "iconContent": "я тут!"}, "options": {"preset": "islands#blueStretchyIcon"}},
//         {"type": "Feature", "id": 5, "geometry": {"type": "Point", "coordinates": [55.793559, 37.435983]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}, "options": {"preset": "islands#blueDotIcon"}},
//         {"type": "Feature", "id": 6, "geometry": {"type": "Point", "coordinates": [55.800584, 37.675638]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}, "options": {"preset": "islands#blueCircleDotIcon"}},
//         {"type": "Feature", "id": 7, "geometry": {"type": "Point", "coordinates": [55.716733, 37.589988]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки", "iconCaption": "Подпись метки"}, "options": {"preset": "islands#blueGovernmentCircleIcon"}},
//         {"type": "Feature", "id": 8, "geometry": {"type": "Point", "coordinates": [55.815724, 37.56084]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки", "iconCaption": "Подпись метки"}, "options": {"preset": "islands#blueGovernmentIcon"}},
//         {"type": "Feature", "id": 10, "geometry": {"type": "Point", "coordinates": [55.87417, 37.669838]}, "properties": {"balloonContent": "У меня нестандартный курсор", "clusterCaption": "У меня нестандартный курсор", "hintContent": "У меня нестандартный курсор"}, "options": {"iconColor": "#ff0000", "cursor": "help"}},
//         {"type": "Feature", "id": 11, "geometry": {"type": "Point", "coordinates": [55.71677, 37.482338]}, "properties": {"balloonContent": "Я не пропадаю, когда балун открыт", "clusterCaption": "Я не пропадаю, когда балун открыт", "hintContent": "Я не пропадаю, когда балун открыт"}, "options": {"preset": "islands#redGovernmentCircleIcon", "hideIconOnBalloonOpen": false}},
//         {"type": "Feature", "id": 12, "geometry": {"type": "Point", "coordinates": [55.78085, 37.75021]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Мой балун не откроется"}, "options": {"iconColor": "#ff0000", "openBalloonOnClick": false}},
//         {"type": "Feature", "id": 13, "geometry": {"type": "Point", "coordinates": [55.810906, 37.654142]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Еще одна метка", "hintContent": "Текст подсказки"}, "options": {}},
//         {"type": "Feature", "id": 14, "geometry": {"type": "Point", "coordinates": [44.158003, 133.272789]},"properties": {"balloonContent": "г. Арсеньев, ул. Островского, д. 11", "hintContent": "г. Арсеньев, ул. Островского, д. 11"},"options": {"preset": "islands#blueCircleDotIcon"}}
//         ]
// }
// `;




data = JSON.parse(ttt);
objectManager.add(data);

    // $.ajax({
    //     // В файле data.json заданы геометрия, опции и данные меток .
    //     url: "data.json"
    // }).done(function(data) {
    //     objectManager.add(data);
    // });

}