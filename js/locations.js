
const places = [
  {
    "id": "borisoglebskyi",
    "name": {
      "uk": "Борисоглібський собор",
      "en": "Borysohlibskyi Cathedral"
    },
    "district": {
      "uk": "Чернігівський район",
      "en": "Chernihiv District"
    },
    "direction": {
      "uk": "Давньоруські храми",
      "en": "Kyivan Rus temples"
    },
    "type": "cathedral",
    "typeLabel": {
      "uk": "собор",
      "en": "cathedral"
    },
    "period": {
      "uk": "XII століття",
      "en": "12th century"
    },
    "lat": 51.4938,
    "lng": 31.3002,
    "img": "images/places/place-borisoglebskyi-main.jpg",
    "desc": {
      "uk": "Один із найвідоміших храмів домонгольської доби в Чернігові та важлива пам’ятка архітектурної спадщини княжого періоду.",
      "en": "One of the best-known pre-Mongol churches in Chernihiv and an important monument of princely-era architecture."
    },
    "address": {
      "uk": "м. Чернігів, Валу, територія Дитинця",
      "en": "Chernihiv, Val, Detynets area"
    },
    "page": "borisoglebskyi.html"
  },
  {
    "id": "antony-caves",
    "name": {
      "uk": "Антонієві печери",
      "en": "Antony Caves"
    },
    "district": {
      "uk": "Чернігівський район",
      "en": "Chernihiv District"
    },
    "direction": {
      "uk": "Печерні монастирі",
      "en": "Cave monasteries"
    },
    "type": "monastery",
    "typeLabel": {
      "uk": "монастир",
      "en": "monastery"
    },
    "period": {
      "uk": "XI–XIX століття",
      "en": "11th–19th centuries"
    },
    "lat": 51.4847,
    "lng": 31.3124,
    "img": "images/places/place-antony-caves-main.jpg",
    "desc": {
      "uk": "Підземний комплекс XI–XIX століть у складі заповідника «Чернігів стародавній».",
      "en": "An underground complex of the 11th–19th centuries within the Ancient Chernihiv reserve."
    },
    "address": {
      "uk": "м. Чернігів, Болдині гори",
      "en": "Chernihiv, Boldyni Hills"
    },
    "page": "antony-caves.html"
  },
  {
    "id": "yelets",
    "name": {
      "uk": "Єлецький монастир",
      "en": "Yelets Monastery"
    },
    "district": {
      "uk": "Чернігівський район",
      "en": "Chernihiv District"
    },
    "direction": {
      "uk": "Монастирські комплекси",
      "en": "Monastic complexes"
    },
    "type": "monastery",
    "typeLabel": {
      "uk": "монастир",
      "en": "monastery"
    },
    "period": {
      "uk": "XI–XVIII століття",
      "en": "11th–18th centuries"
    },
    "lat": 51.4898,
    "lng": 31.2968,
    "img": "images/places/place-yelets-main.jpg",
    "desc": {
      "uk": "Один із найдавніших монастирів Чернігова з багатим архітектурним ансамблем.",
      "en": "One of the oldest monasteries in Chernihiv with a rich architectural ensemble."
    },
    "address": {
      "uk": "м. Чернігів, вул. Князя Чорного, 1",
      "en": "Chernihiv, Kniazia Chornoho St, 1"
    },
    "page": "#"
  },
  {
    "id": "lyzohub",
    "name": {
      "uk": "Садиба Лизогубів",
      "en": "Lyzohub Estate"
    },
    "district": {
      "uk": "Чернігівський район",
      "en": "Chernihiv District"
    },
    "direction": {
      "uk": "Садибна спадщина",
      "en": "Estate heritage"
    },
    "type": "estate",
    "typeLabel": {
      "uk": "садиба",
      "en": "estate"
    },
    "period": {
      "uk": "кінець XVII століття",
      "en": "late 17th century"
    },
    "lat": 51.6516,
    "lng": 31.5654,
    "img": "images/places/place-lyzohub-main.jpg",
    "desc": {
      "uk": "Історична садиба в Седневі, пов’язана з козацько-старшинськими родами.",
      "en": "A historic estate in Sedniv associated with Cossack officer families."
    },
    "address": {
      "uk": "смт Седнів, вул. Шевченка, 28",
      "en": "Sedniv, Shevchenka St, 28"
    },
    "page": "#"
  },
  {
    "id": "uspenskyi",
    "name": {
      "uk": "Успенський собор",
      "en": "Assumption Cathedral"
    },
    "district": {
      "uk": "Новгород-Сіверський район",
      "en": "Novhorod-Siverskyi District"
    },
    "direction": {
      "uk": "Барокова сакральна спадщина",
      "en": "Baroque sacral heritage"
    },
    "type": "cathedral",
    "typeLabel": {
      "uk": "собор",
      "en": "cathedral"
    },
    "period": {
      "uk": "XVII–XVIII століття",
      "en": "17th–18th centuries"
    },
    "lat": 52.0059,
    "lng": 33.2622,
    "img": "images/places/place-uspenskyi-main.jpg",
    "desc": {
      "uk": "Пам’ятка українського бароко в Новгороді-Сіверському.",
      "en": "A monument of Ukrainian Baroque in Novhorod-Siverskyi."
    },
    "address": {
      "uk": "м. Новгород-Сіверський, територія монастиря",
      "en": "Novhorod-Siverskyi, monastery grounds"
    },
    "page": "#"
  },
  {
    "id": "rumiantsev",
    "name": {
      "uk": "Палац Румʼянцева-Задунайського",
      "en": "Rumyantsev-Zadunaisky Palace"
    },
    "district": {
      "uk": "Новгород-Сіверський район",
      "en": "Novhorod-Siverskyi District"
    },
    "direction": {
      "uk": "Палаци та резиденції",
      "en": "Palaces and residences"
    },
    "type": "palace",
    "typeLabel": {
      "uk": "палац",
      "en": "palace"
    },
    "period": {
      "uk": "кінець XVIII століття",
      "en": "late 18th century"
    },
    "lat": 51.9956,
    "lng": 33.4663,
    "img": "images/places/place-rumiantsev-main.jpg",
    "desc": {
      "uk": "Оригінальна палацова пам’ятка кінця XVIII століття у Вишеньках.",
      "en": "A distinctive palace monument of the late 18th century in Vyshenky."
    },
    "address": {
      "uk": "с. Вишеньки, центральна частина села",
      "en": "Vyshenky village, central area"
    },
    "page": "#"
  },
  {
    "id": "slovo-museum",
    "name": {
      "uk": "Музей-заповідник «Слово о полку Ігоревім»",
      "en": "“The Tale of Igor’s Campaign” Museum-Reserve"
    },
    "district": {
      "uk": "Новгород-Сіверський район",
      "en": "Novhorod-Siverskyi District"
    },
    "direction": {
      "uk": "Музейні комплекси",
      "en": "Museum complexes"
    },
    "type": "museum",
    "typeLabel": {
      "uk": "музей",
      "en": "museum"
    },
    "period": {
      "uk": "1990 рік",
      "en": "1990"
    },
    "lat": 52.0046,
    "lng": 33.2674,
    "img": "images/places/place-slovo-museum-main.jpg",
    "desc": {
      "uk": "Музейний простір на території Спасо-Преображенського монастиря.",
      "en": "A museum space located on the grounds of the Transfiguration Monastery."
    },
    "address": {
      "uk": "м. Новгород-Сіверський, вул. Преображенська, 1",
      "en": "Novhorod-Siverskyi, Preobrazhenska St, 1"
    },
    "page": "#"
  },
  {
    "id": "mezyn",
    "name": {
      "uk": "Мезинська стоянка",
      "en": "Mezyn Settlement"
    },
    "district": {
      "uk": "Новгород-Сіверський район",
      "en": "Novhorod-Siverskyi District"
    },
    "direction": {
      "uk": "Археологічні локації",
      "en": "Archaeological locations"
    },
    "type": "archaeology",
    "typeLabel": {
      "uk": "археологія",
      "en": "archaeology"
    },
    "period": {
      "uk": "палеоліт",
      "en": "Paleolithic"
    },
    "lat": 52.1468,
    "lng": 33.0729,
    "img": "images/places/place-mezyn-main.jpg",
    "desc": {
      "uk": "Одна з найвідоміших палеолітичних пам’яток Європи.",
      "en": "One of the most famous Paleolithic sites in Europe."
    },
    "address": {
      "uk": "с. Мезин, територія нацпарку",
      "en": "Mezyn village, national park area"
    },
    "page": "#"
  },
  {
    "id": "galagan",
    "name": {
      "uk": "Палац Галаганів",
      "en": "Galagan Palace"
    },
    "district": {
      "uk": "Прилуцький район",
      "en": "Pryluky District"
    },
    "direction": {
      "uk": "Палацово-паркові ансамблі",
      "en": "Palace and park ensembles"
    },
    "type": "palace",
    "typeLabel": {
      "uk": "палац",
      "en": "palace"
    },
    "period": {
      "uk": "XIX століття",
      "en": "19th century"
    },
    "lat": 50.7271,
    "lng": 32.7911,
    "img": "images/places/place-galagan-main.jpg",
    "desc": {
      "uk": "Палацовий ансамбль у Сокиринцях — перлина дворянської архітектури.",
      "en": "A palace ensemble in Sokyryntsi, a jewel of noble architecture."
    },
    "address": {
      "uk": "с. Сокиринці, парковий комплекс",
      "en": "Sokyryntsi village, park complex"
    },
    "page": "#"
  },
  {
    "id": "trostanets",
    "name": {
      "uk": "Дендропарк «Тростянець»",
      "en": "Trostianets Arboretum"
    },
    "district": {
      "uk": "Прилуцький район",
      "en": "Pryluky District"
    },
    "direction": {
      "uk": "Історичні парки",
      "en": "Historic parks"
    },
    "type": "park",
    "typeLabel": {
      "uk": "парк",
      "en": "park"
    },
    "period": {
      "uk": "XIX століття",
      "en": "19th century"
    },
    "lat": 50.6456,
    "lng": 32.8441,
    "img": "images/places/place-trostanets-main.jpg",
    "desc": {
      "uk": "Відомий пейзажний парк XIX століття в оточенні штучних озер.",
      "en": "A famous 19th-century landscape park surrounded by artificial lakes."
    },
    "address": {
      "uk": "с. Тростянець, дендропарк",
      "en": "Trostianets village, arboretum"
    },
    "page": "#"
  },
  {
    "id": "kachanivka",
    "name": {
      "uk": "Качанівка",
      "en": "Kachanivka"
    },
    "district": {
      "uk": "Прилуцький район",
      "en": "Pryluky District"
    },
    "direction": {
      "uk": "Палацово-паркові ансамблі",
      "en": "Palace and park ensembles"
    },
    "type": "estate",
    "typeLabel": {
      "uk": "садиба",
      "en": "estate"
    },
    "period": {
      "uk": "XVIII–XIX століття",
      "en": "18th–19th centuries"
    },
    "lat": 50.7391,
    "lng": 32.588,
    "img": "images/places/place-kachanivka-main.jpg",
    "desc": {
      "uk": "Національний історико-культурний заповідник з палацом та парком.",
      "en": "A national historical and cultural reserve with a palace and park."
    },
    "address": {
      "uk": "с. Качанівка, заповідник «Качанівка»",
      "en": "Kachanivka village, Kachanivka Reserve"
    },
    "page": "kachanivka.html"
  },
  {
    "id": "gustynia",
    "name": {
      "uk": "Густинський монастир",
      "en": "Gustynia Monastery"
    },
    "district": {
      "uk": "Прилуцький район",
      "en": "Pryluky District"
    },
    "direction": {
      "uk": "Монастирські комплекси",
      "en": "Monastic complexes"
    },
    "type": "monastery",
    "typeLabel": {
      "uk": "монастир",
      "en": "monastery"
    },
    "period": {
      "uk": "близько 1600 року",
      "en": "around 1600"
    },
    "lat": 50.5638,
    "lng": 32.4455,
    "img": "images/places/place-gustynia-main.jpg",
    "desc": {
      "uk": "Один із найвідоміших монастирів Лівобережної України.",
      "en": "One of the best-known monasteries of Left-Bank Ukraine."
    },
    "address": {
      "uk": "с. Густиня, монастирський комплекс",
      "en": "Hustynia village, monastery complex"
    },
    "page": "gustynia.html"
  },
  {
    "id": "greek-church",
    "name": {
      "uk": "Грецька Всіхсвятська церква",
      "en": "Greek All Saints Church"
    },
    "district": {
      "uk": "Ніжинський район",
      "en": "Nizhyn District"
    },
    "direction": {
      "uk": "Міська сакральна архітектура",
      "en": "Urban sacral architecture"
    },
    "type": "church",
    "typeLabel": {
      "uk": "церква",
      "en": "church"
    },
    "period": {
      "uk": "XVIII століття",
      "en": "18th century"
    },
    "lat": 51.0484,
    "lng": 31.8846,
    "img": "images/places/place-greek-church-main.jpg",
    "desc": {
      "uk": "Відомий храм Ніжина, пов’язаний з історією грецької громади.",
      "en": "A notable church in Nizhyn associated with the history of the Greek community."
    },
    "address": {
      "uk": "м. Ніжин, історичний центр",
      "en": "Nizhyn, historic center"
    },
    "page": "#"
  },
  {
    "id": "bohoiavlenska",
    "name": {
      "uk": "Свято-Богоявленська церква",
      "en": "Holy Epiphany Church"
    },
    "district": {
      "uk": "Ніжинський район",
      "en": "Nizhyn District"
    },
    "direction": {
      "uk": "Міська сакральна архітектура",
      "en": "Urban sacral architecture"
    },
    "type": "church",
    "typeLabel": {
      "uk": "церква",
      "en": "church"
    },
    "period": {
      "uk": "XVIII століття",
      "en": "18th century"
    },
    "lat": 51.0479,
    "lng": 31.8863,
    "img": "images/places/place-bohoiavlenska-main.jpg",
    "desc": {
      "uk": "Пам’ятка культової архітектури в історичному Ніжині.",
      "en": "A monument of sacred architecture in historic Nizhyn."
    },
    "address": {
      "uk": "м. Ніжин, центральна частина міста",
      "en": "Nizhyn, central part of the city"
    },
    "page": "#"
  },
  {
    "id": "rozumovsky",
    "name": {
      "uk": "Палац Розумовського",
      "en": "Rozumovsky Palace"
    },
    "district": {
      "uk": "Ніжинський район",
      "en": "Nizhyn District"
    },
    "direction": {
      "uk": "Гетьманська спадщина",
      "en": "Hetman heritage"
    },
    "type": "palace",
    "typeLabel": {
      "uk": "палац",
      "en": "palace"
    },
    "period": {
      "uk": "XVIII століття",
      "en": "18th century"
    },
    "lat": 51.3455,
    "lng": 32.8819,
    "img": "images/places/place-rozumovsky-main.jpg",
    "desc": {
      "uk": "Монументальна резиденція останнього гетьмана Кирила Розумовського.",
      "en": "The monumental residence of the last hetman, Kyrylo Rozumovsky."
    },
    "address": {
      "uk": "м. Батурин, вул. Гетьманська",
      "en": "Baturyn, Hetmanska St"
    },
    "page": "rozumovsky.html"
  },
  {
    "id": "kochubey",
    "name": {
      "uk": "Будинок Кочубея",
      "en": "Kochubey House"
    },
    "district": {
      "uk": "Ніжинський район",
      "en": "Nizhyn District"
    },
    "direction": {
      "uk": "Гетьманська спадщина",
      "en": "Hetman heritage"
    },
    "type": "museum",
    "typeLabel": {
      "uk": "музей",
      "en": "museum"
    },
    "period": {
      "uk": "XVII століття",
      "en": "17th century"
    },
    "lat": 51.3443,
    "lng": 32.8826,
    "img": "images/places/place-kochubey-main.jpg",
    "desc": {
      "uk": "Старовинний будинок-музей у Батурині, пов’язаний із козацькою старшиною.",
      "en": "An old house-museum in Baturyn connected with Cossack officers."
    },
    "address": {
      "uk": "м. Батурин, історико-культурний заповідник",
      "en": "Baturyn, historical reserve"
    },
    "page": "#"
  },
  {
    "id": "maksaky",
    "name": {
      "uk": "Максаківський монастир",
      "en": "Maksaky Monastery"
    },
    "district": {
      "uk": "Корюківський район",
      "en": "Koriukivka District"
    },
    "direction": {
      "uk": "Поліські монастирі",
      "en": "Polissia monasteries"
    },
    "type": "monastery",
    "typeLabel": {
      "uk": "монастир",
      "en": "monastery"
    },
    "period": {
      "uk": "XVII століття",
      "en": "17th century"
    },
    "lat": 51.6856,
    "lng": 32.8779,
    "img": "images/places/place-maksaky-main.jpg",
    "desc": {
      "uk": "Давній монастирський осередок північної Чернігівщини.",
      "en": "An old monastic center of northern Chernihiv region."
    },
    "address": {
      "uk": "с. Максаки, монастирський комплекс",
      "en": "Maksaky village, monastery complex"
    },
    "page": "#"
  },
  {
    "id": "pokrovy",
    "name": {
      "uk": "Церква Покрови Богородиці",
      "en": "Church of the Protection of the Mother of God"
    },
    "district": {
      "uk": "Корюківський район",
      "en": "Koriukivka District"
    },
    "direction": {
      "uk": "Поліська сакральна спадщина",
      "en": "Polissia sacral heritage"
    },
    "type": "church",
    "typeLabel": {
      "uk": "церква",
      "en": "church"
    },
    "period": {
      "uk": "початок XX століття",
      "en": "early 20th century"
    },
    "lat": 51.975,
    "lng": 32.85,
    "img": "images/places/place-pokrovy-main.jpg",
    "desc": {
      "uk": "Кам’яний храм початку XX століття у поліському селі Жукля.",
      "en": "A stone church of the early 20th century in the Polissia village of Zhuklia."
    },
    "address": {
      "uk": "с. Жукля, центральна вулиця",
      "en": "Zhuklia village, main street"
    },
    "page": "#"
  },
];
const ui = {
  uk: {
    brandTitle:'Історичні місця', brandSubtitle:'Чернігівської області', navAbout:'Про сайт', navLocations:'Локації', navRoutes:'Рекомендовані маршрути', navMap:'Мапа', navGallery:'Галерея',
    themeLight:'Світла', themeDark:'Темна', title:'Локації Чернігівщини', subtitle:"➤ ------------------------------------- 📍",
    searchPlaceholder:'Пошук за назвою, районом або історичним напрямом', allDistricts:'Вся область', allTypes:'Категорія', reset:'Скинути фільтри', address:'Адреса', route:'Маршрут', details:'Детальніше', share:'Поділитись', category:'Категорія', period:'Період', district:'Район', aboutPlace:'Про місце', count:(n)=>'Знайдено '+n+' місць', mapUnavailable:'Мапа тимчасово недоступна', mapUnavailableText:'Не вдалося завантажити бібліотеку карти. Перевірте підключення до інтернету або відкрийте сайт з хостингу.'
  },
  en: {
    brandTitle:'Historic Places', brandSubtitle:'of Chernihiv Region', navAbout:'About the site', navLocations:'Locations', navRoutes:'Recommended routes', navMap:'Map', navGallery:'Gallery',
    themeLight:'Light', themeDark:'Dark', title:'Tourist map of Chernihiv region', subtitle:'The locations page combines search, filters and an interactive map. Choose a district or object type and view all matching places on the map.',
    searchPlaceholder:'Search by name, district or historical direction', allDistricts:'Entire region', allTypes:'Category', reset:'Reset filters', address:'Address', route:'Route', details:'Details', share:'Share', category:'Category', period:'Period', district:'District', aboutPlace:'About the place', count:(n)=>n+' places found', mapUnavailable:'Map is temporarily unavailable', mapUnavailableText:'The map library could not be loaded. Check your internet connection or open the site from hosting.'
  }
};
let currentLang = localStorage.getItem('site-lang') || 'uk';
let currentTheme = localStorage.getItem('site-theme') || 'dark';
let map = null;
let markerLayer = null;
let activeId = null;
const refs = {};
function $(id){ return document.getElementById(id); }
function tr(key){ return ui[currentLang][key] || key; }
function textOf(obj, key){ const value = obj[key]; return value && typeof value === 'object' ? (value[currentLang] || value.uk || '') : (value || ''); }
function applyTheme(theme){ currentTheme=theme; localStorage.setItem('site-theme', theme); document.documentElement.dataset.theme=theme; document.querySelectorAll('.theme-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.theme===theme)); }
function applyLang(lang){ currentLang=lang; localStorage.setItem('site-lang', lang); document.documentElement.lang = lang; document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang===lang)); updateTexts(); renderLocations(); if(activeId) openPlace(activeId,false); }
function updateTexts(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder = tr(el.dataset.i18nPlaceholder); });
}
function filteredPlaces(){
  const q = ($('locationSearch').value || '').trim().toLowerCase();
  const district = $('districtFilter').value;
  const type = $('typeFilter').value;
  return places.filter(p=>{
    const hay = [p.name.uk,p.name.en,p.district.uk,p.district.en,p.direction.uk,p.direction.en,p.typeLabel.uk,p.typeLabel.en,p.address?.uk||'',p.address?.en||''].join(' ').toLowerCase();
    const okQ = !q || hay.includes(q);
    const okD = district === 'all' || p.district.uk === district;
    const okT = type === 'all' || p.type === type;
    return okQ && okD && okT;
  });
}
function routeUrl(p){ return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(p.lat + ',' + p.lng); }
function detailsUrl(p){ return p.page && p.page !== '#' ? p.page : routeUrl(p); }
function metaPills(p){ return [textOf(p,'period'), textOf(p,'direction'), textOf(p,'typeLabel')].filter(Boolean).map(value => '<span class="meta-pill">'+value+'</span>').join(''); }
function renderLocations(){
  const items = filteredPlaces();
  $('resultsCount').textContent = tr('count')(items.length);
  $('locationsList').innerHTML = items.map(p => 
    '<article class="location-card-fixed'+(p.id===activeId?' active':'')+'" data-id="'+p.id+'">'+
      '<img src="'+p.img+'" alt="'+textOf(p,'name')+'">'+
      '<div>'+
        '<div class="district">'+textOf(p,'district')+'</div>'+
        '<h3>'+textOf(p,'name')+'</h3>'+
        '<p>'+textOf(p,'desc')+'</p>'+
        '<div class="address">'+(p.address ? textOf(p,'address') : textOf(p,'district'))+'</div>'+
      '</div>'+
    '</article>'
  ).join('');
  document.querySelectorAll('.location-card-fixed').forEach(card=>card.addEventListener('click', ()=>openPlace(card.dataset.id,true)));
  renderMap(items);
}
function renderMap(items){
  const fallback = $('mapFallback');
  const mapEl = $('locationsMap');
  if(!window.L){ fallback.hidden = false; mapEl.style.display='none'; return; }
  fallback.hidden = true; mapEl.style.display='block';
  if(!map){
    map = L.map('locationsMap', {scrollWheelZoom:true}).setView([51.3, 32.3], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; OpenStreetMap'}).addTo(map);
    markerLayer = L.layerGroup().addTo(map);
  }
  markerLayer.clearLayers();
  items.forEach(p=>{
    const marker = L.marker([p.lat, p.lng]).addTo(markerLayer);
    marker.bindPopup('<strong>'+textOf(p,'name')+'</strong><br>'+textOf(p,'district'));
    marker.on('click', ()=>openPlace(p.id,false));
  });
  if(items.length){
    const bounds = L.latLngBounds(items.map(p=>[p.lat, p.lng]));
    map.fitBounds(bounds.pad(0.12));
  }
  setTimeout(()=>map.invalidateSize(), 50);
}
function openPlace(id, scroll){
  const p = places.find(x=>x.id===id); if(!p) return;
  showOverlay();
  activeId = id;
  $('overlayImage').src = p.img;
  $('overlayImage').alt = textOf(p,'name');
  $('overlayDistrict').textContent = textOf(p,'district');
  $('overlayDistrictText').textContent = textOf(p,'district');
  $('overlayTitle').textContent = textOf(p,'name');
  $('overlayMeta').innerHTML = metaPills(p);
  $('overlayAddress').textContent = p.address ? textOf(p,'address') : textOf(p,'district');
  $('overlayCategory').textContent = textOf(p,'typeLabel');
  $('overlayPeriod').textContent = textOf(p,'period');
  $('overlayDesc').textContent = textOf(p,'desc');
  $('overlayRoute').textContent = tr('route');
  $('overlayRoute').href = routeUrl(p);
  document.querySelectorAll('.location-card-fixed').forEach(card=>card.classList.toggle('active', card.dataset.id===id));
  if(map){
    map.setView([p.lat, p.lng], 10, {animate:true});
    markerLayer.eachLayer(layer=>{ const ll=layer.getLatLng(); if(Math.abs(ll.lat-p.lat)<1e-6 && Math.abs(ll.lng-p.lng)<1e-6){ layer.openPopup(); } });
  }
}
function closeOverlay(){
  const overlay = $('mapPlaceOverlay');
  overlay.classList.add('is-hidden');
  if(map){ map.closePopup(); }
  activeId = "";
  document.querySelectorAll('.location-card-fixed').forEach(card=>card.classList.remove('active'));
}

function showOverlay(){
  $('mapPlaceOverlay').classList.remove('is-hidden');
}

function init(){
  updateTexts();
  applyTheme(currentTheme);
  document.querySelectorAll('.theme-btn').forEach(btn=>btn.addEventListener('click', ()=>applyTheme(btn.dataset.theme)));
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click', ()=>applyLang(btn.dataset.lang)));
  ['locationSearch','districtFilter','typeFilter'].forEach(id=>$(id).addEventListener('input', renderLocations));
  $('overlayClose').addEventListener('click', closeOverlay);
  $('resetFilters').addEventListener('click', ()=>{ $('locationSearch').value=''; $('districtFilter').value='all'; $('typeFilter').value='all'; renderLocations(); if(places[0]) openPlace(places[0].id,false); });
  renderLocations();
  if(places[0]) openPlace(places[0].id,false);
  const hash = location.hash.replace('#',''); if(hash && places.some(p=>p.id===hash)) openPlace(hash,false);
}
document.addEventListener('DOMContentLoaded', init);
