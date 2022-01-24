(()=>{"use strict";var e={728:(e,a,r)=>{r.r(a)},696:function(e,a,r){var t=this&&this.__awaiter||function(e,a,r,t){return new(r||(r=Promise))((function(n,o){function i(e){try{d(t.next(e))}catch(e){o(e)}}function s(e){try{d(t.throw(e))}catch(e){o(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof r?a:new r((function(e){e(a)}))).then(i,s)}d((t=t.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.createWinner=a.switchToDrive=a.startCarEngineApi=a.getCarData=a.removeWinner=a.getWinners=a.updateCarApi=a.generateCar=a.removeCar=a.getCars=void 0;const n=r(330),o=r(818),i="http://localhost:3000",s=`${i}/engine`,d=`${i}/winners`,u=`${i}/garage`;a.getCars=function(){return t(this,void 0,void 0,(function*(){try{const e=yield fetch(`${u}?_page=${o.appState.garagePageCurrent}&_limit=${o.appState.garagePageLimit}`),a=yield e.json();200===e.status&&(o.appState.cars=a,o.appState.carsAmount=e.headers.get("X-Total-Count")||"0")}catch(e){throw new Error(e)}}))},a.removeCar=function(e){return t(this,void 0,void 0,(function*(){try{yield fetch(`${u}/${e}`,{method:"DELETE"}),(Number(o.appState.carsAmount)-1)/o.appState.garagePageLimit<=o.appState.garagePageCurrent-1&&o.appState.garagePageCurrent>1&&(o.appState.garagePageCurrent-=1)}catch(e){throw new Error(e)}}))},a.generateCar=function(e,a){return t(this,void 0,void 0,(function*(){try{yield fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,color:a})})}catch(e){throw new Error(e)}}))},a.updateCarApi=function(e){return t(this,void 0,void 0,(function*(){const a=n.garageUpdateInput.value,r=n.garageUpdateColor.value;try{yield fetch(`${u}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,color:r})})}catch(e){throw new Error(e)}n.garageUpdateInput.value="",n.garageUpdateColor.value="#000000"}))},a.getWinners=function(){return t(this,void 0,void 0,(function*(){try{const e=yield fetch(`${d}?_page=${o.appState.winnersPageCurrent}&_limit=${o.appState.winnersPageLimit}&_sort=${o.appState.sortBy}&_order=${o.appState.sortOrder}`),a=yield e.json();200===e.status&&(o.appState.winners=a,o.appState.winnersAmount=e.headers.get("X-Total-Count")||"0")}catch(e){throw new Error(e)}}))},a.removeWinner=function(e){return t(this,void 0,void 0,(function*(){try{yield fetch(`${d}/${e}`,{method:"DELETE"})}catch(e){throw new Error(e)}}))},a.getCarData=function(e){return t(this,void 0,void 0,(function*(){try{const a=yield fetch(`${u}/${e}`),r=yield a.json();return 200===a.status?r:null}catch(e){throw new Error(e)}}))},a.startCarEngineApi=function(e){return t(this,void 0,void 0,(function*(){try{const a=yield fetch(`${s}?id=${e}&status=started`,{method:"PATCH"}),r=yield a.json();return{status:a.status,result:r}}catch(e){throw new Error(e)}}))},a.switchToDrive=function(e){return t(this,void 0,void 0,(function*(){try{return(yield fetch(`${s}?id=${e}&status=drive`,{method:"PATCH"})).status}catch(e){throw new Error(e)}}))},a.createWinner=function(e){return t(this,void 0,void 0,(function*(){try{return(yield fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).status}catch(e){throw new Error(e)}}))}},439:function(e,a,r){var t=this&&this.__awaiter||function(e,a,r,t){return new(r||(r=Promise))((function(n,o){function i(e){try{d(t.next(e))}catch(e){o(e)}}function s(e){try{d(t.throw(e))}catch(e){o(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof r?a:new r((function(e){e(a)}))).then(i,s)}d((t=t.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.App=void 0;const n=r(272),o=r(330),i=r(438),s=r(820);a.App=class{start(e){window.addEventListener("DOMContentLoaded",(()=>t(this,void 0,void 0,(function*(){(0,n.initHeader)(e),(0,o.initGarage)(e),(0,o.initWinners)(),yield(0,i.renderCars)(),yield(0,s.renderWinners)()}))))}}},166:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.carModels=void 0,a.carModels=[{brand:"Acura",models:["2.2CL","2.3CL","3.0CL","3.2CL","ILX","Integra","Legend","MDX","NSX","RDX","3.5 RL","RL","RSX","SLX","2.5TL","3.2TL","TL","TSX","Vigor","ZDX"]},{brand:"Alfa Romeo",models:["164","8C Competizione","GTV-6","Milano","Spider"]},{brand:"AMC",models:["Alliance","Concord","Eagle","Encore","Spirit"]},{brand:"Aston Martin",models:["DB7","DB9","DBS","Lagonda","Rapide","V12 Vantage","V8 Vantage","Vanquish","Virage"]},{brand:"Audi",models:["100","200","4000","5000","80","90","A3","A4","A5","A6","A7","A8","allroad","Cabriolet","Coupe","Q3","Q5","Q7","Quattro","R8","RS 4","RS 5","RS 6","S4","S5","S6","S7","S8","TT","TT RS","TTS","V8 Quattro"]},{brand:"Avanti",models:["Convertible","Coupe","Sedan"]},{brand:"Bentley",models:["Arnage","Azure","Brooklands","Continental","Corniche","Eight","Mulsanne","Turbo R"]},{brand:"BMW",models:["128i","135i","135is","318i","318iC","318iS","318ti","320i","323ci","323i","323is","323iT","325Ci","325e","325es","325i","325is","325iX","325xi","328Ci","328i","328iS","328xi","330Ci","330i","330xi","335d","335i","335is","335xi","ActiveHybrid 3","325","524td","525i","525xi","528e","528i","528iT","528xi","530i","530iT","530xi","533i","535i","535i Gran Turismo","535xi","540i","545i","550i","550i Gran Turismo","ActiveHybrid 5","633CSi","635CSi","640i","640i Gran Coupe","645Ci","650i","650i Gran Coupe","L6","733i","735i","735iL","740i","740iL","740Li","745i","745Li","750i","750iL","750Li","760i","760Li","ActiveHybrid 7","Alpina B7","840Ci","850Ci","850CSi","850i","L7","1 Series M","M Coupe","M Roadster","M3","M5","M6","X5 M","X6 M","ActiveHybrid X6","X1","X3","X5","X6","Z3","Z4","Z8"]},{brand:"Buick",models:["Century","Electra","Enclave","Encore","LaCrosse","Le Sabre","Lucerne","Park Avenue","Rainier","Reatta","Regal","Rendezvous","Riviera","Roadmaster","Skyhawk","Skylark","Somerset","Terraza","Verano"]},{brand:"Cadillac",models:["Allante","ATS","Brougham","Catera","Cimarron","CTS","De Ville","DTS","Eldorado","Escalade","Escalade ESV","Escalade EXT","Fleetwood","Seville","SRX","STS","XLR","XTS"]},{brand:"Chevrolet",models:["Astro","Avalanche","Aveo","Aveo5","Beretta","Blazer","Camaro","Caprice","Captiva Sport","Cavalier","Celebrity","Chevette","Citation","Cobalt","Colorado","Corsica","Corvette","Cruze","El Camino","Equinox","Express Van","G Van","HHR","Impala","Kodiak C4500","Lumina","Lumina APV","LUV","Malibu","Metro","Monte Carlo","Nova","Prizm","S10 Blazer","S10 Pickup","Silverado and other C/K1500","Silverado and other C/K2500","Silverado and other C/K3500","Sonic","Spark","Spectrum","Sprint","SSR","Suburban","Tahoe","Tracker","TrailBlazer","TrailBlazer EXT","Traverse","Uplander","Venture","Volt"]},{brand:"Chrysler",models:["200","300","300M","Aspen","Caravan","Cirrus","Concorde","Conquest","Cordoba","Crossfire","E Class","Fifth Avenue","Grand Voyager","Imperial","Intrepid","Laser","LeBaron","LHS","Neon","New Yorker","Newport","Pacifica","Prowler","PT Cruiser","Sebring","TC by Maserati","Town &amp; Country","Voyager"]},{brand:"Daewoo",models:["Lanos","Leganza","Nubira"]},{brand:"Daihatsu",models:["Charade","Rocky"]},{brand:"Datsun",models:["200SX","210","280ZX","300ZX","310","510","720","810","Maxima","Pickup","Pulsar","Sentra","Stanza"]},{brand:"DeLorean",models:["DMC-12"]},{brand:"Dodge",models:["400","600","Aries","Avenger","Caliber","Caravan","Challenger","Charger","Colt","Conquest","D/W Truck","Dakota","Dart","Daytona","Diplomat","Durango","Dynasty","Grand Caravan","Intrepid","Journey","Lancer","Magnum","Mirada","Monaco","Neon","Nitro","Omni","Raider","Ram 1500 Truck","Ram 2500 Truck","Ram 3500 Truck","Ram 4500 Truck","Ram 50 Truck","RAM C/V","Ram SRT-10","Ram Van","Ram Wagon","Ramcharger","Rampage","Shadow","Spirit","Sprinter","SRT-4","St. Regis","Stealth","Stratus","Viper"]},{brand:"Eagle",models:["Medallion","Premier","Summit","Talon","Vision"]},{brand:"Ferrari",models:["308 GTB Quattrovalvole","308 GTBI","308 GTS Quattrovalvole","308 GTSI","328 GTB","328 GTS","348 GTB","348 GTS","348 Spider","348 TB","348 TS","360","456 GT","456M GT","458 Italia","512 BBi","512M","512TR","550 Maranello","575M Maranello","599 GTB Fiorano","599 GTO","612 Scaglietti","California","Enzo","F355","F40","F430","F50","FF","Mondial","Testarossa"]},{brand:"FIAT",models:["2000 Spider","500","Bertone X1/9","Brava","Pininfarina Spider","Strada","X1/9"]},{brand:"Fisker",models:["Karma"]},{brand:"Ford",models:["Aerostar","Aspire","Bronco","Bronco II","C-MAX","Club Wagon","Contour","Courier","Crown Victoria","E-150 and Econoline 150","E-250 and Econoline 250","E-350 and Econoline 350","Edge","Escape","Escort","Excursion","EXP","Expedition","Expedition EL","Explorer","Explorer Sport Trac","F100","F150","F250","F350","F450","Fairmont","Festiva","Fiesta","Five Hundred","Flex","Focus","Freestar","Freestyle","Fusion","Granada","GT","LTD","Mustang","Probe","Ranger","Taurus","Taurus X","Tempo","Thunderbird","Transit Connect","Windstar","ZX2 Escort"]},{brand:"Freightliner",models:["Sprinter"]},{brand:"Geo",models:["Metro","Prizm","Spectrum","Storm","Tracker"]},{brand:"GMC",models:["Acadia","Caballero","Canyon","Envoy","Envoy XL","Envoy XUV","Jimmy","Rally Wagon","S15 Jimmy","S15 Pickup","Safari","Savana","Sierra C/K1500","Sierra C/K2500","Sierra C/K3500","Sonoma","Suburban","Syclone","Terrain","TopKick C4500","Typhoon","Vandura","Yukon","Yukon XL"]},{brand:"Honda",models:["Accord","Civic","CR-V","CR-Z","CRX","Accord Crosstour","Crosstour","Del Sol","Element","Fit","Insight","Odyssey","Passport","Pilot","Prelude","Ridgeline","S2000"]},{brand:"HUMMER",models:["H1","H2","H3","H3T"]},{brand:"Hyundai",models:["Accent","Azera","Elantra","Elantra Coupe","Elantra Touring","Entourage","Equus","Excel","Genesis","Genesis Coupe","Santa Fe","Scoupe","Sonata","Tiburon","Tucson","Veloster","Veracruz","XG300","XG350"]},{brand:"Infiniti",models:["EX35","EX37","FX35","FX37","FX45","FX50","G20","G25","G35","G37","I30","I35","J30","JX35","M30","M35","M35h","M37","M45","M56","Q45","QX4","QX56"]},{brand:"Isuzu",models:["Amigo","Ascender","Axiom","Hombre","i-280","i-290","i-350","i-370","I-Mark","Impulse","Oasis","Pickup","Rodeo","Stylus","Trooper","Trooper II","VehiCROSS"]},{brand:"Jaguar",models:["S-Type","X-Type","XF","XJ12","XJ6","XJR","XJR-S","XJS","XJ Vanden Plas","XJ","XJ8","XJ8 L","XJ Sport","XK8","XK","XKR"]},{brand:"Jeep",models:["Cherokee","CJ","Comanche","Commander","Compass","Grand Cherokee","Grand Wagoneer","Liberty","Patriot","Pickup","Scrambler","Wagoneer","Wrangler"]},{brand:"Kia",models:["Amanti","Borrego","Forte","Forte Koup","Optima","Rio","Rio5","Rondo","Sedona","Sephia","Sorento","Soul","Spectra","Spectra5","Sportage"]},{brand:"Lamborghini",models:["Aventador","Countach","Diablo","Gallardo","Jalpa","LM002","Murcielago"]},{brand:"Lancia",models:["Beta","Zagato"]},{brand:"Land Rover",models:["Defender","Discovery","Freelander","LR2","LR3","LR4","Range Rover","Range Rover Evoque","Range Rover Sport"]},{brand:"Lexus",models:["CT 200h","ES 250","ES 300","ES 300h","ES 330","ES 350","GS 300","GS 350","GS 400","GS 430","GS 450h","GS 460","GX 460","GX 470","HS 250h","IS 250","IS 250C","IS 300","IS 350","IS 350C","IS F","LFA","LS 400","LS 430","LS 460","LS 600h","LX 450","LX 470","LX 570","RX 300","RX 330","RX 350","RX 400h","RX 450h","SC 300","SC 400","SC 430"]},{brand:"Lincoln",models:["Aviator","Blackwood","Continental","LS","Mark LT","Mark VI","Mark VII","Mark VIII","MKS","MKT","MKX","MKZ","Navigator","Navigator L","Town Car","Zephyr"]},{brand:"Lotus",models:["Elan","Elise","Esprit","Evora","Exige"]},{brand:"Maserati",models:["430","Biturbo","Coupe","GranSport","GranTurismo","Quattroporte","Spyder"]},{brand:"Maybach",models:["57","62"]},{brand:"Mazda",models:["323","626","929","B-Series Pickup","CX-5","CX-7","CX-9","GLC","MAZDA2","MAZDA3","MAZDA5","MAZDA6","MAZDASPEED3","MAZDASPEED6","Miata MX5","Millenia","MPV","MX3","MX6","Navajo","Protege","Protege5","RX-7","RX-8","Tribute"]},{brand:"McLaren",models:["MP4-12C"]},{brand:"Mercedes-Benz",models:["190D","190E","240D","300CD","300CE","300D","300E","300TD","300TE","C220","C230","C240","C250","C280","C300","C320","C32 AMG","C350","C36 AMG","C43 AMG","C55 AMG","C63 AMG","CL500","CL550","CL55 AMG","CL600","CL63 AMG","CL65 AMG","CLK320","CLK350","CLK430","CLK500","CLK550","CLK55 AMG","CLK63 AMG","CLS500","CLS550","CLS55 AMG","CLS63 AMG","260E","280CE","280E","400E","500E","E300","E320","E320 Bluetec","E320 CDI","E350","E350 Bluetec","E400 Hybrid","E420","E430","E500","E550","E55 AMG","E63 AMG","G500","G550","G55 AMG","G63 AMG","GL320 Bluetec","GL320 CDI","GL350 Bluetec","GL450","GL550","GLK350","ML320","ML320 Bluetec","ML320 CDI","ML350","ML350 Bluetec","ML430","ML450 Hybrid","ML500","ML550","ML55 AMG","ML63 AMG","R320 Bluetec","R320 CDI","R350","R350 Bluetec","R500","R63 AMG","300SD","300SDL","300SE","300SEL","350SD","350SDL","380SE","380SEC","380SEL","400SE","400SEL","420SEL","500SEC","500SEL","560SEC","560SEL","600SEC","600SEL","S320","S350","S350 Bluetec","S400 Hybrid","S420","S430","S500","S550","S55 AMG","S600","S63 AMG","S65 AMG","300SL","380SL","380SLC","500SL","560SL","600SL","SL320","SL500","SL550","SL55 AMG","SL600","SL63 AMG","SL65 AMG","SLK230","SLK250","SLK280","SLK300","SLK320","SLK32 AMG","SLK350","SLK55 AMG","SLR","SLS AMG","Sprinter"]},{brand:"Mercury",models:["Capri","Cougar","Grand Marquis","Lynx","Marauder","Mariner","Marquis","Milan","Montego","Monterey","Mountaineer","Mystique","Sable","Topaz","Tracer","Villager","Zephyr"]},{brand:"Merkur",models:["Scorpio","XR4Ti"]},{brand:"MINI",models:["Cooper Clubman","Cooper S Clubman","Cooper Countryman","Cooper S Countryman","Cooper Coupe","Cooper S Coupe","Cooper","Cooper S","Cooper Roadster","Cooper S Roadster"]},{brand:"Mitsubishi",models:["3000GT","Cordia","Diamante","Eclipse","Endeavor","Expo","Galant","i","Lancer","Lancer Evolution","Mighty Max","Mirage","Montero","Montero Sport","Outlander","Outlander Sport","Precis","Raider","Sigma","Starion","Tredia","Van"]},{brand:"Nissan",models:["200SX","240SX","300ZX","350Z","370Z","Altima","Armada","Axxess","Cube","Frontier","GT-R","Juke","Leaf","Maxima","Murano","Murano CrossCabriolet","NV","NX","Pathfinder","Pickup","Pulsar","Quest","Rogue","Sentra","Stanza","Titan","Van","Versa","Xterra"]},{brand:"Oldsmobile",models:["88","Achieva","Alero","Aurora","Bravada","Custom Cruiser","Cutlass","Cutlass Calais","Cutlass Ciera","Cutlass Supreme","Firenza","Intrigue","Ninety-Eight","Omega","Regency","Silhouette","Toronado"]},{brand:"Peugeot",models:["405","504","505","604"]},{brand:"Plymouth",models:["Acclaim","Arrow","Breeze","Caravelle","Champ","Colt","Conquest","Gran Fury","Grand Voyager","Horizon","Laser","Neon","Prowler","Reliant","Sapporo","Scamp","Sundance","Trailduster","Voyager"]},{brand:"Pontiac",models:["1000","6000","Aztek","Bonneville","Catalina","Fiero","Firebird","G3","G5","G6","G8","Grand Am","Grand Prix","GTO","J2000","Le Mans","Montana","Parisienne","Phoenix","Safari","Solstice","Sunbird","Sunfire","Torrent","Trans Sport","Vibe"]},{brand:"Porsche",models:["911","924","928","944","968","Boxster","Carrera GT","Cayenne","Cayman","Panamera"]},{brand:"RAM",models:["1500","2500","3500","4500"]},{brand:"Renault",models:["18i","Fuego","Le Car","R18","Sportwagon"]},{brand:"Rolls-Royce",models:["Camargue","Corniche","Ghost","Park Ward","Phantom","Silver Dawn","Silver Seraph","Silver Spirit","Silver Spur"]},{brand:"Saab",models:["9-2X","9-3","9-4X","9-5","9-7X","900","9000"]},{brand:"Saturn",models:["Astra","Aura","ION","L100","L200","L300","LS","LW1","LW2","LW200","LW300","Outlook","Relay","SC1","SC2","Sky","SL","SL1","SL2","SW1","SW2","Vue"]},{brand:"Scion",models:["FR-S","iQ","tC","xA","xB","xD"]},{brand:"smart",models:["fortwo"]},{brand:"SRT",models:["Viper"]},{brand:"Sterling",models:["825","827"]},{brand:"Subaru",models:["Baja","Brat","BRZ","Forester","Impreza","Impreza WRX","Justy","L Series","Legacy","Loyale","Outback","SVX","Tribeca","XT","XV Crosstrek"]},{brand:"Suzuki",models:["Aerio","Equator","Esteem","Forenza","Grand Vitara","Kizashi","Reno","Samurai","Sidekick","Swift","SX4","Verona","Vitara","X-90","XL7"]},{brand:"Tesla",models:["Roadster","Model S"]},{brand:"Toyota",models:["4Runner","Avalon","Camry","Celica","Corolla","Corona","Cressida","Echo","FJ Cruiser","Highlander","Land Cruiser","Matrix","MR2","MR2 Spyder","Paseo","Pickup","Previa","Prius","Prius C","Prius V","RAV4","Sequoia","Sienna","Solara","Starlet","Supra","T100","Tacoma","Tercel","Tundra","Van","Venza","Yaris"]},{brand:"Triumph",models:["TR7","TR8"]},{brand:"Volkswagen",models:["Beetle","Cabrio","Cabriolet","CC","Corrado","Dasher","Eos","Eurovan","Fox","GLI","Golf R","GTI","Golf","Rabbit","Jetta","Passat","Phaeton","Pickup","Quantum","R32","Routan","Scirocco","Tiguan","Touareg","Vanagon"]},{brand:"Volvo",models:["240","260","740","760","780","850","940","960","C30","C70","S40","S60","S70","S80","S90","V40","V50","V70","V90","XC60","XC70","XC90"]},{brand:"Yugo",models:["GV","GVC","GVL","GVS","GVX"]}]},438:function(e,a,r){var t=this&&this.__awaiter||function(e,a,r,t){return new(r||(r=Promise))((function(n,o){function i(e){try{d(t.next(e))}catch(e){o(e)}}function s(e){try{d(t.throw(e))}catch(e){o(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof r?a:new r((function(e){e(a)}))).then(i,s)}d((t=t.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.startRace=a.startCarEngine=a.animateCar=a.createRandomCars=a.createCar=a.updateCar=a.handleCarsAction=a.renderCars=a.renderCarCard=void 0;const n=r(330),o=r(818),i=r(696),s=r(119),d=r(820);function u({id:e,name:a,color:r}){const t=document.createElement("div");return t.classList.add("car-card"),t.setAttribute("data-car-id",String(e)),t.innerHTML=`\n  <div class="car-card-wrapper">\n    <div class="car-card-name">${a}</div>\n    <div class="car-card-pic" data-img-id="${e}">\n      <i class="fas fa-car-side" style="color: ${r};"></i>\n    </div>\n    <div class="car-card-flag" data-flag-id="${e}">\n      <i class="fas fa-flag-checkered"></i>\n    </div>\n  </div>\n  <div class="car-card-buttons">\n    <button class="car-card-button car-card-button-select" data-select-id="${e}" data-select-name="${a}" data-select-color="${r}">Select</button>\n    <button class="car-card-button car-card-button-remove" data-remove-id="${e}">Remove</button>\n    <button class="car-card-button car-card-button-start" data-start-id="${e}">Start</button>\n    <button class="car-card-button car-card-button-stop" data-stop-id="${e}" disabled>Stop</button>\n  </div>`,t}function l(){return t(this,void 0,void 0,(function*(){yield(0,i.getCars)(),n.garageCount.textContent=o.appState.carsAmount,n.garageCurrentPageNum.textContent=String(o.appState.garagePageCurrent),1===o.appState.garagePageCurrent?n.garagePrev.disabled=!0:n.garagePrev.disabled=!1,Number(o.appState.carsAmount)/o.appState.garagePageLimit<=o.appState.garagePageCurrent?n.garageNext.disabled=!0:n.garageNext.disabled=!1,n.garageInner.innerHTML="";for(let e=0;e<o.appState.cars.length;e++)n.garageInner.append(u(o.appState.cars[e]))}))}function c(e,a){var r,n;return t(this,void 0,void 0,(function*(){const t=null===(r=a.closest(".car-card"))||void 0===r?void 0:r.getElementsByClassName("fa-car-side")[0],o=null===(n=a.parentElement)||void 0===n?void 0:n.getElementsByClassName("car-card-button-stop")[0];o.disabled=!1;const i=t.animate([{transform:"translateX(0)"},{transform:`translateX(${t.closest(".car-card-wrapper").offsetWidth-60}px)`}],{fill:"forwards",duration:e});o.onclick=()=>{i.finish(),i.cancel()},i.finished.then((()=>{o.disabled=!0,a.disabled=!1}))}))}function g(e,a){return t(this,void 0,void 0,(function*(){a.disabled=!0;const r=yield(0,i.startCarEngineApi)(e);200===r.status&&c(r.result.distance/r.result.velocity,a)}))}a.renderCarCard=u,a.renderCars=l,a.handleCarsAction=function(e){return t(this,void 0,void 0,(function*(){const a=e.target;a.hasAttribute("data-remove-id")&&(yield(0,i.removeCar)(a.getAttribute("data-remove-id")),yield(0,i.removeWinner)(a.getAttribute("data-remove-id")),l(),(0,d.renderWinners)()),a.hasAttribute("data-select-id")&&(n.garageUpdateInput.value=a.getAttribute("data-select-name"),n.garageUpdateColor.value=a.getAttribute("data-select-color"),n.garageUpdateButton.setAttribute("data-update-id",a.getAttribute("data-select-id"))),a.hasAttribute("data-start-id")&&g(Number(a.getAttribute("data-start-id")),a)}))},a.updateCar=function(){return t(this,void 0,void 0,(function*(){if(n.garageUpdateButton.hasAttribute("data-update-id"))if(0===n.garageUpdateInput.value.length)n.garageUpdateInput.classList.add("border-error"),n.garageUpdateInput.placeholder="No input",setTimeout((()=>{n.garageUpdateInput.classList.remove("border-error"),n.garageUpdateInput.placeholder=""}),1200);else{const e=n.garageUpdateButton.getAttribute("data-update-id");n.garageUpdateButton.removeAttribute("data-update-id"),yield(0,i.updateCarApi)(e),l()}else n.garageUpdateInput.classList.add("border-error"),n.garageUpdateInput.value="No car selected",setTimeout((()=>{n.garageUpdateInput.classList.remove("border-error"),n.garageUpdateInput.value=""}),1200)}))},a.createCar=function(){return t(this,void 0,void 0,(function*(){0===n.garageCreateInput.value.length?(n.garageCreateInput.classList.add("border-error"),n.garageCreateInput.placeholder="No input",setTimeout((()=>{n.garageCreateInput.classList.remove("border-error"),n.garageCreateInput.placeholder=""}),1200)):(yield(0,i.generateCar)(n.garageCreateInput.value,n.garageCreateColor.value),l())}))},a.createRandomCars=function(){return t(this,void 0,void 0,(function*(){let e=[];for(let a=0;a<100;a+=1)e.push((0,i.generateCar)((0,s.getRandomName)(),(0,s.getRandomColor)()));Promise.all(e).then((()=>{l()}))}))},a.animateCar=c,a.startCarEngine=g,a.startRace=function(){return t(this,void 0,void 0,(function*(){n.garageInner.querySelectorAll(".car-card-button-start").forEach((e=>{g(Number(e.getAttribute("data-start-id")),e)}))}))}},272:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.initHeader=void 0;const t=r(330),n=document.createElement("header"),o=document.createElement("button"),i=document.createElement("button");function s(e,a){e&&e.classList.add("hide"),a&&a.classList.remove("hide")}o.innerHTML='<i class="fas fa-car"></i> Garage',i.innerHTML='<i class="fas fa-medal"></i> Winners',a.initHeader=function(e){n.append(o),n.append(i),o.addEventListener("click",(()=>{s(t.winnersContainer,t.garageContainer)})),i.addEventListener("click",(()=>{s(t.garageContainer,t.winnersContainer)})),e.append(n)}},330:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.initWinners=a.winnersRandomGenerator=a.winnersInner=a.winnersTopRow=a.winnersNext=a.winnersPrev=a.winnersPagination=a.winnersCurrentPageNum=a.winnersCurrentPage=a.winnersCount=a.winnersHeading=a.winnersContainer=a.initGarage=a.garageInner=a.garageNext=a.garagePrev=a.garagePagination=a.garageCurrentPageNum=a.garageCurrentPage=a.garageCount=a.garageHeading=a.garageGenerateButton=a.garageResetButton=a.garageRaceButton=a.garageUpdateButton=a.garageUpdateColor=a.garageUpdateInput=a.garageCreateButton=a.garageCreateColor=a.garageCreateInput=a.garageControls=a.garageContainer=a.main=void 0;const t=r(438),n=r(818),o=r(905),i=r(820);a.main=document.createElement("main"),a.garageContainer=document.createElement("div"),a.garageControls=document.createElement("div"),a.garageCreateInput=document.createElement("input"),a.garageCreateColor=document.createElement("input"),a.garageCreateButton=document.createElement("button"),a.garageUpdateInput=document.createElement("input"),a.garageUpdateColor=document.createElement("input"),a.garageUpdateButton=document.createElement("button"),a.garageRaceButton=document.createElement("button"),a.garageResetButton=document.createElement("button"),a.garageGenerateButton=document.createElement("button"),a.garageHeading=document.createElement("h2"),a.garageCount=document.createElement("span"),a.garageCurrentPage=document.createElement("h4"),a.garageCurrentPageNum=document.createElement("span"),a.garagePagination=document.createElement("div"),a.garagePrev=document.createElement("button"),a.garageNext=document.createElement("button"),a.garageInner=document.createElement("div"),a.garageCreateButton.textContent="Create",a.garageUpdateButton.textContent="Update",a.garageRaceButton.textContent="Start race",a.garageResetButton.textContent="Reset Race/Cars",a.garageGenerateButton.textContent="Generate Cars",a.garageHeading.innerHTML='<i class="fas fa-car"></i> Garage: ',a.garageCurrentPage.innerHTML="Page #",a.garageCreateInput.type="text",a.garageCreateColor.type="color",a.garageUpdateInput.type="text",a.garageUpdateColor.type="color",a.garageNext.textContent="Next",a.garagePrev.textContent="Prev",a.garageContainer.classList.add("garage-container"),a.garageCount.classList.add("garage-count"),a.garageCurrentPageNum.classList.add("garage-current-page"),a.garageControls.classList.add("garage-controls"),a.garagePagination.classList.add("garage-pagination"),a.garageNext.classList.add("garage-next"),a.garagePrev.classList.add("garage-prev"),a.garageInner.classList.add("garage-inner"),a.initGarage=function(e){a.garageHeading.append(a.garageCount),a.garageCurrentPage.append(a.garageCurrentPageNum),a.garagePagination.append(a.garagePrev,a.garageNext),a.garageCount.textContent=n.appState.carsAmount,a.garageCurrentPageNum.textContent=String(n.appState.garagePageCurrent),a.garageControls.append(a.garageCreateInput,a.garageCreateColor,a.garageCreateButton,a.garageUpdateInput,a.garageUpdateColor,a.garageUpdateButton,a.garageRaceButton,a.garageResetButton,a.garageGenerateButton),a.garageContainer.append(a.garageControls,a.garageHeading,a.garageCurrentPage,a.garagePagination,a.garageInner),a.main.append(a.garageContainer),e.append(a.main),a.garageNext.addEventListener("click",o.handleCarsNext),a.garagePrev.addEventListener("click",o.handleCarsPrev),a.garageCreateButton.addEventListener("click",t.createCar),a.garageUpdateButton.addEventListener("click",t.updateCar),a.garageGenerateButton.addEventListener("click",t.createRandomCars),a.garageInner.addEventListener("click",t.handleCarsAction),a.garageRaceButton.addEventListener("click",t.startRace),a.garageResetButton.addEventListener("click",t.renderCars)},a.winnersContainer=document.createElement("div"),a.winnersHeading=document.createElement("h2"),a.winnersCount=document.createElement("span"),a.winnersCurrentPage=document.createElement("h4"),a.winnersCurrentPageNum=document.createElement("span"),a.winnersPagination=document.createElement("div"),a.winnersPrev=document.createElement("button"),a.winnersNext=document.createElement("button"),a.winnersTopRow=document.createElement("div"),a.winnersInner=document.createElement("div"),a.winnersRandomGenerator=document.createElement("button"),a.winnersRandomGenerator.textContent="Generate Random Winners",a.winnersHeading.innerHTML='<i class="fas fa-medal"></i> Winners: ',a.winnersCurrentPage.innerHTML="Page #",a.winnersNext.textContent="Next",a.winnersPrev.textContent="Prev",a.winnersContainer.classList.add("winners-container","hide"),a.winnersInner.classList.add("winners-inner"),a.winnersCount.classList.add("winners-count"),a.winnersCurrentPageNum.classList.add("winners-current-page"),a.winnersPagination.classList.add("winners-pagination"),a.winnersNext.classList.add("winners-next"),a.winnersPrev.classList.add("winners-prev"),a.winnersTopRow.classList.add("winners-top-row"),a.winnersTopRow.innerHTML='\n<div class="winner-header-item winner-header-num">Number</div>\n<div class="winner-header-item winner-header-car">Car</div>\n<div class="winner-header-item winner-header-name">Name</div>\n<div class="winner-header-item winner-header-wins">Wins</div>\n<div class="winner-header-item winner-header-time">Best time</div>',a.initWinners=function(){a.winnersHeading.append(a.winnersCount),a.winnersCurrentPage.append(a.winnersCurrentPageNum),a.winnersPagination.append(a.winnersPrev,a.winnersNext),a.winnersCount.textContent=n.appState.winnersAmount,a.winnersCurrentPageNum.textContent=String(n.appState.winnersPageCurrent),a.winnersContainer.append(a.winnersHeading,a.winnersCurrentPage,a.winnersPagination,a.winnersTopRow,a.winnersInner,a.winnersRandomGenerator),a.main.append(a.winnersContainer),a.winnersRandomGenerator.addEventListener("click",i.randomWinnersGenerate),a.winnersNext.addEventListener("click",o.handleWinnersNext),a.winnersPrev.addEventListener("click",o.handleWinnersPrev)}},905:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.handleWinnersPrev=a.handleWinnersNext=a.handleCarsPrev=a.handleCarsNext=void 0;const t=r(818),n=r(438),o=r(820);a.handleCarsNext=function(){Number(t.appState.carsAmount)/t.appState.garagePageLimit>t.appState.garagePageCurrent&&(t.appState.garagePageCurrent+=1,(0,n.renderCars)())},a.handleCarsPrev=function(){t.appState.garagePageCurrent>1&&(t.appState.garagePageCurrent-=1,(0,n.renderCars)())},a.handleWinnersNext=function(){Number(t.appState.winnersAmount)/t.appState.winnersPageLimit>t.appState.winnersPageCurrent&&(t.appState.winnersPageCurrent+=1,(0,o.renderWinners)())},a.handleWinnersPrev=function(){t.appState.winnersPageCurrent>1&&(t.appState.winnersPageCurrent-=1,(0,o.renderWinners)())}},818:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.appState=void 0,a.appState={cars:[],carsAmount:"0",garagePageCurrent:1,garagePageLimit:7,winners:[],winnersAmount:"0",winnersPageCurrent:1,winnersPageLimit:10,sortOrder:"ASC",sortBy:"time"}},119:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.getRandomColor=a.getRandomName=void 0;const t=r(166);a.getRandomName=function(){const e=t.carModels[Math.floor(Math.random()*t.carModels.length)],a=e.models[Math.floor(Math.random()*e.models.length)];return`${e.brand} ${a}`},a.getRandomColor=function(){const e="0123456789ABCDEF";let a="#";for(let r=0;r<6;r+=1)a+=e[Math.floor(Math.random()*e.length)];return a}},820:function(e,a,r){var t=this&&this.__awaiter||function(e,a,r,t){return new(r||(r=Promise))((function(n,o){function i(e){try{d(t.next(e))}catch(e){o(e)}}function s(e){try{d(t.throw(e))}catch(e){o(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof r?a:new r((function(e){e(a)}))).then(i,s)}d((t=t.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.randomWinnersGenerate=a.renderWinners=a.renderWinnerCard=void 0;const n=r(818),o=r(330),i=r(696);function s(e,{name:a,color:r},{id:t,time:n,wins:o}){const i=document.createElement("div");return i.classList.add("winner-card"),i.setAttribute("data-winner-id",String(t)),i.innerHTML=`<div class="winner-card-item winner-card-num">${e+1}</div>\n  <div class="winner-card-item winner-card-car"><i class="fas fa-car-side" style="color: ${r};"></i></div>\n  <div class="winner-card-item winner-card-name">${a}</div>\n  <div class="winner-card-item winner-card-wins">${o}</div>\n  <div class="winner-card-item winner-card-time">${n}</div>`,i}function d(){return t(this,void 0,void 0,(function*(){yield(0,i.getWinners)(),o.winnersCount.textContent=n.appState.winnersAmount,o.winnersCurrentPageNum.textContent=String(n.appState.winnersPageCurrent),1===n.appState.winnersPageCurrent?o.winnersPrev.disabled=!0:o.winnersPrev.disabled=!1,Number(n.appState.winnersAmount)/n.appState.winnersPageLimit<=n.appState.winnersPageCurrent?o.winnersNext.disabled=!0:o.winnersNext.disabled=!1,o.winnersInner.innerHTML="";for(let e=0;e<n.appState.winners.length;e++){const a=yield(0,i.getCarData)(n.appState.winners[e].id);o.winnersInner.append(s(e,a,n.appState.winners[e]))}}))}a.renderWinnerCard=s,a.renderWinners=d,a.randomWinnersGenerate=function(){return t(this,void 0,void 0,(function*(){if(0===n.appState.cars.length)return!1;for(let e=0;e<10;e++){const e={id:n.appState.cars[Math.floor(Math.random()*n.appState.cars.length)].id,time:Math.round(10*Math.random())+1,wins:Math.round(10*Math.random())+1};yield(0,i.createWinner)(e)}d()}))}}},a={};function r(t){var n=a[t];if(void 0!==n)return n.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(728),(new(r(439).App)).start(document.body),console.log('Hello! Current self-check: ~140 of 190. It would be better to check this on Thursday if possible. Thank you! If there would be any changes - they will be mentioned in console.log)\n\nDone:\n5\tThere should be two views on the site: "Garage" and "Winners".\n5\tGarage" view should contain its name, page number, and the full amount of items in the database (how many car user has in his garage).\n5\tWinners" view should contain its name, page number, and the full amount of items in the database (how many records the winners table contains\n10\tView state should be saved when user switches from one view to another. For example, page number shouldn\'t be reset, input controls should contain that they contained before switching, etc.\n15\tUser should be able to create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners”\n10\tUser should be able to select any color from an RGB-Palete like here and see the picture of the car colored with the color selected and car\'s name\n5\tNear the car\'s picture should be buttons to update its attributes or delete it\n10\tThere should be pagination on the "Garage" view (7 cars per one page)\n10\tThere should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.\n5\tNear the car\'s picture should be buttons for starting / stoping the car engine.\n5\tUser clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it\'s initial place\n5\tStart engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it\'s initial place\n15\tCar animation should work fine on any screen (smallest screen size is 500px)\n10\tThere should be a button to start race. After user clicks this button all the cars on the current page start driving\n10\tThere should be a button to reset race. After user clicks this button all the cars return to it\'s initial places.\n5\tThere should be pagination (10 winners per one page)\n\nPartially done (because car engines never break, but they should):\n+10 (of 20)\tUser clicks to the engine start button -> UI is waiting for car\'s velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.\n\nNOT done:\n10\tAfter some car finishes first user should see the message contains car\'s name that shows which one has won\n10\tAfter some car wins it should be displayed at the "Winners view" table\n10\tTable should include the next culumns: "№", "Image of the car", "Name of the car", "Wins number", "Best time in seconds" (names of the columns can differ). If the same car wins more than once the number of wins should be incremented while best time should be saved only if it\'s better than the stored one\n10\tUser should be able to sort cars by wins number and by best time (ASC, DESC)\n')})();