import { AppState, LightsWrapper } from './storage';

export function renderLights() {
  LightsWrapper.innerHTML = '';
  if (AppState.lightsOn) {
    LightsWrapper.innerHTML = `<ul class="lights-layer" style="width: 120px; height: 120px;">
    <li class="${AppState.lights}" style="transform: rotate(65deg) translate(58px) rotate(-65deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(77deg) translate(58px) rotate(-77deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(89deg) translate(58px) rotate(-89deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(101deg) translate(58px) rotate(-101deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(113deg) translate(58px) rotate(-113deg);"></li>
  </ul>
  <ul class="lights-layer" style="width: 170px; height: 170px;">
    <li class="${AppState.lights}" style="transform: rotate(60deg) translate(83px) rotate(-60deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(70deg) translate(83px) rotate(-70deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(80deg) translate(83px) rotate(-80deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(90deg) translate(83px) rotate(-90deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(100deg) translate(83px) rotate(-100deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(110deg) translate(83px) rotate(-110deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(120deg) translate(83px) rotate(-120deg);"></li>
  </ul>
  <ul class="lights-layer" style="width: 230px; height: 230px;">
    <li class="${AppState.lights}" style="transform: rotate(60deg) translate(113px) rotate(-60deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(68deg) translate(113px) rotate(-68deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(76deg) translate(113px) rotate(-76deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(84deg) translate(113px) rotate(-84deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(92deg) translate(113px) rotate(-92deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(100deg) translate(113px) rotate(-100deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(108deg) translate(113px) rotate(-108deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(116deg) translate(113px) rotate(-116deg);"></li>
  </ul>
  <ul class="lights-layer" style="width: 300px; height: 300px;">
    <li class="${AppState.lights}" style="transform: rotate(60deg) translate(148px) rotate(-60deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(66deg) translate(148px) rotate(-66deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(72deg) translate(148px) rotate(-72deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(78deg) translate(148px) rotate(-78deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(84deg) translate(148px) rotate(-84deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(90deg) translate(148px) rotate(-90deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(96deg) translate(148px) rotate(-96deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(102deg) translate(148px) rotate(-102deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(108deg) translate(148px) rotate(-108deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(114deg) translate(148px) rotate(-114deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(120deg) translate(148px) rotate(-120deg);"></li>
  </ul>
  <ul class="lights-layer" style="width: 380px; height: 380px;">
    <li class="${AppState.lights}" style="transform: rotate(55deg) translate(188px) rotate(-55deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(59deg) translate(188px) rotate(-59deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(63deg) translate(188px) rotate(-63deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(67deg) translate(188px) rotate(-67deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(71deg) translate(188px) rotate(-71deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(75deg) translate(188px) rotate(-75deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(79deg) translate(188px) rotate(-79deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(83deg) translate(188px) rotate(-83deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(87deg) translate(188px) rotate(-87deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(91deg) translate(188px) rotate(-91deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(95deg) translate(188px) rotate(-95deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(99deg) translate(188px) rotate(-99deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(103deg) translate(188px) rotate(-103deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(107deg) translate(188px) rotate(-107deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(111deg) translate(188px) rotate(-111deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(115deg) translate(188px) rotate(-115deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(119deg) translate(188px) rotate(-119deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(123deg) translate(188px) rotate(-123deg);"></li>
  </ul>
  <ul class="lights-layer" style="width: 465px; height: 465px;">
    <li class="${AppState.lights}" style="transform: rotate(55deg) translate(230px) rotate(-55deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(58.5deg) translate(230px) rotate(-58.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(62deg) translate(230px) rotate(-62deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(65.5deg) translate(230px) rotate(-65.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(69deg) translate(230px) rotate(-69deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(72.5deg) translate(230px) rotate(-72.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(76deg) translate(230px) rotate(-76deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(79.5deg) translate(230px) rotate(-79.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(83deg) translate(230px) rotate(-83deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(86.5deg) translate(230px) rotate(-86.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(90deg) translate(230px) rotate(-90deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(93.5deg) translate(230px) rotate(-93.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(97deg) translate(230px) rotate(-97deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(100.5deg) translate(230px) rotate(-100.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(104deg) translate(230px) rotate(-104deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(107.5deg) translate(230px) rotate(-107.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(111deg) translate(230px) rotate(-111deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(114.5deg) translate(230px) rotate(-114.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(118deg) translate(230px) rotate(-118deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(121.5deg) translate(230px) rotate(-121.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(125deg) translate(230px) rotate(-125deg);"></li>
  </ul>
  <ul class="lights-layer" style="width: 555px; height: 555px;">
    <li class="${AppState.lights}" style="transform: rotate(58deg) translate(275px) rotate(-58deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(61deg) translate(275px) rotate(-61deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(64deg) translate(275px) rotate(-64deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(67deg) translate(275px) rotate(-67deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(70deg) translate(275px) rotate(-70deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(73deg) translate(275px) rotate(-73deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(76deg) translate(275px) rotate(-76deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(79deg) translate(275px) rotate(-79deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(82deg) translate(275px) rotate(-82deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(85deg) translate(275px) rotate(-85deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(88deg) translate(275px) rotate(-88deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(91deg) translate(275px) rotate(-91deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(94deg) translate(275px) rotate(-94deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(97deg) translate(275px) rotate(-97deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(100deg) translate(275px) rotate(-100deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(103deg) translate(275px) rotate(-103deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(106deg) translate(275px) rotate(-106deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(109deg) translate(275px) rotate(-109deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(112deg) translate(275px) rotate(-112deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(115deg) translate(275px) rotate(-115deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(118deg) translate(275px) rotate(-118deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(121deg) translate(275px) rotate(-121deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(124deg) translate(275px) rotate(-124deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(127deg) translate(275px) rotate(-127deg);"></li>
  </ul>
  <ul class="lights-layer" style="width: 650px; height: 650px;">
    <li class="${AppState.lights}" style="transform: rotate(58deg) translate(323px) rotate(-58deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(60.5deg) translate(323px) rotate(-60.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(63deg) translate(323px) rotate(-63deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(65.5deg) translate(323px) rotate(-65.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(68deg) translate(323px) rotate(-68deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(70.5deg) translate(323px) rotate(-70.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(73deg) translate(323px) rotate(-73deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(75.5deg) translate(323px) rotate(-75.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(78deg) translate(323px) rotate(-78deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(80.5deg) translate(323px) rotate(-80.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(83deg) translate(323px) rotate(-83deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(85.5deg) translate(323px) rotate(-85.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(88deg) translate(323px) rotate(-88deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(90.5deg) translate(323px) rotate(-90.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(93deg) translate(323px) rotate(-93deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(95.5deg) translate(323px) rotate(-95.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(98deg) translate(323px) rotate(-98deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(100.5deg) translate(323px) rotate(-100.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(103deg) translate(323px) rotate(-103deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(105.5deg) translate(323px) rotate(-105.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(108deg) translate(323px) rotate(-108deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(110.5deg) translate(323px) rotate(-110.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(113deg) translate(323px) rotate(-113deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(115.5deg) translate(323px) rotate(-115.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(118deg) translate(323px) rotate(-118deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(120.5deg) translate(323px) rotate(-120.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(123deg) translate(323px) rotate(-123deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(125.5deg) translate(323px) rotate(-125.5deg);"></li>
    <li class="${AppState.lights}" style="transform: rotate(128deg) translate(323px) rotate(-128deg);"></li>
  </ul>`;
  }
}
