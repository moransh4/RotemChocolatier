import React, {useEffect} from 'react';
import Header from "../components/header/Header.js";
import Cards from '../components/card/Cards.js';
import Footer from '../components/footer/Footer.js';
import Intro from '../components/Intro/Intro.js';
import Gallery from '../components/gallery/Gallery.js';
import Reviews from '../components/reviews/Reviews.js';

const Home = () => {
  // const [backendData , setBackendData] = useState([{}])

  useEffect(() => {
    // fetch("/api").then(
    //   response => response.json()
    // ).then(
    //   data => {
    //     setBackendData(data)
    //   }
    // )

    // getAllWorsshopsData();

  }, [])



// function getAllWorsshopsData(){
//   fetch("/GetAllWorsshopsData")
//   .then(response => response)
//   .then(data => {
//       console.log("Received data:", data);
//       // Process the data as needed
//   })
//   .catch(error => console.error("Error fetching data:", error));
// }


return (<div className="page">
        <Header/>
        <Intro/>
        <Cards/>
        <Gallery id="home"/>
        <Reviews/>
        <Footer/>
    </div>)
  }
  
  
export default Home;