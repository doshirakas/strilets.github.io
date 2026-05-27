
const headerOffset = 20;

const ui = {
  uk: {
    pageTitle: 'Історичні місця Чернігівської області',
    pageDescription: 'Історичні місця Чернігівської області за районами: коротка інформація, фото та карта.',
    navAbout: 'Про сайт', navDistricts: 'Локації', navPlaces: 'Історичні місця', navRoutes: 'Рекомендовані маршрути', navMap: 'Мапа всіх історичних об'єктів', navGroup: 'Райони та історичні місця',
    overview: 'Огляд району',
    themeLight: 'Світла', themeDark: 'Темна',
    mobileMenu: '☰ Меню',
    heroEyebrow: 'Туристично-історичний вебресурс',
    heroTitle: 'Історичні місця Чернігівської області',
    heroText: 'Сайт присвячений історико-культурній спадщині Чернігівщини. На сторінці зібрані основні райони області та добірка пам\'яток: храми, монастирі, палаци, садиби, музеї-заповідники й пам\'ятки гетьманської доби.',
    heroBtn1: 'Переглянути райони', heroBtn2: 'Перейти до об\'єктів',
    heroStat1: 'офіційних районів області', heroStat2: 'історичних місць на сторінці',
    heroNote: 'У лівій панелі кожен район відкриває підменю з історичними місцями, а посилання ведуть одразу до потрібного блоку.',
    toolsKicker: 'Пошук і фільтрація', toolsTitle: 'Знайдіть потрібне історичне місце', searchLabel: 'Пошук за назвою, районом або типом', searchPlaceholder: 'Введіть назву місця, району або тип пам\'ятки', districtFilter: 'Район', typeFilter: 'Тип пам\'ятки', periodFilter: 'Історичний період', resetBtn: 'Скинути фільтри',
    districtAll: 'Усі райони', typeAll: 'Усі типи', periodAll: 'Усі періоди',
    routesKicker: 'Туристичні маршрути', routesTitle: 'Рекомендовані маршрути Чернігівщиною',
    mapKicker: 'Інтерактивна карта', mapTitle: 'Мапа всіх історичних об\'єктів', mapNote: 'Натисніть на мітку, щоб побачити назву об\'єкта та перейти до відповідного блоку на сторінці.',
    districtsKicker: 'Про область', districtsTitle: 'Райони', placesKicker: 'Історичні об\'єкти', placesTitle: 'Детальна інформація',
    detailBtn: 'Окрема сторінка', mapBtn: 'Показати на мапі',
    foundAll: (n) => `Показано всі об'єкти (${n}).`, foundSome: (n) => `Знайдено ${n} об'єктів.`,
    footer: 'Інформація на сайті подана з ознайомчою метою. Розробник не несе відповідальність за будь-які наслідки використання матеріалів даного ресурсу.',
    mapPopupLink: 'Перейти до об\'єкта',
    detailBack: 'Повернутися на головну', detailGallery: 'Галерея', detailHistory: 'Історична довідка', detailFacts: 'Цікаві факти', detailMap: 'Мапа', detailAbout: 'Короткий опис',
    detailDistrict: 'Район', detailType: 'Тип', detailPeriod: 'Період', detailLocation: 'Локація',
    detailPageMeta: 'Окрема сторінка пам\'ятки',
    detailNavOverview: 'Опис', detailNavGallery: 'Галерея', detailNavHistory: 'Історія', detailNavMap: 'Мапа', detailNavFacts: 'Факти'
  },
  en: {
    pageTitle: 'Historical Sites of Chernihiv Region',
    pageDescription: 'Historical sites of Chernihiv region by districts: overview, photos and map.',
    navAbout: 'About', navDistricts: 'Locations', navPlaces: 'Historical sites', navRoutes: 'Recommended routes', navMap: 'Map of all sites', navGroup: 'Districts and historical places',
    overview: 'District overview',
    themeLight: 'Light', themeDark: 'Dark',
    mobileMenu: '☰ Menu',
    heroEyebrow: 'Tourism and heritage web resource',
    heroTitle: 'Historical Sites of Chernihiv Region',
    heroText: 'This website is dedicated to the historical and cultural heritage of Chernihiv region. It brings together the key districts of the region and a curated collection of landmarks: cathedrals, monasteries, palaces, estates, museums and Hetman-era monuments.',
    heroBtn1: 'View districts', heroBtn2: 'Go to sites',
    heroStat1: 'official districts of the region', heroStat2: 'historical sites on the page',
    heroNote: 'In the left sidebar each district opens a submenu with historical places, and the links jump directly to the selected block.',
    toolsKicker: 'Search and filters', toolsTitle: 'Find a historical site', searchLabel: 'Search by place name, district or type', searchPlaceholder: 'Type a place name, district or site type', districtFilter: 'District', typeFilter: 'Site type', periodFilter: 'Historical period', resetBtn: 'Reset filters',
    districtAll: 'All districts', typeAll: 'All types', periodAll: 'All periods',
    routesKicker: 'Tourist routes', routesTitle: 'Recommended routes across Chernihiv region',
    mapKicker: 'Interactive map', mapTitle: 'Map of all historical sites', mapNote: 'Click a marker to view the site name and jump to the corresponding block on the page.',
    districtsKicker: 'About the region', districtsTitle: 'Districts', placesKicker: 'Historical objects', placesTitle: 'Detailed information',
    detailBtn: 'Separate page', mapBtn: 'Show on map',
    foundAll: (n) => `Showing all objects (${n}).`, foundSome: (n) => `Found ${n} objects.`,
    footer: 'The information on the site is provided for ознакомительных purposes. The developer is not responsible for any consequences of using the materials on this resource.',
    mapPopupLink: 'Go to site',
    detailBack: 'Back to homepage', detailGallery: 'Gallery', detailHistory: 'Historical note', detailFacts: 'Interesting facts', detailMap: 'Map', detailAbout: 'Overview',
    detailDistrict: 'District', detailType: 'Type', detailPeriod: 'Period', detailLocation: 'Location',
    detailPageMeta: 'Separate monument page',
    detailNavOverview: 'Overview', detailNavGallery: 'Gallery', detailNavHistory: 'History', detailNavMap: 'Map', detailNavFacts: 'Facts'
  }
};
ui.en.footer = 'The information on this site is provided for ознакомительных purposes. The developer is not responsible for any consequences of using materials from this resource.'.replace('ознакомительных','informational');

const districtNames = {
  chernihiv: {uk:'Чернігівський район', en:'Chernihiv District'},
  novhorod: {uk:'Новгород-Сіверський район', en:'Novhorod-Siverskyi District'},
  pryluky: {uk:'Прилуцький район', en:'Pryluky District'},
  nizhyn: {uk:'Ніжинський район', en:'Nizhyn District'},
  koriukivka: {uk:'Корюківський район', en:'Koriukivka District'}
};

const typeNames = {
  cathedral:{uk:'собор', en:'cathedral'}, monastery:{uk:'монастир', en:'monastery'}, church:{uk:'церква', en:'church'}, palace:{uk:'палац', en:'palace'}, estate:{uk:'садиба', en:'estate'}, museum:{uk:'музей', en:'museum'}, archaeology:{uk:'археологічна пам\'ятка', en:'archaeological site'}, park:{uk:'парк / заповідник', en:'park / reserve'}, center:{uk:'історичний центр', en:'historic center'}
};

const periodNames = {
  kyivan:{uk:'Київська Русь', en:'Kyivan Rus'}, cossack:{uk:'Козацька доба', en:'Cossack era'}, xviii:{uk:'XVIII століття', en:'18th century'}, xix:{uk:'XIX століття', en:'19th century'}, paleolith:{uk:'Палеоліт', en:'Paleolithic'}, xx:{uk:'XX століття', en:'20th century'}
};

const routesData = [
  {title:{uk:'1 день Черніговом',en:'1 day in Chernihiv'}, text:{uk:'Борисоглібський собор, Антонієві печери, Єлецький монастир та історичний центр міста.', en:'Borysohlibskyi Cathedral, Antony Caves, Yelets Monastery and the historic city centre.'}, facts:{uk:['1 день','Чернігів','Київська Русь'], en:['1 day','Chernihiv','Kyivan Rus']}},
  {title:{uk:'Історичний маршрут Ніжинщиною',en:'Historic route around Nizhyn'}, text:{uk:'Грецька Всіхсвятська церква, Свято-Богоявленська церква, університетський Ніжин та козацькі пам\'ятки регіону.', en:'All Saints Greek Church, Epiphany Church, university Nizhyn and Cossack landmarks of the region.'}, facts:{uk:['1 день','Ніжин','Бароко'], en:['1 day','Nizhyn','Baroque']}},
  {title:{uk:'Гетьманські місця Батурина',en:'Hetman landmarks of Baturyn'}, text:{uk:'Палац Розумовського, Будинок Кочубея, цитадель Батурина та об\'єкти заповідника «Гетьманська столиця».', en:'Rozumovsky Palace, Kochubey House, the Baturyn citadel and the Hetman Capital reserve.'}, facts:{uk:['1 день','Батурин','Козацька доба'], en:['1 day','Baturyn','Cossack era']}},
  {title:{uk:'Археологічна спадщина Чернігівщини',en:'Archaeological heritage of Chernihiv region'}, text:{uk:'Мезинська стоянка, музеї краю та давні поселення сіверської землі.', en:'The Mezyn site, local museums and ancient settlements of the Siverian land.'}, facts:{uk:['1–2 дні','Мезин','Палеоліт'], en:['1–2 days','Mezyn','Paleolithic']}}
];

const districtsData = {
  'district-card-chernihiv': {code:'chernihiv', desc:{uk:'Давньоруські пам\'ятки Чернігова, монастирські комплекси та садибна спадщина Седнева формують один із найвиразніших історичних маршрутів області.', en:'Ancient Rus monuments of Chernihiv, monastic complexes and the manor heritage of Sedniv form one of the most expressive historical routes in the region.'}, items:['place-borisoglebskyi','place-antony-caves','place-yelets','place-lyzohub']},
  'district-card-novhorod': {code:'novhorod', desc:{uk:'Район з давніми монастирями, палацовою архітектурою, музеями та знаковими пам\'ятками сіверського краю.', en:'A district with old monasteries, palace architecture, museums and emblematic landmarks of the Siveria area.'}, items:['place-uspenskyi','place-rumiantsev','place-slovo-museum','place-mezyn']},
  'district-card-pryluky': {code:'pryluky', desc:{uk:'Тут збереглися палацові ансамблі, монастирі, садово-паркові комплекси та відомі історичні садиби Лівобережжя.', en:'This district preserves palace ensembles, monasteries, landscape parks and renowned historic estates of Left-Bank Ukraine.'}, items:['place-galagan','place-trostanets','place-kachanivka','place-gustynia']},
  'district-card-nizhyn': {code:'nizhyn', desc:{uk:'Ніжин і Батурин поєднують гетьманську історію, культову архітектуру та пам\'ятки, пов\'язані з козацькою державою.', en:'Nizhyn and Baturyn combine Hetman-era history, sacral architecture and landmarks linked to the Cossack state.'}, items:['place-greek-church','place-bohoiavlenska','place-rozumovsky','place-kochubey']},
  'district-card-koriukivka': {code:'koriukivka', desc:{uk:'Поліська частина області зберегла монастирі, дерев\'яні та кам\'яні храми, старі садиби й пам\'ятні місця північної Чернігівщини.', en:'The Polissia part of the region has preserved monasteries, wooden and stone churches, old estates and memorial places of northern Chernihiv region.'}, items:['place-maksaky','place-pokrovy','place-sosnytsia','place-snovsk']}
};

const placeMeta = {
  'place-borisoglebskyi': {name:{uk:'Борисоглібський собор', en:'Borysohlibskyi Cathedral'}, district:'chernihiv', type:'cathedral', period:'kyivan', location:{uk:'м. Чернігів', en:'Chernihiv'}, years:{uk:'ХІІ століття', en:'12th century'}, category:{uk:'давньоруський храм', en:'Old Rus temple'}, desc:{uk:'Один із найвідоміших храмів домонгольської доби в Чернігові. Собор належить до комплексу пам\'яток давнього Чернігова та є важливою частиною архітектурної спадщини княжої доби.', en:'One of the best-known pre-Mongol churches in Chernihiv. The cathedral belongs to the ensemble of ancient Chernihiv monuments and is an important part of the architectural heritage of the princely era.'}, lat:51.4912, lng:31.3027, mapQuery:'Борисоглібський собор Чернігів', gallery:[['images/places/place-borisoglebskyi-main.jpg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-borisoglebskyi-gallery-1.jpg',{uk:'Фасад',en:'Facade'}],['images/places/place-borisoglebskyi-gallery-2.jpg',{uk:'Інтер\'єр / деталі',en:'Interior / details'}]], detailPage:'borisoglebskyi.html', history:{uk:'Борисоглібський собор був зведений у XII столітті як родовий храм чернігівських князів. Упродовж століть він пережив руйнування, перебудови та реставрації, але зберіг значення одного з ключових символів княжого Чернігова.', en:'Borysohlibskyi Cathedral was built in the 12th century as a dynastic church of the Chernihiv princes. Over the centuries it survived destruction, reconstructions and restorations, yet remained one of the key symbols of princely Chernihiv.'}, factsList:{uk:['Належить до комплексу стародавнього Чернігова.','Є однією з найцінніших пам\'яток давньоруської архітектури Лівобережжя.','Розташований у центральній історичній частині міста.'], en:['It belongs to the ensemble of ancient Chernihiv.','It is one of the most valuable Old Rus architectural monuments of Left-Bank Ukraine.','It is located in the central historic part of the city.']}},
  'place-antony-caves': {name:{uk:'Антонієві печери', en:'Antony Caves'}, district:'chernihiv', type:'monastery', period:'kyivan', location:{uk:'м. Чернігів', en:'Chernihiv'}, years:{uk:'1069 рік', en:'1069'}, category:{uk:'підземний монастир', en:'underground monastery'}, desc:{uk:'Підземний комплекс XI–XIX століть, заснований у 1069 році. Це одна з найвідоміших пам\'яток підземної культової архітектури України та важливий об\'єкт заповідника «Чернігів стародавній».', en:'An underground complex of the 11th–19th centuries founded in 1069. It is one of the most famous monuments of subterranean sacral architecture in Ukraine and a key site of the Ancient Chernihiv reserve.'}, lat:51.4787, lng:31.2877, mapQuery:'Антонієві печери Чернігів', gallery:[['images/places/place-antony-caves-main.jpg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-antony-caves-gallery-1.jpg',{uk:'Вхід та фасад',en:'Entrance and facade'}],['images/places/place-antony-caves-gallery-2.jpg',{uk:'Підземні ходи',en:'Underground passages'}]], detailPage:'antony-caves.html', history:{uk:'Антонієві печери пов\'язують із преподобним Антонієм Печерським, який започаткував тут чернечу традицію після повернення з Києва. Печерний комплекс став важливим духовним осередком і є рідкісним прикладом підземної монастирської архітектури.', en:'The Antony Caves are associated with Saint Anthony of the Caves, who established a monastic tradition here after returning from Kyiv. The cave complex became an important spiritual centre and is a rare example of underground monastic architecture.'}, factsList:{uk:['Комплекс розташований на Болдиних горах.','Усередині збереглися підземні церкви та келії.','Об\'єкт входить до туристичного маршруту стародавнім Черніговом.'], en:['The complex is located on the Boldyni Hills.','Underground churches and monastic cells are preserved inside.','The site is part of the main tourist route through ancient Chernihiv.']}},
  'place-yelets': {name:{uk:'Єлецький Успенський монастир', en:'Yelets Dormition Monastery'}, district:'chernihiv', type:'monastery', period:'kyivan', location:{uk:'м. Чернігів', en:'Chernihiv'}, years:{uk:'XI–XVIII ст.', en:'11th–18th centuries'}, category:{uk:'монастирський ансамбль', en:'monastic ensemble'}, desc:{uk:'Архітектурний ансамбль монастиря розташований на високому березі Десни. Комплекс належить до найдавніших монастирів регіону та є важливою сакральною пам\'яткою Чернігова.', en:'The architectural ensemble of the monastery stands on a high bank of the Desna River. The complex is one of the oldest monasteries in the region and an important sacral monument of Chernihiv.'}, lat:51.4979, lng:31.2873, mapQuery:'Єлецький монастир Чернігів', gallery:[['images/places/place-yelets-main.jpg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-yelets-gallery-1.jpg',{uk:'Фасад',en:'Facade'}],['images/places/place-yelets-gallery-2.jpg',{uk:'Деталі ансамблю',en:'Ensemble details'}]]},
  'place-lyzohub': {name:{uk:'Садиба родини Лизогубів', en:'Lyzohub Family Estate'}, district:'chernihiv', type:'estate', period:'cossack', location:{uk:'смт Седнів', en:'Sedniv'}, years:{uk:'кін. XVII ст.', en:'late 17th century'}, category:{uk:'садибний ансамбль', en:'estate ensemble'}, desc:{uk:'Садибний комплекс у Седневі сформувався наприкінці XVII століття. Архітектурно-парковий ансамбль є одним із найвідоміших історичних об\'єктів селища.', en:'The Sedniv estate complex took shape in the late 17th century. The architectural and park ensemble is one of the best-known historical sites of the settlement.'}, lat:51.6451, lng:31.5631, mapQuery:'Садиба Лизогубів Седнів'},
  'place-uspenskyi': {name:{uk:'Успенський собор', en:'Dormition Cathedral'}, district:'novhorod', type:'cathedral', period:'xviii', location:{uk:'м. Новгород-Сіверський', en:'Novhorod-Siverskyi'}, years:{uk:'1714–1722', en:'1714–1722'}, category:{uk:'сакральна архітектура', en:'sacral architecture'}, desc:{uk:'Одна з найвиразніших пам\'яток українського бароко в Новгороді-Сіверському. Собор споруджено на початку XVIII століття за доби гетьмана Івана Скоропадського.', en:'One of the most expressive monuments of Ukrainian Baroque in Novhorod-Siverskyi. The cathedral was built in the early 18th century during the time of Hetman Ivan Skoropadskyi.'}, lat:52.0058, lng:33.2647, mapQuery:'Успенський собор Новгород-Сіверський'},
  'place-rumiantsev': {name:{uk:'Палац Рум\'янцева-Задунайського', en:'Rumyantsev-Zadunaisky Palace'}, district:'novhorod', type:'palace', period:'xviii', location:{uk:'с. Вишеньки', en:'Vyshenky'}, years:{uk:'кін. XVIII ст.', en:'late 18th century'}, category:{uk:'палацова архітектура', en:'palace architecture'}, desc:{uk:'Палац у Вишеньках — оригінальна пам\'ятка кінця XVIII століття з поєднанням рис готики, класицизму та романтичної архітектури.', en:'The palace in Vyshenky is a distinctive late 18th-century monument combining features of Gothic, classicism and romantic architecture.'}, lat:51.8329, lng:33.8788, mapQuery:'Палац Румянцева Задунайського Вишеньки'},
  'place-slovo-museum': {name:{uk:'Музей-заповідник «Слово о полку Ігоревім»', en:'The Tale of Igor\'s Campaign Museum-Reserve'}, district:'novhorod', type:'museum', period:'xx', location:{uk:'м. Новгород-Сіверський', en:'Novhorod-Siverskyi'}, years:{uk:'1990 рік', en:'1990'}, category:{uk:'історико-культурний музей', en:'historical and cultural museum'}, desc:{uk:'Музей-заповідник створено в 1990 році. Експозиція розміщена у відреставрованому княжому теремі на території Спасо-Преображенського монастиря.', en:'The museum-reserve was established in 1990. Its exhibition is housed in a restored princely tower within the Transfiguration Monastery grounds.'}, lat:52.0053, lng:33.2638, mapQuery:'Музей Слово о полку Ігоревім Новгород-Сіверський', gallery:[['images/places/place-slovo-museum-main.svg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-slovo-museum-gallery-1.svg',{uk:'Фасад',en:'Facade'}],['images/places/place-slovo-museum-gallery-2.svg',{uk:'Експозиція',en:'Exhibition'}]]},
  'place-mezyn': {name:{uk:'Мезинська стоянка', en:'Mezyn Site'}, district:'novhorod', type:'archaeology', period:'paleolith', location:{uk:'с. Мезин', en:'Mezyn village'}, years:{uk:'палеоліт', en:'Paleolithic'}, category:{uk:'археологічна пам\'ятка', en:'archaeological site'}, desc:{uk:'Відома археологічна пам\'ятка пізнього палеоліту, що належить до найцінніших доісторичних об\'єктів України та Європи.', en:'A well-known Late Paleolithic archaeological site and one of the most valuable prehistoric monuments in Ukraine and Europe.'}, lat:51.8049, lng:33.1207, mapQuery:'Мезинська стоянка', gallery:[['images/places/place-mezyn-main.svg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-mezyn-gallery-1.svg',{uk:'Археологічна зона',en:'Archaeological area'}],['images/places/place-mezyn-gallery-2.svg',{uk:'Музейні матеріали',en:'Museum materials'}]]},
  'place-galagan': {name:{uk:'Палац Галаганів', en:'Galagan Palace'}, district:'pryluky', type:'palace', period:'xix', location:{uk:'с. Сокиринці', en:'Sokyryntsi'}, years:{uk:'1823–1829', en:'1823–1829'}, category:{uk:'ампір', en:'Empire style'}, desc:{uk:'Величний палац у Сокиринцях є одним із найвідоміших зразків палацово-маєткової архітектури Лівобережної України першої половини XIX століття.', en:'The magnificent palace in Sokyryntsi is one of the best-known examples of palace-estate architecture of Left-Bank Ukraine in the first half of the 19th century.'}, lat:50.7034, lng:32.7328, mapQuery:'Палац Галаганів Сокиринці'},
  'place-trostanets': {name:{uk:'Дендропарк «Тростянець»', en:'Trostianets Arboretum'}, district:'pryluky', type:'park', period:'xix', location:{uk:'с. Тростянець', en:'Trostianets'}, years:{uk:'XIX ст.', en:'19th century'}, category:{uk:'парк і садиба', en:'park and estate'}, desc:{uk:'Пам\'ятка садово-паркового мистецтва середини XIX століття, пов\'язана з історією ландшафтного паркового будівництва на Чернігівщині.', en:'A mid-19th-century monument of landscape gardening linked to the history of park design in Chernihiv region.'}, lat:50.6103, lng:32.6549, mapQuery:'Дендропарк Тростянець'},
  'place-kachanivka': {name:{uk:'Національний історико-культурний заповідник «Качанівка»', en:'Kachanivka National Historical and Cultural Reserve'}, district:'pryluky', type:'park', period:'xix', location:{uk:'с. Качанівка', en:'Kachanivka'}, years:{uk:'XVIII–XIX ст.', en:'18th–19th centuries'}, category:{uk:'палацово-парковий комплекс', en:'palace and park complex'}, desc:{uk:'Один із найвідоміших садибно-паркових комплексів України. Заповідник поєднує палац, парк, озера та численні пам\'ятки дворянської культури XVIII–XIX століть.', en:'One of the best-known manor and park complexes in Ukraine. The reserve combines a palace, parkland, lakes and numerous monuments of noble culture from the 18th–19th centuries.'}, lat:50.7112, lng:32.7264, mapQuery:'Качанівка Чернігівська область', gallery:[['images/places/place-kachanivka-main.jpg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-kachanivka-gallery-1.jpg',{uk:'Палац',en:'Palace'}],['images/places/place-kachanivka-gallery-2.jpg',{uk:'Парк і водойми',en:'Park and ponds'}]], detailPage:'kachanivka.html', history:{uk:'Качанівка сформувалася як шляхетська резиденція, яка у XIX столітті перетворилася на відомий мистецький осередок. Тут бували митці, музиканти й письменники, а сам ансамбль став зразком палацово-паркового мистецтва.', en:'Kachanivka developed as a noble residence and in the 19th century became a famous artistic centre. Artists, musicians and writers visited the estate, and the ensemble became a model of palace-and-park art.'}, factsList:{uk:['Заповідник поєднує архітектуру, ландшафт і водойми.','Є одним із найвідоміших палацово-паркових ансамблів України.','Територія зручна для оглядових туристичних маршрутів.'], en:['The reserve combines architecture, landscape and water features.','It is one of the best-known palace-and-park ensembles in Ukraine.','The grounds are convenient for walking tourist routes.']}},
  'place-gustynia': {name:{uk:'Густинський монастир', en:'Hustynia Monastery'}, district:'pryluky', type:'monastery', period:'cossack', location:{uk:'с. Густиня', en:'Hustynia'}, years:{uk:'близько 1600 р.', en:'around 1600'}, category:{uk:'монастирський комплекс', en:'monastic complex'}, desc:{uk:'Один із найвідоміших монастирів Лівобережної України, заснований близько 1600 року. Обитель пов\'язана з козацькою старшиною та історією українського бароко.', en:'One of the best-known monasteries of Left-Bank Ukraine, founded around 1600. The monastery is linked to the Cossack elite and the history of Ukrainian Baroque.'}, lat:50.5493, lng:32.4067, mapQuery:'Густинський монастир', gallery:[['images/places/place-gustynia-main.jpg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-gustynia-gallery-1.jpg',{uk:'Монастирські корпуси',en:'Monastery buildings'}],['images/places/place-gustynia-gallery-2.jpg',{uk:'Архітектурні деталі',en:'Architectural details'}]], detailPage:'gustynia.html', history:{uk:'Густинський монастир виник на зламі XVI–XVII століть і поступово став важливим духовним осередком Прилуччини. Його ансамбль відображає розвиток української сакральної архітектури та барокової традиції.', en:'Hustynia Monastery arose at the turn of the 16th and 17th centuries and gradually became an important spiritual centre of the Pryluky area. Its ensemble reflects the development of Ukrainian sacral architecture and the Baroque tradition.'}, factsList:{uk:['Монастир тісно пов\'язаний з історією козацької старшини.','Комплекс поєднує храми, келії та оборонні елементи.','Об\'єкт входить до популярних паломницьких і туристичних маршрутів.'], en:['The monastery is closely linked to the history of the Cossack elite.','The complex combines churches, monastic cells and defensive elements.','The site is included in popular pilgrimage and tourist routes.']}},
  'place-greek-church': {name:{uk:'Грецька Всіхсвятська церква', en:'All Saints Greek Church'}, district:'nizhyn', type:'church', period:'xviii', location:{uk:'м. Ніжин', en:'Nizhyn'}, years:{uk:'XVIII ст.', en:'18th century'}, category:{uk:'культова архітектура', en:'sacral architecture'}, desc:{uk:'Одна з характерних пам\'яток Ніжина, пов\'язана з історією грецької громади міста та розвитком торгівлі й культури.', en:'One of the characteristic landmarks of Nizhyn, connected with the history of the city\'s Greek community and the development of trade and culture.'}, lat:51.0462, lng:31.8867, mapQuery:'Грецька Всіхсвятська церква Ніжин'},
  'place-bohoiavlenska': {name:{uk:'Свято-Богоявленська церква', en:'Epiphany Church'}, district:'nizhyn', type:'church', period:'xviii', location:{uk:'м. Ніжин', en:'Nizhyn'}, years:{uk:'XVIII ст.', en:'18th century'}, category:{uk:'церковна архітектура', en:'church architecture'}, desc:{uk:'Визначна пам\'ятка культової архітектури Ніжина, що зберігає риси українського бароко та міської сакральної традиції.', en:'A notable monument of sacral architecture in Nizhyn that preserves features of Ukrainian Baroque and the city\'s religious tradition.'}, lat:51.0482, lng:31.8896, mapQuery:'Свято-Богоявленська церква Ніжин'},
  'place-rozumovsky': {name:{uk:'Палац Кирила Розумовського', en:'Kyrylo Rozumovsky Palace'}, district:'nizhyn', type:'palace', period:'cossack', location:{uk:'м. Батурин', en:'Baturyn'}, years:{uk:'XVIII ст.', en:'18th century'}, category:{uk:'гетьманська резиденція', en:'hetman residence'}, desc:{uk:'Палац у Батурині — одна з головних пам\'яток заповідника «Гетьманська столиця». Монументальна резиденція пов\'язана з постаттю останнього гетьмана Кирила Розумовського.', en:'The palace in Baturyn is one of the main landmarks of the Hetman Capital reserve. The monumental residence is associated with the last Hetman, Kyrylo Rozumovsky.'}, lat:51.3436, lng:32.8789, mapQuery:'Палац Розумовського Батурин', gallery:[['images/places/place-rozumovsky-main.jpg',{uk:'Загальний вигляд',en:'General view'}],['images/places/place-rozumovsky-gallery-1.jpg',{uk:'Фасад',en:'Facade'}],['images/places/place-rozumovsky-gallery-2.jpg',{uk:'Інтер\'єр / експозиція',en:'Interior / exhibition'}]], detailPage:'rozumovsky.html', history:{uk:'Палац Розумовського у Батурині став символом відродження гетьманської столиці. Сучасний вигляд споруда набула після масштабної реставрації, а сьогодні вона презентує епоху української державності XVIII століття.', en:'Rozumovsky Palace in Baturyn has become a symbol of the revival of the Hetman capital. The building acquired its present appearance after a large-scale restoration and today presents the era of 18th-century Ukrainian statehood.'}, factsList:{uk:['Пов\'язаний з постаттю останнього гетьмана України.','Є одним із центральних об\'єктів Батуринського заповідника.','Поєднує музейну експозицію та репрезентативну архітектуру класицизму.'], en:['It is associated with the last Hetman of Ukraine.','It is one of the central sites of the Baturyn reserve.','It combines a museum exhibition with representative classical architecture.']}},
  'place-kochubey': {name:{uk:'Будинок генерального судді Кочубея', en:'House of Judge General Kochubey'}, district:'nizhyn', type:'museum', period:'cossack', location:{uk:'м. Батурин', en:'Baturyn'}, years:{uk:'XVII ст.', en:'17th century'}, category:{uk:'історичний будинок-музей', en:'historic house museum'}, desc:{uk:'Один із найстаріших мурованих житлових будинків Лівобережної України, що є важливою пам\'яткою Батурина та гетьманської доби.', en:'One of the oldest brick residential houses in Left-Bank Ukraine and an important monument of Baturyn and the Hetman era.'}, lat:51.3443, lng:32.8826, mapQuery:'Будинок Кочубея Батурин'},
  'place-maksaky': {name:{uk:'Максаківський монастир', en:'Maksaky Monastery'}, district:'koriukivka', type:'monastery', period:'cossack', location:{uk:'с. Максаки', en:'Maksaky'}, years:{uk:'XVII ст.', en:'17th century'}, category:{uk:'монастир', en:'monastery'}, desc:{uk:'Один із давніх монастирських осередків північної Чернігівщини, пов\'язаний з історією козацької старшини та церковного життя краю.', en:'One of the old monastic centres of northern Chernihiv region, linked to the history of the Cossack elite and church life of the area.'}, lat:51.6856, lng:32.8779, mapQuery:'Максаківський монастир'},
  'place-pokrovy': {name:{uk:'Церква Покрови Богородиці', en:'Church of the Protection of the Mother of God'}, district:'koriukivka', type:'church', period:'xx', location:{uk:'с. Жукля', en:'Zhuklia'}, years:{uk:'1911 рік', en:'1911'}, category:{uk:'церковна архітектура', en:'church architecture'}, desc:{uk:'Кам\'яний храм початку XX століття, що зберігся як важлива сакральна домінанта поліського села та приклад церковної архітектури свого часу.', en:'An early 20th-century stone church preserved as an important sacral landmark of a Polissia village and a good example of church architecture of its time.'}, lat:51.9750, lng:32.8500, mapQuery:'Церква Покрови Богородиці Жукля'},
  'place-sosnytsia': {name:{uk:'Свято-Успенський храм у Сосниці', en:'Dormition Church in Sosnytsia'}, district:'koriukivka', type:'museum', period:'xix', location:{uk:'смт Сосниця', en:'Sosnytsia'}, years:{uk:'XIX ст.', en:'19th century'}, category:{uk:'сакральна спадщина', en:'sacral heritage'}, desc:{uk:'Один із помітних сакральних об\'єктів історичної Сосниці, що відображає духовну та архітектурну традицію північної Чернігівщини.', en:'One of the notable sacral objects of historic Sosnytsia, reflecting the spiritual and architectural tradition of northern Chernihiv region.'}, lat:51.5238, lng:32.4956, mapQuery:'Сосниця храм'},
  'place-snovsk': {name:{uk:'Історичний центр Сновська', en:'Historic Centre of Snovsk'}, district:'koriukivka', type:'center', period:'xix', location:{uk:'м. Сновськ', en:'Snovsk'}, years:{uk:'XIX–XX ст.', en:'19th–20th centuries'}, category:{uk:'міська історична забудова', en:'historic urban fabric'}, desc:{uk:'Центральна частина міста зберігає забудову кінця XIX — початку XX століття, що формує історичний образ невеликого поліського міста.', en:'The central part of the town preserves buildings from the late 19th and early 20th centuries that shape the historic image of a small Polissia town.'}, lat:51.8213, lng:31.9447, mapQuery:'Сновськ центр'}
};

let currentLang = localStorage.getItem('site-lang') || 'uk';
let mapInstance = null;
let mapMarkers = [];

function ensureThemeControls() {
  document.querySelectorAll('.sidebar-tools').forEach((container) => {
    if (container.querySelector('.theme-switch')) return;
    const switcher = document.createElement('div');
    switcher.className = 'theme-switch';
    switcher.innerHTML = `<button class="theme-btn" type="button" data-theme-value="light"></button><button class="theme-btn" type="button" data-theme-value="dark"></button>`;
    container.appendChild(switcher);
  });
  document.querySelectorAll('.mobile-topbar').forEach((bar) => {
    if (bar.querySelector('.topbar-actions')) return;
    const lang = bar.querySelector('.lang-switch');
    const wrap = document.createElement('div');
    wrap.className = 'topbar-actions';
    const theme = document.createElement('div');
    theme.className = 'theme-switch';
    theme.innerHTML = `<button class="theme-btn" type="button" data-theme-value="light"></button><button class="theme-btn" type="button" data-theme-value="dark"></button>`;
    if (lang) {
      lang.remove();
      wrap.append(theme, lang);
      bar.appendChild(wrap);
    }
  });
}

function setupThemeToggle() {
  ensureThemeControls();
  const saved = localStorage.getItem('site-theme') || 'light';
  setTheme(saved);
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeValue));
  });
  renderThemeLabels();
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('site-theme', theme);
  document.querySelectorAll('.theme-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.themeValue === theme));
}

function renderThemeLabels() {
  const dict = ui[currentLang];
  document.querySelectorAll('.theme-btn[data-theme-value="light"]').forEach((btn) => btn.textContent = dict.themeLight);
  document.querySelectorAll('.theme-btn[data-theme-value="dark"]').forEach((btn) => btn.textContent = dict.themeDark);
}

function renderSidebar() {
  const dict = ui[currentLang];
  const setText = (selector, text) => { const el = document.querySelector(selector); if (el) el.textContent = text; };
  setText('.brand-title', currentLang === 'uk' ? 'Історичні місця' : 'Historical Sites');
  setText('.brand-subtitle', currentLang === 'uk' ? 'Чернігівської області' : 'of Chernihiv Region');
  setText('#mobileMenuBtn', dict.mobileMenu);
  setText('.sidebar-nav a[href="#hero"]', dict.navAbout);
  setText('.sidebar-nav a[href="#districts"]', dict.navDistricts);
  setText('.sidebar-nav a[href="#places"]', dict.navPlaces);
  const nav = document.querySelector('.sidebar-nav');
  if (nav && !nav.querySelector('a[href="#routes"]')) {
    const routesLink = document.createElement('a'); routesLink.href = '#routes'; nav.insertBefore(routesLink, nav.querySelector('.nav-group-title'));
    const mapLink = document.createElement('a'); mapLink.href = '#mapSection'; nav.insertBefore(mapLink, nav.querySelector('.nav-group-title'));
  }
  setText('.sidebar-nav a[href="#routes"]', dict.navRoutes);
  setText('.sidebar-nav a[href="#mapSection"]', dict.navMap);
  setText('.nav-group-title', dict.navGroup);
  Object.values(districtsData).forEach((district) => {
    const submenuBtn = document.querySelector(`[data-target="submenu-${district.code}"] span:first-child`);
    if (submenuBtn) submenuBtn.textContent = districtNames[district.code][currentLang];
    const submenu = document.getElementById(`submenu-${district.code}`);
    if (submenu) {
      const overviewLink = submenu.querySelector('a');
      if (overviewLink) overviewLink.textContent = dict.overview;
      submenu.querySelectorAll('a[href^="#place-"]').forEach((link) => {
        const id = link.getAttribute('href').slice(1);
        if (placeMeta[id]) link.textContent = placeMeta[id].name[currentLang];
      });
    }
  });
}

function renderHero() {
  const dict = ui[currentLang];
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const eyebrow = hero.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = dict.heroEyebrow;
  const title = hero.querySelector('h1');
  if (title) title.textContent = dict.heroTitle;
  const heroText = hero.querySelector('.hero-text p') || hero.querySelector('.hero-inner p');
  if (heroText) heroText.textContent = dict.heroText;
  const heroButtons = hero.querySelectorAll('.hero-actions a');
  if (heroButtons[0]) heroButtons[0].textContent = dict.heroBtn1;
  if (heroButtons[1]) heroButtons[1].textContent = dict.heroBtn2;
  const stats = hero.querySelectorAll('.hero-stat');
  if (stats[0] && stats[0].querySelector('span')) stats[0].querySelector('span').textContent = dict.heroStat1;
  if (stats[1] && stats[1].querySelector('span')) stats[1].querySelector('span').textContent = dict.heroStat2;
  const note = hero.querySelector('.hero-note'); if (note) note.textContent = dict.heroNote;
}

function renderToolsAndRoutes() {
  const dict = ui[currentLang];
  const tools = document.getElementById('tools');
  if (tools) {
    tools.querySelector('.section-kicker').textContent = dict.toolsKicker;
    tools.querySelector('h2').textContent = dict.toolsTitle;
    tools.querySelector('.search-field span').textContent = dict.searchLabel;
    document.getElementById('placeSearch').placeholder = dict.searchPlaceholder;
    const labels = tools.querySelectorAll('.filters-grid label span');
    if (labels[0]) labels[0].textContent = dict.districtFilter;
    if (labels[1]) labels[1].textContent = dict.typeFilter;
    if (labels[2]) labels[2].textContent = dict.periodFilter;
    document.getElementById('resetFilters').textContent = dict.resetBtn;
    renderSelectOptions();
  }
  const routes = document.getElementById('routes');
  if (routes) {
    routes.querySelector('.section-kicker').textContent = dict.routesKicker;
    routes.querySelector('h2').textContent = dict.routesTitle;
    routes.querySelectorAll('.route-card').forEach((card, index) => {
      const data = routesData[index];
      if (!data) return;
      card.querySelector('h3').textContent = data.title[currentLang];
      card.querySelector('p').textContent = data.text[currentLang];
      card.querySelectorAll('.facts span').forEach((span, i) => span.textContent = data.facts[currentLang][i]);
    });
  }
  const mapSection = document.getElementById('mapSection');
  if (mapSection) {
    mapSection.querySelector('.section-kicker').textContent = dict.mapKicker;
    mapSection.querySelector('h2').textContent = dict.mapTitle;
    mapSection.querySelector('.map-note').textContent = dict.mapNote;
  }
}

function renderSelectOptions() {
  const d = document.getElementById('districtFilter');
  const t = document.getElementById('typeFilter');
  const p = document.getElementById('periodFilter');
  if (!d || !t || !p) return;
  d.innerHTML = `<option value="all">${ui[currentLang].districtAll}</option>` + Object.entries(districtNames).map(([code,val]) => `<option value="${code}">${val[currentLang]}</option>`).join('');
  t.innerHTML = `<option value="all">${ui[currentLang].typeAll}</option>` + Object.entries(typeNames).map(([code,val]) => `<option value="${code}">${val[currentLang]}</option>`).join('');
  p.innerHTML = `<option value="all">${ui[currentLang].periodAll}</option>` + Object.entries(periodNames).map(([code,val]) => `<option value="${code}">${val[currentLang]}</option>`).join('');
}

function injectGalleryFixStyles() {
  if (document.getElementById('galleryFixStyles')) return;
  const style = document.createElement('style');
  style.id = 'galleryFixStyles';
  style.textContent = `
    .place-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:14px 0 8px}
    .place-gallery .gallery-photo{position:relative;overflow:hidden;border-radius:16px;background:#dfe7ef;min-height:132px;box-shadow:inset 0 0 0 1px rgba(95,121,152,.14)}
    .place-gallery img{display:block;width:100%;height:132px;object-fit:cover;transition:transform .25s ease}
    .place-gallery .gallery-photo:hover img{transform:scale(1.03)}
    .place-gallery .crop-top img{object-position:center 24%}
    .place-gallery .crop-bottom img{object-position:center 78%}
    .place-gallery .crop-left img{object-position:28% 50%}
    .place-gallery .crop-right img{object-position:72% 50%}
    .place-gallery figcaption{display:none!important}
    .place-gallery figure{margin:0}
    .place-gallery-simple{display:contents}
    @media (max-width: 720px){.place-gallery{grid-template-columns:1fr}.place-gallery img{height:176px}}
  `;
  document.head.appendChild(style);
}

function resolvePlaceImages(meta) {
  const raw = Array.isArray(meta.gallery) ? meta.gallery.map(item => Array.isArray(item) ? item[0] : item).filter(Boolean) : [];
  const unique = [...new Set(raw)];
  const base = unique[0] || '';
  if (!base) return [];
  const secondary = unique[1] || base;
  return [base, secondary];
}

function makePhotoFigure(src, alt, cropClass, fallbackSrc) {
  const fig = document.createElement('figure');
  fig.className = `gallery-photo ${cropClass}`.trim();
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.referrerPolicy = 'no-referrer';
  img.addEventListener('error', () => {
    if (fallbackSrc && img.src !== fallbackSrc) {
      img.src = fallbackSrc;
      return;
    }
    img.style.display = 'none';
    fig.style.minHeight = '0';
    fig.style.paddingTop = '56%';
    fig.style.background = 'linear-gradient(135deg,#dce6f0,#c8d7e7)';
  }, { once: true });
  fig.appendChild(img);
  return fig;
}

function ensurePlaceCardsDecor() {
  injectGalleryFixStyles();
  Object.entries(placeMeta).forEach(([id, meta]) => {
    const article = document.getElementById(id);
    if (!article) return;
    article.dataset.nameUk = meta.name.uk.toLowerCase();
    article.dataset.nameEn = meta.name.en.toLowerCase();
    article.dataset.districtCode = meta.district;
    article.dataset.typeCode = meta.type;
    article.dataset.periodCode = meta.period;
    const body = article.querySelector('.place-body');
    if (body) {
      const oldGallery = body.querySelector('.place-gallery');
      if (oldGallery) oldGallery.remove();
      const map = body.querySelector('.map-wrap');
      const gallery = document.createElement('div');
      gallery.className = 'place-gallery';
      const [firstImg, secondImg] = resolvePlaceImages(meta);
      if (firstImg) {
        gallery.appendChild(makePhotoFigure(firstImg, meta.name[currentLang], 'crop-left', firstImg));
        gallery.appendChild(makePhotoFigure(secondImg, meta.name[currentLang], secondImg === firstImg ? 'crop-right' : 'crop-top', firstImg));
      }
      if (gallery.children.length && map) body.insertBefore(gallery, map);
    }
    if (!article.querySelector('.place-actions')) {
      const body = article.querySelector('.place-body');
      const actions = document.createElement('div');
      actions.className = 'place-actions';
      const mapBtn = document.createElement('a');
      mapBtn.className = 'btn btn-secondary';
      mapBtn.href = '#mapSection';
      mapBtn.dataset.targetId = id;
      mapBtn.dataset.action = 'map';
      actions.appendChild(mapBtn);
      if (meta.detailPage) {
        const detailsBtn = document.createElement('a');
        detailsBtn.className = 'btn btn-primary';
        detailsBtn.href = meta.detailPage;
        detailsBtn.dataset.action = 'detail';
        actions.appendChild(detailsBtn);
      }
      const map = body.querySelector('.map-wrap');
      body.insertBefore(actions, map);
    }
  });
}

function renderMainContent() {
  const dict = ui[currentLang];
  const sectionDistricts = document.getElementById('districts');
  if (sectionDistricts) {
    sectionDistricts.querySelector('.section-kicker').textContent = dict.districtsKicker;
    sectionDistricts.querySelector('h2').textContent = dict.districtsTitle;
  }
  const sectionPlaces = document.getElementById('places');
  if (sectionPlaces) {
    sectionPlaces.querySelector('.section-kicker').textContent = dict.placesKicker;
    sectionPlaces.querySelector('h2').textContent = dict.placesTitle;
  }
  Object.entries(districtsData).forEach(([id, data]) => {
    const card = document.getElementById(id);
    if (!card) return;
    card.querySelector('.district-badge').textContent = districtNames[data.code][currentLang];
    card.querySelector('h3').textContent = districtNames[data.code][currentLang];
    card.querySelector('p').textContent = data.desc[currentLang];
    card.querySelectorAll('ul li').forEach((li, index) => {
      const placeId = data.items[index];
      if (placeMeta[placeId]) li.textContent = placeMeta[placeId].name[currentLang];
    });
    const btn = card.querySelector('.card-actions a');
    if (btn) btn.textContent = currentLang === 'uk' ? 'Детальніше' : 'Details';
  });

  document.querySelectorAll('.district-section').forEach((section) => {
    const code = section.id.replace('section-','');
    const head = section.querySelector('.district-section__head');
    if (head) {
      head.querySelector('.section-kicker').textContent = districtNames[code][currentLang];
      head.querySelector('h3').textContent = currentLang === 'uk' ? `Історичні місця ${districtNames[code].uk}` : `Historical sites of ${districtNames[code].en}`;
    }
  });

  Object.entries(placeMeta).forEach(([id, meta]) => {
    const article = document.getElementById(id);
    if (!article) return;
    const body = article.querySelector('.place-body');
    body.querySelector('.place-meta').textContent = districtNames[meta.district][currentLang];
    body.querySelector('h3').textContent = meta.name[currentLang];
    body.querySelector('p').textContent = meta.desc[currentLang];
    const facts = body.querySelectorAll('.facts span');
    if (facts[0]) facts[0].textContent = meta.years[currentLang];
    if (facts[1]) facts[1].textContent = meta.location[currentLang];
    if (facts[2]) facts[2].textContent = meta.category[currentLang];
    body.querySelectorAll('.place-gallery img').forEach((img) => img.alt = meta.name[currentLang]);
    const actions = body.querySelector('.place-actions');
    if (actions) {
      const mapBtn = actions.querySelector('[data-action="map"]');
      if (mapBtn) mapBtn.textContent = dict.mapBtn;
      const detailBtn = actions.querySelector('[data-action="detail"]');
      if (detailBtn) detailBtn.textContent = dict.detailBtn;
    }
  });
  const footer = document.querySelector('.footer'); if (footer) footer.textContent = dict.footer;
}

function setupSidebarMenu() {
  document.querySelectorAll('.district-nav-toggle').forEach((button) => {
    button.addEventListener('click', function() {
      const submenu = document.getElementById(this.dataset.target);
      const isOpen = submenu.classList.contains('open');
      document.querySelectorAll('.district-submenu').forEach(el => el.classList.remove('open'));
      document.querySelectorAll('.district-nav-toggle').forEach(toggle => {
        toggle.setAttribute('aria-expanded','false');
        const mark = toggle.querySelector('.toggle-mark'); if (mark) mark.textContent = '+';
      });
      if (!isOpen) {
        submenu.classList.add('open');
        this.setAttribute('aria-expanded','true');
        const mark = this.querySelector('.toggle-mark'); if (mark) mark.textContent = '–';
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function(event) {
      const id = this.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      history.replaceState(null, '', id);
      document.querySelector('.sidebar')?.classList.remove('open');
    });
  });

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.place-actions [data-action="map"]');
    if (!btn) return;
    event.preventDefault();
    const targetId = btn.dataset.targetId;
    const section = document.getElementById('mapSection');
    if (section) section.scrollIntoView({behavior:'smooth', block:'start'});
    setTimeout(() => {
      if (mapInstance && placeMeta[targetId]) {
        mapInstance.setView([placeMeta[targetId].lat, placeMeta[targetId].lng], 11);
        const marker = mapMarkers.find(m => m.options.metaId === targetId);
        if (marker) marker.openPopup();
      }
    }, 400);
  });
}

function setupFilters() {
  const search = document.getElementById('placeSearch');
  if (!search) return;
  const districtFilter = document.getElementById('districtFilter');
  const typeFilter = document.getElementById('typeFilter');
  const periodFilter = document.getElementById('periodFilter');
  const result = document.getElementById('filterResult');
  const cards = Array.from(document.querySelectorAll('.place-card'));

  function applyFilters() {
    const q = search.value.trim().toLowerCase();
    const district = districtFilter.value;
    const type = typeFilter.value;
    const period = periodFilter.value;
    let visible = 0;

    cards.forEach((card) => {
      const metaText = [card.dataset.nameUk, card.dataset.nameEn, districtNames[card.dataset.districtCode].uk.toLowerCase(), districtNames[card.dataset.districtCode].en.toLowerCase(), typeNames[card.dataset.typeCode].uk.toLowerCase(), typeNames[card.dataset.typeCode].en.toLowerCase(), periodNames[card.dataset.periodCode].uk.toLowerCase(), periodNames[card.dataset.periodCode].en.toLowerCase()].join(' ');
      const match = (!q || metaText.includes(q))
        && (district === 'all' || card.dataset.districtCode === district)
        && (type === 'all' || card.dataset.typeCode === type)
        && (period === 'all' || card.dataset.periodCode === period);
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });

    document.querySelectorAll('.district-section').forEach((section) => {
      const anyVisible = section.querySelector('.place-card:not(.hidden)');
      section.style.display = anyVisible ? '' : 'none';
    });

    result.textContent = visible === cards.length ? ui[currentLang].foundAll(visible) : ui[currentLang].foundSome(visible);
  }

  [search, districtFilter, typeFilter, periodFilter].forEach(el => el.addEventListener('input', applyFilters));
  [districtFilter, typeFilter, periodFilter].forEach(el => el.addEventListener('change', applyFilters));
  document.getElementById('resetFilters').addEventListener('click', () => {
    search.value = ''; districtFilter.value = 'all'; typeFilter.value = 'all'; periodFilter.value = 'all'; applyFilters();
  });
  window.applyMainFilters = applyFilters;
  applyFilters();
}

function setupLanguageToggle() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderThemeLabels();
  if (document.body.dataset.view === 'detail') renderDetailPage();
  else {
    renderSidebar();
    renderHero();
    renderToolsAndRoutes();
    renderMainContent();
    if (window.applyMainFilters) window.applyMainFilters();
    if (mapInstance) rebuildMapPopups();
  }
  document.title = ui[lang].pageTitle;
}

function setupMap() {
  const mapElement = document.getElementById('allPlacesMap');
  if (!mapElement || !window.L) return;
  mapInstance = L.map('allPlacesMap', {scrollWheelZoom: false}).setView([51.4, 32.3], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(mapInstance);
  mapMarkers = [];
  Object.entries(placeMeta).forEach(([id, meta]) => {
    if (typeof meta.lat !== 'number' || typeof meta.lng !== 'number') return;
    const marker = L.marker([meta.lat, meta.lng], {metaId: id}).addTo(mapInstance);
    mapMarkers.push(marker);
  });
  rebuildMapPopups();
}

function rebuildMapPopups() {
  mapMarkers.forEach((marker) => {
    const id = marker.options.metaId;
    const meta = placeMeta[id];
    if (!meta) return;
    marker.bindPopup(`<strong>${meta.name[currentLang]}</strong><br>${districtNames[meta.district][currentLang]}<br><a href="#${id}" class="map-jump" data-target="${id}">${ui[currentLang].mapPopupLink}</a>`);
  });
  mapInstance.on('popupopen', () => {
    document.querySelectorAll('.map-jump').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(a.dataset.target);
        if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  });
}

function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  if (!btn) return;
  btn.addEventListener('click', () => document.querySelector('.sidebar')?.classList.toggle('open'));
}

function renderDetailPage() {
  const placeId = document.body.dataset.placeId;
  const meta = placeMeta[placeId];
  const dict = ui[currentLang];
  if (!meta) return;
  const container = document.getElementById('detailPage');
  if (!container) return;

  document.querySelector('.brand-title').textContent = currentLang === 'uk' ? 'Історичні місця' : 'Historical Sites';
  document.querySelector('.brand-subtitle').textContent = currentLang === 'uk' ? 'Чернігівської області' : 'of Chernihiv Region';
  const nav = document.querySelector('.sidebar-nav');
  if (nav) nav.innerHTML = `
    <a href="index.html">${dict.detailBack}</a>
    <a href="#detail-overview">${dict.detailNavOverview}</a>
    <a href="#detail-gallery">${dict.detailNavGallery}</a>
    <a href="#detail-history">${dict.detailNavHistory}</a>
    <a href="#detail-map">${dict.detailNavMap}</a>
    <a href="#detail-facts">${dict.detailNavFacts}</a>`;
  const mobileBtn = document.getElementById('mobileMenuBtn'); if (mobileBtn) mobileBtn.textContent = dict.mobileMenu;
  const gallery = (meta.gallery || [[Object.values(meta.gallery||[])[0]]]).map(([src, cap]) => `<figure><img src="${src}" alt="${meta.name[currentLang]}"><figcaption>${cap[currentLang]}</figcaption></figure>`).join('');
  const facts = (meta.factsList?.[currentLang] || []).map(item => `<li>${item}</li>`).join('');
  container.innerHTML = `
    <section class="detail-hero" id="detail-overview">
      <div class="detail-body">
        <span class="section-kicker">${dict.detailPageMeta}</span>
        <h1>${meta.name[currentLang]}</h1>
        <p>${meta.desc[currentLang]}</p>
        <div class="detail-actions">
          <a class="btn btn-primary" href="index.html">${dict.detailBack}</a>
          <a class="btn btn-secondary" href="#detail-map">${dict.detailMap}</a>
        </div>
        <div class="detail-stats">
          <div class="detail-stat"><strong>${dict.detailDistrict}</strong><span>${districtNames[meta.district][currentLang]}</span></div>
          <div class="detail-stat"><strong>${dict.detailType}</strong><span>${typeNames[meta.type][currentLang]}</span></div>
          <div class="detail-stat"><strong>${dict.detailPeriod}</strong><span>${periodNames[meta.period][currentLang]}</span></div>
          <div class="detail-stat"><strong>${dict.detailLocation}</strong><span>${meta.location[currentLang]}</span></div>
        </div>
      </div>
      <div class="detail-photo"><img src="${meta.gallery?.[0]?.[0] || ''}" alt="${meta.name[currentLang]}"></div>
    </section>
    <section class="detail-gallery-card" id="detail-gallery">
      <span class="section-kicker">${dict.detailGallery}</span>
      <div class="detail-gallery">${gallery}</div>
    </section>
    <div class="detail-grid">
      <section class="detail-history-card" id="detail-history">
        <span class="section-kicker">${dict.detailHistory}</span>
        <p>${meta.history?.[currentLang] || meta.desc[currentLang]}</p>
      </section>
      <section class="detail-facts-card" id="detail-facts">
        <span class="section-kicker">${dict.detailFacts}</span>
        <ul class="detail-list">${facts || `<li>${meta.years[currentLang]}</li><li>${meta.category[currentLang]}</li>`}</ul>
      </section>
    </div>
    <section class="detail-map-card" id="detail-map">
      <span class="section-kicker">${dict.detailMap}</span>
      <div class="detail-map-frame"><iframe loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent(meta.mapQuery)}&output=embed"></iframe></div>
    </section>
    <footer class="detail-footer">${dict.footer}</footer>`;
}


function setupAnimations() {
  document.body.classList.add('is-ready');
  const selectors = [
    '.hero', '.section', '.district-card', '.district-section__head', '.place-card',
    '.route-card', '.tools-card', '.map-card', '.detail-hero', '.detail-gallery-card',
    '.detail-facts-card', '.detail-history-card', '.detail-map-card', '.detail-card', '.detail-footer'
  ];
  const elements = document.querySelectorAll(selectors.join(','));
  elements.forEach((el, index) => {
    el.classList.add('pre-animate', 'reveal-on-scroll');
    el.classList.remove('is-visible');
    el.classList.add(`reveal-delay-${(index % 4) + 1}`);
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach((el) => observer.observe(el));
}

function setupDetailPageLayout() {
  if (document.body.dataset.view !== 'detail') return;
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && !sidebar.querySelector('.sidebar-tools')) {
    const brand = sidebar.querySelector('.brand');
    const tools = document.createElement('div');
    tools.className = 'sidebar-tools';
    tools.innerHTML = `<div class="lang-switch" aria-label="Language switch"><button class="lang-btn active" type="button" data-lang="uk">UA</button><button class="lang-btn" type="button" data-lang="en">EN</button></div>`;
    brand.insertAdjacentElement('afterend', tools);
    const nav = document.createElement('nav'); nav.className = 'sidebar-nav'; sidebar.appendChild(nav);
  }
}


function setupImageFallbacks() {
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      const src = img.getAttribute('src') || '';
      if (src.endsWith('.jpg')) img.src = src.replace(/\.jpg$/i, '.svg');
      else if (src.endsWith('.png')) img.src = src.replace(/\.png$/i, '.svg');
    }, { once: true });
  });
}

function init() {
  setupDetailPageLayout();
  setupThemeToggle();
  setupLanguageToggle();
  setupImageFallbacks();
  if (document.body.dataset.view === 'detail') {
    renderDetailPage();
    setupSidebarMenu();
    setupMobileMenu();
    setupAnimations();
    return;
  }
  ensurePlaceCardsDecor();
  renderSidebar();
  renderHero();
  renderToolsAndRoutes();
  renderMainContent();
  setupSidebarMenu();
  setupFilters();
  setupMap();
  setupMobileMenu();
  setupAnimations();
}

init();
