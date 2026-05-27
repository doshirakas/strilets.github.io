const places = [
  {id:'borisoglebskyi',
    name:{uk:'Борисоглібський собор',en:'Borysohlibskyi Cathedral'},
    district:{uk:'Чернігівський район',en:'Chernihiv District'},
    direction:{uk:'Давньоруські храми',en:'Kyivan Rus temples'},
    type:'cathedral',
    typeLabel:{uk:'собор',en:'cathedral'},
    period:{uk:'XII століття',en:'12th century'},
    lat:51.4938,lng:31.3002,img:'images/places/place-borisoglebskyi-main.jpg',
    desc:{uk:'Один із найвідоміших храмів домонгольської доби в Чернігові та важлива пам’ятка архітектурної спадщини княжого періоду.',en:'One of the best-known pre-Mongol churches in Chernihiv and an important monument of princely-era architecture.'}, address:{uk:'м. Чернігів, Валу, територія Дитинця',en:'Chernihiv, Val, Detynets area'},
    page:'borisoglebskyi.html'},
  {id:'antony-caves', name:{uk:'Антонієві печери',en:'Antony Caves'}, district:{uk:'Чернігівський район',en:'Chernihiv District'}, direction:{uk:'Печерні монастирі',en:'Cave monasteries'}, type:'monastery', typeLabel:{uk:'монастир',en:'monastery'}, period:{uk:'XI–XIX століття',en:'11th–19th centuries'}, lat:51.4847,lng:31.3124,img:'images/places/place-antony-caves-main.jpg', desc:{uk:'Підземний комплекс XI–XIX століть у складі заповідника «Чернігів стародавній».',en:'An underground complex of the 11th–19th centuries within the Ancient Chernihiv reserve.'}, address:{uk:'м. Чернігів, Болдині гори',en:'Chernihiv, Boldyni Hills'}, page:'antony-caves.html'},
  {id:'yelets', name:{uk:'Єлецький монастир',en:'Yelets Monastery'}, district:{uk:'Чернігівський район',en:'Chernihiv District'}, direction:{uk:'Монастирські комплекси',en:'Monastic complexes'}, type:'monastery', typeLabel:{uk:'монастир',en:'monastery'}, period:{uk:'XI–XVIII століття',en:'11th–18th centuries'}, lat:51.4898,lng:31.2968,img:'images/places/place-yelets-main.jpg', desc:{uk:'Один із найдавніших монастирів Чернігова з багатим архітектурним ансамблем.',en:'One of the oldest monasteries in Chernihiv with a rich architectural ensemble.'}, address:{uk:'м. Чернігів, вул. Князя Чорного, 1',en:'Chernihiv, Kniazia Chornoho St, 1'}, page:'#'},
  {id:'lyzohub', name:{uk:'Садиба Лизогубів',en:'Lyzohub Estate'}, district:{uk:'Чернігівський район',en:'Chernihiv District'}, direction:{uk:'Садибна спадщина',en:'Estate heritage'}, type:'estate', typeLabel:{uk:'садиба',en:'estate'}, period:{uk:'кінець XVII століття',en:'late 17th century'}, lat:51.6516,lng:31.5654,img:'images/places/place-lyzohub-main.jpg', desc:{uk:'Історична садиба в Седневі, пов’язана з козацько-старшинськими родами.',en:'A historic estate in Sedniv associated with Cossack officer families.'}, address:{uk:'смт Седнів, вул. Шевченка, 28',en:'Sedniv, Shevchenka St, 28'}, page:'#'},
  {id:'uspenskyi', name:{uk:'Успенський собор',en:'Assumption Cathedral'}, district:{uk:'Новгород-Сіверський район',en:'Novhorod-Siverskyi District'}, direction:{uk:'Барокова сакральна спадщина',en:'Baroque sacral heritage'}, type:'cathedral', typeLabel:{uk:'собор',en:'cathedral'}, period:{uk:'XVII–XVIII століття',en:'17th–18th centuries'}, lat:52.0059,lng:33.2622,img:'images/places/place-uspenskyi-main.jpg', desc:{uk:'Пам’ятка українського бароко в Новгороді-Сіверському.',en:'A monument of Ukrainian Baroque in Novhorod-Siverskyi.'}, address:{uk:'м. Новгород-Сіверський, територія монастиря',en:'Novhorod-Siverskyi, monastery grounds'}, page:'#'},
  {id:'rumiantsev', name:{uk:'Палац Румʼянцева-Задунайського',en:'Rumyantsev-Zadunaisky Palace'}, district:{uk:'Новгород-Сіверський район',en:'Novhorod-Siverskyi District'}, direction:{uk:'Палаци та резиденції',en:'Palaces and residences'}, type:'palace', typeLabel:{uk:'палац',en:'palace'}, period:{uk:'кінець XVIII століття',en:'late 18th century'}, lat:51.9956,lng:33.4663,img:'images/places/place-rumiantsev-main.jpg', desc:{uk:'Оригінальна палацова пам’ятка кінця XVIII століття у Вишеньках.',en:'A distinctive palace monument of the late 18th century in Vyshenky.'}, address:{uk:'с. Вишеньки, центральна частина села',en:'Vyshenky village, central area'}, page:'#'},
  {id:'slovo-museum', name:{uk:'Музей-заповідник «Слово о полку Ігоревім»',en:'“The Tale of Igor’s Campaign” Museum-Reserve'}, district:{uk:'Новгород-Сіверський район',en:'Novhorod-Siverskyi District'}, direction:{uk:'Музейні комплекси',en:'Museum complexes'}, type:'museum', typeLabel:{uk:'музей',en:'museum'}, period:{uk:'1990 рік',en:'1990'}, lat:52.0046,lng:33.2674,img:'images/places/place-slovo-museum-main.jpg', desc:{uk:'Музейний простір на території Спасо-Преображенського монастиря.',en:'A museum space located on the grounds of the Transfiguration Monastery.'}, address:{uk:'м. Новгород-Сіверський, вул. Преображенська, 1',en:'Novhorod-Siverskyi, Preobrazhenska St, 1'}, page:'#'},
  {id:'mezyn', name:{uk:'Мезинська стоянка',en:'Mezyn Settlement'}, district:{uk:'Новгород-Сіверський район',en:'Novhorod-Siverskyi District'}, direction:{uk:'Археологічні локації',en:'Archaeological locations'}, type:'archaeology', typeLabel:{uk:'археологія',en:'archaeology'}, period:{uk:'палеоліт',en:'Paleolithic'}, lat:52.1468,lng:33.0729,img:'images/places/place-mezyn-main.jpg', desc:{uk:'Одна з найвідоміших палеолітичних пам’яток Європи.',en:'One of the most famous Paleolithic sites in Europe.'}, address:{uk:'с. Мезин, територія нацпарку',en:'Mezyn village, national park area'}, page:'#'},
  {id:'galagan', name:{uk:'Палац Галаганів',en:'Galagan Palace'}, district:{uk:'Прилуцький район',en:'Pryluky District'}, direction:{uk:'Палацово-паркові ансамблі',en:'Palace and park ensembles'}, type:'palace', typeLabel:{uk:'палац',en:'palace'}, period:{uk:'XIX століття',en:'19th century'}, lat:50.7271,lng:32.7911,img:'images/places/place-galagan-main.png', desc:{uk:'Палацовий ансамбль у Сокиринцях — перлина дворянської архітектури.',en:'A palace ensemble in Sokyryntsi, a jewel of noble architecture.'}, address:{uk:'с. Сокиринці, парковий комплекс',en:'Sokyryntsi village, park complex'}, page:'#'},
  {id:'trostanets', name:{uk:'Дендропарк «Тростянець»',en:'Trostianets Arboretum'}, district:{uk:'Прилуцький район',en:'Pryluky District'}, direction:{uk:'Історичні парки',en:'Historic parks'}, type:'park', typeLabel:{uk:'парк',en:'park'}, period:{uk:'XIX століття',en:'19th century'}, lat:50.6456,lng:32.8441,img:'images/places/place-trostanets-main.png', desc:{uk:'Відомий пейзажний парк XIX століття в оточенні штучних озер.',en:'A famous 19th-century landscape park surrounded by artificial lakes.'}, address:{uk:'с. Тростянець, дендропарк',en:'Trostianets village, arboretum'}, page:'#'},
  {id:'kachanivka', name:{uk:'Качанівка',en:'Kachanivka'}, district:{uk:'Прилуцький район',en:'Pryluky District'}, direction:{uk:'Палацово-паркові ансамблі',en:'Palace and park ensembles'}, type:'estate', typeLabel:{uk:'садиба',en:'estate'}, period:{uk:'XVIII–XIX століття',en:'18th–19th centuries'}, lat:50.7391,lng:32.5880,img:'images/places/place-kachanivka-main.jpg', desc:{uk:'Національний історико-культурний заповідник з палацом та парком.',en:'A national historical and cultural reserve with a palace and park.'}, address:{uk:'с. Качанівка, заповідник «Качанівка»',en:'Kachanivka village, Kachanivka Reserve'}, page:'kachanivka.html'},
  {id:'gustynia', name:{uk:'Густинський монастир',en:'Gustynia Monastery'}, district:{uk:'Прилуцький район',en:'Pryluky District'}, direction:{uk:'Монастирські комплекси',en:'Monastic complexes'}, type:'monastery', typeLabel:{uk:'монастир',en:'monastery'}, period:{uk:'близько 1600 року',en:'around 1600'}, lat:50.5638,lng:32.4455,img:'images/places/place-gustynia-main.jpg', desc:{uk:'Один із найвідоміших монастирів Лівобережної України.',en:'One of the best-known monasteries of Left-Bank Ukraine.'}, address:{uk:'с. Густиня, монастирський комплекс',en:'Hustynia village, monastery complex'}, page:'gustynia.html'},
  {id:'greek-church', name:{uk:'Грецька Всіхсвятська церква',en:'Greek All Saints Church'}, district:{uk:'Ніжинський район',en:'Nizhyn District'}, direction:{uk:'Міська сакральна архітектура',en:'Urban sacral architecture'}, type:'church', typeLabel:{uk:'церква',en:'church'}, period:{uk:'XVIII століття',en:'18th century'}, lat:51.0484,lng:31.8846,img:'images/places/place-greek-church-main.png', desc:{uk:'Відомий храм Ніжина, пов’язаний з історією грецької громади.',en:'A notable church in Nizhyn associated with the history of the Greek community.'}, address:{uk:'м. Ніжин, історичний центр',en:'Nizhyn, historic center'}, page:'#'},
  {id:'bohoiavlenska', name:{uk:'Свято-Богоявленська церква',en:'Holy Epiphany Church'}, district:{uk:'Ніжинський район',en:'Nizhyn District'}, direction:{uk:'Міська сакральна архітектура',en:'Urban sacral architecture'}, type:'church', typeLabel:{uk:'церква',en:'church'}, period:{uk:'XVIII століття',en:'18th century'}, lat:51.0479,lng:31.8863,img:'images/places/place-bohoiavlenska-main.png', desc:{uk:'Пам’ятка культової архітектури в історичному Ніжині.',en:'A monument of sacred architecture in historic Nizhyn.'}, address:{uk:'м. Ніжин, центральна частина міста',en:'Nizhyn, central part of the city'}, page:'#'},
  {id:'rozumovsky', name:{uk:'Палац Розумовського',en:'Rozumovsky Palace'}, district:{uk:'Ніжинський район',en:'Nizhyn District'}, direction:{uk:'Гетьманська спадщина',en:'Hetman heritage'}, type:'palace', typeLabel:{uk:'палац',en:'palace'}, period:{uk:'XVIII століття',en:'18th century'}, lat:51.3455,lng:32.8819,img:'images/places/place-rozumovsky-main.jpg', desc:{uk:'Монументальна резиденція останнього гетьмана Кирила Розумовського.',en:'The monumental residence of the last hetman, Kyrylo Rozumovsky.'}, address:{uk:'м. Батурин, вул. Гетьманська',en:'Baturyn, Hetmanska St'}, page:'rozumovsky.html'},
  {id:'kochubey', name:{uk:'Будинок Кочубея',en:'Kochubey House'}, district:{uk:'Ніжинський район',en:'Nizhyn District'}, direction:{uk:'Гетьманська спадщина',en:'Hetman heritage'}, type:'museum', typeLabel:{uk:'музей',en:'museum'}, period:{uk:'XVII століття',en:'17th century'}, lat:51.3443,lng:32.8826,img:'images/places/place-kochubey-main.png', desc:{uk:'Старовинний будинок-музей у Батурині, пов’язаний із козацькою старшиною.',en:'An old house-museum in Baturyn connected with Cossack officers.'}, address:{uk:'м. Батурин, історико-культурний заповідник',en:'Baturyn, historical reserve'}, page:'#'},
  {id:'maksaky', name:{uk:'Максаківський монастир',en:'Maksaky Monastery'}, district:{uk:'Корюківський район',en:'Koriukivka District'}, direction:{uk:'Поліські монастирі',en:'Polissia monasteries'}, type:'monastery', typeLabel:{uk:'монастир',en:'monastery'}, period:{uk:'XVII століття',en:'17th century'}, lat:51.6856,lng:32.8779,img:'images/places/place-maksaky-main.png', desc:{uk:'Давній монастирський осередок північної Чернігівщини.',en:'An old monastic center of northern Chernihiv region.'}, address:{uk:'с. Максаки, монастирський комплекс',en:'Maksaky village, monastery complex'}, page:'#'},
  {id:'pokrovy', name:{uk:'Церква Покрови Богородиці',en:'Church of the Protection of the Mother of God'}, district:{uk:'Корюківський район',en:'Koriukivka District'}, direction:{uk:'Поліська сакральна спадщина',en:'Polissia sacral heritage'}, type:'church', typeLabel:{uk:'церква',en:'church'}, period:{uk:'початок XX століття',en:'early 20th century'}, lat:51.975,lng:32.85,img:'images/places/place-pokrovy-main.png', desc:{uk:'Кам’яний храм початку XX століття у поліському селі Жукля.',en:'A stone church of the early 20th century in the Polissia village of Zhuklia.'}, address:{uk:'с. Жукля, центральна вулиця',en:'Zhuklia village, main street'}, page:'#'},
  {id:'sosnytsia', name:{uk:'Сосниця',en:'Sosnytsia'}, district:{uk:'Корюківський район',en:'Koriukivka District'}, direction:{uk:'Малі історичні міста',en:'Small historic towns'}, type:'town', typeLabel:{uk:'історичне місто',en:'historic town'}, period:{uk:'історичне містечко',en:'historic town'}, lat:51.5238,lng:32.4956,img:'images/places/place-sosnytsia-main.png', desc:{uk:'Історичне містечко з музеями та цінною культурною пам’яттю краю.',en:'A historic small town with museums and valuable cultural memory.'}, page:'#'},
  {id:'snovsk', name:{uk:'Сновськ',en:'Snovsk'}, district:{uk:'Корюківський район',en:'Koriukivka District'}, direction:{uk:'Малі історичні міста',en:'Small historic towns'}, type:'town', typeLabel:{uk:'історичне місто',en:'historic town'}, period:{uk:'XIX–XX століття',en:'19th–20th centuries'}, lat:51.8213,lng:31.9447,img:'images/places/place-snovsk-main.png', desc:{uk:'Місто з історичною забудовою кінця XIX — початку XX століття.',en:'A town with historical development from the late 19th to early 20th centuries.'}, page:'#'}
];

const districtCards = [
  {title:{uk:'Чернігівський район',en:'Chernihiv District'}, direction:{uk:'Давньоруські храми та монастирські комплекси',en:'Kyivan Rus temples and monastic complexes'}, text:{uk:'Чернігівський район репрезентує княжу та сакральну спадщину області — від домонгольських соборів до печерних монастирів і старшинських садиб.',en:'Chernihiv District represents the princely and sacral heritage of the region — from pre-Mongol cathedrals to cave monasteries and noble estates.'}},
  {title:{uk:'Новгород-Сіверський район',en:'Novhorod-Siverskyi District'}, direction:{uk:'Музейні комплекси та археологія',en:'Museum complexes and archaeology'}, text:{uk:'Тут поєднуються стародавні монастирі, палаци, археологічні пам’ятки та музейні об’єкти сіверського краю.',en:'Ancient monasteries, palaces, archaeological sites and museum institutions are combined here.'}},
  {title:{uk:'Прилуцький район',en:'Pryluky District'}, direction:{uk:'Палацово-паркові ансамблі',en:'Palace and park ensembles'}, text:{uk:'Район відомий палацами, заповідниками та монастирями, що формують одну з найвиразніших туристичних ліній Чернігівщини.',en:'The district is known for palaces, reserves and monasteries, forming one of the region’s strongest travel lines.'}},
  {title:{uk:'Ніжинський район',en:'Nizhyn District'}, direction:{uk:'Гетьманська спадщина',en:'Hetman heritage'}, text:{uk:'Ніжин і Батурин відкривають історію гетьманської держави, культову архітектуру й осередки козацької старшини.',en:'Nizhyn and Baturyn reveal the history of the Hetman state, sacred architecture and Cossack officer centres.'}},
  {title:{uk:'Корюківський район',en:'Koriukivka District'}, direction:{uk:'Поліська історична спадщина',en:'Polissia historical heritage'}, text:{uk:'Північ області зберегла монастирі, храми, малі історичні міста та неповторну атмосферу поліського прикордоння.',en:'The north of the region has preserved monasteries, churches, small historic towns and the unique atmosphere of the Polissia borderland.'}}
];

const routes = [
  {title:{uk:'1 день Черніговом',en:'One day in Chernihiv'}, text:{uk:'Борисоглібський собор, Антонієві печери, Єлецький монастир та історичний центр міста.',en:'Borysohlibskyi Cathedral, Antony Caves, Yelets Monastery and the historic city centre.'}, tags:{uk:['1 день','Чернігів','Княжа доба'], en:['1 day','Chernihiv','Princely era']}},
  {title:{uk:'Гетьманські місця Батурина',en:'Hetman sites of Baturyn'}, text:{uk:'Палац Розумовського, Будинок Кочубея та інші об’єкти заповідника «Гетьманська столиця».',en:'Rozumovsky Palace, Kochubey House and other objects of the Hetman Capital reserve.'}, tags:{uk:['1 день','Батурин','Козацька доба'], en:['1 day','Baturyn','Cossack era']}},
  {title:{uk:'Палаци та садиби Чернігівщини',en:'Palaces and estates of Chernihiv region'}, text:{uk:'Качанівка, Сокиринці, Седнів та Вишеньки у маршруті для поціновувачів архітектури.',en:'Kachanivka, Sokyryntsi, Sedniv and Vyshenky in one route for architecture lovers.'}, tags:{uk:['2 дні','Садиби','Палаци'], en:['2 days','Estates','Palaces']}},
  {title:{uk:'Археологічна спадщина Сіверщини',en:'Archaeological heritage of Sivershchyna'}, text:{uk:'Мезинська стоянка та музейні локації Новгород-Сіверського району.',en:'Mezyn Settlement and museum sites of the Novhorod-Siverskyi district.'}, tags:{uk:['1–2 дні','Археологія','Сіверщина'], en:['1–2 days','Archaeology','Sivershchyna']}}
];

const ui = {
  uk: {
    brandTitle:'Історичні місця', brandSubtitle:'Чернігівської області', navAbout:'Про сайт', navLocations:'Локації', navRoutes:'Рекомендовані маршрути', navMap:'Мапа', navGallery:'Галерея',
    themeLight:'Світла', themeDark:'Темна',
    heroEyebrow:'Головна сторінка проєкту', heroTitle:'Історичні місця Чернігівської області', heroText:'', heroBtnLocations:'Перейти до локацій', heroBtnMap:'Відкрити мапу',
    aboutKicker:'Про сайт', aboutTitle:'Головна сторінка проєкту🔭', aboutText:'',
    districtsKicker:'Райони Чернігівщини', districtsTitle:'Райони та історичні напрями🏙️', districtsText:'',
    galleryKicker:'Галерея', galleryTitle:'Візуальна добірка локацій🖼️', galleryText:'',
    routesKicker:'Маршрути', routesTitle:'Рекомендовані маршрути Чернігівщиною🚩', routesText:'',
    mapKicker:'Інтерактивна мапа', mapTitle:'Мапа всіх історичних об’єктів🗺️', mapText:'',
    locationsKicker:'Локації', locationsTitle:'Туристична мапа Чернігівщини', locationsIntro:'Сторінка локацій об’єднує пошук, фільтри та інтерактивну мапу. Оберіть район або тип об’єкта й перегляньте всі відповідні місця на карті.',
    searchPlaceholder:'Пошук за назвою, районом або історичним напрямом', count:(n)=>`Знайдено ${n} місць`, resetFilters:'Скинути фільтри', optAllDistrict:'Вся область', optAllType:'Категорія',
    btnShowMap:'Показати на мапі', btnRoute:'Маршрут', addressLabel:'Адреса', close:'Закрити'
  },
  en: {
    brandTitle:'Historic Places', brandSubtitle:'of Chernihiv Region', navAbout:'About the site', navLocations:'Locations', navRoutes:'Recommended routes', navMap:'Map', navGallery:'Gallery',
    themeLight:'Light', themeDark:'Dark',
    heroEyebrow:'Project homepage', heroTitle:'Historic Places of Chernihiv Region', heroText:'A diploma information web resource dedicated to the historical and cultural heritage of the Chernihiv region. The site brings together key historical sites, recommended routes, a gallery and an interactive map for convenient navigation.', heroBtnLocations:'Open locations', heroBtnMap:'Open map',
    aboutKicker:'About the site', aboutTitle:'Project homepage', aboutText:'The site was created as a modern information resource for exploring the historic places of Chernihiv region. The home page contains a general project description, districts and historical directions, a gallery selection, recommended routes and an interactive map of all objects.',
    districtsKicker:'Districts of Chernihiv region', districtsTitle:'Districts and historical directions', districtsText:'Each district of the Chernihiv region is presented as a separate historical direction: from the princely and monastic heritage of Chernihiv to the hetman residences of Baturyn and archaeological monuments of Sivershchyna.',
    galleryKicker:'Gallery', galleryTitle:'Visual selection of locations', galleryText:'The gallery introduces the most recognizable sites of the region: cathedrals, palaces, monasteries, historic towns and landscape parks.',
    routesKicker:'Routes', routesTitle:'Recommended routes around Chernihiv region', routesText:'The route collection helps unite landmarks into coherent journeys: one-day tours, themed hetman heritage routes and acquaintance with the archaeological heritage of the region.',
    mapKicker:'Interactive map', mapTitle:'Map of all historical objects', mapText:'The map displays all the main locations of the site. Clicking a marker opens a short prompt and a link to the locations page.',
    locationsKicker:'Locations', locationsTitle:'Tourist map of Chernihiv region', locationsIntro:'The locations page combines search, filters and an interactive map. Choose a district or object type and view all matching sites on the map.',
    searchPlaceholder:'Search by name, district or historical direction', count:(n)=>`${n} places found`, resetFilters:'Reset filters', optAllDistrict:'Entire region', optAllType:'Category',
    btnShowMap:'Show on map', btnRoute:'Route', addressLabel:'Address', close:'Close'
  }
};

let currentTheme = localStorage.getItem('site-theme') || 'light';
let currentLang = localStorage.getItem('site-lang') || 'uk';
let locationsMap, homeMap, markerLayer, homeLayer;
let activePlaceId = null;

function t(key){return ui[currentLang][key] ?? key;}
function txt(item,key){return item?.[key]?.[currentLang] ?? item?.[key] ?? '';}
function applyTheme(theme){currentTheme = theme; document.documentElement.dataset.theme = theme; localStorage.setItem('site-theme', theme); document.querySelectorAll('.theme-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.theme===theme));}
function applyLang(lang){currentLang = lang; localStorage.setItem('site-lang', lang); document.documentElement.lang = lang === 'uk' ? 'uk' : 'en'; document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang===lang)); updateStaticText(); renderHome(); renderLocations(); if(activePlaceId) openPlaceSheet(activePlaceId, false);}

function initControls(){
  document.querySelectorAll('.theme-btn').forEach(btn=>btn.addEventListener('click',()=>applyTheme(btn.dataset.theme)));
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLang(btn.dataset.lang)));
  document.getElementById('placeSheetClose')?.addEventListener('click', closePlaceSheet);
  applyTheme(currentTheme); applyLang(currentLang);
}

function updateStaticText(){
  const ids = ['brandTitle','brandSubtitle','navAbout','navLocations','navRoutes','navMap','navGallery','themeLight','themeDark','heroEyebrow','heroTitle','heroText','heroBtnLocations','heroBtnMap','aboutKicker','aboutTitle','aboutText','districtsKicker','districtsTitle','districtsText','galleryKicker','galleryTitle','galleryText','routesKicker','routesTitle','routesText','mapKicker','mapTitle','mapText','locationsKicker','locationsTitle','locationsIntro','resetFilters','sheetAddressLabel'];
  ids.forEach(id=>{const el=document.getElementById(id); if(el) el.textContent=t(id);});
  const search = document.getElementById('locationSearch'); if(search) search.placeholder = t('searchPlaceholder');
  const aD=document.getElementById('optAllDistrict'); if(aD) aD.textContent=t('optAllDistrict');
  const aT=document.getElementById('optAllType'); if(aT) aT.textContent=t('optAllType');
}

function renderHome(){
  const districtsEl = document.getElementById('districtCards');
  if(districtsEl){districtsEl.innerHTML = districtCards.map(d=>`<article class="district-card reveal visible"><h3>${txt(d,'title')}</h3><p>${txt(d,'text')}</p><span class="direction">${txt(d,'direction')}</span></article>`).join('');}
  const routesEl = document.getElementById('routeCards');
  if(routesEl){routesEl.innerHTML = routes.map(r=>`<article class="route-card reveal visible"><h3>${txt(r,'title')}</h3><p>${txt(r,'text')}</p><div class="fact-strip">${(r.tags[currentLang]||[]).map(tag=>`<span>${tag}</span>`).join('')}</div></article>`).join('');}
  const galleryEl = document.getElementById('galleryGrid');
  if(galleryEl){galleryEl.innerHTML = places.slice(0,8).map((p)=>`<a class="gallery-item reveal visible" href="locations.html#${p.id}"><img src="${p.img}" alt="${p.name[currentLang]}"><span>${p.name[currentLang]}</span></a>`).join('');}
  const map = document.getElementById('homeMap');
  if(map && window.L && !homeMap){
    homeMap = L.map('homeMap',{scrollWheelZoom:false}).setView([51.3,32.3],8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap'}).addTo(homeMap);
    homeLayer = L.layerGroup().addTo(homeMap);
    places.forEach(p=>L.marker([p.lat,p.lng]).addTo(homeLayer).bindPopup(`<strong>${p.name[currentLang]}</strong><br>${p.district[currentLang]}<br><a href="locations.html#${p.id}">${currentLang==='uk'?'Перейти до локації':'Open location'}</a>`));
  }
}

function getFilteredPlaces(){
  const q=(document.getElementById('locationSearch')?.value||'').toLowerCase().trim();
  const d=document.getElementById('districtFilter')?.value||'all';
  const t=document.getElementById('typeFilter')?.value||'all';
  return places.filter(p=>{
    const hay = `${p.name.uk} ${p.name.en} ${p.district.uk} ${p.district.en} ${p.direction.uk} ${p.direction.en} ${p.typeLabel.uk} ${p.typeLabel.en}`.toLowerCase();
    const okQ=!q || hay.includes(q);
    const okD=d==='all' || p.district.uk===d;
    const okT=t==='all' || p.type===t || p.typeLabel.uk===t;
    return okQ && okD && okT;
  });
}

function renderLocations(){
  const list = document.getElementById('locationsList'); if(!list) return;
  const filtered = getFilteredPlaces();
  const count=document.getElementById('locationCount'); if(count) count.textContent = t('count')(filtered.length);
  list.innerHTML = filtered.map(p=>`<article class="location-card reveal visible" data-id="${p.id}"><img src="${p.img}" alt="${p.name[currentLang]}"><div><div class="meta">${p.district[currentLang]}</div><h3>${p.name[currentLang]}</h3><p>${p.desc[currentLang]}</p><div class="meta-line"><span>${p.direction[currentLang]}</span><span>${p.typeLabel[currentLang]}</span></div></div></article>`).join('');
  list.querySelectorAll('.location-card').forEach(card=>card.addEventListener('click',()=>openPlaceSheet(card.dataset.id, true)));
  if(window.L){
    if(!locationsMap){
      locationsMap = L.map('locationsMap').setView([51.3,32.3],8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap'}).addTo(locationsMap);
      markerLayer = L.layerGroup().addTo(locationsMap);
    }
    markerLayer.clearLayers();
    filtered.forEach(p=>{
      const marker = L.marker([p.lat,p.lng]).addTo(markerLayer).bindPopup(`<strong>${p.name[currentLang]}</strong><br>${p.district[currentLang]}`);
      marker.on('click',()=>openPlaceSheet(p.id,false));
    });
    if(filtered.length){
      const bounds = L.latLngBounds(filtered.map(p=>[p.lat,p.lng]));
      locationsMap.fitBounds(bounds.pad(0.12));
    }
  }
  const hash = location.hash.replace('#',''); if(hash) openPlaceSheet(hash, false);
}

function highlightCard(id){document.querySelectorAll('.location-card').forEach(c=>c.classList.toggle('active', c.dataset.id===id));}
function focusPlace(id, scroll=true){
  const p = places.find(x=>x.id===id); if(!p) return;
  activePlaceId=id;
  highlightCard(id);
  const card = document.querySelector(`.location-card[data-id="${id}"]`); if(card && scroll) card.scrollIntoView({behavior:'smooth', block:'nearest'});
  if(locationsMap){
    locationsMap.setView([p.lat,p.lng],10,{animate:true});
    markerLayer.eachLayer(layer=>{ const g=layer.getLatLng(); if(Math.abs(g.lat-p.lat)<1e-6 && Math.abs(g.lng-p.lng)<1e-6){ layer.openPopup(); }});
  }
}
function openPlaceSheet(id, scroll=true){
  const p = places.find(x=>x.id===id); if(!p) return;
  activePlaceId=id;
  focusPlace(id, scroll);
  const sheet=document.getElementById('placeSheet'); if(!sheet) return;
  document.getElementById('sheetImage').src = p.img;
  document.getElementById('sheetImage').alt = p.name[currentLang];
  document.getElementById('sheetDistrict').textContent = p.district[currentLang];
  document.getElementById('sheetTitle').textContent = p.name[currentLang];
  document.getElementById('sheetDesc').textContent = p.desc[currentLang];
  document.getElementById('sheetTags').innerHTML = [`<span>${p.period[currentLang]}</span>`,`<span>${p.direction[currentLang]}</span>`,`<span>${p.typeLabel[currentLang]}</span>`].join('');
  document.getElementById('sheetAddress').textContent = p.address?.[currentLang] || p.district[currentLang];
  const routeLink = document.getElementById('sheetRouteLink');
  routeLink.textContent = t('btnRoute');
  routeLink.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.lat+','+p.lng)}`;
  sheet.classList.add('is-open');
}
function closePlaceSheet(){document.getElementById('placeSheet')?.classList.remove('is-open'); highlightCard(''); activePlaceId=null;}

document.addEventListener('DOMContentLoaded',()=>{
  initControls();
  renderHome();
  renderLocations();
  ['locationSearch','districtFilter','typeFilter'].forEach(id=>document.getElementById(id)?.addEventListener('input', renderLocations));
  document.getElementById('resetFilters')?.addEventListener('click', ()=>{document.getElementById('locationSearch').value=''; document.getElementById('districtFilter').value='all'; document.getElementById('typeFilter').value='all'; renderLocations(); closePlaceSheet();});
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
});
