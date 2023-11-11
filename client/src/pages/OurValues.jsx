import icon1 from '../assets/Icon_1.png';
import icon2 from '../assets/Icon_2.png';
import icon3 from '../assets/Icon_3.png';

const OurValues = () => {
  return (
    <div className='mb-9'>
      <h4 className='text-4xl text-center my-7 font-bold'>Why Choose Us</h4>

      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-9 lg:space-x-9 mx-3">
        <div className="text-left">
          <img src={icon1} alt="Icon" className='h-25 w-25 object-cover mx-auto' />
          <h3 className='text-lg font-semibold my-6'>Interactive Learning:</h3>
          <p>We believe in the power of interaction. Our quizzes are crafted to ensure you not only grasp the concepts but enjoy the learning process.</p>
        </div>

        <div className="text-left">
          <img src={icon2} alt="Icon" className='h-25 w-25 object-cover mx-auto' />
          <h3 className='text-lg font-semibold my-6'>Tailored to Your Needs:</h3>
          <p> Say goodbye to generic quizzes. Our platform aligns with your school curriculum, providing targeted assessments to enhance your understanding of subjects.</p>
        </div>

        <div className="text-left">
          <img src={icon3} alt="Icon" className='h-25 w-25 object-cover mx-auto' />
          <h3 className='text-lg font-semibold my-6'>User-Friendly Interface: </h3>
          <p>Navigating through the quizzes is a breeze. We've designed our platform with simplicity in mind, ensuring a seamless learning experience for users of all ages.</p>
        </div>
      </div>
    </div>
  );
}

export default OurValues;






















// import icon1 from '../assets/Icon_1.png'
// import icon2 from '../assets/Icon_2.png'
// import icon3 from '../assets/Icon_3.png'


// const OurValues = () => {
//   return (
//     <div className='mb-9'>
//       <h4 className='text-5xl text-center my-7 font-bold'>Our Values</h4>

//       <div className="flex justify-between space-x-9 mx-3">
//         <div className="text-center" >
//           <img src={icon1} alt="Icon" className='h-25 w-25 object-cover mx-auto' />
//           <h3 className=' text-lg font-semibold my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque ex sint eum voluptatibus rerum.</h3>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non in, eos at voluptatibus nam tenetur ex distinctio iusto dolorum obcaecati. Amet aliquid qui, quas illo consequuntur quos earum ut totam.</p>
//         </div>

//         <div className="text-center">
//         <img src={icon2} alt="Icon" className='h-25 w-25 object-cover mx-auto' />
//         <h3 className=' text-lg font-semibold my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque ex sint eum voluptatibus rerum.</h3>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non in, eos at voluptatibus nam tenetur ex distinctio iusto dolorum obcaecati. Amet aliquid qui, quas illo consequuntur quos earum ut totam.</p>
//         </div>

//         <div className="text-center">
//         <img src={icon3} alt="Icon"  className='h-25 w-25 object-cover mx-auto' />
//         <h3 className=' text-lg font-semibold my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque ex sint eum voluptatibus rerum.</h3>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non in, eos at voluptatibus nam tenetur ex distinctio iusto dolorum obcaecati. Amet aliquid qui, quas illo consequuntur quos earum ut totam.</p>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default OurValues