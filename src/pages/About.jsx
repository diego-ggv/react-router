import vanTent from '../assets/images/van-tent.png'
import {Link} from 'react-router-dom';

function About() {
  return (
      <main className="about">
        <img className="about__img"
             src={vanTent}
             alt="van with a rooftop tent" />
        <div className="about__container">
          <h1>Don't squeeze in a sedan when you could relax in an Element.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel
             van rental. Our vans are re-certified before each trip to ensure
             your travel plans can go off without a hitch. (Hitch costs extra
             😉) Our team is full of van-life enthusiasts who know firsthand the
             magic of touring the world on 4 wheels.</p>

          <div className="about__banner">
            <h3>Your destination is waiting. <br />
                Your van is ready.</h3>
            <Link className="link__button" to="/vans">Explore our vans</Link>
          </div>
        </div>
      </main>
  )
}

export default About