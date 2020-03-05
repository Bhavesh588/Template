import '../css/main.scss';
import { RandomGenerator } from './random-generator';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger(1, 500);
};

const buttonRadInt = document.querySelector('#randomInt');
const buttonRadRange = document.querySelector('#randomRange');

buttonRadInt.addEventListener('click', outputRandomInt);
buttonRadRange.addEventListener('click', outputRandomRange);