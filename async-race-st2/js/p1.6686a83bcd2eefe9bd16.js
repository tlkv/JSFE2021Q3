(()=>{"use strict";var e={728:(e,a,t)=>{t.r(a)},696:function(e,a,t){var r=this&&this.__awaiter||function(e,a,t,r){return new(t||(t=Promise))((function(n,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(o,s)}d((r=r.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.stopEngineApi=a.getWinner=a.updateWinnerApi=a.createWinnerApi=a.switchToDrive=a.startCarEngineApi=a.getCarData=a.removeWinner=a.getWinners=a.updateCarApi=a.generateCar=a.removeCar=a.getCars=void 0;const n=t(330),i=t(818),o="http://localhost:3000",s=`${o}/engine`,d=`${o}/winners`,u=`${o}/garage`;a.getCars=function(){return r(this,void 0,void 0,(function*(){try{const e=yield fetch(`${u}?_page=${i.appState.garagePageCurrent}&_limit=${i.appState.garagePageLimit}`),a=yield e.json();200===e.status&&(i.appState.cars=a,i.appState.carsAmount=e.headers.get("X-Total-Count")||"0")}catch(e){throw new Error(e)}}))},a.removeCar=function(e){return r(this,void 0,void 0,(function*(){try{yield fetch(`${u}/${e}`,{method:"DELETE"}),(Number(i.appState.carsAmount)-1)/i.appState.garagePageLimit<=i.appState.garagePageCurrent-1&&i.appState.garagePageCurrent>1&&(i.appState.garagePageCurrent-=1)}catch(e){throw new Error(e)}}))},a.generateCar=function(e,a){return r(this,void 0,void 0,(function*(){try{yield fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,color:a})})}catch(e){throw new Error(e)}}))},a.updateCarApi=function(e){return r(this,void 0,void 0,(function*(){const a=n.garageUpdateInput.value,t=n.garageUpdateColor.value;try{yield fetch(`${u}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,color:t})})}catch(e){throw new Error(e)}n.garageUpdateInput.value="",n.garageUpdateColor.value="#000000"}))},a.getWinners=function(){return r(this,void 0,void 0,(function*(){try{const e=yield fetch(`${d}?_page=${i.appState.winnersPageCurrent}&_limit=${i.appState.winnersPageLimit}&_sort=${i.appState.sortBy}&_order=${i.appState.sortOrder}`),a=yield e.json();200===e.status&&(i.appState.winners=a,i.appState.winnersAmount=e.headers.get("X-Total-Count")||"0")}catch(e){throw new Error(e)}}))},a.removeWinner=function(e){return r(this,void 0,void 0,(function*(){try{yield fetch(`${d}/${e}`,{method:"DELETE"})}catch(e){throw new Error(e)}}))},a.getCarData=function(e){return r(this,void 0,void 0,(function*(){try{const a=yield fetch(`${u}/${e}`),t=yield a.json();return 200===a.status?t:null}catch(e){throw new Error(e)}}))},a.startCarEngineApi=function(e){return r(this,void 0,void 0,(function*(){try{const a=yield fetch(`${s}?id=${e}&status=started`,{method:"PATCH"}),t=yield a.json();return{status:a.status,result:t}}catch(e){throw new Error(e)}}))},a.switchToDrive=function(e){return r(this,void 0,void 0,(function*(){try{return(yield fetch(`${s}?id=${e}&status=drive`,{method:"PATCH"})).status}catch(e){throw new Error(e)}}))},a.createWinnerApi=function(e){return r(this,void 0,void 0,(function*(){try{return(yield fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).status}catch(e){throw new Error(e)}}))},a.updateWinnerApi=function(e){return r(this,void 0,void 0,(function*(){try{return(yield fetch(`${d}/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).status}catch(e){throw new Error(e)}}))},a.getWinner=function(e){return r(this,void 0,void 0,(function*(){try{const a=yield fetch(`${d}/${e}`),t=yield a.json();return{status:a.status,result:t}}catch(e){throw new Error(e)}}))},a.stopEngineApi=function(e){return r(this,void 0,void 0,(function*(){try{const a=yield fetch(`${s}/?id=${e}&status=stopped`,{method:"PATCH"}),t=yield a.json();return{status:a.status,result:t}}catch(e){throw new Error(e)}}))}},439:function(e,a,t){var r=this&&this.__awaiter||function(e,a,t,r){return new(t||(t=Promise))((function(n,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(o,s)}d((r=r.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.App=void 0;const n=t(272),i=t(330),o=t(438),s=t(820);a.App=class{start(e){window.addEventListener("DOMContentLoaded",(()=>r(this,void 0,void 0,(function*(){(0,n.initHeader)(e),(0,i.initGarage)(e),(0,i.initWinners)(),yield(0,o.renderCars)(),yield(0,s.renderWinners)()}))))}}},166:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.carModels=void 0,a.carModels=[{brand:"Acura",models:["2.2CL","2.3CL","3.0CL","3.2CL","ILX","Integra","Legend","MDX","NSX","RDX","3.5 RL","RL","RSX","SLX","2.5TL","3.2TL","TL","TSX","Vigor","ZDX"]},{brand:"Alfa Romeo",models:["164","8C Competizione","GTV-6","Milano","Spider"]},{brand:"AMC",models:["Alliance","Concord","Eagle","Encore","Spirit"]},{brand:"Aston Martin",models:["DB7","DB9","DBS","Lagonda","Rapide","V12 Vantage","V8 Vantage","Vanquish","Virage"]},{brand:"Audi",models:["100","200","4000","5000","80","90","A3","A4","A5","A6","A7","A8","allroad","Cabriolet","Coupe","Q3","Q5","Q7","Quattro","R8","RS 4","RS 5","RS 6","S4","S5","S6","S7","S8","TT","TT RS","TTS","V8 Quattro"]},{brand:"Avanti",models:["Convertible","Coupe","Sedan"]},{brand:"Bentley",models:["Arnage","Azure","Brooklands","Continental","Corniche","Eight","Mulsanne","Turbo R"]},{brand:"BMW",models:["128i","135i","135is","318i","318iC","318iS","318ti","320i","323ci","323i","323is","323iT","325Ci","325e","325es","325i","325is","325iX","325xi","328Ci","328i","328iS","328xi","330Ci","330i","330xi","335d","335i","335is","335xi","ActiveHybrid 3","325","524td","525i","525xi","528e","528i","528iT","528xi","530i","530iT","530xi","533i","535i","535i Gran Turismo","535xi","540i","545i","550i","550i Gran Turismo","ActiveHybrid 5","633CSi","635CSi","640i","640i Gran Coupe","645Ci","650i","650i Gran Coupe","L6","733i","735i","735iL","740i","740iL","740Li","745i","745Li","750i","750iL","750Li","760i","760Li","ActiveHybrid 7","Alpina B7","840Ci","850Ci","850CSi","850i","L7","1 Series M","M Coupe","M Roadster","M3","M5","M6","X5 M","X6 M","ActiveHybrid X6","X1","X3","X5","X6","Z3","Z4","Z8"]},{brand:"Buick",models:["Century","Electra","Enclave","Encore","LaCrosse","Le Sabre","Lucerne","Park Avenue","Rainier","Reatta","Regal","Rendezvous","Riviera","Roadmaster","Skyhawk","Skylark","Somerset","Terraza","Verano"]},{brand:"Cadillac",models:["Allante","ATS","Brougham","Catera","Cimarron","CTS","De Ville","DTS","Eldorado","Escalade","Escalade ESV","Escalade EXT","Fleetwood","Seville","SRX","STS","XLR","XTS"]},{brand:"Chevrolet",models:["Astro","Avalanche","Aveo","Aveo5","Beretta","Blazer","Camaro","Caprice","Captiva Sport","Cavalier","Celebrity","Chevette","Citation","Cobalt","Colorado","Corsica","Corvette","Cruze","El Camino","Equinox","Express Van","G Van","HHR","Impala","Kodiak C4500","Lumina","Lumina APV","LUV","Malibu","Metro","Monte Carlo","Nova","Prizm","S10 Blazer","S10 Pickup","Silverado and other C/K1500","Silverado and other C/K2500","Silverado and other C/K3500","Sonic","Spark","Spectrum","Sprint","SSR","Suburban","Tahoe","Tracker","TrailBlazer","TrailBlazer EXT","Traverse","Uplander","Venture","Volt"]},{brand:"Chrysler",models:["200","300","300M","Aspen","Caravan","Cirrus","Concorde","Conquest","Cordoba","Crossfire","E Class","Fifth Avenue","Grand Voyager","Imperial","Intrepid","Laser","LeBaron","LHS","Neon","New Yorker","Newport","Pacifica","Prowler","PT Cruiser","Sebring","TC by Maserati","Town &amp; Country","Voyager"]},{brand:"Daewoo",models:["Lanos","Leganza","Nubira"]},{brand:"Daihatsu",models:["Charade","Rocky"]},{brand:"Datsun",models:["200SX","210","280ZX","300ZX","310","510","720","810","Maxima","Pickup","Pulsar","Sentra","Stanza"]},{brand:"DeLorean",models:["DMC-12"]},{brand:"Dodge",models:["400","600","Aries","Avenger","Caliber","Caravan","Challenger","Charger","Colt","Conquest","D/W Truck","Dakota","Dart","Daytona","Diplomat","Durango","Dynasty","Grand Caravan","Intrepid","Journey","Lancer","Magnum","Mirada","Monaco","Neon","Nitro","Omni","Raider","Ram 1500 Truck","Ram 2500 Truck","Ram 3500 Truck","Ram 4500 Truck","Ram 50 Truck","RAM C/V","Ram SRT-10","Ram Van","Ram Wagon","Ramcharger","Rampage","Shadow","Spirit","Sprinter","SRT-4","St. Regis","Stealth","Stratus","Viper"]},{brand:"Eagle",models:["Medallion","Premier","Summit","Talon","Vision"]},{brand:"Ferrari",models:["308 GTB Quattrovalvole","308 GTBI","308 GTS Quattrovalvole","308 GTSI","328 GTB","328 GTS","348 GTB","348 GTS","348 Spider","348 TB","348 TS","360","456 GT","456M GT","458 Italia","512 BBi","512M","512TR","550 Maranello","575M Maranello","599 GTB Fiorano","599 GTO","612 Scaglietti","California","Enzo","F355","F40","F430","F50","FF","Mondial","Testarossa"]},{brand:"FIAT",models:["2000 Spider","500","Bertone X1/9","Brava","Pininfarina Spider","Strada","X1/9"]},{brand:"Fisker",models:["Karma"]},{brand:"Ford",models:["Aerostar","Aspire","Bronco","Bronco II","C-MAX","Club Wagon","Contour","Courier","Crown Victoria","E-150 and Econoline 150","E-250 and Econoline 250","E-350 and Econoline 350","Edge","Escape","Escort","Excursion","EXP","Expedition","Expedition EL","Explorer","Explorer Sport Trac","F100","F150","F250","F350","F450","Fairmont","Festiva","Fiesta","Five Hundred","Flex","Focus","Freestar","Freestyle","Fusion","Granada","GT","LTD","Mustang","Probe","Ranger","Taurus","Taurus X","Tempo","Thunderbird","Transit Connect","Windstar","ZX2 Escort"]},{brand:"Freightliner",models:["Sprinter"]},{brand:"Geo",models:["Metro","Prizm","Spectrum","Storm","Tracker"]},{brand:"GMC",models:["Acadia","Caballero","Canyon","Envoy","Envoy XL","Envoy XUV","Jimmy","Rally Wagon","S15 Jimmy","S15 Pickup","Safari","Savana","Sierra C/K1500","Sierra C/K2500","Sierra C/K3500","Sonoma","Suburban","Syclone","Terrain","TopKick C4500","Typhoon","Vandura","Yukon","Yukon XL"]},{brand:"Honda",models:["Accord","Civic","CR-V","CR-Z","CRX","Accord Crosstour","Crosstour","Del Sol","Element","Fit","Insight","Odyssey","Passport","Pilot","Prelude","Ridgeline","S2000"]},{brand:"HUMMER",models:["H1","H2","H3","H3T"]},{brand:"Hyundai",models:["Accent","Azera","Elantra","Elantra Coupe","Elantra Touring","Entourage","Equus","Excel","Genesis","Genesis Coupe","Santa Fe","Scoupe","Sonata","Tiburon","Tucson","Veloster","Veracruz","XG300","XG350"]},{brand:"Infiniti",models:["EX35","EX37","FX35","FX37","FX45","FX50","G20","G25","G35","G37","I30","I35","J30","JX35","M30","M35","M35h","M37","M45","M56","Q45","QX4","QX56"]},{brand:"Isuzu",models:["Amigo","Ascender","Axiom","Hombre","i-280","i-290","i-350","i-370","I-Mark","Impulse","Oasis","Pickup","Rodeo","Stylus","Trooper","Trooper II","VehiCROSS"]},{brand:"Jaguar",models:["S-Type","X-Type","XF","XJ12","XJ6","XJR","XJR-S","XJS","XJ Vanden Plas","XJ","XJ8","XJ8 L","XJ Sport","XK8","XK","XKR"]},{brand:"Jeep",models:["Cherokee","CJ","Comanche","Commander","Compass","Grand Cherokee","Grand Wagoneer","Liberty","Patriot","Pickup","Scrambler","Wagoneer","Wrangler"]},{brand:"Kia",models:["Amanti","Borrego","Forte","Forte Koup","Optima","Rio","Rio5","Rondo","Sedona","Sephia","Sorento","Soul","Spectra","Spectra5","Sportage"]},{brand:"Lamborghini",models:["Aventador","Countach","Diablo","Gallardo","Jalpa","LM002","Murcielago"]},{brand:"Lancia",models:["Beta","Zagato"]},{brand:"Land Rover",models:["Defender","Discovery","Freelander","LR2","LR3","LR4","Range Rover","Range Rover Evoque","Range Rover Sport"]},{brand:"Lexus",models:["CT 200h","ES 250","ES 300","ES 300h","ES 330","ES 350","GS 300","GS 350","GS 400","GS 430","GS 450h","GS 460","GX 460","GX 470","HS 250h","IS 250","IS 250C","IS 300","IS 350","IS 350C","IS F","LFA","LS 400","LS 430","LS 460","LS 600h","LX 450","LX 470","LX 570","RX 300","RX 330","RX 350","RX 400h","RX 450h","SC 300","SC 400","SC 430"]},{brand:"Lincoln",models:["Aviator","Blackwood","Continental","LS","Mark LT","Mark VI","Mark VII","Mark VIII","MKS","MKT","MKX","MKZ","Navigator","Navigator L","Town Car","Zephyr"]},{brand:"Lotus",models:["Elan","Elise","Esprit","Evora","Exige"]},{brand:"Maserati",models:["430","Biturbo","Coupe","GranSport","GranTurismo","Quattroporte","Spyder"]},{brand:"Maybach",models:["57","62"]},{brand:"Mazda",models:["323","626","929","B-Series Pickup","CX-5","CX-7","CX-9","GLC","MAZDA2","MAZDA3","MAZDA5","MAZDA6","MAZDASPEED3","MAZDASPEED6","Miata MX5","Millenia","MPV","MX3","MX6","Navajo","Protege","Protege5","RX-7","RX-8","Tribute"]},{brand:"McLaren",models:["MP4-12C"]},{brand:"Mercedes-Benz",models:["190D","190E","240D","300CD","300CE","300D","300E","300TD","300TE","C220","C230","C240","C250","C280","C300","C320","C32 AMG","C350","C36 AMG","C43 AMG","C55 AMG","C63 AMG","CL500","CL550","CL55 AMG","CL600","CL63 AMG","CL65 AMG","CLK320","CLK350","CLK430","CLK500","CLK550","CLK55 AMG","CLK63 AMG","CLS500","CLS550","CLS55 AMG","CLS63 AMG","260E","280CE","280E","400E","500E","E300","E320","E320 Bluetec","E320 CDI","E350","E350 Bluetec","E400 Hybrid","E420","E430","E500","E550","E55 AMG","E63 AMG","G500","G550","G55 AMG","G63 AMG","GL320 Bluetec","GL320 CDI","GL350 Bluetec","GL450","GL550","GLK350","ML320","ML320 Bluetec","ML320 CDI","ML350","ML350 Bluetec","ML430","ML450 Hybrid","ML500","ML550","ML55 AMG","ML63 AMG","R320 Bluetec","R320 CDI","R350","R350 Bluetec","R500","R63 AMG","300SD","300SDL","300SE","300SEL","350SD","350SDL","380SE","380SEC","380SEL","400SE","400SEL","420SEL","500SEC","500SEL","560SEC","560SEL","600SEC","600SEL","S320","S350","S350 Bluetec","S400 Hybrid","S420","S430","S500","S550","S55 AMG","S600","S63 AMG","S65 AMG","300SL","380SL","380SLC","500SL","560SL","600SL","SL320","SL500","SL550","SL55 AMG","SL600","SL63 AMG","SL65 AMG","SLK230","SLK250","SLK280","SLK300","SLK320","SLK32 AMG","SLK350","SLK55 AMG","SLR","SLS AMG","Sprinter"]},{brand:"Mercury",models:["Capri","Cougar","Grand Marquis","Lynx","Marauder","Mariner","Marquis","Milan","Montego","Monterey","Mountaineer","Mystique","Sable","Topaz","Tracer","Villager","Zephyr"]},{brand:"Merkur",models:["Scorpio","XR4Ti"]},{brand:"MINI",models:["Cooper Clubman","Cooper S Clubman","Cooper Countryman","Cooper S Countryman","Cooper Coupe","Cooper S Coupe","Cooper","Cooper S","Cooper Roadster","Cooper S Roadster"]},{brand:"Mitsubishi",models:["3000GT","Cordia","Diamante","Eclipse","Endeavor","Expo","Galant","i","Lancer","Lancer Evolution","Mighty Max","Mirage","Montero","Montero Sport","Outlander","Outlander Sport","Precis","Raider","Sigma","Starion","Tredia","Van"]},{brand:"Nissan",models:["200SX","240SX","300ZX","350Z","370Z","Altima","Armada","Axxess","Cube","Frontier","GT-R","Juke","Leaf","Maxima","Murano","Murano CrossCabriolet","NV","NX","Pathfinder","Pickup","Pulsar","Quest","Rogue","Sentra","Stanza","Titan","Van","Versa","Xterra"]},{brand:"Oldsmobile",models:["88","Achieva","Alero","Aurora","Bravada","Custom Cruiser","Cutlass","Cutlass Calais","Cutlass Ciera","Cutlass Supreme","Firenza","Intrigue","Ninety-Eight","Omega","Regency","Silhouette","Toronado"]},{brand:"Peugeot",models:["405","504","505","604"]},{brand:"Plymouth",models:["Acclaim","Arrow","Breeze","Caravelle","Champ","Colt","Conquest","Gran Fury","Grand Voyager","Horizon","Laser","Neon","Prowler","Reliant","Sapporo","Scamp","Sundance","Trailduster","Voyager"]},{brand:"Pontiac",models:["1000","6000","Aztek","Bonneville","Catalina","Fiero","Firebird","G3","G5","G6","G8","Grand Am","Grand Prix","GTO","J2000","Le Mans","Montana","Parisienne","Phoenix","Safari","Solstice","Sunbird","Sunfire","Torrent","Trans Sport","Vibe"]},{brand:"Porsche",models:["911","924","928","944","968","Boxster","Carrera GT","Cayenne","Cayman","Panamera"]},{brand:"RAM",models:["1500","2500","3500","4500"]},{brand:"Renault",models:["18i","Fuego","Le Car","R18","Sportwagon"]},{brand:"Rolls-Royce",models:["Camargue","Corniche","Ghost","Park Ward","Phantom","Silver Dawn","Silver Seraph","Silver Spirit","Silver Spur"]},{brand:"Saab",models:["9-2X","9-3","9-4X","9-5","9-7X","900","9000"]},{brand:"Saturn",models:["Astra","Aura","ION","L100","L200","L300","LS","LW1","LW2","LW200","LW300","Outlook","Relay","SC1","SC2","Sky","SL","SL1","SL2","SW1","SW2","Vue"]},{brand:"Scion",models:["FR-S","iQ","tC","xA","xB","xD"]},{brand:"smart",models:["fortwo"]},{brand:"SRT",models:["Viper"]},{brand:"Sterling",models:["825","827"]},{brand:"Subaru",models:["Baja","Brat","BRZ","Forester","Impreza","Impreza WRX","Justy","L Series","Legacy","Loyale","Outback","SVX","Tribeca","XT","XV Crosstrek"]},{brand:"Suzuki",models:["Aerio","Equator","Esteem","Forenza","Grand Vitara","Kizashi","Reno","Samurai","Sidekick","Swift","SX4","Verona","Vitara","X-90","XL7"]},{brand:"Tesla",models:["Roadster","Model S"]},{brand:"Toyota",models:["4Runner","Avalon","Camry","Celica","Corolla","Corona","Cressida","Echo","FJ Cruiser","Highlander","Land Cruiser","Matrix","MR2","MR2 Spyder","Paseo","Pickup","Previa","Prius","Prius C","Prius V","RAV4","Sequoia","Sienna","Solara","Starlet","Supra","T100","Tacoma","Tercel","Tundra","Van","Venza","Yaris"]},{brand:"Triumph",models:["TR7","TR8"]},{brand:"Volkswagen",models:["Beetle","Cabrio","Cabriolet","CC","Corrado","Dasher","Eos","Eurovan","Fox","GLI","Golf R","GTI","Golf","Rabbit","Jetta","Passat","Phaeton","Pickup","Quantum","R32","Routan","Scirocco","Tiguan","Touareg","Vanagon"]},{brand:"Volvo",models:["240","260","740","760","780","850","940","960","C30","C70","S40","S60","S70","S80","S90","V40","V50","V70","V90","XC60","XC70","XC90"]},{brand:"Yugo",models:["GV","GVC","GVL","GVS","GVX"]}]},438:function(e,a,t){var r=this&&this.__awaiter||function(e,a,t,r){return new(t||(t=Promise))((function(n,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(o,s)}d((r=r.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.resetRace=a.startRace=a.switchToDriveMode=a.startCarEngine=a.animateCar=a.createRandomCars=a.createCar=a.updateCar=a.handleCarsAction=a.renderCars=a.renderCarCard=void 0;const n=t(330),i=t(818),o=t(696),s=t(119),d=t(820);let u,c,l,g=[],p=!1;function m({id:e,name:a,color:t}){const r=document.createElement("div");return r.classList.add("car-card"),r.setAttribute("data-car-id",String(e)),r.innerHTML=`\n  <div class="car-card-wrapper">\n    <div class="car-card-name">${a}</div>\n    <div class="car-card-pic" data-img-id="${e}">\n      <i class="fas fa-car-side" style="color: ${t};"></i>\n    </div>\n    <div class="car-card-flag" data-flag-id="${e}">\n      <i class="fas fa-flag-checkered"></i>\n    </div>\n  </div>\n  <div class="car-card-buttons">\n    <button class="car-card-button car-card-button-select" data-select-id="${e}" data-select-name="${a}" data-select-color="${t}">Select</button>\n    <button class="car-card-button car-card-button-remove" data-remove-id="${e}">Remove</button>\n    <button class="car-card-button car-card-button-start" data-start-id="${e}">Start (A)</button>\n    <button class="car-card-button car-card-button-stop" data-stop-id="${e}" disabled>Stop (B)</button>\n  </div>`,r}function C(){return r(this,void 0,void 0,(function*(){p=!1,yield(0,o.getCars)(),n.garageCount.textContent=i.appState.carsAmount,n.garageCurrentPageNum.textContent=String(i.appState.garagePageCurrent),1===i.appState.garagePageCurrent?n.garagePrev.disabled=!0:n.garagePrev.disabled=!1,Number(i.appState.carsAmount)/i.appState.garagePageLimit<=i.appState.garagePageCurrent?n.garageNext.disabled=!0:n.garageNext.disabled=!1,n.garageInner.innerHTML="";for(let e=0;e<i.appState.cars.length;e++)n.garageInner.append(m(i.appState.cars[e]));u=n.garageInner.querySelectorAll(".car-card-button-start"),c=n.garageInner.querySelectorAll(".car-card-button-stop"),l=n.garageInner.querySelectorAll(".car-card-pic");for(let e=0;e<u.length;e++)u[e].onclick=()=>{u[e].disabled=!0,h(Number(u[e].getAttribute("data-start-id")),e)},c[e].onclick=()=>r(this,void 0,void 0,(function*(){200===(yield(0,o.stopEngineApi)(Number(c[e].getAttribute("data-stop-id")))).status&&(g[e].cancel(),c[e].disabled=!0,u[e].disabled=!1)}))}))}function S(e,a){return r(this,void 0,void 0,(function*(){c[a].disabled=!1,g[a]=l[a].animate([{left:0},{left:"calc(100% - 60px)"}],{fill:"forwards",duration:e})}))}function h(e,a){return r(this,void 0,void 0,(function*(){const t=yield(0,o.startCarEngineApi)(e);if(200===t.status){const r=t.result.distance/t.result.velocity;return S(r,a),yield v(t.result,e,a),{id:e,name:i.appState.cars[a].name,color:i.appState.cars[a].color,speed:t.result.velocity,wins:1,time:+(r/1e3).toFixed(2)}}return null}))}function v(e,a,t){return r(this,void 0,void 0,(function*(){const e=yield(0,o.switchToDrive)(a);return new Promise((a=>{500===e&&g[t].pause(),200===e&&a()}))}))}a.renderCarCard=m,a.renderCars=C,a.handleCarsAction=function(e){return r(this,void 0,void 0,(function*(){const a=e.target;a.hasAttribute("data-remove-id")&&(yield(0,o.removeCar)(a.getAttribute("data-remove-id")),yield(0,o.removeWinner)(a.getAttribute("data-remove-id")),C(),(0,d.renderWinners)()),a.hasAttribute("data-select-id")&&(n.garageUpdateInput.value=a.getAttribute("data-select-name"),n.garageUpdateColor.value=a.getAttribute("data-select-color"),n.garageUpdateButton.setAttribute("data-update-id",a.getAttribute("data-select-id")))}))},a.updateCar=function(){return r(this,void 0,void 0,(function*(){if(n.garageUpdateButton.hasAttribute("data-update-id"))if(0===n.garageUpdateInput.value.length)n.garageUpdateInput.classList.add("border-error"),n.garageUpdateInput.placeholder="No input",setTimeout((()=>{n.garageUpdateInput.classList.remove("border-error"),n.garageUpdateInput.placeholder=""}),1200);else{const e=n.garageUpdateButton.getAttribute("data-update-id");n.garageUpdateButton.removeAttribute("data-update-id"),yield(0,o.updateCarApi)(e),C()}else n.garageUpdateInput.classList.add("border-error"),n.garageUpdateInput.value="No car selected",setTimeout((()=>{n.garageUpdateInput.classList.remove("border-error"),n.garageUpdateInput.value=""}),1200)}))},a.createCar=function(){return r(this,void 0,void 0,(function*(){0===n.garageCreateInput.value.length?(n.garageCreateInput.classList.add("border-error"),n.garageCreateInput.placeholder="No input",setTimeout((()=>{n.garageCreateInput.classList.remove("border-error"),n.garageCreateInput.placeholder=""}),1200)):(yield(0,o.generateCar)(n.garageCreateInput.value,n.garageCreateColor.value),C())}))},a.createRandomCars=function(){return r(this,void 0,void 0,(function*(){let e=[];for(let a=0;a<100;a+=1)e.push((0,o.generateCar)((0,s.getRandomName)(),(0,s.getRandomColor)()));Promise.all(e).then((()=>{C()}))}))},a.animateCar=S,a.startCarEngine=h,a.switchToDriveMode=v,a.startRace=function(){return r(this,void 0,void 0,(function*(){const e=document.querySelectorAll("header button, .garage-controls button, .garage-pagination button, .car-card-button-remove, .car-card-button-select");e.forEach((e=>{e.disabled=!0})),setTimeout((()=>{e.forEach((e=>{e.disabled=!1}))}),5e3);let a=[];for(let e=0;e<u.length;e++)u[e].disabled=!0,a.push(h(Number(u[e].getAttribute("data-start-id")),e));p=!0;const t=yield Promise.race(a);t&&p&&function(e){r(this,void 0,void 0,(function*(){n.winnerPopup.innerHTML=`\n  <h2>Winner</h2>\n  <p>${e.name} went first with ${e.time} sec.</p>`,n.winnerPopup.classList.remove("hide"),setTimeout((()=>{n.winnerPopup.classList.add("hide")}),2e3),yield function(e){return r(this,void 0,void 0,(function*(){const a=yield(0,o.getWinner)(e.id);200===a.status?(a.result.wins+=1,e.time&&e.time>a.result.time&&(e.time=a.result.time),e.wins=a.result.wins,yield function(e){return r(this,void 0,void 0,(function*(){const a={id:e.id,wins:e.wins,time:e.time};yield(0,o.updateWinnerApi)(a)}))}(e)):yield function(e){return r(this,void 0,void 0,(function*(){const a={id:e.id,wins:1,time:e.time};yield(0,o.createWinnerApi)(a)}))}(e),(0,d.renderWinners)()}))}(e)}))}(t)}))},a.resetRace=function(){return r(this,void 0,void 0,(function*(){C()}))}},272:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.initHeader=void 0;const r=t(330),n=document.createElement("header"),i=document.createElement("button"),o=document.createElement("button");function s(e,a){e&&e.classList.add("hide"),a&&a.classList.remove("hide")}i.innerHTML='<i class="fas fa-car"></i> Garage',o.innerHTML='<i class="fas fa-medal"></i> Winners',a.initHeader=function(e){n.append(i),n.append(o),i.addEventListener("click",(()=>{s(r.winnersContainer,r.garageContainer)})),o.addEventListener("click",(()=>{s(r.garageContainer,r.winnersContainer)})),e.append(n)}},330:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.initWinners=a.sortTimeButton=a.sortWinsButton=a.sortTimeWrapper=a.sortWinsWrapper=a.winnersInner=a.winnersTopRow=a.winnersNext=a.winnersPrev=a.winnersPagination=a.winnersCurrentPageNum=a.winnersCurrentPage=a.winnersCount=a.winnersHeading=a.winnersContainer=a.initGarage=a.winnerPopup=a.garageInner=a.garageNext=a.garagePrev=a.garagePagination=a.garageCurrentPageNum=a.garageCurrentPage=a.garageCount=a.garageHeading=a.garageGenerateButton=a.garageResetButton=a.garageRaceButton=a.garageUpdateButton=a.garageUpdateColor=a.garageUpdateInput=a.garageCreateButton=a.garageCreateColor=a.garageCreateInput=a.garageControls=a.garageContainer=a.main=void 0;const r=t(438),n=t(818),i=t(905),o=t(820);a.main=document.createElement("main"),a.garageContainer=document.createElement("div"),a.garageControls=document.createElement("div"),a.garageCreateInput=document.createElement("input"),a.garageCreateColor=document.createElement("input"),a.garageCreateButton=document.createElement("button"),a.garageUpdateInput=document.createElement("input"),a.garageUpdateColor=document.createElement("input"),a.garageUpdateButton=document.createElement("button"),a.garageRaceButton=document.createElement("button"),a.garageResetButton=document.createElement("button"),a.garageGenerateButton=document.createElement("button"),a.garageHeading=document.createElement("h2"),a.garageCount=document.createElement("span"),a.garageCurrentPage=document.createElement("h4"),a.garageCurrentPageNum=document.createElement("span"),a.garagePagination=document.createElement("div"),a.garagePrev=document.createElement("button"),a.garageNext=document.createElement("button"),a.garageInner=document.createElement("div"),a.winnerPopup=document.createElement("div"),a.winnerPopup.classList.add("winner-popup","hide"),a.garageCreateButton.textContent="Create",a.garageUpdateButton.textContent="Update",a.garageRaceButton.textContent="Start race",a.garageResetButton.textContent="Reset Race/Cars",a.garageGenerateButton.textContent="Generate Cars",a.garageHeading.innerHTML='<i class="fas fa-car"></i> Garage: ',a.garageCurrentPage.innerHTML="Page #",a.garageCreateInput.type="text",a.garageCreateColor.type="color",a.garageUpdateInput.type="text",a.garageUpdateColor.type="color",a.garageNext.textContent="Next",a.garagePrev.textContent="Prev",a.garageContainer.classList.add("garage-container"),a.garageCount.classList.add("garage-count"),a.garageCurrentPageNum.classList.add("garage-current-page"),a.garageControls.classList.add("garage-controls"),a.garagePagination.classList.add("garage-pagination"),a.garageNext.classList.add("garage-next"),a.garagePrev.classList.add("garage-prev"),a.garageInner.classList.add("garage-inner"),a.initGarage=function(e){a.garageHeading.append(a.garageCount),a.garageCurrentPage.append(a.garageCurrentPageNum),a.garagePagination.append(a.garagePrev,a.garageNext),a.garageCount.textContent=n.appState.carsAmount,a.garageCurrentPageNum.textContent=String(n.appState.garagePageCurrent),a.garageControls.append(a.garageCreateInput,a.garageCreateColor,a.garageCreateButton,a.garageUpdateInput,a.garageUpdateColor,a.garageUpdateButton,a.garageRaceButton,a.garageResetButton,a.garageGenerateButton),a.garageContainer.append(a.garageControls,a.garageHeading,a.garageCurrentPage,a.garagePagination,a.garageInner),a.main.append(a.garageContainer,a.winnerPopup),e.append(a.main),a.garageNext.addEventListener("click",i.handleCarsNext),a.garagePrev.addEventListener("click",i.handleCarsPrev),a.garageCreateButton.addEventListener("click",r.createCar),a.garageUpdateButton.addEventListener("click",r.updateCar),a.garageGenerateButton.addEventListener("click",r.createRandomCars),a.garageInner.addEventListener("click",r.handleCarsAction),a.garageRaceButton.addEventListener("click",r.startRace),a.garageResetButton.addEventListener("click",r.resetRace)},a.winnersContainer=document.createElement("div"),a.winnersHeading=document.createElement("h2"),a.winnersCount=document.createElement("span"),a.winnersCurrentPage=document.createElement("h4"),a.winnersCurrentPageNum=document.createElement("span"),a.winnersPagination=document.createElement("div"),a.winnersPrev=document.createElement("button"),a.winnersNext=document.createElement("button"),a.winnersTopRow=document.createElement("div"),a.winnersInner=document.createElement("div"),a.sortWinsWrapper=document.createElement("div"),a.sortTimeWrapper=document.createElement("div"),a.sortWinsButton=document.createElement("button"),a.sortTimeButton=document.createElement("button"),a.sortWinsButton.textContent="Wins",a.sortWinsButton.setAttribute("data-sorting","wins"),a.sortTimeButton.textContent="Time",a.sortTimeButton.setAttribute("data-sorting","time"),a.sortWinsWrapper.classList.add("winner-header-item","winner-header-wins"),a.sortTimeWrapper.classList.add("winner-header-item","winner-header-time"),a.winnersHeading.innerHTML='<i class="fas fa-medal"></i> Winners: ',a.winnersCurrentPage.innerHTML="Page #",a.winnersNext.textContent="Next",a.winnersPrev.textContent="Prev",a.winnersContainer.classList.add("winners-container","hide"),a.winnersInner.classList.add("winners-inner"),a.winnersCount.classList.add("winners-count"),a.winnersCurrentPageNum.classList.add("winners-current-page"),a.winnersPagination.classList.add("winners-pagination"),a.winnersNext.classList.add("winners-next"),a.winnersPrev.classList.add("winners-prev"),a.winnersTopRow.classList.add("winners-top-row"),a.winnersTopRow.innerHTML='\n<div class="winner-header-item winner-header-num">Number</div>\n<div class="winner-header-item winner-header-car">Car</div>\n<div class="winner-header-item winner-header-name">Name</div>',a.initWinners=function(){a.winnersHeading.append(a.winnersCount),a.winnersCurrentPage.append(a.winnersCurrentPageNum),a.winnersPagination.append(a.winnersPrev,a.winnersNext),a.winnersCount.textContent=n.appState.winnersAmount,a.sortWinsWrapper.append(a.sortWinsButton),a.sortTimeWrapper.append(a.sortTimeButton),a.winnersTopRow.append(a.sortWinsWrapper,a.sortTimeWrapper),a.winnersCurrentPageNum.textContent=String(n.appState.winnersPageCurrent),a.winnersContainer.append(a.winnersHeading,a.winnersCurrentPage,a.winnersPagination,a.winnersTopRow,a.winnersInner),a.main.append(a.winnersContainer),[a.sortWinsButton,a.sortTimeButton].forEach((e=>{e.addEventListener("click",o.sortWinnersTable)})),a.winnersNext.addEventListener("click",i.handleWinnersNext),a.winnersPrev.addEventListener("click",i.handleWinnersPrev)}},905:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.handleWinnersPrev=a.handleWinnersNext=a.handleCarsPrev=a.handleCarsNext=void 0;const r=t(818),n=t(438),i=t(820);a.handleCarsNext=function(){Number(r.appState.carsAmount)/r.appState.garagePageLimit>r.appState.garagePageCurrent&&(r.appState.garagePageCurrent+=1,(0,n.renderCars)())},a.handleCarsPrev=function(){r.appState.garagePageCurrent>1&&(r.appState.garagePageCurrent-=1,(0,n.renderCars)())},a.handleWinnersNext=function(){Number(r.appState.winnersAmount)/r.appState.winnersPageLimit>r.appState.winnersPageCurrent&&(r.appState.winnersPageCurrent+=1,(0,i.renderWinners)())},a.handleWinnersPrev=function(){r.appState.winnersPageCurrent>1&&(r.appState.winnersPageCurrent-=1,(0,i.renderWinners)())}},818:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.appState=void 0,a.appState={cars:[],carsAmount:"0",garagePageCurrent:1,garagePageLimit:7,winners:[],winnersAmount:"0",winnersPageCurrent:1,winnersPageLimit:10,sortOrder:"ASC",sortBy:"time"}},119:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.getRandomColor=a.getRandomName=void 0;const r=t(166);a.getRandomName=function(){const e=r.carModels[Math.floor(Math.random()*r.carModels.length)],a=e.models[Math.floor(Math.random()*e.models.length)];return`${e.brand} ${a}`},a.getRandomColor=function(){const e="0123456789ABCDEF";let a="#";for(let t=0;t<6;t+=1)a+=e[Math.floor(Math.random()*e.length)];return a}},820:function(e,a,t){var r=this&&this.__awaiter||function(e,a,t,r){return new(t||(t=Promise))((function(n,i){function o(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var a;e.done?n(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(o,s)}d((r=r.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.sortWinnersTable=a.renderWinners=a.renderWinnerCard=void 0;const n=t(818),i=t(330),o=t(696);function s(e,{name:a,color:t},{id:r,time:n,wins:i}){const o=document.createElement("div");return o.classList.add("winner-card"),o.setAttribute("data-winner-id",String(r)),o.innerHTML=`<div class="winner-card-item winner-card-num">${e+1}</div>\n  <div class="winner-card-item winner-card-car"><i class="fas fa-car-side" style="color: ${t};"></i></div>\n  <div class="winner-card-item winner-card-name">${a}</div>\n  <div class="winner-card-item winner-card-wins">${i}</div>\n  <div class="winner-card-item winner-card-time">${n}</div>`,o}function d(){return r(this,void 0,void 0,(function*(){yield(0,o.getWinners)(),i.winnersCount.textContent=n.appState.winnersAmount,i.winnersCurrentPageNum.textContent=String(n.appState.winnersPageCurrent),1===n.appState.winnersPageCurrent?i.winnersPrev.disabled=!0:i.winnersPrev.disabled=!1,Number(n.appState.winnersAmount)/n.appState.winnersPageLimit<=n.appState.winnersPageCurrent?i.winnersNext.disabled=!0:i.winnersNext.disabled=!1,i.winnersInner.innerHTML="";for(let e=0;e<n.appState.winners.length;e++){const a=yield(0,o.getCarData)(n.appState.winners[e].id);i.winnersInner.append(s(e,a,n.appState.winners[e]))}}))}a.renderWinnerCard=s,a.renderWinners=d,a.sortWinnersTable=function(e){const a=e.target.dataset.sorting;n.appState.sortBy=a,"ASC"===n.appState.sortOrder?n.appState.sortOrder="DESC":n.appState.sortOrder="ASC",d()}}},a={};function t(r){var n=a[r];if(void 0!==n)return n.exports;var i=a[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(728),(new(t(439).App)).start(document.body),console.log('Hello! Current self-check: 190 of 190.\n\nDone:\n5\tThere should be two views on the site: "Garage" and "Winners".\n5\tGarage" view should contain its name, page number, and the full amount of items in the database (how many car user has in his garage).\n5\tWinners" view should contain its name, page number, and the full amount of items in the database (how many records the winners table contains\n10\tView state should be saved when user switches from one view to another. For example, page number shouldn\'t be reset, input controls should contain that they contained before switching, etc.\n15\tUser should be able to create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners”\n10\tUser should be able to select any color from an RGB-Palete like here and see the picture of the car colored with the color selected and car\'s name\n5\tNear the car\'s picture should be buttons to update its attributes or delete it\n10\tThere should be pagination on the "Garage" view (7 cars per one page)\n10\tThere should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.\n5\tNear the car\'s picture should be buttons for starting / stoping the car engine.\n5\tUser clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it\'s initial place\n5\tStart engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it\'s initial place\n15\tCar animation should work fine on any screen (smallest screen size is 500px)\n10\tThere should be a button to start race. After user clicks this button all the cars on the current page start driving\n10\tThere should be a button to reset race. After user clicks this button all the cars return to it\'s initial places.\n20\tUser clicks to the engine start button -> UI is waiting for car\'s velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.\n10\tAfter some car finishes first user should see the message contains car\'s name that shows which one has won\n10\tTable should include the next culumns: "№", "Image of the car", "Name of the car", "Wins number", "Best time in seconds" (names of the columns can differ). If the same car wins more than once the number of wins should be incremented while best time should be saved only if it\'s better than the stored one\n5\tThere should be pagination (10 winners per one page)\n10\tUser should be able to sort cars by wins number and by best time (ASC, DESC)\n')})();