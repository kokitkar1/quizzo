import { Link } from 'react-router-dom';
import Quuizimage from '../assets/Ikbal 5.png';
import Quuizimage2 from '../assets/Other 11.png';
import Quuizimage3 from '../assets/Badrun 5.png';
import Quuizimage4 from '../assets/Other 08.png';
import Quuizimage5 from '../assets/Marni 3.png';
import Quuizimage6 from '../assets/Other 15.png';
const Quiz = () => {
  return (
    <div className="flex flex-col p-3 m-4 gap-4">
<div className="flex flex-col sm:flex-row w-full items-center bg-slate-400 rounded-2xl p-3 bg-opacity-70">
        <div className="w-full sm:w-1/2 flex gap-3">
          <div className="w-full">
            <img src={Quuizimage} alt="stock-quiz" className="w-full h-auto sm:w-65 sm:h-65" />
          </div>
          <div className="w-full">
            <img src={Quuizimage2} alt="stock-quiz" className="w-full h-auto sm:w-65 sm:h-65" />
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 gap-3 items-center">
          <h1 className="text-center text-3xl font-semibold sm:text-left">Filler text for joining quiz</h1>
          <Link to="/Fantasyquiz">
            <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
              Join Quiz
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full items-center bg-gray-400 rounded-2xl p-3 bg-opacity-70">
        <div className="w-full sm:w-1/2 flex gap-3">
          <div className="w-full">
            <img src={Quuizimage4} alt="stock-quiz" className="w-full h-auto sm:w-65 sm:h-65" />
          </div>
          <div className="w-full">
            <img src={Quuizimage3} alt="stock-quiz" className="w-full h-auto sm:w-65 sm:h-65" />
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 gap-3 items-center">
          <h1 className="text-center text-3xl font-semibold sm:text-left">Filler text for joining quiz</h1>
          <Link to="/Fantasyquiz1">
            <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
              Join Quiz
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full items-center  bg-slate-400 rounded-2xl p-3 bg-opacity-70">
        <div className="w-full sm:w-1/2 flex gap-3">
          <div className="w-full">
            <img src={Quuizimage5} alt="stock-quiz" className="w-full h-auto sm:w-65 sm:h-65" />
          </div>
          <div className="w-full">
            <img src={Quuizimage6} alt="stock-quiz" className="w-full h-auto sm:w-65 sm:h-65" />
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 gap-3 items-center">
          <h1 className="text-center text-3xl font-semibold sm:text-left">Filler text for joining quiz</h1>
          <Link to="/Fantasyquiz2">
            <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
              Join Quiz
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Quiz;




// import { Link } from 'react-router-dom';
// import Quuizimage from '../assets/Ikbal 5.png';
// import Quuizimage2 from '../assets/Other 11.png';
// import Quuizimage3 from '../assets/Badrun 5.png';
// import Quuizimage4 from '../assets/Other 08.png';
// import Quuizimage5 from '../assets/Marni 3.png';
// import Quuizimage6 from '../assets/Other 15.png';
// const Quiz=()=>{
//   return(
//     <div className="flex flex-col p-3 m-4 gap-4">

//       <div className="flex items-center w-full">
//         <div className="flex w-1/2">
//           <div className='w-full'>
//             <img src={Quuizimage} alt="stock-quiz" className="w-full h-auto sm:w-60 sm:h-60" />
//           </div>
//           <div className='w-full'>
//             <img src={Quuizimage2} alt="stock-quiz" className="w-full h-auto sm:w-60 sm:h-60" />
//           </div>
//         </div>
//         <div className="flex flex-col w-1/2 gap-3 items-center">
//           <h1 className="text-center sm:text-left">Filler text for joining quiz</h1>
//           <Link to="/Fantasyquiz">
//             <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
//               Join Quiz
//             </button>
//           </Link>
//         </div>
//       </div>



//       <div className="flex items-center w-full">
//         <div className="flex w-1/2">
//           <div className='w-full'>
//             <img src={Quuizimage4} alt="stock-quiz" className="w-full h-auto sm:w-60 sm:h-60" />
//           </div>
//           <div className='w-full'>
//             <img src={Quuizimage3} alt="stock-quiz" className="w-full h-auto sm:w-60 sm:h-60" />
//           </div>
//         </div>
//         <div className="flex flex-col w-1/2 gap-3 items-center">
//           <h1 className="text-center sm:text-left">Filler text for joining quiz</h1>
//           <Link to="/Fantasyquiz1">
//             <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
//               Join Quiz
//             </button>
//           </Link>
//         </div>
//       </div>


//       <div className="flex items-center w-full">
//         <div className="flex w-1/2">
//           <div className='w-full'>
//             <img src={Quuizimage5} alt="stock-quiz" className="w-full h-auto sm:w-60 sm:h-60" />
//           </div>
//           <div className='w-full'>
//             <img src={Quuizimage6} alt="stock-quiz" className="w-full h-auto sm:w-60 sm:h-60" />
//           </div>
//         </div>
//         <div className="flex flex-col w-1/2 gap-3 items-center">
//           <h1 className="text-center sm:text-left">Filler text for joining quiz</h1>
//           <Link to="/Fantasyquiz2">
//             <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
//               Join Quiz
//             </button>
//           </Link>
//         </div>
//       </div>


//     </div>
//   );
// };
// export default Quiz;