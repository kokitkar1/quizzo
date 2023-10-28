import About from "./About.jsx";
import SignIn from "./SignIn.jsx";
import OurValues from './OurValues.jsx';
import Quiz from "./Quiz.jsx";
import stockimage from '../assets/Stock_Market.png';

const Home = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="w-full md:w-1/2 lg:w-1/2 md:mr-4 lg:mr-4 mb-4 md:mb-0 lg:mb-0">
          <SignIn />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img src={stockimage} alt="stock-quiz" className="w-full h-auto" />
        </div>
      </div>
      <About />
      <OurValues />
      <Quiz />
    </div>
  );
};

export default Home;



// import About from "./About.jsx"
// import SignIn from "./SignIn.jsx"
// import OurValues from './OurValues.jsx'
// import Quiz from "./Quiz.jsx"
// import stockimage from '../assets/Stock_Market.png'

// const Home = () => {
//   return (
//     <div>
//       <div className="flex">
//         <div className=" mx-auto  w-auto">
//         <SignIn/>
//         </div>
//         <div>
//           <img src={stockimage} alt="stock-quiz"  />
//         </div>
//       </div>
//         <About/>
//         <OurValues />
//         <Quiz/>
//     </div>
//   )
// }

// export default Home



