(()=>{"use strict";const e={clubs:[{name:"Bayern Munchen",imageNum:"0"},{name:"Manchester City",imageNum:"1"},{name:"Liverpool",imageNum:"2"},{name:"Chelsea",imageNum:"3"},{name:"Barcelona",imageNum:"4"},{name:"Real Madrid",imageNum:"5"},{name:"PSG",imageNum:"6"},{name:"Juventus",imageNum:"7"},{name:"Manchester United",imageNum:"8"},{name:"Atletico M",imageNum:"9"},{name:"Sevilla",imageNum:"10"},{name:"Tottenham Hotspur",imageNum:"11"},{name:"AS Roma",imageNum:"12"},{name:"Arsenal",imageNum:"13"},{name:"FC Porto",imageNum:"14"},{name:"Borussia Dortmund",imageNum:"15"},{name:"AFC Ajax",imageNum:"16"},{name:"RB Leipzig",imageNum:"17"},{name:"FC Shakhtar Donetsk",imageNum:"18"},{name:"Villarreal CF",imageNum:"19"},{name:"FC Salzburg",imageNum:"20"},{name:"Olympique Lyonnais",imageNum:"21"},{name:"SSC Napoli",imageNum:"22"},{name:"Atalanta BC",imageNum:"23"},{name:"Inter",imageNum:"24"},{name:"FC Basel 1893",imageNum:"25"},{name:"SL Benfica",imageNum:"26"},{name:"Lazio",imageNum:"27"},{name:"Sporting",imageNum:"28"},{name:"Bayer Leverkusen",imageNum:"29"},{name:"SK Slavia Praha",imageNum:"30"},{name:"GNK Dinamo Zagreb",imageNum:"31"},{name:"Zenit",imageNum:"32"},{name:"Eintracht Frankfurt",imageNum:"33"},{name:"Valencia CF",imageNum:"34"},{name:"Club Brugge",imageNum:"35"},{name:"Olympiacos FC",imageNum:"36"},{name:"SC Braga",imageNum:"37"},{name:"AC Milan",imageNum:"38"},{name:"Newcastle",imageNum:"39"},{name:"Crvena zvezda",imageNum:"40"},{name:"BSC Young Boys",imageNum:"41"},{name:"Rangers FC",imageNum:"42"},{name:"F.C. Copenhagen",imageNum:"43"},{name:"Beşiktaş JK",imageNum:"44"},{name:"FC Lokomotiv Moskva",imageNum:"45"},{name:"PFC CSKA Moskva",imageNum:"46"},{name:"Olympique de Marseille",imageNum:"47"},{name:"Celtic FC",imageNum:"48"},{name:"FC Viktoria Plzeň",imageNum:"49"},{name:"LASK",imageNum:"50"},{name:"PSV Eindhoven",imageNum:"51"},{name:"FC Krasnodar",imageNum:"52"},{name:"Stade Rennais FC",imageNum:"53"},{name:"İstanbul Başakşehir",imageNum:"54"},{name:"KAA Gent",imageNum:"55"},{name:"Feyenoord",imageNum:"56"},{name:"Qarabağ FK",imageNum:"57"},{name:"Galatasaray AŞ",imageNum:"58"},{name:"TSG 1899 Hoffenheim",imageNum:"59"},{name:"VfL Wolfsburg",imageNum:"60"},{name:"Maccabi Tel-Aviv FC",imageNum:"61"},{name:"AZ Alkmaar",imageNum:"62"},{name:"FK Partizan",imageNum:"63"},{name:"Malmö FF",imageNum:"64"},{name:"Real Sociedad",imageNum:"65"},{name:"FC Sheriff Tiraspol",imageNum:"66"},{name:"LOSC Lille",imageNum:"67"},{name:"PFC Ludogorets",imageNum:"68"},{name:"Borussia Mönchengladbach",imageNum:"69"},{name:"FC Spartak Moskva",imageNum:"70"},{name:"FC Astana",imageNum:"71"},{name:"AEK Athens FC",imageNum:"72"},{name:"Molde FK",imageNum:"73"},{name:"West Ham",imageNum:"74"},{name:"Leicester City",imageNum:"75"},{name:"Wolverhampton",imageNum:"76"},{name:"Burnley",imageNum:"77"},{name:"Everton",imageNum:"78"},{name:"APOEL FC",imageNum:"79"},{name:"FCSB",imageNum:"80"},{name:"BATE Borisov",imageNum:"81"},{name:"CFR 1907 Cluj",imageNum:"82"},{name:"AS Monaco",imageNum:"83"},{name:"PAOK FC",imageNum:"84"},{name:"Zorya Luhansk",imageNum:"85"},{name:"KRC Genk",imageNum:"86"},{name:"FC Schalke 04",imageNum:"87"},{name:"Real Betis",imageNum:"88"},{name:"Granada CF",imageNum:"89"},{name:"Getafe CF",imageNum:"90"},{name:"RCD Espanyol",imageNum:"91"},{name:"Athletic Club",imageNum:"92"},{name:"FC Midtjylland",imageNum:"93"},{name:"Standard de Liège",imageNum:"94"},{name:"HNK Rijeka",imageNum:"95"},{name:"Rosenborg BK",imageNum:"96"},{name:"Hapoel",imageNum:"97"},{name:"SK Rapid Wien",imageNum:"98"},{name:"Apollon Limassol",imageNum:"99"},{name:"Torino",imageNum:"100"}],players:[{name:"L. Messi",imageNum:"0"},{name:"C. Ronaldo",imageNum:"1"},{name:"R. Lewandowski",imageNum:"2"},{name:"K. Mbappe",imageNum:"3"},{name:"Neymar Jr",imageNum:"4"},{name:"K. De Bruyne",imageNum:"5"},{name:"J. Oblak",imageNum:"6"},{name:"R. Lukaku",imageNum:"7"},{name:"V. van Dijk",imageNum:"8"},{name:"M. Neuer",imageNum:"9"},{name:"M. Salah",imageNum:"10"},{name:"N. Kanté",imageNum:"11"},{name:"Sergio Ramos",imageNum:"12"},{name:"T. Courtois",imageNum:"13"},{name:"Alisson",imageNum:"14"},{name:"E. Haaland",imageNum:"15"},{name:"L. Suárez",imageNum:"16"},{name:"S. Mané",imageNum:"17"},{name:"Bruno Fernandes",imageNum:"18"},{name:"K. Benzema",imageNum:"19"},{name:"Marquinhos",imageNum:"20"},{name:"Ederson",imageNum:"21"},{name:"M. Ter Stegen",imageNum:"22"},{name:"S. Agüero",imageNum:"23"},{name:"T. Müller",imageNum:"24"},{name:"J. Giménez",imageNum:"25"},{name:"D. Alaba",imageNum:"26"},{name:"M. Škriniar",imageNum:"27"},{name:"N. Süle",imageNum:"28"},{name:"J. Kimmich",imageNum:"29"},{name:"G. Donnarumma",imageNum:"30"},{name:"P. Aubameyang",imageNum:"31"},{name:"W. Ben Yedder",imageNum:"32"},{name:"Z. Ibrahimović",imageNum:"33"},{name:"L. Muriel",imageNum:"34"},{name:"Gerard Moreno",imageNum:"35"},{name:"E. Cavani",imageNum:"36"},{name:"Lautaro Martínez",imageNum:"37"},{name:"M. Depay",imageNum:"38"},{name:"J. Iličić",imageNum:"39"},{name:"L. Sané",imageNum:"40"},{name:"Á. Di María",imageNum:"41"},{name:"S. Gnabry",imageNum:"42"},{name:"J. Sancho",imageNum:"43"},{name:"P. Foden",imageNum:"44"},{name:"M. Rashford",imageNum:"45"},{name:"E. Hazard",imageNum:"46"},{name:"R. Sterling",imageNum:"47"},{name:"J. Grealish",imageNum:"48"},{name:"David Silva",imageNum:"49"},{name:"K. Havertz",imageNum:"50"},{name:"A. Gómez",imageNum:"51"},{name:"M. Mount",imageNum:"52"},{name:"F. Chiesa",imageNum:"53"},{name:"Mikel Oyarzabal",imageNum:"54"},{name:"F. Valverde",imageNum:"55"},{name:"N. Barella",imageNum:"56"},{name:"R. De Paul",imageNum:"57"},{name:"M. Sabitzer",imageNum:"58"},{name:"Saúl",imageNum:"59"},{name:"W. Ndidi",imageNum:"60"},{name:"M. Brozović",imageNum:"61"},{name:"J. Henderson",imageNum:"62"},{name:"Jorginho",imageNum:"63"},{name:"Carvajal",imageNum:"64"},{name:"A. Robertson",imageNum:"65"},{name:"L. Hernandez",imageNum:"66"},{name:"Jordi Alba",imageNum:"67"},{name:"A. Davies",imageNum:"68"},{name:"Piqué",imageNum:"69"},{name:"A. Laporte",imageNum:"70"},{name:"Thiago Silva",imageNum:"71"},{name:"S. Savić",imageNum:"72"},{name:"H. Maguire",imageNum:"73"},{name:"P. Gulácsi",imageNum:"74"},{name:"H. Lloris",imageNum:"75"},{name:"David De Gea",imageNum:"76"},{name:"Y. Sommer",imageNum:"77"},{name:"D. Zapata",imageNum:"78"},{name:"R. Jiménez",imageNum:"79"},{name:"A. Lacazette",imageNum:"80"},{name:"J. Vardy",imageNum:"81"},{name:"Gabriel Jesus",imageNum:"82"},{name:"A. Belotti",imageNum:"83"},{name:"Iago Aspas",imageNum:"84"},{name:"J. Lingard",imageNum:"85"},{name:"Richarlison",imageNum:"86"},{name:"O. Dembélé",imageNum:"87"},{name:"D. Tadić",imageNum:"88"},{name:"Diogo Jota",imageNum:"89"},{name:"L. Ocampos",imageNum:"90"},{name:"P. Zieliński",imageNum:"91"},{name:"P. Coutinho",imageNum:"92"},{name:"C. Eriksen",imageNum:"93"},{name:"M. Ødegaard",imageNum:"94"},{name:"Isco",imageNum:"95"},{name:"N. Fekir",imageNum:"96"},{name:"F. Kostić",imageNum:"97"},{name:" Y. Carrasco",imageNum:"98"},{name:"I. Rakitić",imageNum:"99"},{name:"T. Kroos",imageNum:"100"}]};let a=[null,null,null,null,null,null,null,null,null,null],m=[null,null,null,null,null,null,null,null,null,null];const t=document.querySelector(".volume-scale"),n=document.querySelector("#muteCheck"),i=document.querySelector(".minutes-number"),o=document.querySelector("#timeCheck"),u=document.querySelector(".main-wrapper"),s=document.querySelector(".menu-component"),r=document.querySelector(".settings-component"),l=document.querySelector(".categories-clubs-component"),c=document.querySelector(".categories-players-component"),g=document.querySelector(".question-clubs-component"),d=document.querySelector(".question-players-component"),N=document.querySelector(".answer-component"),y=document.querySelector(".round-score-component"),S=document.querySelector(".quiz-results-component"),b=document.querySelector(".modal-background"),h=[s,r,l,c,g,d,N,y,b,S],p=document.querySelectorAll(".settings-button"),L=document.querySelector(".answer-modal-indicator"),v=document.querySelector(".answer-modal-img"),q=document.querySelector(".answer-modal-text"),f=document.querySelector(".round-pic-animated"),C=document.querySelector(".clubs-button-modal"),k=document.querySelector(".players-button-modal"),A=document.querySelector(".round-results-current"),M=document.querySelector(".clubs-button-results"),w=document.querySelector(".players-button-results"),F=l.querySelectorAll(".quiz-category"),z=l.querySelectorAll(".category-info-results-num"),E=l.querySelectorAll(".category-results-all"),T=c.querySelectorAll(".quiz-category"),I=c.querySelectorAll(".category-info-results-num"),B=c.querySelectorAll(".category-results-all"),K=document.querySelectorAll(".question-clubs-indicator .questions-indicator"),R=document.querySelectorAll(".question-players-indicator .questions-indicator"),$=document.querySelectorAll(".results-container .results-img"),x=document.querySelectorAll(".results-extended-info"),J=g.querySelector(".question-img"),D=g.querySelectorAll(".answer"),G=d.querySelector(".question-text"),P=d.querySelectorAll(".answer-img"),O=document.querySelector(".next-button-clubs"),j=document.querySelector(".next-button-players"),H=document.querySelector(".clubs-timer"),V=document.querySelector(".players-timer");let Z,W,Y,Q=0,U=0,X=[];const _=900;function ee(){n.checked?(t.disabled=!0,t.value=0):t.disabled=!1}function ae(){h.forEach((e=>e.classList.remove("component-show"))),b.classList.remove("modal-back-show")}function me(){ae(),s.classList.add("component-show")}function te(){ae(),r.classList.add("component-show")}function ne(e){if(e)return e.reduce(((e,a)=>e+a),0)}function ie(){for(let e=0;e<10;e++)a[e]&&(F[e].classList.remove("category-not-played"),z[e].textContent=`${ne(a[e])}/10`,E[e].classList.remove("category-results-hidden")),m[e]&&(T[e].classList.remove("category-not-played"),I[e].textContent=`${ne(m[e])}/10`,B[e].classList.remove("category-results-hidden"))}function oe(t){ae(),S.classList.add("component-show"),$.forEach((e=>{e.classList.remove("not-guessed"),e.parentNode.querySelector(".results-extended-info").classList.add("extended-hide")}));let n=Number(t.target.getAttribute("data-round")-1);n<0&&(n=0);const i=t.target.getAttribute("data-category");"clubs"===i?(M.classList.remove("hide-button"),w.classList.add("hide-button")):(M.classList.add("hide-button"),w.classList.remove("hide-button"));for(let t=0;t<$.length;t++){const o=new Image;o.src=`./assets/img/${i}/${e[i][10*n+t].imageNum}.jpg`,o.onload=()=>{x[t].textContent=e[i][10*n+t].name,$[t].style.background=`url('${o.src}') center /cover no-repeat`,"clubs"===i?1!==a[n][t]&&$[t].classList.add("not-guessed"):"players"===i&&1!==m[n][t]&&$[t].classList.add("not-guessed")}}}function ue(e){Q=10*Number(e.target.getAttribute("data-round")-1);const a=e.target.getAttribute("data-category");"clubs"===a?(C.classList.remove("hide-button"),O.classList.remove("hide-button"),k.classList.add("hide-button"),j.classList.add("hide-button")):(C.classList.add("hide-button"),O.classList.add("hide-button"),k.classList.remove("hide-button"),j.classList.remove("hide-button")),U=0,X=[],[...K,...R].forEach((e=>{e.classList.remove("questions-indicator-wrong"),e.classList.remove("questions-indicator-right")})),"clubs"===a?re():ye()}function se(e){Y=setTimeout((()=>{Z-=1,e.textContent=`Time left: ${Z} s`,Z>0?se(e):clearTimeout(Y)}),1e3)}function re(){o.checked?(H.classList.remove("timer-hidden"),Z=i.value,H.textContent=`Time left: ${i.value} s`,setTimeout((()=>{se(H)}),_),W=setTimeout((()=>{ge()}),_+1e3*i.value)):H.classList.add("timer-hidden"),ae();let a=[e.clubs[Q].name];for(;a.length<4;){const m=e.clubs[Math.round(100*Math.random())].name;a.includes(m)||(Math.random()>.5?a.push(m):a.unshift(m))}for(let e=0;e<4;e++)D[e].textContent=a[e];setTimeout((()=>{q.textContent=e.clubs[Q].name,g.classList.add("component-show");const a=new Image;a.src=`./assets/img/clubs/${Q}.jpg`,a.addEventListener("load",(()=>{J.style.background=`url('${a.src}') center /cover no-repeat`,v.style.background=`url('${a.src}') center /cover no-repeat`})),U++,Q++}),600)}function le(e){10===U?function(e){ce("finished"),ae(),y.classList.add("component-show"),A.textContent=ne(X),"clubs"===e?a[(Q-U)/10]=X:m[(Q-U)/10]=X,ie();const t=new Image;t.src=`./assets/img/results/${ne(X)}.gif`,t.addEventListener("load",(()=>{f.style.background=`url('${t.src}') center /cover no-repeat`}))}("clubs"===e?"clubs":"players"):"clubs"===e?re():ye()}function ce(e){const a=new Audio;a.src=`./assets/audio/${e}.mp3`,a.volume=t.value/100,a.play()}function ge(a){clearTimeout(W),clearTimeout(Y),a&&a.target.textContent===e.clubs[Q-1].name?(Ne(!0),K[U-1].classList.add("questions-indicator-right")):(Ne(!1),K[U-1].classList.add("questions-indicator-wrong"))}function de(a){clearTimeout(W),clearTimeout(Y),a&&a.target.getAttribute("data-img-num")===e.players[Q-1].imageNum?(Ne(!0),R[U-1].classList.add("questions-indicator-right")):(Ne(!1),R[U-1].classList.add("questions-indicator-wrong"))}function Ne(e){e?(ce("correct"),X.push(1),L.classList.remove("answer-indicator-wrong")):(ce("wrong"),X.push(0),L.classList.add("answer-indicator-wrong")),N.classList.add("component-show"),b.classList.add("modal-back-show")}function ye(){o.checked?(V.classList.remove("timer-hidden"),Z=i.value,V.textContent=`Time left: ${i.value} s`,setTimeout((()=>{se(V)}),_),W=setTimeout((()=>{de()}),_+1e3*i.value)):V.classList.add("timer-hidden"),ae(),G.textContent=`On which picture you see ${e.players[Q].name}?`;let a=[e.players[Q].imageNum];for(;a.length<4;){const m=e.players[Math.round(100*Math.random())].imageNum;a.includes(m)||(Math.random()>.5?a.push(m):a.unshift(m))}setTimeout((()=>{q.textContent=e.players[Q].name,d.classList.add("component-show");for(let e=0;e<4;e++){const m=new Image;m.src=`./assets/img/players/${a[e]}.jpg`,P[e].setAttribute("data-img-num",a[e]),m.addEventListener("load",(()=>{P[e].style.background=`url('${m.src}') center /cover no-repeat`}))}const m=new Image;m.src=`./assets/img/players/${Q}.jpg`,m.addEventListener("load",(()=>{v.style.background=`url('${m.src}') center /cover no-repeat`})),U++,Q++}),600)}u.addEventListener("click",(e=>{e.target.classList.contains("open-clubs-category")?(ae(),l.classList.add("component-show"),clearTimeout(W),clearTimeout(Y)):e.target.classList.contains("open-players-category")?(ae(),c.classList.add("component-show"),clearTimeout(W),clearTimeout(Y)):e.target.classList.contains("open-menu")&&(me(),clearTimeout(W),clearTimeout(Y))})),n.addEventListener("change",ee),p.forEach((e=>{e.addEventListener("click",te)})),[...F,...T].forEach((e=>{e.addEventListener("click",ue)})),[...E,...B].forEach((e=>{e.addEventListener("click",oe)})),window.addEventListener("beforeunload",(function(){localStorage.setItem("ftb-quiz-state-volume",t.value),localStorage.setItem("ftb-quiz-state-mute",n.checked),localStorage.setItem("ftb-quiz-state-sec-num",i.value),localStorage.setItem("ftb-quiz-state-time-game",o.checked),localStorage.setItem("ftb-quiz-state-clubs",JSON.stringify(a)),localStorage.setItem("ftb-quiz-state-players",JSON.stringify(m))})),window.addEventListener("load",(function(){localStorage.getItem("ftb-quiz-state-volume")&&(t.value=Number(localStorage.getItem("ftb-quiz-state-volume"))),localStorage.getItem("ftb-quiz-state-mute")&&("true"===localStorage.getItem("ftb-quiz-state-mute")?n.checked=!0:n.checked=!1,ee()),localStorage.getItem("ftb-quiz-state-sec-num")&&(i.value=Number(localStorage.getItem("ftb-quiz-state-sec-num"))),localStorage.getItem("ftb-quiz-state-time-game")&&("true"===localStorage.getItem("ftb-quiz-state-time-game")?o.checked=!0:o.checked=!1),localStorage.getItem("ftb-quiz-state-clubs")&&(a=JSON.parse(localStorage.getItem("ftb-quiz-state-clubs"))),localStorage.getItem("ftb-quiz-state-players")&&(m=JSON.parse(localStorage.getItem("ftb-quiz-state-players"))),ie()})),$.forEach((e=>{e.addEventListener("click",(()=>{e.parentNode.querySelector(".results-extended-info").classList.toggle("extended-hide")}))})),D.forEach((e=>{e.addEventListener("click",ge)})),P.forEach((e=>{e.addEventListener("click",de)})),O.addEventListener("click",(()=>{le("clubs")})),j.addEventListener("click",(()=>{le("players")})),function(){for(let e=0;e<10;e++){const a=new Image,m=new Image;a.src=`./assets/img/clubs/${10*e+1}.jpg`,m.src=`./assets/img/players/${10*e+1}.jpg`,a.onload=()=>{F[e].style.background=`url('${a.src}') center /cover no-repeat`},m.onload=()=>{T[e].style.background=`url('${m.src}') center /cover no-repeat`}}}(),me(),console.log("Привет! Самооценка: 220/220 (222/240)"),console.log("Все основные пункты выполнены по ТЗ, список анимаций ниже. Доп функционал: разные уведомления в конце раунда в зависимости от результата +2 (для каждого результата от 0 до 10 своя gif)"),console.log("Список анимаций (простая смена цветов, ресайз иконок и т.д. не учитываются): "),console.log("1) Плавная смена компонентов приложения, включая модалку (горизонтально)"),console.log("2) Вертикальный въезд и выезд блока с итогами раунда"),console.log("3) По ховеру на кнопках главного меню горизонтально прокручивается их фон"),console.log("4) Прокручивающаяся на 180 градусов кнопка настроек"),console.log("5) Плавный выезд скрытых кнопок на карточках в результатах раунда и категориях"),console.log("6) Стрелки с поворотом сторону у кнопок Score (результаты) и кнопки NEXT"),console.log("Основные пункты: "),console.log("Стартовая страница и навигация +20 "),console.log("Настройки +40 "),console.log("Страница категорий +30 "),console.log("Страница с вопросами +50 "),console.log("Страница с результатами +50 "),console.log("Одновременная загрузка и плавная смена изображений +10 "),console.log("Анимация +20 "),console.log("Доп +2 - разные gif по итогам раундов ")})();