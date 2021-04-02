import UniClock from './component';
import styled from 'styled-components';

const transformHourHand = ({hoursDegree = 0}) => `rotate(${hoursDegree}deg)`;
const transformMinuteHand = ({minutesDegree = 0}) =>
  `rotate(${minutesDegree}deg)`;
const transformSecondsHand = ({secondsDegree = 0}) =>
  `rotate(${secondsDegree}deg)`;

const StyledUniClock = styled(UniClock)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bbb;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  .clock {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
  }
  .clock-circles {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    font-size: 300px;
  }
  .clock-circles__item {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    font-size: 100%;
  }
  .clock-circles__item:nth-child(1) {
    background-image: linear-gradient(
      to bottom,
      #00c0ff,
      #ffcf00,
      #fc4f4f,
      #0e22c3
    );
    box-shadow: 0px 30px 40px 0px rgba(72, 30, 202, 0.2);
  }
  .clock-circles__item:nth-child(2) {
    background-image: linear-gradient(to bottom, #027fff, #491bc9);
    font-size: 95%;
    box-shadow: 0px 10px 20px 0px rgba(42, 17, 121, 0.5);
  }
  .clock-circles__item:nth-child(3) {
    font-size: 80%;
    box-shadow: inset 0px 20px 40px rgba(0, 0, 0, 0.1),
      inset 0px 0px 40px rgba(37, 13, 105, 0.55), 0px 5px 0px #5430ff,
      0px -1px 0px 3px rgba(14, 29, 169, 0.35);
  }
  .clock-circles__item:nth-child(4) {
    background: #3349c9;
    font-size: 35px;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 1px rgba(54, 21, 148, 0.3);
  }
  .clock-circles__item:nth-child(4) .wave {
    position: absolute;
    width: 1em;
    height: 1em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid #fff;
    font-size: 100%;
  }
  .clock-circles__item:nth-child(4) .wave:nth-child(1) {
    opacity: 0;
  }
  .clock-circles__item:nth-child(4) .wave:nth-child(2) {
    font-size: 210%;
    opacity: 0.1;
  }
  .clock-circles__item:nth-child(4) .wave:nth-child(3) {
    font-size: 320%;
    opacity: 0.1;
  }
  .clock-circles__item:nth-child(4) .wave:nth-child(4) {
    font-size: 430%;
    opacity: 0.1;
  }
  .clock-circles__item:nth-child(4) .wave:nth-child(5) {
    font-size: 600%;
    opacity: 0.3;
    border-color: #321e9a;
  }

  .clock-indicators {
    position: absolute;
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    border-radius: 50%;
  }
  .clock-indicators__item {
    position: absolute;
    left: calc(50% - 2px);
    width: 2px;
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center;
    z-index: 2;
    border-radius: 1px;
    background: none;
    height: 108px;
    top: 10px;
    opacity: 0.5;
  }
  .clock-indicators__item:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 7px;
    background: #fff;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  .clock-indicators__item:nth-child(1),
  .clock-indicators__item:nth-child(3),
  .clock-indicators__item:nth-child(5),
  .clock-indicators__item:nth-child(7) {
    opacity: 1;
    width: 8px;
  }
  .clock-indicators__item:nth-child(1):after,
  .clock-indicators__item:nth-child(3):after,
  .clock-indicators__item:nth-child(5):after,
  .clock-indicators__item:nth-child(7):after {
    height: 10px;
    width: 6px;
  }
  .clock-indicators__item:nth-of-type(1) {
    transform: rotateZ(calc(45deg * 1));
  }
  .clock-indicators__item:nth-of-type(2) {
    transform: rotateZ(calc(45deg * 2));
  }
  .clock-indicators__item:nth-of-type(3) {
    transform: rotateZ(calc(45deg * 3));
  }
  .clock-indicators__item:nth-of-type(4) {
    transform: rotateZ(calc(45deg * 4));
  }
  .clock-indicators__item:nth-of-type(5) {
    transform: rotateZ(calc(45deg * 5));
  }
  .clock-indicators__item:nth-of-type(6) {
    transform: rotateZ(calc(45deg * 6));
  }
  .clock-indicators__item:nth-of-type(7) {
    transform: rotateZ(calc(45deg * 7));
  }
  .clock-indicators__item:nth-of-type(8) {
    transform: rotateZ(calc(45deg * 8));
  }
  .clock-indicators__item:nth-of-type(9) {
    transform: rotateZ(calc(45deg * 9));
  }
  .clock-indicators__item:nth-of-type(10) {
    transform: rotateZ(calc(45deg * 10));
  }
  .clock-indicators__item:nth-of-type(11) {
    transform: rotateZ(calc(45deg * 11));
  }
  .clock-indicators__item:nth-of-type(12) {
    transform: rotateZ(calc(45deg * 12));
  }
  .clock-indicators__item:nth-of-type(13) {
    transform: rotateZ(calc(45deg * 13));
  }
  .clock-indicators__item:nth-of-type(14) {
    transform: rotateZ(calc(45deg * 14));
  }
  .clock-indicators__item:nth-of-type(15) {
    transform: rotateZ(calc(45deg * 15));
  }
  .clock-indicators__item:nth-of-type(16) {
    transform: rotateZ(calc(45deg * 16));
  }
  .clock-indicators__item:nth-of-type(17) {
    transform: rotateZ(calc(45deg * 17));
  }
  .clock-indicators__item:nth-of-type(18) {
    transform: rotateZ(calc(45deg * 18));
  }
  .clock-indicators__item:nth-of-type(19) {
    transform: rotateZ(calc(45deg * 19));
  }
  .clock-indicators__item:nth-of-type(20) {
    transform: rotateZ(calc(45deg * 20));
  }
  .clock-indicators__item:nth-of-type(21) {
    transform: rotateZ(calc(45deg * 21));
  }
  .clock-indicators__item:nth-of-type(22) {
    transform: rotateZ(calc(45deg * 22));
  }
  .clock-indicators__item:nth-of-type(23) {
    transform: rotateZ(calc(45deg * 23));
  }
  .clock-indicators__item:nth-of-type(24) {
    transform: rotateZ(calc(45deg * 24));
  }
  .clock-indicators__item:nth-of-type(25) {
    transform: rotateZ(calc(45deg * 25));
  }
  .clock-indicators__item:nth-of-type(26) {
    transform: rotateZ(calc(45deg * 26));
  }
  .clock-indicators__item:nth-of-type(27) {
    transform: rotateZ(calc(45deg * 27));
  }
  .clock-indicators__item:nth-of-type(28) {
    transform: rotateZ(calc(45deg * 28));
  }
  .clock-indicators__item:nth-of-type(29) {
    transform: rotateZ(calc(45deg * 29));
  }
  .clock-indicators__item:nth-of-type(30) {
    transform: rotateZ(calc(45deg * 30));
  }
  .clock-indicators__item:nth-of-type(31) {
    transform: rotateZ(calc(45deg * 31));
  }
  .clock-indicators__item:nth-of-type(32) {
    transform: rotateZ(calc(45deg * 32));
  }
  .clock-indicators__item:nth-of-type(33) {
    transform: rotateZ(calc(45deg * 33));
  }
  .clock-indicators__item:nth-of-type(34) {
    transform: rotateZ(calc(45deg * 34));
  }
  .clock-indicators__item:nth-of-type(35) {
    transform: rotateZ(calc(45deg * 35));
  }
  .clock-indicators__item:nth-of-type(36) {
    transform: rotateZ(calc(45deg * 36));
  }
  .clock-indicators__item:nth-of-type(37) {
    transform: rotateZ(calc(45deg * 37));
  }
  .clock-indicators__item:nth-of-type(38) {
    transform: rotateZ(calc(45deg * 38));
  }
  .clock-indicators__item:nth-of-type(39) {
    transform: rotateZ(calc(45deg * 39));
  }
  .clock-indicators__item:nth-of-type(40) {
    transform: rotateZ(calc(45deg * 40));
  }
  .clock-indicators__item:nth-of-type(41) {
    transform: rotateZ(calc(45deg * 41));
  }
  .clock-indicators__item:nth-of-type(42) {
    transform: rotateZ(calc(45deg * 42));
  }
  .clock-indicators__item:nth-of-type(43) {
    transform: rotateZ(calc(45deg * 43));
  }
  .clock-indicators__item:nth-of-type(44) {
    transform: rotateZ(calc(45deg * 44));
  }
  .clock-indicators__item:nth-of-type(45) {
    transform: rotateZ(calc(45deg * 45));
  }
  .clock-indicators__item:nth-of-type(46) {
    transform: rotateZ(calc(45deg * 46));
  }
  .clock-indicators__item:nth-of-type(47) {
    transform: rotateZ(calc(45deg * 47));
  }
  .clock-indicators__item:nth-of-type(48) {
    transform: rotateZ(calc(45deg * 48));
  }
  .clock-indicators__item:nth-of-type(49) {
    transform: rotateZ(calc(45deg * 49));
  }
  .clock-indicators__item:nth-of-type(50) {
    transform: rotateZ(calc(45deg * 50));
  }
  .clock-indicators__item:nth-of-type(51) {
    transform: rotateZ(calc(45deg * 51));
  }
  .clock-indicators__item:nth-of-type(52) {
    transform: rotateZ(calc(45deg * 52));
  }
  .clock-indicators__item:nth-of-type(53) {
    transform: rotateZ(calc(45deg * 53));
  }
  .clock-indicators__item:nth-of-type(54) {
    transform: rotateZ(calc(45deg * 54));
  }
  .clock-indicators__item:nth-of-type(55) {
    transform: rotateZ(calc(45deg * 55));
  }
  .clock-indicators__item:nth-of-type(56) {
    transform: rotateZ(calc(45deg * 56));
  }
  .clock-indicators__item:nth-of-type(57) {
    transform: rotateZ(calc(45deg * 57));
  }
  .clock-indicators__item:nth-of-type(58) {
    transform: rotateZ(calc(45deg * 58));
  }
  .clock-indicators__item:nth-of-type(59) {
    transform: rotateZ(calc(45deg * 59));
  }
  .clock-indicators__item:nth-of-type(60) {
    transform: rotateZ(calc(45deg * 60));
  }

  .clock-times {
    position: absolute;
    width: 70%;
    height: 70%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .clock-times__second,
  .clock-times__minute,
  .clock-times__hour {
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    background: #f4eed7;
    transform-origin: bottom center;
    top: 5px;
    z-index: 2;
    border-radius: 1px;
  }
  .clock-times__second {
    height: 90px;
    margin-top: 10px;
    /* animation: time 2s linear infinite; */
    transform: rotateZ(100deg);
    transform: ${transformSecondsHand};
    z-index: 3;
    background-image: linear-gradient(to top, #e45753 0%, #ca09e8 100%);
    width: 3px;
    border-radius: 50px;
  }
  .clock-times__minute {
    height: 80px;
    margin-top: 20px;
    opacity: 0.75;
    transform: rotateZ(20deg);
    transform: ${transformMinuteHand};
    /* animation: time 20s linear infinite; */
    /* animation-delay: -35s; */
  }
  .clock-times__hour {
    height: 70px;
    margin-top: 30px;
    width: 5px;
    border-radius: 50px;
    box-shadow: 3px 1px 6px -1px rgba(10, 21, 53, 0.45);
    transform: rotateZ(10deg);
    transform: ${transformHourHand};
    /* animation: time 60s linear infinite; */
    /* animation-delay: -20s; */
  }

  @keyframes time {
    to {
      transform: rotateZ(360deg);
    }
  }
`;

export default StyledUniClock;
