import slider1 from './img/slider1.webp';
import slider2 from './img/slider2.jpg';
import slider3 from './img/slider3.webp';
import slider4 from './img/slider4.webp';
import slider5 from './img/slider5.webp';
import David from './img/David.svg';
import Novikow from './img/Novikow.svg';
import Ruslan from './img/Ruslan.svg';

let comments = [
    {
        img: slider2,
        linkedIn: 'https://www.linkedin.com/in/andrei-anoshka-a562a0209/',
        name: 'Андрей Аношко',
        prof: 'BA in ',
        work: 'ByTechSolution',
        linkWork: 'https://www.bytechs.by/',
        descr: 'В профессиональном плане я получил практический опыт системного подхода в разработке программных продуктов, умение проявлять гибкость при изменении ключевых требований к продукту, поиску решений трудных задач, выстраиванию устойчивых и продуктивных коммуникаций между участниками проектной группы. В личном плане я получил ряд новых и знакомств с интересными людьми.',
        star: 5,
    },
    {
        img: slider3,
        linkedIn: 'https://www.linkedin.com/in/e-maltsev/',
        name: 'Евгений Мальцев',
        prof: 'BA in ',
        work: 'Itransition',
        linkWork: 'https://www.itransition.com/',
        descr: 'Советую всем новичкам пройти стажировку. Это укрепит уверенность и даст практические знания. После стажировки каждому будет проще и быстрее схватывать, что конкретно от новичка требуется на проекте',
        star: 4.5,
    },
    {
        img: slider4,
        linkedIn: 'https://www.linkedin.com/in/verkate/',
        name: 'Екатерина Веретенникова',
        prof: 'UX/UI in ',
        work: ' Computer Systems Institute',
        linkWork: 'https://www.csinow.edu/',
        descr: 'Если в данной момент вы нигде не работаете, но желаете поддерживать и совершенствовать практические навыки, а также есть стремление пополнять портфолио, то участие в данной стажировке очень вам пригодиться. Здесь вы будете тренироваться не над выдуманной учебной задачей, а над настоящим проектом, который вот-вот выйдет в свет и принесет свои плоды) А также живое общение с командой - это именно то, что так часто является основой опыта и ценным пунктом при прохождении интервью) Спасибо основателю Александру и команде за предоставленный шанс!',
        star: 4.5,
    },
    {
        img: slider1,
        linkedIn: 'https://www.linkedin.com/in/alehsaroka/',
        name: 'Олег Сорока',
        prof: 'UX/UI designer',
        work: '',
        linkWork: '#',
        descr: 'Мне очень помогло видение разработки продукта с точки зрения бизнеса, т.к дизайнерам постоянно нужно чувствовать этот баланс между удобством пользования и бизнес-задачами. А чтобы видеть-нужно понимать. Также я получил интересный опыт работы в команде дизайнеров.',
        star: 4.5,
    },
    {
        img: slider5,
        linkedIn:
            'https://www.linkedin.com/in/aliaksandr-auchynnikau-95a210194/',
        name: 'Александр Овчинников',
        prof: 'Frontend developer in ',
        work: 'invento-labs',
        linkWork: 'https://invento-labs.com/',
        descr: 'стажировка это очень важно. тут у вас нет такой большой ответственности как на реальной работе, но при этом сами задачи такие же. это позволяет более обширно понять принципы разработки ПО и работы в ИТ. залог успеха это 80% практики и 20% теории, что стажировка восполняет сполна. стажировка позволит вам получить большое преимущество перед теми кто пришел без опыта, так как чтоб компании обучить стажера, приходиться тратить деньги и неизвестно останется ли тот работать. а после прохождения стажировки, кандидаты уже более уверенные в себе, они уже подготовлены, на них надо меньше тратить времени, и вероятность что такой кандидат не уйдет на середине стажировки в компании, очень велика. поэтому таких кандидатов берут чаще на работу, чем тех у кого нет опыта работы в ИТ. да и стажировка помогает развить не только хард скилы, но и софт скилы, которые так же очень важны для ИТ специалиста.',
        star: 5,
    },
];

let videos = [
    {
        link: 'https://www.youtube.com/watch?v=KST8GEDhmBI',
        img: Ruslan,
    },
    {
        link: 'https://www.youtube.com/watch?v=VxlWXEsymGM',
        img: David,
    },
    {
        link: 'https://www.youtube.com/watch?v=hhFYcnwzWEY',
        img: Novikow,
    },
];

let stars = {
    raiting: null,
    allFeebackN: 77, //  Number all Feeback on FeebackGraduates
};

let sumStars = null;
let indexStars = null;
function checkStars() {
    comments.forEach((element, index) => {
        sumStars += element.star;
        indexStars = index + 1;
    });
    stars.raiting = sumStars / indexStars;
}
checkStars();

export default { comments, stars, videos };
