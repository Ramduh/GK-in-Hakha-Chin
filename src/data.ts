import { 
  Heart, 
  Activity, 
  Monitor, 
  Globe, 
  Lightbulb, 
  Zap, 
  User, 
  Microscope, 
  Sun, 
  Trophy, 
  Mountain, 
  HelpCircle,
  History,
  MapPin,
  Type,
  BookMarked
} from 'lucide-react';
import React from 'react';

export interface Entry {
  title: string;
  description: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface CategoryData {
  title: string;
  icon: React.ReactNode;
  entries: Entry[];
  questions: QuizQuestion[];
}

export const EDUCATIONAL_DATA: Record<string, CategoryData> = {
  BODY: {
    title: 'Taksa le Pungte lei Hngalhnak (Human Body)',
    icon: React.createElement(Activity, { className: "w-8 h-8 text-red-500" }),
    entries: [
      { title: 'Lung (Heart)', description: 'Lung hi kan taksa chungah a biapi bikmi thil pakhat a si i, kan thi vialte kha taksa pumpi ah a dawt i a thlah tawn. Thi nih hin oxygen le thawnnak (nutrients) kha kan taksa hmun kip ah a phurh hna i, lung hi a ngandam lo ahcun kan taksa pumpi a hnorsuan khawh.' },
      { title: 'Thluak (Brain)', description: 'Thluak hi kan taksa hruaitu (control center) a si. Khua kan ruahnak, thil kan hngalhnak le kan taksa i a cheu vialte kha thluak nih hin a hruai hna. Kan hmuhmi, kan theihmi le kan tawnghmi vialte zong thluak nih a hngalhpi hna.' },
      { title: 'Mit (Eyes)', description: 'Mit hi vawleicung thil dawh vialte kan hmuh khawnak hmanmi a si. Mit nih hin ceuna (light) kha a lak i thluak ah hmanthlak (image) a kuat tawn. Mit hi kan humhim a herh i, ceuna luan tukmi le thil hmete zoh tuknak nih a hrawk khawh.' },
      { title: 'Hnar (Nose)', description: 'Hnar nih thli a kan dawpter i, rim kan hngalhnak zong a si. Kan taksa caah a herh bikmi oxygen kha hnar in kan la tawn i, hnar chung i a ummi hmul hmete hna nih hin thli chung i a ummi vawlei-vut hna kha an kham tawn.' },
      { title: 'Ka (Mouth)', description: 'Ka hi rawl kan einak le bia kan chimnak hmanmi a si. Ha le lei zong ka chungah an um i, rawl hrawhpiaknak le tawt hngalhnak rian an ttuan. Rawl hrawhnak (digestion) hrampi cu ka chungah hin a thawk a si.' },
      { title: 'Hna (Ears)', description: 'Hna hi thil awn kan theihnak hmanmi a si. Hna chungah a ummi thil hmete hna nih hin kan taksa kan i tlaih khawnak (balance) zong a kan bawmh tawn. Hna hi kan humhim a herh i, thil awn luan tukmi nih hnatheihnak a hrawk khawh.' },
      { title: 'Kut (Hands)', description: 'Kut hi thil tlaihnak, rian ttuannak le thil tuahnak ah kan hman bikmi a si. Kutzabi hna nih thil hmete zong fawi tein tlaih khawnak a kan pek. Kut hi a thiang tein kan chiah zungzal a herh i zawtnak hrik a tam biknak hmun a si.' },
      { title: 'Ke (Legs)', description: 'Ke hi kan taksa dihlak a tlaitu a si i, lam kan tlinnak le kan dirnak ah a biapi tuk. Ke chungah a ummi sa (muscles) hna hi taksa chungah a tthawng bikmi an si tawn. Ke ngandamnak caah lam tlin hi a tha.' },
      { title: 'Ruh (Bones)', description: 'Ruh nih kan taksa sining (shape) a hrawngter i, kan taksa a fehter. Ruh nih hin kan taksa chung i a ummi thil biapi (lung, chun, thluak) hna kha a humhim hna. Ruh ngandamnak caah calcium a tammi rawl ei a herh.' },
      { title: 'Thi (Blood)', description: 'Thi nih kan taksa caah a herhmi thawnnak (nutrients) le oxygen kha hmun kip ah a phurtu a si. Thi chung i a ummi thi-sen (red blood cells) nih oxygen an phurh i, thi-rang (white blood cells) nih zawtnak hrik an doh hna.' },
      { title: 'Vun (Skin)', description: 'Vun hi kan taksa pumpi a khuhmi le a humhimmi a si i, taksa chung i a ummi ti a dih lo nakhnga a kan bawmh. Vun nih hin kan taksa lumnak (temperature) zong a kan tlamtlinter tawn.' },
      { title: 'Cun (Stomach)', description: 'Cun nih kan eidin vialte kha a hrawhpiak hna i, taksa caah a herhmi thawnnak ah a chuahter hna. Cun chungah a ummi ti-thur (acid) nih rawl kha fawi tein a hrawh khawh.' },
      { title: 'Chun (Lungs)', description: 'Chun hi thli kan dawpmi kha a thiangter i, kan thi chungah oxygen a telhtertu a si. Kan thli dawp tikah chun a lian i, kan thli chuah tikah chun a hme tthan. Chun ngandamnak caah thli thiang lak a herh.' },
      { title: 'Kal (Kidneys)', description: 'Kal nih kan thi chung i a tthalo mi vialte kha a thiangter hna i, tihnawm (urine) ah a chuahter hna. Kal hi kan taksa chungah pahnih an um i, ti thiang deuh in din ahcun an rianttuannak a fawi deuh.' },
      { title: 'Thin (Liver)', description: 'Thin nih kan taksa chung i a ummi tur (toxins) vialte kha a thiangter hna i, thawnnak zong a khong tawn. Thin nih hin rawl hrawhnak caah a herhmi ti-tthlum (bile) zong a chuahter.' },
      { title: 'Ha (Teeth)', description: 'Ha hi rawl kan thialnak le kan hrawhnak ah kan hmanmi a si. Ha hi taksa chungah a feh bikmi hmun an si i, ha ngandamnak caah zing le zan ah ha tawl zungzal a herh.' },
      { title: 'Sam (Hair)', description: 'Sam nih kan lu a humhim i, a lumter tawn. Sam hi kan muidawhnak caah zong a biapi tukmi a si i, taksa hmun kip ah a ummi sam hna nih humhimnak rian an ttuan.' },
      { title: 'Tin (Nails)', description: 'Tin nih kan kutzabi le kezabi a humhim hna i, thil hmete tlaih tikah a kan bawmh. Tin hi a thiang tein kan tan zungzal a herh i, a hram ah zawtnak hrik an i thup fawi tuk.' },
      { title: 'Sa (Muscles)', description: 'Sa nih kan taksa a thawnter i, kan i thawn khawnak dingah rian a ttuan. Kan taksa chungah sa phun 600 leng an um i, lung zong hi sa pakhat a si ve. Taksa sawmnak (exercise) nih sa a fehter.' },
      { title: 'Pehtlaihnak (Joints)', description: 'Pehtlaihnak nih kan ruh hna kha a pehtlaihter hna i, kan taksa kan thleh khawnak le kan i thawn khawnak a bawmh. Entatnak ah: khuk, kutzung le liang hna hi an si.' },
      { title: 'Hri (Nerves)', description: 'Hri nih kan taksa hngalhnak vialte kha thluak ah a phurh tawn i, thluak in a rami nawlpeknak zong taksa ah a phur tthan. Hri hi kumpuita hri (wires) bantuk an si i, a ran tukmi pehtlaihnak an tuah.' },
      { title: 'Lei (Tongue)', description: 'Lei nih eidin tawt (thlum, thur, kha, thak) a kan hngalhter i, bia kan chimnak ah zong a biapi tukmi a si. Lei cungah a ummi hngalhnak hmete hna nih tawt an hngalh tawn.' }
    ],
    questions: [
      { question: 'Lung (Heart) rian biapi bik cu zeidah a si?', options: ['Rawl hrawh', 'Thi dawt le thlah', 'Bia chim'], answer: 1 },
      { question: 'Kan taksa hruaitu (control center) cu zeidah a si?', options: ['Lung', 'Cun', 'Thluak'], answer: 2 },
      { question: 'Ruh ngandamnak caah zeidah ei a herh?', options: ['Calcium', 'Sati', 'Ti thlum'], answer: 0 }
    ]
  },
  BIOLOGY: {
    title: 'Biology le Thil Nung lei Hngalhnak (Biology)',
    icon: React.createElement(Microscope, { className: "w-8 h-8 text-green-600" }),
    entries: [
      { title: 'Thingkung (Plants)', description: 'Thingkung hi vawleicung thil nung vialte caah a biapi bikmi an si. Anmah nih thli thiang (oxygen) a kan pek i, kan vawlei a lum tuknak in a kan humhim. Thingkung nih niceu hman in anmah caah rawl an i tuah khawh.' },
      { title: 'Pangpar (Flowers)', description: 'Pangpar hi thingkung i an fale (reproductive parts) an si i, thil rim mui le muidawhnak a chuahtertu an si. Pangpar nih rungrul hna kha a dawi hna i, thingkung thar a chuah khawnak dingah a bawmh hna.' },
      { title: 'Saram (Animals)', description: 'Saram hna hi vawleicung ah phun tampi an um i, kan vawlei i nungphung (ecosystem) a tlamtlin khawnak dingah an biapi tuk. Saram hna hi an eimi rawl cungah i hngat in phun kip ah tthen an si.' },
      { title: 'Nga (Fish)', description: 'Nga hi ti chungah a nungmi saram an si i, an hna (gills) in thli an dawp tawn. Nga hi taksa caah a ttha bikmi rawl pakhat an si i, an taksa sining hi ti chung i fawi tein lio khawh dingah tuahmi a si.' },
      { title: 'Vate (Birds)', description: 'Vate hi thla a ngeimi le van ah a zuang khawhmi saram an si. Anmah nih thingthei mu hna kha hmun kip ah an thlah i thingkung thar a chuahter. Vate ruh hna hi an i zang i, hi nih hin fawi tein zuang khawnak a pek hna.' },
      { title: 'Hrampi (Grass)', description: 'Hrampi nih vawlei a khuh i, saram tampi caah rawl a si. Vawlei a hrawk khawhmi tilian le thlihrang in a kan humhim. Hrampi hi vawleicung hmun kip ah a ttha fawi bikmi thingkung an si.' },
      { title: 'Tlang (Mountains)', description: 'Tlang hi vawlei a sangmi hmun an si i, thli thiang le ti thiang a rami hmun an si. Tlang cungah thingkung le saram tampi an nung i, vawlei lumnak (climate) zong a thleng khawh.' },
      { title: 'Ti (Water)', description: 'Ti hi thil nung vialte caah a nung khawnak dingah a biapi bikmi a si. Kan taksa i a cheu thum ah a cheu hnih hi ti a si i, ti lo in thil nung pakhat hmanh an nung kho lo.' },
      { title: 'Ni (Sun)', description: 'Ni hi vawleicung thil nung vialte caah thawnnak (energy) a petu a si. Ni hi arfi (star) pakhat a si i, niceu a um lo ahcun thingkung an tthan khawh lo i saram zong kan nung kho lo.' },
      { title: 'Thla (Moon)', description: 'Thla hi vawlei i a satellite a si i, zan ah a ceu tawn. Rili ti a sannak le a tthiamnak (tides) zong thla nih hin a hruai i, vawlei a mer (rotation) zong a tlamtlinter.' },
      { title: 'Arfi (Stars)', description: 'Arfi hna hi van ah a ceumi thil lianpipi an si i, kan ni (sun) zong hi arfi pakhat a si ve. Arfi hna hi gas lianpipi in tuahmi an si i, hlatpi ah an um caah an hme tein kan hmuh hna.' },
      { title: 'Mei (Fire)', description: 'Mei nih lumnak le rawl chuannak a kan pek. Mei hi kan hman thiam ahcun a ttha tuk i, kan hman thiam lo ahcun thil tampi a hrawk khawh. Mei chuah nakhnga oxygen, lumnak le eimi thil (fuel) an herh.' },
      { title: 'Cells', description: 'Cells hi thil nung vialte i a hmete bikmi hmun (building blocks) an si. Kan taksa pumpi hi cells thong tampi in tuahmi a si i, anmah chungah nunnak hram a um.' },
      { title: 'DNA', description: 'DNA nih kan sining le kan hmelchunhnak (traits) vialte kha a ken. Nu le pa sinin kan hmuhmi sining (entatnak: mit mui, sam mui) vialte hi DNA chungah an um.' },
      { title: 'Photosynthesis', description: 'Thingkung nih niceu, ti le thli (carbon dioxide) hman in anmah caah rawl an i tuahnak hi a si. Hi rian nih hin thil nung caah a herhmi oxygen a chuahter.' },
      { title: 'Mammals', description: 'Mammals cu an fale hnawi a dawtmi saram an si i, an fale kha an pawi hna i an hrin hna. Minung, vui le rili chung nga lian (whale) hna hi mammals kan si.' },
      { title: 'Reptiles', description: 'Reptiles cu vawlei ah a vawmi le a nungmi saram an si i, an vun a feh i tihnah (scales) an ngei tawn. Entatnak ah: rul, laiking le tlangvaw hna hi an si.' },
      { title: 'Insects', description: 'Insects cu ke 6 a ngeimi saram hmete an si i, an taksa hi hmun thum (lu, awm, tta) ah tthenmi a si. Vawleicung ah insects hi an tam bik i nungphung caah an biapi tuk.' },
      { title: 'Bacteria', description: 'Bacteria cu mit in hmuh khawh lomi thil nung hmete (single-celled) an si. A cheu cu zawtnak chuahtertu an si i, a cheu cu taksa caah a tthami (entatnak: rawl hrawhpiaknak ah) an si.' },
      { title: 'Virus', description: 'Virus cu zawtnak a chuahtertu thil nung hmete an si i, thil nung dang (host) chungah lawng an nung kho. Virus hi bacteria nakin an hme deuh i thlop fawi an si lo.' },
      { title: 'Fang (Seeds)', description: 'Fang hi thingkung thar a chuah khawnak dingah a biapi bikmi a si. Fang chungah thingkung thar caah a herhmi thawnnak le sining vialte an i thup tawn.' },
      { title: 'Hram (Roots)', description: 'Hram nih thingkung kha vawlei ah a fehter i, vawlei chung i a ummi ti le thawnnak kha a dawp tawn. Hram a thuk deuh poh ah thingkung a feh deuh.' },
      { title: 'Hnah (Leaves)', description: 'Thingkung hnah nih niceu in rawl an tuah tawn (photosynthesis). Hnah hring (chlorophyll) nih thli thiang (oxygen) a chuahter i vawlei thli a thiangter.' },
      { title: 'Thingthei (Fruits)', description: 'Thingkung nih an mu (seeds) humhimnak le saram nih ei khawh dingah an chuahtermi a si. Thingthei ei tikah saram nih a mu kha hmun dang ah an thlah i thingkung thar a chuahter.' },
      { title: 'Tanh (Fungi)', description: 'Tanh (Fungi/Mushrooms) cu thingkung asiloah saram thi hna a hrawk i vawlei tha ah a thlentu an si. Anmah nih vawlei thianghlimnak rian an ttuan.' },
      { title: 'Ti-saram (Amphibians)', description: 'Ti chung le vawlei cung pahnih ah a nung khawhmi saram (entatnak: u) hna an si. An hmete lio ah ti chungah an nung i, an tthan tikah vawlei cungah an nung kho.' },
      { title: 'Saram-hrang (Predators)', description: 'Saram dang a eimi saram hna (entatnak: sakei, mupi) an si i, nungphung (ecosystem) caah an biapi tuk. Saram tam tuk lo nakhnga an humhim hna.' },
      { title: 'Rawl-hrawhnak (Digestion)', description: 'Kan eimi rawl vialte kha taksa thawnnak (energy) ah a thlentu rian a si. Ka chung in a thawk i cun chungah a tlamtling tawn.' },
      { title: 'Thawnnak (Energy)', description: 'Thil nung vialte rian ttuannak le tthannak caah a herhmi thawnnak a si. Rawl in kan hmuh tawn i, thil nung lomi caah mei asiloah niceu in hmuh khawh a si.' },
      { title: 'Thli-dawpnak (Respiration)', description: 'Taksa chungah oxygen lak le carbon dioxide chuahternak rian a si. Hi thawnnak nih hin seal hna kha rian a ttuantter hna.' },
      { title: 'Thi-luangnak (Circulation)', description: 'Thi nih taksa pumpi ah thawnnak le oxygen a phurhnak rian a si. Lung nih thi a dawt i, hri hna in taksa pumpi ah a luang tawn.' },
      { title: 'Sining-thlennak (Adaptation)', description: 'Thil nung hna nih an umnak hmun he aa tlak tein an sining an thlenmi a si. Entatnak ah: thlaler i a ummi saram hna nih ti tlawm tein nun khawh an thiam.' },
      { title: 'Nungphung (Ecosystem)', description: 'Thil nung le thil nung lomi hna pakhat le pakhat i bawmhnak hmun a si. Pakhat a hrawk ahcun a dang vialte zong an hnorsuan khawh hna.' },
      { title: 'Hmun-humhimnak (Conservation)', description: 'Thingkung le saram hna an dih lo nakhnga le vawlei a tthat nakhnga humhimnak rian a si. Kan hnu i a rami hna caah vawlei ttha chiahpiak a herh.' },
      { title: 'Zawtnak-hrik (Germs)', description: 'Mit in hmuh khawh lomi zawtnak chuahtertu thil hmete (bacteria/virus) hna an si. Kut thiang tein tawl nih zawtnak hrik tampi a kham khawh.' },
      { title: 'I-hngilhnak (Sleep)', description: 'Taksa le thluak an i dinh khawnak le an i sersiam tthan khawnak dingah a biapi bikmi a si. I-hngil ttha lo ahcun taksa thawnnak a tlawm i zawtnak a lut fawi.' }
    ],
    questions: [
      { question: 'Thingkung nih zeidah a kan pek?', options: ['Mei', 'Thli thiang (Oxygen)', 'Ti thlum'], answer: 1 },
      { question: 'Vawleicung ah a tam bikmi saram cu zeidah an si?', options: ['Nga', 'Vate', 'Insects'], answer: 2 },
      { question: 'Thil nung vialte i a hmete bikmi hmun cu zeidah a si?', options: ['Cells', 'Ruh', 'Vun'], answer: 0 },
      { question: 'Ti chung le vawlei cung pahnih ah a nung khawhmi cu zeidah an si?', options: ['Nga', 'Amphibians', 'Vate'], answer: 1 },
      { question: 'Kan eimi rawl thawnnak ah a thlentu rian cu zeidah a si?', options: ['Digestion', 'I-hngilhnak', 'Lam-tlinnak'], answer: 0 },
      { question: 'Thingkung hnah nih rawl an tuahnak dingah zeidah an hman?', options: ['Niceu (Sunlight)', 'Mei', 'Zanlei thli'], answer: 0 }
    ]
  },
  COMPUTER: {
    title: 'Computer le Technology (Computer & Technology)',
    icon: React.createElement(Monitor, { className: "w-8 h-8 text-blue-600" }),
    entries: [
      { title: 'Computer', description: 'Computer cu rian a ttuan rannak le thil hngalhnak (data) chiahnak dingah tuahmi seh a si. Computer nih hin hardware (taksa) le software (program) hman in rian a ttuan tawn. Tuchan ahcun computer lo in rianttuannak a har tuk cang.' },
      { title: 'Internet', description: 'Internet nih vawleipia mi vialte a kan pehtlaihter i, thil hngalhnak vialte kha fawi tein kan hmuh khawnak lam a si. Internet cu vawleicung computer vialte pehtlaihnak hri (network) lianpi a si.' },
      { title: 'Mobile Phone', description: 'Mobile Phone cu kut chung computer hmete a si i, bia i chawnnak lawng si lo in thil tampi tuahnak ah kan hman khawh. Phone chungah hin computer i a ummi thiamnak vialte fawi tein hman khawh an si.' },
      { title: 'Mouse', description: 'Mouse cu computer screen cungah thil kan hmeh khawnak le kan hruai khawnak dingah hmanmi a si. Mouse nih computer hman fawinak a kan pek i, thil kan kawl tikah a ranter.' },
      { title: 'Keyboard', description: 'Keyboard cu computer chungah ca kan tial khawnak le nawl kan pekh khawnak dingah hmanmi seh a si. Keyboard cungah a ummi nambat le biafang hna nih computer he pehtlaihnak a kan tuahter.' },
      { title: 'Screen/Monitor', description: 'Screen/Monitor nih computer chung i a ummi hmanthlak, ca le video vialte kha a kan hmuhter tawn. Screen tthat deuh poh ah hmanthlak a fiang deuh i mit caah a ttha deuh.' },
      { title: 'Software', description: 'Software cu computer chungah rian pakhat ttuannak dingah tuahmi program hna an si. Entatnak ah: Facebook, YouTube le apps vialte hna hi an si.' },
      { title: 'Hardware', description: 'Hardware cu computer taksa, kan hmuh khawhmi le kan tawngh khawhmi thil vialte hna an si. Entatnak ah: screen, keyboard le computer chung i a ummi thil hna hi an si.' },
      { title: 'Email', description: 'Email cu computer asiloah phone in ca kan i kuatnak a si i, cacahnah in kuatnak nakin a ran deuh i a fawi deuh. Email cu rianttuannak le pehtlaihnak ah a biapi tukmi a si.' },
      { title: 'Password', description: 'Password cu kan thil vialte thup tein kan chiah khawnak dingah hmanmi biathli (secret code) a si. Password feh deuh poh ah kan thil (data) an him deuh i, midang hngalhter lo a ttha.' },
      { title: 'Data', description: 'Data cu computer chungah kan chiahmi thil hngalhnak, hmanthlak le ca vialte hna hi an si. Data hi computer thawnnak a si i, ttha tein humhim a herh.' },
      { title: 'Wi-Fi', description: 'Wi-Fi nih hri (wire) um lo tein internet a kan pehtlaihter i, fawi tein internet hman khawnak a kan pek. Wi-Fi thazaang a tthat deuh poh ah internet a rang deuh.' },
      { title: 'Laptop', description: 'Laptop cu ken khawhmi computer a si i, hmun kip ah fawi tein kan i ken khawh i rian kan ttuan khawh. Laptop chungah batri a um caah mei um lo zongah hman khawh a si.' },
      { title: 'Tablet', description: 'Tablet cu screen lawng a ngeimi computer a si i, phone nakin a lian deuh i computer nakin a hme deuh. Tablet hi ca zohnak le hmanthlak tialnak ah a ttha tuk.' },
      { title: 'App', description: 'App cu rian pakhat ttuannak computer program a si i, phone chungah thil tuahnak dingah kan hman tawn. Entatnak ah: games, hmanthlak sersiamnak le pehtlaihnak apps hna hi an si.' },
      { title: 'Website', description: 'Website cu internet cungah ca, hmanthlak le video hna chiahnak hmun a si i, vawleicung hmun kip in an zoh khawh. Website nih thil hngalhnak tampi a kan pek.' },
      { title: 'Cloud', description: 'Cloud cu internet cungah thil chiahnak hmun a si i, kan phone asiloah computer a hrawk zongah kan thil vialte an him zungzal. Hmun kip in kan thil hna kha kan hmu kho tthan.' },
      { title: 'Folder', description: 'Folder cu computer chungah kan thil (files) hna kha ttha tein tthen i chiahnak bawm a si. Folder nih computer chung thil hna kha a thianghlimter i kawl a fawiter.' },
      { title: 'File', description: 'File cu computer chungah ca pakhat asiloah hmanthlak pakhat kan chiahmi hi a si. File phun kip (ca, hla, video) an um tawn.' },
      { title: 'Hrawh (Delete)', description: 'Hrawh (Delete) cu kumpuita chung i kan herh ti lomi thil hna kha hloternak a si. Thil kan hrawh tikah kumpuita chungah hmun (space) a tam deuh tawn.' },
      { title: 'Kham (Save)', description: 'Kham (Save) cu kan ttuanmi rian hna kha kumpuita chungah ttha tein chiahnak a si i, hnu ah zoh tthan khawh a si. Kham lo ahcun kan ttuanmi vialte an lo khawh.' },
      { title: 'Chuah (Print)', description: 'Chuah (Print) cu kumpuita chung i a ummi ca asiloah hmanthlak kha cacahnah cungah chuahnak a si. Hi caah hin printer seh hman a herh.' }
    ],
    questions: [
      { question: 'Internet rian biapi bik cu zeidah a si?', options: ['Thil hrawh', 'Vawleipia pehtlaihter', 'Mei chuah'], answer: 1 },
      { question: 'Computer chungah ca tialnak dingah zeidah kan hman?', options: ['Mouse', 'Screen', 'Keyboard'], answer: 2 },
      { question: 'Kan thil vialte him tein chiah-nak biathli cu zeidah a si?', options: ['Password', 'Email', 'App'], answer: 0 }
    ]
  },
  GEOGRAPHY: {
    title: 'Vawleipia le Ram lei Hngalhnak (Geography)',
    icon: React.createElement(Globe, { className: "w-8 h-8 text-cyan-600" }),
    entries: [
      { title: 'Earth', description: 'Earth hi thil nung vialte kan umnak hmun a si i, ni (sun) in zoh ahcun thlaphal pathumnak a si. Vanlawng (space) in zoh ahcun a hring le a hringdu (blue) in a dawh tuk i, nunnak a um khawnak hmun pakhat lawng a si.' },
      { title: 'Ram (Country)', description: 'Ram cu mah le ualnak, upadi le cozah a ngeimi hmun a si. Vawleicung ah ram 200 hrawng an um i, ram pakhat le pakhat an nungphung le an holh an i lo lo.' },
      { title: 'Khua (City)', description: 'Khua cu mi tampi lungrual tein kan umnak hmun a si i, rianttuannak le cawnnak hmun tampi an um tawn. Khua lianpipi hna ahcun mawtaw le inn lianpipi an tam bik.' },
      { title: 'Rili (Ocean)', description: 'Rili cu ti a tamnak hmun kaupi a si i, vawleipia i a cheu thum ah a cheu hnih hi rili a si. Rili ti hi a ttha (salt water) a si i, saram le thingkung tampi an nung.' },
      { title: 'Tiva (River)', description: 'Tiva cu ti a luangmi lam a si i, tiva ti hi din khawhmi ti thiang (fresh water) an si tawn. Tiva nih vawlei a tthawngter i lothlohnak caah a ttha tuk.' },
      { title: 'Tikhor (Lake)', description: 'Tikhor cu ti a umnak hmun hmete a si i, a velchum ah vawlei nih a khuhmi a si. Tikhor ti zong hi a tam bik cu ti thiang an si tawn.' },
      { title: 'Nelrawng (Plains)', description: 'Nelrawng cu vawlei a pheimi hmun a si i, lothlohnak le khua sersiamnak caah a ttha bikmi hmun a si. Nelrawng ahcun rawl tampi a chuak khawh.' },
      { title: 'Ramlak (Forest)', description: 'Ramlak cu thingkung tampi a umnak hmun a si i, saram tampi an umnak le thli thiang a chuahtertu hmun a si. Ramlak nih vawlei lumnak a tlamtlinter tawn.' },
      { title: 'Thlaler (Desert)', description: 'Thlaler cu vawlei a romi le thetse tampi a umnak a si i, ti a tlawm tuk caah thingkung le saram an nung kho fawi lo. Thlaler ahcun chun ah a lum tuk i zan ah a kik tuk tawn.' },
      { title: 'Tikhal (Ice)', description: 'Tikhal cu ti a khalmi a si i, vawleicung a chaklei (North Pole) le a thlanglei (South Pole) ah tikhal lianpipi an um. Tikhal hna hi vawlei lumnak a tlamtlintertu an si.' },
      { title: 'Vawleicung (Continents)', description: 'Vawlei hi hmun lianpipi 7 ah an tthen hna i, Asia, Africa, North America, South America, Antarctica, Europe le Australia an si. Hi hmun hna hi rili nih a tthen hna.' },
      { title: 'Thli (Wind)', description: 'Thli cu a luangmi thli a si i, vawlei lumnak aa lo lonak in a chuak tawn. Thli nih vawlei lumnak a tlamtlinter i, thlihrang nih thawnnak (energy) zong a chuahter khawh.' },
      { title: 'Asia', description: 'Asia cu vawleicung ram lian bik le mi tam bik an umnak continent a si. Kan ram zong hi Asia chungah a um i, nungphung le holh tampi a umnak hmun a si.' },
      { title: 'Africa', description: 'Africa cu a lummi ram lianpi a si i, saram lianpipi le ramlak kaupi a umnak hmun a si. Africa ahcun thlaler lianpipi zong an um.' },
      { title: 'Pacific Ocean', description: 'Pacific Ocean cu vawleicung rili lian bik le a thuk bik a si i, vawlei i a cheu thum ah a cheu pakhat a khuh. Pacific chungah thlihrang le tilian tampi an chuak tawn.' },
      { title: 'Atlantic Ocean', description: 'Atlantic Ocean cu rili lianpi pakhat a si i, Europe, Africa le America ram hna a pehtlaihter hna. Hi rili hi pehtlaihnak le thil phurhnak caah a biapi tuk.' },
      { title: 'Equator', description: 'Equator cu vawlei laifang a tthenmi rin (imaginary line) a si i, hi hmun hi vawleicung ah a lum biknak hmun a si. Equator nih vawlei kha chaklei le thlanglei ah a tthen.' },
      { title: 'Chaklei (North Pole)', description: 'Chaklei cu vawlei a chakbiknak hmun a si i, tikhal lawnglawng a um i a kik tukmi hmun a si. Hi hmun ahcun "Northern Lights" dawh tukmi an chuak tawn.' },
      { title: 'Thlanglei (South Pole)', description: 'Thlanglei cu vawlei a thlangbiknak hmun a si i, hi hmun zong hi tikhal lawng a um i a kik tuk ve. Antarctica continent cungah a um.' },
      { title: 'Volcano', description: 'Volcano cu vawlei chung in meial (lava) a chuahmi tlang a si i, vawlei chung a lum tuknak in a chuak tawn. A chuah tikah vawlei thar a chuahter khawh.' },
      { title: 'Earthquake', description: 'Earthquake cu vawlei a hninhmi a si i, vawlei chung i a ummi lung lianpipi (tectonic plates) an i tthawn caah a chuak tawn. Earthquake nih thil tampi a hrawk khawh.' },
      { title: 'Tsunami', description: 'Tsunami cu rili chungah vawlei a hninh caah a chuahmi ti lianpi a si i, rili kam i a ummi khua hna a hrawk khawh. Tsunami hi a ran tuk caah humhimnak lak a har tawn.' }
    ],
    questions: [
      { question: 'Vawleicung ah continent zeizat dah a um?', options: ['5', '7', '9'], answer: 1 },
      { question: 'Vawleicung rili lian bik cu zeidah a si?', options: ['Atlantic', 'Pacific', 'Indian Ocean'], answer: 1 },
      { question: 'Vawleicung ram lian bik continent cu zeidah a si?', options: ['Africa', 'Europe', 'Asia'], answer: 2 }
    ]
  },
  INVENTORS: {
    title: 'Thil Chuahtertu Hmingthang hna (Famous Inventors)',
    icon: React.createElement(Lightbulb, { className: "w-8 h-8 text-yellow-500" }),
    entries: [
      { title: 'Thomas Edison', description: 'Thomas Edison nih meiinn (light bulb) a chuahter i, vawleicung muinak kha ceuna ah a thlen. Thil tampi a chuahtertu a si i, a hlawhtlin hlan ah voi thong tampi a rak i zuam tawn.' },
      { title: 'Alexander Graham Bell', description: 'Alexander Graham Bell nih fawn (telephone) a chuahter i, hlatpi i a ummi hna fawi tein bia i chawnh khawnak lam a sersiam. Hi nih hin vawleicung pehtlaihnak a thlen bik.' },
      { title: 'Wright Brothers', description: 'Wright unau nih vanlawng (airplane) an chuahter i, vawleicung hmun kip ah fawi tein le ran tein tlawm khawnak lam a sersiam. Anmah hi van ah a zuang khawhmi seh a chuahter hmasa bikmi an si.' },
      { title: 'James Watt', description: 'James Watt nih meilawng seh (steam engine) a chuahter i, sehthiamnak (industrial revolution) a hram a thawktertu a si. Hi nih hin thil chuah rannak le mawtaw sersiamnak a bawmh.' },
      { title: 'Guglielmo Marconi', description: 'Marconi nih redio (radio) a chuahter i, hri um lo tein bia i kuat khawnak lam a hmuh hmasa bik. Hi thiamnak hi tuchan Wi-Fi le phone pehtlaihnak hram a si.' },
      { title: 'John Logie Baird', description: 'Baird nih TV (television) a chuahter i, hmanthlak le awn kha hlatpi in hmuh khawnak lam a sersiam. Tuchan kan zohmi TV vialte hi a hram a thawktu a si.' },
      { title: 'Tim Berners-Lee', description: 'Tim nih World Wide Web (WWW) a chuahter i, intanet hman khawnak dingah a biapi bikmi lam a sersiam. Hi nih hin vawleicung thil hngalhnak vialte fawi tein hmuh khawnak a pek.' },
      { title: 'Karl Benz', description: 'Karl Benz nih mawtaw (car) a chuahter hmasa bik i, lam tlinnak ah fawinak a kan pek. Gas hman in a tli khawhmi mawtaw a sersiam hmasa bik.' },
      { title: 'Marie Curie', description: 'Marie Curie nih Radium a hmuh i, zawtnak thlopnak (X-ray) ah a hman khawnak dingah thiamnak lianpi a kan pek. Nobel Prize voi hnih a hmuhmi nu hmasa bik a si.' },
      { title: 'Isaac Newton', description: 'Isaac Newton nih vawlei dawtnak (gravity) a hmuh i, vawleicung thil vialte zeicah vawlei ah an falk tawn ti kha a kan hngalhter. Mathematics le Physics lei ah mifim lianpi a si.' },
      { title: 'Louis Pasteur', description: 'Louis Pasteur nih zawtnak khamnak (vaccine) a chuahter i, zawtnak hrik hna zeicah an chuah ti kha a hmuh. Hnawi thiang tein chiah sining (pasteurization) zong a hmuhtu a si.' },
      { title: 'Albert Einstein', description: 'Albert Einstein cu thiamnak lianpi a ngeimi mifim a si i, vawleicung thil sining (physics) lei ah thiamnak thar (relativity) tampi a hmuh. Vawleicung mifim hmingthang bik a si.' },
      { title: 'Steve Jobs', description: 'Steve Jobs nih iPhone le Apple kumpuita hna a chuahter i, tuchan teknawlawzi a thlen biktu pakhat a si. Muidawh tein thil sersiam thiamnak a kan hmuhter.' },
      { title: 'Bill Gates', description: 'Bill Gates nih kumpuita chung ttuannak (Windows) a chuahter i, kumpuita fawi tein hman khawnak a kan pek. Microsoft kumpani a thawktu a si.' },
      { title: 'Mark Zuckerberg', description: 'Mark Zuckerberg nih Facebook a chuahter i, vawleicung mi vialte pehtlaihnak fawi tein a sersiam. Social media thiamnak a hram a thawktu a si.' },
      { title: 'Ada Lovelace', description: 'Ada Lovelace cu kumpuita tlam (program) a tialtu hmasa bik a si i, kumpuita thiamnak ah nu hna zong an biapi tuk ti a hmuhter. Kumpuita thluak (logic) a hmu hmasa bik.' },
      { title: 'Alan Turing', description: 'Alan Turing cu kumpuita thiamnak a hram a thawktu a si i, kumpuita nih khua a ruah khawnak (Artificial Intelligence) lei zong a hmu hmasa bik.' },
      { title: 'Nikola Tesla', description: 'Nikola Tesla nih pehtlaihmi mei (AC electricity) a chuahter i, tuchan kan hmanmi mei vialte hi a hram a thawktertu a si. Mei hri um lo tein kuat khawnak zong a rak i zuam.' },
      { title: 'Galileo Galilei', description: 'Galileo nih vanzohnak (telescope) a chuahter i, van cung thil hna kha ttha tein kan hmuh khawnak lam a sersiam. Vawlei nih ni a vel ti a hmu hmasa bikmi pakhat a si.' },
      { title: 'Leonardo da Vinci', description: 'Leonardo cu thil tampi a chuahtertu le hmanthlak thiam a si i, mifim lianpi pakhat a si. Vanlawng le ralkap hriamnam hna zong hlanlio tein a rak suai tawn.' },
      { title: 'Johannes Gutenberg', description: 'Johannes Gutenberg nih cachuahnak seh (printing press) a chuahter i, ca fawi tein chuah khawnak le cawnnak a sersiam. Hi nih hin Bible le ca dang tampi vawleipia phanhter a bawmh.' },
      { title: 'Brothers Grimm', description: 'Brothers Grimm unau cu tuanbia (fairy tales) tialtu hmingthang an si i, vawleicung ngakchia vialte caah tuanbia dawh (entatnak: Cinderella) tampi an tial.' }
    ],
    questions: [
      { question: 'Mei-inn (Light bulb) a chuahtertu cu ahni dah a si?', options: ['Isaac Newton', 'Thomas Edison', 'Steve Jobs'], answer: 1 },
      { question: 'Vanlawng (Airplane) a chuahtertu cu ahni dah an si?', options: ['Wright Brothers', 'James Watt', 'Karl Benz'], answer: 0 },
      { question: 'Vawlei dawtnak (Gravity) a hmuhtu cu ahni dah a si?', options: ['Albert Einstein', 'Marie Curie', 'Isaac Newton'], answer: 2 }
    ]
  },
  VITAMINS: {
    title: 'Vitamin le Taksa Ngandamnak (Vitamins & Health)',
    icon: React.createElement(Zap, { className: "w-8 h-8 text-orange-500" }),
    entries: [
      { title: 'Vitamin A', description: 'Vitamin A cu mit caah a ttha bik i, zan ah thil hmuh khawnak a bawmh. Rawl hring le rawl sen (entatnak: gaza) hna ah a tam bik i vun ngandamnak zong a bawmh.' },
      { title: 'Vitamin B', description: 'Vitamin B nih taksa thawnnak a kan pek i, kan thluak le kan hri hna rianttuannak a bawmh hna. Rawl hrawhpiaknak le thi tthat nakhnga zong a biapi tuk.' },
      { title: 'Vitamin C', description: 'Vitamin C nih zawtnak a kan kham i, kan vun le kan hma dam rannak a bawmh. Thingthei thur (entatnak: huanthli) hna ah a tam bik i ruh le ha caah zong a ttha.' },
      { title: 'Vitamin D', description: 'Vitamin D cu ruh le ha caah a ttha bik i, niceu in fawi tein kan hmuh khawh. Hi vitamin nih calcium kha taksa chungah a luhter tawn.' },
      { title: 'Vitamin E', description: 'Vitamin E cu vun caah a ttha i, taksa chung i a tthalo mi hna kha a thiangter hna. Cells hna a hrawk khawhmi thil in a kan humhim.' },
      { title: 'Calcium', description: 'Calcium nih ruh le ha a hrawngter i a fehter. Hnawi le thil dang tampi ah a um i, sa (muscles) rianttuannak caah zong a herh.' },
      { title: 'Iron', description: 'Iron cu thi caah a biapi tuk i, taksa pumpi ah oxygen phurhnak a bawmh. Iron a tlawm ahcun taksa a thazaang a tlawm i a lennak a chuak tawn.' },
      { title: 'Zinc', description: 'Zinc nih hma a damter rannak a bawmh i, kan taksa i zawtnak kham khawnak (immune system) a fehter. Tthannak le tawt hngalhnak caah zong a herh.' },
      { title: 'Potassium', description: 'Potassium cu lung caah a ttha i, taksa chung i ti a tlamtlin khawnak a bawmh. Hri le sa rianttuannak zong a tlamtlinter tawn.' },
      { title: 'Magnesium', description: 'Magnesium nih sa (muscles) le hri hna rianttuannak a bawmh hna i, lung zong a fehter. Thawnnak chuahtertu zong a si.' },
      { title: 'Iodine', description: 'Iodine nih hrawngphu (goiter) zawtnak a kham i, taksa tthannak le thluak tthan nakhnga caah a biapi tuk. Cite chungah telh tawn a si.' },
      { title: 'Protein', description: 'Protein nih taksa a hrawngter i a kan tthanter. Sa, nga, titthe le pe hna ah a tam bik i, taksa i a hrawkmi hmun hna sersiam tthannak caah a herh.' },
      { title: 'Vitamin K', description: 'Vitamin K nih thi a khalter i, hma kan i tuah tikah thi a dih tuknak in a kan kham. Hnahhring rawl hna ah a tam bik.' },
      { title: 'Sodium', description: 'Sodium nih taksa chung ti a tlamtlinter i, hri hna rianttuannak a bawmh hna. Cite chungah a tam bik i, tam tuk din ahcun lung caah a tthalo.' },
      { title: 'Phosphorus', description: 'Phosphorus nih ruh le ha a fehter i, taksa thawnnak chuahtertu zong a si. Calcium he ttuan ttin in ruh an fehter.' },
      { title: 'Fiber', description: 'Fiber nih cunlei rian a bawmh i, rawl a hrawh rannak le ek fawi tein chuahnak a bawmh. Thingthei le hnahhring rawl ah a tam bik.' },
      { title: 'Carbohydrates', description: 'Carbohydrates nih taksa thawnnak (energy) a kan pek i, buh, sang le thil dang ah a tam bik. Taksa caah thawnnak hrampi a si.' },
      { title: 'Sat (Fats)', description: 'Sat nih taksa lumnak le thawnnak a khong i, kan taksa chung i a biapi bikmi hmun hna a humhim. Vitamin a cheu hna taksa chung luhtertu zong a si.' },
      { title: 'Ti (Water)', description: 'Ti cu taksa caah a biapi bikmi a si i, taksa chung i a tthalo mi vialte chuahtertu a si. Taksa lumnak tlamtlintertu le pehtlaihnak hna a nemtertu a si.' },
      { title: 'Electrolytes', description: 'Electrolytes nih taksa chung thawnnak a tlamtlinter i, taksa sawmnak kan tuah tikah a biapi tuk. Sodium, potassium le calcium hna hi an si.' },
      { title: 'Antioxidants', description: 'Antioxidants nih taksa cells hna kha a humhim hna i, zawtnak le upat rannak in a kan kham. Thingthei le hnahhring rawl ah an tam bik.' },
      { title: 'Probiotics', description: 'Probiotics nih cun chungah a tthami bacteria a chuahter hna i, ngandamnak a bawmh. Hnawi-thur (yogurt) hna ah an tam bik.' }
    ],
    questions: [
      { question: 'Mit caah a ttha bikmi vitamin cu zeidah a si?', options: ['Vitamin A', 'Vitamin C', 'Vitamin D'], answer: 0 },
      { question: 'Ruh le ha a fehtertu cu zeidah a si?', options: ['Iron', 'Calcium', 'Zinc'], answer: 1 },
      { question: 'Vitamin D cu zeika in dah fawi tein kan hmuh khawh?', options: ['Ti chung in', 'Ni-ceu in', 'Thli chung in'], answer: 1 }
    ]
  },
  UNIVERSE: {
    title: 'Ni le Thlaphal le Van lei Hngalhnak (Universe & Space)',
    icon: React.createElement(Sun, { className: "w-8 h-8 text-yellow-600" }),
    entries: [
      { title: 'Ni (Sun)', description: 'Ni hi vawleicung thil nung vialte caah thawnnak (energy) a petu a si. Ni hi arfi (star) pakhat a si i, vawlei nakin a lian deuh tuk. Ni hi a lum tuk caah a hram ahcun thil nung pakhat hmanh an nung kho lo.' },
      { title: 'Thla (Moon)', description: 'Thla hi vawlei i a satellite a si i, zan ah a ceu tawn. Thla cungah hin thli le ti a um lo caah thil nung an nung kho lo. Thla nih hin rili ti a sannak le a tthiamnak (tides) zong a hruai tawn.' },
      { title: 'Jupiter', description: 'Jupiter cu vawleicung thlaphal (planets) vialte lakah a lian bikmi a si. Jupiter hi gas in tuahmi a si i, vawlei nakin voi 1,300 leng a lian deuh. Jupiter nih hin thla (moons) 90 leng a ngei.' },
      { title: 'Saturn', description: 'Saturn cu a velchum ah thil dawh (rings) a ngeimi thlaphal a si. Hi thil hna hi tikhal le lung hmete hna in tuahmi an si i, Saturn zong hi gas in tuahmi a si ve.' },
      { title: 'Mars', description: 'Mars cu a senmi thlaphal (Red Planet) tiah an auh tawn i, vawlei he an sining aa lo bikmi a si. Mars cungah hin hlanlio ah ti a rak um tiah mifim hna nih an zumh.' },
      { title: 'Venus', description: 'Venus cu vawleicung thlaphal vialte lakah a lum bikmi a si i, zan ah a ceu bikmi zong a si. Venus hi vawlei he an i lo tuk caah "Vawlei i a farnu" tiah an auh tawn.' },
      { title: 'Mercury', description: 'Mercury cu ni (sun) he a naih bikmi thlaphal a si i, a hme bikmi zong a si. Mercury ahcun chun ah a lum tuk i zan ah a kik tuk tawn.' },
      { title: 'Uranus', description: 'Uranus cu a kik tukmi thlaphal a si i, a hringdu (blue-green) in a hmuh khawh. Uranus hi a tlu (sideways) in a mer tawnmi thlaphal pakhat a si.' },
      { title: 'Neptune', description: 'Neptune cu ni (sun) in a hlat bikmi thlaphal a si i, thlihrang a tthang biknak hmun a si. Neptune zong hi a hringdu (blue) in a dawh tukmi a si.' },
      { title: 'Pluto (Pluto)', description: 'Pluto cu hlan ah thlaphal (planet) tiah an rak auh tawn i, tuchan ahcun "dwarf planet" tiah an auh cang. Pluto hi a hme tuk i a kik tukmi hmun a si.' }
    ],
    questions: [
      { question: 'Thlaphal vialte lakah a lian bikmi cu zeidah a si?', options: ['Mars', 'Jupiter', 'Saturn'], answer: 1 },
      { question: 'Ni-ceu nih vawlei phanh caah minit zeizat dah a rau?', options: ['5 minit', '8 minit', '12 minit'], answer: 1 },
      { question: 'A senmi thlaphal (Red Planet) tiah an auhmi cu zeidah a si?', options: ['Mars', 'Venus', 'Neptune'], answer: 0 }
    ]
  },
  SUPERLATIVES: {
    title: 'Vawleicung ah A Lian le A Sang Bik hna (World Records)',
    icon: React.createElement(Trophy, { className: "w-8 h-8 text-amber-500" }),
    entries: [
      { title: 'Everest Tlang (Mount Everest)', description: 'Everest Tlang (Mount Everest) cu vawleicung tlang a sang bik a si i, a sannak hi pe 29,032 a si. Nepal le China ramri ah a um i, tlang cungah hin thli a tlawm i a kik tuk tawn.' },
      { title: 'Nile Tiva (Nile River)', description: 'Nile Tiva (Nile River) cu vawleicung tiva a sau bik a si i, Africa ram tampi a paltlang hna. Hi tiva hi hlanlio Egypt mi hna caah nunnak hrampi a rak si.' },
      { title: 'Pasifik Rili (Pacific Ocean)', description: 'Pasifik Rili (Pacific Ocean) cu vawleicung rili a lian bik le a thuk bik a si. Vawleipia i a cheu thum ah a cheu pakhat hi Pasifik rili nih a khuh.' },
      { title: 'Sahara Thlaler (Sahara Desert)', description: 'Sahara Thlaler (Sahara Desert) cu vawleicung thlaler a lum bik le a lian bik a si. Africa ram chaklei ah a um i, a kauh hi US ram he an i tluk hrawng a si.' },
      { title: 'Vui Lian (Blue Whale)', description: 'Vui Lian (Blue Whale) cu vawleicung saram a lian bik a si i, a sawhnak hi pe 100 leng a si. Hi saram hi nga a si lo i, sahnawidawt (mammal) a si.' },
      { title: 'Vatican City', description: 'Vatican City cu vawleicung ram a hme bik a si i, Italy ram Rome khua chungah a um. Hi ram hi Pope umnak hmun a si i, mi 1,000 hrawng lawng an nung.' },
      { title: 'Russia', description: 'Russia cu vawleicung ram a lian bik a si i, Europe le Asia continent pahnih a khuh hna. Russia ram kauh hi vawlei i a vawlei (land) vialte i a cheu pakhat hrawng a si.' },
      { title: 'China', description: 'China cu vawleicung mi a tam biknak ram a si i, mi 1.4 billion leng an nung. China ram hi thil chuah rannak le teknawlawzi lei ah a tthang bikmi ram pakhat a si.' },
      { title: 'Angel Falls', description: 'Angel Falls cu vawleicung tiva a tlaknak (waterfall) a sang bik a si i, Venezuela ram ah a um. A sannak hi pe 3,212 a si i, van in a tla bantuk a si.' },
      { title: 'Amazon Ramlak (Amazon Rainforest)', description: 'Amazon Ramlak (Amazon Rainforest) cu vawleicung ramlak a lian bik a si i, South America ah a um. Hi ramlak nih hin vawleicung oxygen a cheu hnih hrawng a chuahter tawn.' },
      { title: 'Cheetah', description: 'Cheetah cu vawleicung saram a tli rang bik a si i, suimilam pakhat ah meng 70 leng a tli khawh. Cheetah hi a tli rang tuk caah saram dang fawi tein a tlai khawh hna.' },
      { title: 'Vui (Elephant)', description: 'Vui cu vawlei cung saram a lian bik a si i, a thazaang a tthawng tuk. Vui hi an fim tuk i, an thil hngalhmi (memory) a ttha tuk tawn.' },
      { title: 'Giraffe', description: 'Giraffe cu vawleicung saram a sang bik a si i, a hrawng a sau tuk caah thingkung sangpi i a ummi hnah hna fawi tein a ei khawh.' },
      { title: 'Ostrich', description: 'Ostrich cu vawleicung vate a lian bik a si i, a zuang kho lo nain a tli a rang tuk. Ostrich nih hin vawleicung vate ti a lian bikmi a thlah tawn.' },
      { title: 'Hum (Tiger)', description: 'Hum cu vawleicung sakei (cat family) lakah a lian bik a si i, a thazaang a tthawng tuk. Hum hi an i lo lo i, an vun cung i a ummi rin hna hi an i lo cio lo.' },
      { title: 'Peregrine Falcon', description: 'Peregrine Falcon cu vawleicung vate a zuang rang bik a si i, a tlak tikah suimilam pakhat ah meng 240 leng a zuang khawh.' },
      { title: 'Komodo Dragon', description: 'Komodo Dragon cu vawleicung laiking (lizard) a lian bik a si i, Indonesia ram ah an um. Anmah hi an hriam tuk i, an chil chungah tur (venom) a um tawn.' },
      { title: 'Giant Sequoia', description: 'Giant Sequoia cu vawleicung thingkung a lian bik a si i, California ram ah an um. Hi thingkung hna hi kum 3,000 leng an nung khawh.' },
      { title: 'Green Anaconda', description: 'Green Anaconda cu vawleicung rul a rit bik a si i, South America rili le tiva hna ah an um. Hi rul hi a rit tuk caah ti chungah a tli a rang deuh tawn.' },
      { title: 'Honey Badger', description: 'Honey Badger cu vawleicung saram a riral bik tiah an auh tawn i, saram lianpipi zong a ttih hna lo. A vun a feh tuk caah saram dang nih seh a har tawn.' },
      { title: 'Bee Hummingbird', description: 'Bee Hummingbird cu vawleicung vate a hme bik a si i, Cuba ram ah a um. A hmet hi khuate (bee) tluk lawng a si i, a thla a hlap a rang tuk.' },
      { title: 'Marmot', description: 'Marmot cu vawleicung saram a hngilh sau bik tiah an zumh i, thlasik chung vialte an i dinh tawn. Hi nih hin an thawnnak a khong tawn.' }
    ],
    questions: [
      { question: 'Vawleicung ah a sang bikmi tlang cu zeidah a si?', options: ['Andis', 'Everest', 'Victoria Falls'], answer: 1 },
      { question: 'Vawleicung ah a sau bikmi tiva cu zeidah a si?', options: ['Nile', 'Amazon', 'Tiva lian'], answer: 0 },
      { question: 'Vawleicung ah a lian bikmi saram cu zeidah a si?', options: ['Satngaw', 'Blue Whale', 'Vui'], answer: 1 },
      { question: 'A ran bikmi saram cu zeidah a si?', options: ['Cheetah', 'Sakei', 'Vui'], answer: 0 },
      { question: 'A mi tam biknak ram cu zeidah a si?', options: ['USA', 'China', 'India'], answer: 2 }
    ]
  },
  WONDERS: {
    title: 'Vawleicung Thil Mak le Hmun Hmingthang (World Wonders)',
    icon: React.createElement(Mountain, { className: "w-8 h-8 text-emerald-600" }),
    entries: [
      { title: 'China Ralhau Lian (Great Wall of China)', description: 'China Ralhau Lian (Great Wall of China) cu vawleicung ralhau a sau bik a si i, meng 13,000 leng a sau. China ram humhimnak caah hlanlio siangpahrang hna nih an rak sakmi a si.' },
      { title: 'Petra', description: 'Petra cu Jordan ram i a ummi lung lianpipi chungah tuahmi khua a si. Hi hmun hi "Rose City" tiah an auh tawn i, lung cungah muidawh tein an rak suai i an rak tialmi a si.' },
      { title: 'Colosseum', description: 'Colosseum cu Italy ram Rome khua i a ummi hlanlio lentecelhnak hmun lianpi a si. Hi hmun ahcun hlanlio ralkap (gladiators) hna an rak i phut tawn i, mi 50,000 leng an rak thu kho.' },
      { title: 'Chichen Itza', description: 'Chichen Itza cu Mexico ram i a ummi hlanlio Maya mi hna i an biakinn lianpi a si. Hi hmun hi thil hngalhnak le van zohnak (astronomy) lei ah a rak hmingthang tukmi a si.' },
      { title: 'Machu Picchu', description: 'Machu Picchu cu Peru ram tlang cungah a ummi hlanlio Inca mi hna i an khua a si. Hi khua hi tlang sangpi ah a um caah hmuh a har tuk i, "Lost City of the Incas" tiah an auh tawn.' },
      { title: 'Taj Mahal', description: 'Taj Mahal cu India ram i a ummi lungrang (white marble) in tuahmi biakinn dawh a si. Siangpahrang Shah Jahan nih a nupi dawtnak hmelchunhnak caah a rak sakmi a si.' },
      { title: 'Christ the Redeemer', description: 'Christ the Redeemer cu Brazil ram Rio de Janeiro khua i a ummi Jesuh hmanthlak lianpi a si. Tlang cungah a um i, khua pumpi a zoh bantuk a si i humhimnak hmelchunhnak a si.' },
      { title: 'Great Pyramid of Giza', description: 'Great Pyramid of Giza cu Egypt ram i a ummi hlanlio siangpahrang (Pharaoh) hna thlan a si. Lung lianpipi in tuahmi a si i, hlanlio thil mak 7 lakah a nung zungzalmi pakhat lawng a si.' },
      { title: 'Great Barrier Reef', description: 'Great Barrier Reef cu Australia rili chung i a ummi vawleicung coral reef a lian bik a si. Van in zoh ahcun a hmuh khawh i, thil nung lianpipi hna nih an tuahmi a si.' },
      { title: 'Grand Canyon', description: 'Grand Canyon cu US ram Arizona ah a ummi tiva nih a hrawkmi lungkau lianpi a si. Colorado tiva nih kum million tampi chung a hrawk caah a chuakmi thil mak a si.' },
      { title: 'Victoria Falls', description: 'Victoria Falls cu Africa ram Zambia le Zimbabwe ramri ah a ummi tiva tlaknak lianpi a si. A awn a tthang tuk caah "Mosi-oa-Tunya" (thli a chuahtermi khu) tiah an auh tawn.' },
      { title: 'Aurora Borealis', description: 'Aurora Borealis (Northern Lights) cu vawleicung a chaklei ah a chuakmi van cung ceuna dawh a si. Ni in a rami thazaang le vawlei thli an i tawngh caah a chuakmi a si.' },
      { title: 'Mount Fuji', description: 'Mount Fuji cu Japan ram i a ummi tlang hmingthang bik a si i, a muidawh tuk caah Japan ram hmelchunhnak a si. Hi tlang hi mitlang (volcano) a si i, a cungah tikhal a um zungzal.' },
      { title: 'Amazon River', description: 'Amazon River cu vawleicung tiva a kau bik le ti a tam biknak a si. South America ramlak kaupi chungah a luang i, saram le thingkung tampi an nung.' },
      { title: 'Galapagos Islands', description: 'Galapagos Islands cu Ecuador ram rili chung i a ummi tikulh hna an si. Hi hmun ahcun vawleicung hmun dang ah a um lomi saram (entatnak: tlangvaw lian) tampi an nung.' }
    ],
    questions: [
      { question: 'Great Wall of China cu zeicah an tuah?', options: ['Ral humhimnak caah', 'Pangpar cin-nak caah', 'Ti khon-nak caah'], answer: 0 },
      { question: 'Eiffel Tower cu zeika ram hmelchunhnak dah a si?', options: ['Germany', 'USA', 'France'], answer: 2 },
      { question: 'Pyramids of Egypt cu zeidah an si?', options: ['Siangpahrang thlan', 'Biakinn', 'Zung lianpipi'], answer: 0 },
      { question: 'Machu Picchu cu zeika ram ah dah a um?', options: ['Peru', 'Brazil', 'India'], answer: 0 },
      { question: 'Great Barrier Reef cu zeika ah dah a um?', options: ['Tlang cungah', 'Rili chungah', 'Thlaler ah'], answer: 1 }
    ]
  },
  LANDMARKS: {
    title: 'Vawleicung Hmun Hmingthang hna (Famous Landmarks)',
    icon: React.createElement(MapPin, { className: "w-8 h-8 text-rose-600" }),
    entries: [
      { title: 'Eiffel Tower', description: 'Eiffel Tower cu France ram Paris khua i a ummi thir in tuahmi tlang sangpi a si. Paris khua hmelchunhnak a si i, vawleicung mi tampi nih an zoh tawnmi a si.' },
      { title: 'Statue of Liberty', description: 'Statue of Liberty cu US ram New York khua i a ummi zalonnak hmelchunhnak hmanthlak lianpi a si. France ram nih US ram zalonnak kum 100 tlinnak laksawng ah a rak pekmi a si.' },
      { title: 'Big Ben', description: 'Big Ben cu UK ram London khua i a ummi suimilam tlang lianpi a si. London khua hmelchunhnak a si i, a awn a tthang tuk caah hlatpi in theih khawh a si.' },
      { title: 'Sydney Opera House', description: 'Sydney Opera House cu Australia ram Sydney khua i a ummi muidawh tein tuahmi pwe-inn a si. Rili kamah a um i, vanlawng thla (sails) bantuk in suaimi a si.' },
      { title: 'Burj Khalifa', description: 'Burj Khalifa cu Dubai (UAE) i a ummi vawleicung inn a sang bik a si. A sannak hi pe 2,717 a si i, van cung phanh a si bantuk a si.' },
      { title: 'Golden Gate Bridge', description: 'Golden Gate Bridge cu US ram San Francisco i a ummi hlei (bridge) hmingthang a si. A senmi mui a ngei i, rili cungah muidawh tein a um tawn.' },
      { title: 'Leaning Tower of Pisa', description: 'Leaning Tower of Pisa cu Italy ram i a ummi a awnmi tlang a si. Sak lio tein a awnmi a si nain a tlu kho lo i, vawleicung thil mak pakhat a si.' },
      { title: 'Acropolis of Athens', description: 'Acropolis of Athens cu Greece ram i a ummi hlanlio biakinn le khua a si. Tlang cungah a um i, hlanlio mifim hna an rak umnak hmun a si.' },
      { title: 'Angkor Vat', description: 'Cambodia ram i a ummi, hlanlio biakinn lianpi a si i, vawleicung ah biakinn lian bik pakhat a si. Lung cungah muidawh tein an rak suai i an rak tialmi a si.' },
      { title: 'White House', description: 'USA President a umnak hmun a si i, vawleicung thil tthalo le ttha hna biakhiahnak hmun a si. Washington D.C. khua ah a um i, humhimnak a feh tukmi hmun a si.' }
    ],
    questions: [
      { question: 'Statue of Liberty cu zeika khua ah dah a um?', options: ['London', 'Paris', 'New York'], answer: 2 },
      { question: 'White House cu ahni dah a umnak hmun a si?', options: ['USA President', 'Siangpahrang', 'Mifim hna'], answer: 0 }
    ]
  },
  ABBREVIATIONS: {
    title: 'Biafang Tawi le Hngalhnak hna (Common Abbreviations)',
    icon: React.createElement(Type, { className: "w-8 h-8 text-indigo-600" }),
    entries: [
      { title: 'U.N.O (United Nations Organisation)', description: 'Vawleicung ram vialte lungrualnak le daihnak caah ttuantu phu a si i, vawleicung ram vialte an tel. Hi phu nih hin raldonak a kham i ram kip bawmhchanhnak rian a ttuan tawn.' },
      { title: 'W.H.O (World Health Organisation)', description: 'Vawleicung ngandamnak lei a zohtu phu a si i, zawtnak le ngandamnak lei ah hruaitu a si. Zawtnak thar a chuah tikah vawleipia mi hna humhimnak dingah lam a hmuhsertu a si.' },
      { title: 'W.W.W (World Wide Web)', description: 'Intanet cungah thil kan kawlnak le kan hmuh khawnak dingah hmanmi lam a si. Hi thiamnak nih hin vawleicung thil hngalhnak vialte fawi tein hmuh khawnak a pek.' },
      { title: 'A.I.R (All India Radio)', description: 'India ram pumpi redio a si i, hlanlio ahcun thil hngalhnak hmuhnak lam biapi bik a si. Tuchan tiangah thil hngalhnak phurhnak ah an hman zungzal.' },
      { title: 'P.I.N (Postal Index Number)', description: 'Ca kuatnak ah hmanmi nambat a si i, hmun kip fawi tein hmuh khawnak dingah hmanmi a si. Hi nambat nih hin ca kuat tikah a hmun fiang tein hmuh khawnak a bawmh.' },
      { title: 'UNESCO', description: 'Vawleicung cawnnak, sains le nungphung lei a bawmmi phu (United Nations Educational, Scientific and Cultural Organization) a si. Vawleicung hmun hmingthang hna humhimnak zong an ttuan.' },
      { title: 'UNICEF', description: 'Vawleicung ngakchia hna bawmhnak phu (United Nations Children\'s Fund) a si. Ngakchia hna rawl, cawnnak le ngandamnak caah vawleipia ah rian an ttuan.' },
      { title: 'NASA', description: 'USA ram van-lawng le space lei ttuantu phu (National Aeronautics and Space Administration) a si. Van cung thil hngalhnak le thlaphal dang kawlnak ah a biapi bikmi an si.' },
      { title: 'ATM', description: 'Tangka fawi tein chuah khawnak seh (Automated Teller Machine) a si. Bank phanh hau lo tein suimilam 24 chung tangka chuah khawnak a kan pek.' },
      { title: 'GPS', description: 'Hmun kip kawlnak le lam hmuhnak seh (Global Positioning System) a si. Satellite hman in kan umnak hmun le kan kalnak ding lam fiang tein a kan hmuhsertu a si.' },
      { title: 'RAM', description: 'Kumpuita chungah thil a ran nakhnga hmanmi (Random Access Memory) a si. RAM a tam deuh poh ah kumpuita asiloah phone a rang deuh i rian tampi ttuan ttin khawh a si.' },
      { title: 'CPU', description: 'Kumpuita thluak (Central Processing Unit) tiah auhmi a si. Kumpuita chung i a ummi nawlpeknak le rianttuannak vialte hi CPU nih a hruai hna.' },
      { title: 'Wi-Fi', description: 'Hri um lo tein intanet pehtlaihnak (Wireless Fidelity) a si. Radio waves hman in kumpuita le phone hna intanet he fawi tein a pehtlaihter hna.' },
      { title: 'SIM', description: 'Phone chungah hmanmi nambat (Subscriber Identity Module) a si. Hi card hmete nih hin kan phone nambat le kan sining vialte a ken i pehtlaihnak a kan tuahter.' },
      { title: 'PDF', description: 'Kumpuita asiloah phone in zoh khawhmi ca (Portable Document Format) a si. Hi format hi a mui a thleng lo caah ca kuatnak le zohnak ah a ttha bik.' }
    ],
    questions: [
      { question: 'W.H.O cu zeidah a si?', options: ['Ngandamnak lei phu', 'Lothlo lei phu', 'Rian ttuannak phu'], answer: 0 },
      { question: 'U.N.O rian biapi bik cu zeidah a si?', options: ['Rawl chuan-nak', 'Daihnak le lungrual-nak', 'Mawtaw sersiam-nak'], answer: 1 },
      { question: 'ATM cu zeicah kan hman?', options: ['Tangka chuah caah', 'Rawl ei caah', 'Lam tlin caah'], answer: 0 },
      { question: 'GPS cu zeicah kan hman?', options: ['Mei chuah caah', 'Lam kawl caah', 'Ti din caah'], answer: 1 }
    ]
  },
  CHIN_GK: {
    title: 'Laimi le Chin Ram lei Hngalhnak (Chin General Knowledge)',
    icon: React.createElement(History, { className: "w-8 h-8 text-amber-700" }),
    entries: [
      { title: 'Chin National Day (Laimi Ni)', description: 'February 20 hi Laimi Ni a si. 1948 ah Falam khua ah Laimi hruaitu hna nih ualnak (feudal system) hrawh i mipi ualnak (democracy) thlan dingah biakhiahnak an rak tuahmi a si. Hi ni hi Laimi kan zalonnak le kan lungrualnak hmelchunhnak a si.' },
      { title: 'Panglong Agreement (Panglong Hnatlaknak)', description: '1947 ah Laimi hruaitu hna (entatnak: Vumthu Maung) nih Kawlram zalonnak hmuh ttin khawnak dingah hnatlaknak an rak tuah. Hi hnatlaknak nih hin miphun hna i tlukrualnak le mah tein ualnak (federalism) hram a rak sersiam.' },
      { title: 'Chin Hills Regulation 1896', description: 'Mirang (British) chan lio i Chin ram ualnak dingah tuahmi upadi a si. Hi nih hin Laimi nungphung, biakhiahnak le ualnak kha hlanlio sining tein hmunhter a rak bawmh i Mirang hna nih Laimi sining an rak upatnak a si.' },
      { title: 'Missionary hna Rian (Early Education)', description: 'Arthur le Laura Carson hna cu Hakha ah missionary rian a ttuan hmasa bikmi an si. Anmah nih cawnnak (education) le ngandamnak lei thiamnak hram an rak thawkpiak hna i, Laimi ca (script) zong an rak sersiam.' },
      { title: 'Chin Hills (Chin Tlangram)', description: 'Chin ram cu tlang tampi a umnak hmun a si. A sang bikmi tlang cu Khonumthung (Mount Victoria) a si i, pe 10,200 hrawng a sang. Chin ram hi a muidawh tuk i thli thiang a tamnak hmun a si.' },
      { title: 'Chin Dictionary (Laimi Holh)', description: 'Laimi holh hi a thuk i a dawh tukmi a si. Hakha holh hi Chin ram chungah mi tam bik nih an hmanmi holh pakhat a si i, pehtlaihnak caah a biapi tukmi holh a si.' },
      { title: 'Chin Human Rights (Laimi Covo)', description: 'Laimi hna kan covo le kan zalonnak humhim ding hi a biapi tuk. CHRO bantuk phu hna nih vawleipia ah Laimi sining le kan tonmi hna an langhter tawn i humhimnak an ttuan.' },
      { title: 'Laimi Lungrualnak (Unity)', description: 'Laimi kan si ti hngalhnak nih lungrualnak a kan pek. Ram kip ah kan um zongah Laimi kan si ti hngalhnak nih a kan pehtlaihter zungzal i, miphun pakhat kan sinak a fehter.' },
      { title: 'Hlanlio Ualnak (Governance)', description: 'Hlanlio ahcun khua khat ah Bawi (Chief) an rak um i, khua mipi kha ttha tein an rak hruai hna. Hi sining hi 1948 ah mipi ualnak (democracy) ah thlen a rak si i mipi nawl a sang deuh cang.' },
      { title: 'Chin Ram Hmelchunhnak (Identity)', description: 'Chin ti hi kan ram le kan miphun hmelchunhnak a si. Hi nih hin vawleicung ah miphun pakhat kan si ti a kan hngalhter i, kan pupa hna sinin kan hmuhmi hming a si.' },
      { title: 'Pau Cin Hau (Script & Religion)', description: 'Pau Cin Hau cu Laimi hna caah ca (script) le biaknak thar a rak chuahtertu a si. Laimi hna kha mah tein ca ngeih khawnak le Pathian pakhat biaknak lam a rak hmuhter hna.' },
      { title: 'Chin-Lushai Expedition (1889-1890)', description: 'Mirang (British) hna nih Chin ram lak dingah ralkap an rak thlah lio ah Laimi ralttha tampi nih an rak doh hna. Hi nih hin Laimi kan raltthanak le kan ram kan dawtnak a langhter.' },
      { title: 'Chin State Day (January 3)', description: 'January 3 hi Chin State Day a si. 1974 ah Chin ram kha "State" pakhat in hmuhmi ni a si i, kan ram caah a biapi tukmi ni a si i mah tein ualnak hmelchunhnak a si.' }
    ],
    questions: [
      { question: 'Chin National Day (Laimi Ni) cu ni-thla zeizat dah a si?', options: ['January 4', 'February 12', 'February 20'], answer: 2 },
      { question: 'Chin ram ah a sang bikmi tlang cu zeidah a si?', options: ['Mount Everest', 'Khonumthung (Mt. Victoria)', 'Zingmet'], answer: 1 },
      { question: 'Panglong Agreement (1947) ah a telmi Laimi hruaitu cu ahni dah a si?', options: ['Vumthu Maung', 'Thomas Edison', 'Steve Jobs'], answer: 0 },
      { question: 'Hakha ah missionary rian a ttuan hmasa bikmi cu ahni dah an si?', options: ['Brothers Grimm', 'Arthur le Laura Carson', 'Wright Brothers'], answer: 1 },
      { question: 'Chin State Day cu ni-thla zeizat dah a si?', options: ['January 3', 'February 20', 'March 2'], answer: 0 }
    ]
  }
};
