import reactImg from '../../assets/react.svg';
import './Header.css';

const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandom(max){
    return Math.floor(Math.random()*(max+1));
}
export default function Header(){
    const description = reactDescriptions[genRandom(2)];

    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essential</h1>
          <p>{description} React concepts you will need for almost any app you are going to build !</p>
      </header>
    );
}
