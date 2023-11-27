import React from 'react';
import Quuizimage10 from '../assets/img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Subscriptions = () => {

  return (
    <div className='justify-center text-center mt-9 '>
      <h4>
      <p><span style={{ fontWeight: 'bold',fontSize: '3em',fontFamily: 'Merriweather', textAlign: 'right' }}>Start now your</span></p>
      <p> <span style={{ fontWeight: 'bold' , fontSize: '2em',fontFamily: 'Merriweather', wordSpacing:"10px", textAlign: 'right'}}> customized plan</span></p>
        </h4>
  
    <div className="flex flex-wrap justify-center">
      <div className="bg-purple-500 text-white p-4 rounded-lg md:w-96 ml-8 mt-4  mr-4 md:mt-20 relative">
        <p className="text-2xl mb-2">Your Career</p>
        <p className="text-2xl font-bold">Starts here</p>
        <p className="text-sm text-center md:text-left px-4">
           <p> Quizzo: Affordable Access to Engaging and Educational Quizzes '</p>
           <p>At Quizzo, we believe that education should be accessible and affordable. That's why we </p> 
           <p>offer two simple and transparent pricing plans to fit your needs and budget:</p>
           {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
           <p> Excepteur sint occaecat cupidatat non proide laborum'</p> */}
          
        </p>
        <div className="flex justify-center items-center">
          <img
            src={Quuizimage10}
            alt="stock-quiz"
            className="w-48 h-48"
          />
        </div>
      </div>

      <div className="bg-white text-black p-20 rounded-lg md:w-96 ml-4 mt-4 mr-20 md:mt-20 relative">
        <p className="text-2xl font-bold absolute top-2 left-2">Monthly</p>
        <p className="text-2xl font-bold absolute top-2 right-2">₹ 149/- Only</p>
        <div className="px-4 mt-20 md:mt-0">
          <p className="text-lg font-bold">Plan includes:</p>
          <div className="text-left mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-black mr-2"
            />
            Unlimited access to all quizzes
          </div>
          <div className="text-left mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-black mr-2"
            />
            {`Personalized recommendations based on your progress.`}
          </div>
          <div className="text-left">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-black mr-2"
            />
           Track your performance with detailed analytics

          </div>
        </div>
        <button className="bg-purple-500 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 absolute bottom-0 left-10 right-10 mx-auto mb-4">
          Start your monthly plan
        </button>
      </div>

      <div className="bg-pink-500 text-white p-20 rounded-lg md:w-96 ml-4  pt-50px mr-30 mt-4 md:mt-20 relative">
        <p className="text-2xl font-bold absolute top-2 left-2">Yearly</p>
        <p className="text-2xl font-bold absolute top-2 right-2">₹ 999/- Only</p>
        <div className="px-4 mt-20 md:mt-0">
          <p className="text-lg font-bold">Plan includes:</p>
          <div className="text-left mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-black mr-2"
            />
           Save over 50% off the monthly plan
          </div>
          <div className="text-left mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-black mr-2"
            />
            {`All the benefits of the monthly plan, plus:`}
          </div>
          <div className="text-left">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-black mr-2"
            />
        Priority access to new quizzes

          </div>
          <div className="text-left">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-black mr-2"
            />
      Exclusive discounts on educational resources

          </div>
        </div>
        <button className="bg-white text-black rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 absolute bottom-0 left-10 right-10 mx-auto mb-4">
          Start your annual plan
        </button>
      </div>
    </div>
    </div>
  );
};

export default Subscriptions;

















// import React from 'react';
// import Quuizimage10 from '../assets/img.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// const Subscriptions=()=>{
//   const isMobile=window.innerWidth <= 768;
//   const boxStyle = {
//     backgroundColor: '#FF33BE', // Default background color
//     color: '#fff',
//     padding: '10px 20px 10px 10px',
//     borderRadius: '10px',
//     width:isMobile ? '100%' : '400px',
//     textTransform: 'uppercase',
//     width: '400px',
//     margin: '4px',
//     borderTop: 'none',
//     marginBottom: '10px',
//     textAlign: 'center',
//   };
// const tallBoxStyle1={
//     ...boxStyle,
//     height: '600px',
//     marginTop: '20px',
//     height: isMobile ? 'auto' : '600px',
//     backgroundColor: '#9932CC', 
//     fontFamily: 'Serif',
//     textAlign: 'left', // Align the text to the right
//   };
// const tallBoxStyle2={
//     ...boxStyle,
//     height: '500px',
//     marginTop: '110px',
//     height: isMobile ? 'auto' : '500px',
//     backgroundColor: '#F8F8FF', 
//     color: 'black',// Background color for the second box
//     position:'relative',
//     fontfamily: "Tahoma, Verdana, sans-serif"
//   };
// const tallBoxStyle3={
//     ...boxStyle,
//     height: '500px',
//     marginTop: '110px',
//     height: isMobile ? 'auto' : '500px',
//     backgroundColor: '	#BA55D3',
//     color: 'white' // Background color for the third box
//   };
//   const capitalizeFirstLetter = (text) => {
//     return text.replace(/\b\w/g, (match) => match.toUpperCase());
//   };
//  return(
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: isMobile ? 'column' : 'row', 
//         alignItems: 'center',
//         margin: '4px',
//       }}
//     >
//     <div>
// <div style={{ ...tallBoxStyle1, marginLeft: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//   <p style={{ fontSize: '25px', marginBottom: '5px' }}>Your Career</p>
//   <p style={{ fontSize: '25px', fontWeight: 'bold' }}>Starts here</p>
//     <p style={{ fontSize: '12px', textAlignLast: 'center', marginRight:'20px',marginLeft:'20px'}}> 
//     {capitalizeFirstLetter(
//     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque officia quae eius harum quia dolorem sit minima et in eos illo ipsa soluta, odio quam, veniam fugiat tempore expedita pariatur aliquid ducimus. Itaque animi similique aspernatur. Doloribus sit assumenda enim totam a. Reiciendis tempora, autem est neque necessitatibus repellat nostrum repellendus sapiente ea, alias eius harum ratione at laudantium facere quod ullam itaque? Quia debitis, corrupti nam voluptatibus quis quidem temporibus possimus, porro delectus fugiat incidunt, itaque vel vero blanditiis.'
//     )}
//     </p>
//     <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
//     <img src={Quuizimage10} alt="stock-quiz" style={{ width: '200px', height: '200px' }} />
//           </div>
//         </div>
//         </div>
//         <div>
//       <div style={{ ...tallBoxStyle2, marginLeft: '20px' }}>
        
//         <div style={{ position: 'sticky', bottom: '0' }}>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         </div>
//          <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
//             <p style={{ fontSize: '20px', textAlignLast: 'center', fontWeight: 'bold' ,}}>Monthly</p>
//             </div>
//             <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
//                 <p style={{ fontSize: '20px', fontWeight: 'bold' }}>₹ 149/  -Only</p>
//               </div>
//                 <div style={{ margin: '20px 0', left: '20px', textAlign: 'left'}}>
//               <p style={{ fontSize: '15px', fontWeight: 'bold', paddingTop: "50px"}}>Plan includes:</p>
//                </div>
              
//                         <div style={{ textAlign: 'left',marginBottom: '20px' }}>
//                   <FontAwesomeIcon icon={faCheckCircle} style={{ color:'black', marginRight:'20px' }} />
//                   Lorem ipsum dolor sit amet 
//                 </div>
//                 <div style={{ textAlign: 'left',marginBottom: '20px'  }}>
//                   <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'black', marginRight: '20px' }} />
//                   {`Lorem ipsum dolor sit ame.`.toLowerCase()}
//                 </div>
//                 <div style={{ textAlign: 'left' ,marginBottom: '20px'}}>
//                   <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'black', marginRight: '20px' }} />
//                   consectetur, adipisicing elit.
//                 </div>
            
//         {/* <div style={{ textAlign: 'left', padding: '150px 0', display: 'flex', alignItems: 'center' }}>
//       <i className="fa fa-check-circle" style={{ color: 'green', marginRight: '80px' }}></i>
//       see all features.
//       </div> */}
//         <button className='bg-purple-500 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80' style={{ margin:'150px 0' }}>Start your monthly plan</button>
//         </div>
//         </div>
        
//       </div>
//       <div>
//       <div style={{ ...tallBoxStyle3, marginLeft: '20px' }}>
//       <div style={{ position: 'sticky', bottom: '0'}}>
//       <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
//         <p style={{ fontSize: '20px', textAlignLast: 'center', fontWeight: 'bold' ,}}>Yearly</p>
//         </div>
//         <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
//             <p style={{ fontSize: '20px', fontWeight: 'bold' }}> ₹ 999/  -Only</p>
//           </div>
//         <div style={{ margin: '20px 0', left: '20px', textAlign: 'left' }}>
//           <p style={{ fontSize: '15px', fontWeight: 'bold', paddingTop: "50px" }}>Plan includes:</p>
//         </div>
        
//         <div style={{ textAlign: 'left',marginBottom: '20px' }}>
//   <FontAwesomeIcon icon={faCheckCircle} style={{ color:'black', marginRight:'20px' }} />
//   Lorem ipsum dolor sit amet 

//     </div>
//     <div style={{ textAlign: 'left',marginBottom: '20px'  }}>
//       <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'black', marginRight: '20px' }} />
//       {`Lorem ipsum dolor sit ame.`.toLowerCase()}
//     </div>
//     <div style={{ textAlign: 'left',marginBottom: '20px' }}>
//       <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'black', marginRight: '20px' }} />
//       consectetur, adipisicing elit.
//     </div>

//         <button className='bg-white text-black rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80' style={{ margin: '150px 0' }}>Start your annual plan</button>
//     </div>
//       </div>
//       </div>
//     </div>
//   );
// };
// export default Subscriptions;
