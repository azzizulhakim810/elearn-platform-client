

import { Link } from "react-router-dom";
import { DefaultAccordion } from '../../components/Accordion/DefaultAccordion';
import { IoDocumentTextSharp  } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdPreview } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";
import { MdGeneratingTokens } from "react-icons/md";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

const Home = () => {



  return (
    <div>
      {/* Hero Section  */}
      <div
        className="hero h-[100vh] -mt-24"
        style={{
          backgroundImage: "url(https://i.ibb.co/dfLxV9s/home-bg-one-course-1.jpg)", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat: "no-repeat"
        }}
      >
          <div className=" text-left w-11/12">
          <div className="w-8/12">
            <div>
            <h1 className="mb-5 text-3xl md:text-5xl font-normal text-white">
            Create, Share & Submit 
            </h1>
            <p className="mb-8 uppercase text-white text-6xl font-bold">
            Assignment
            </p>
           <Link to='/allAssignments'>
           <button className="rounded-3xl bg-purple-600 hover:bg-white text-white hover:text-purple-600 py-3 px-8 text-center align-middle font-sans text-base font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] "
      type="button">
              Explore
            </button>
           </Link>

           
            </div>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className="py-10">
      <h1 className="text-base pt-6 text-center tracking-widest text-gray-500 font-medium">
        THERE ARE A FEW
        </h1>
        
        <h1 className="text-5xl text-center pb-8 tracking-widest font-bold ">
        OUR FEATURE
        </h1>
        

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto">
       





    <div className="w-full bg-transparent border-2 border-s-purple-50 rounded-md overflow-hidden shadow-lg ">
      <div className="px-10 py-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="text-4xl text-purple-500"><AiFillThunderbolt /></div>
        </div>
        <div className="text-2xl font-bold mb-2 text-gray-800">Real-Time Collaboration</div>
        <p className="text-gray-600 text-base">Enable real-time collaboration on assignments where multiple users can work on the same assignment simultaneously.</p>
      </div>
    </div>

    <div className="w-full  bg-transparent border-2 border-s-purple-50  rounded-md overflow-hidden shadow-lg">
      <div className="px-10 py-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="text-4xl text-purple-500"><IoDocumentTextSharp  /></div>
        </div>
        <div className="text-2xl font-bold mb-2 text-gray-800">Assignment Management</div>
        <p className="text-gray-600 text-base">The Assignment Management feature group focuses on providing users to create, update, and manage assignments.</p>
      </div>
    </div>

    <div className="w-full  bg-transparent border-2 border-s-purple-50 rounded-md overflow-hidden shadow-lg">
      <div className="px-10 py-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="text-4xl text-purple-500"><MdPreview /></div>
        </div>
        <div className="text-2xl font-bold mb-2 text-gray-800">Peer Review System</div>
        <p className="text-gray-600 text-base">Introduce a peer review system where users can review and provide feedback on assignments submitted by their peers.</p>
      </div>
    </div>
    <div className="w-full  bg-transparent border-2 border-s-purple-50 rounded-md overflow-hidden shadow-lg ">
      <div className="px-10 py-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="text-4xl text-purple-500"><MdOutlineCastForEducation /></div>
        </div>
        <div className="text-2xl font-bold mb-2 text-gray-800">Study Groups</div>
        <p className="text-gray-600 text-base">Allow users to create or join study groups where they can collaborate on assignments, discuss topics, and share resources.</p>
      </div>
    </div>
    <div className="w-full  bg-transparent border-2 border-s-purple-50 rounded-md overflow-hidden shadow-lg">
      <div className="px-10 py-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="text-4xl text-purple-500"><FaUserShield  /></div>
        </div>
        <div className="text-2xl font-bold mb-2 text-gray-800">User Registration</div>
        <p className="text-gray-600 text-base">Users can register for an account by providing essential information, including name, photoURL, email, and password using Firebase authentication.</p>
      </div>
    </div>
    <div className="w-full  bg-transparent border-2 border-s-purple-50 rounded-md overflow-hidden shadow-lg">
      <div className="px-10 py-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="text-4xl text-purple-500"><MdGeneratingTokens  /></div>
        </div>
        <div className="text-2xl font-bold mb-2 text-gray-800">JWT Token Implementation</div>
        <p className="text-gray-600 text-base">Upon login, a JWT token is generated and stored on the client-side, enhancing security during API calls.</p>
      </div>
    </div>







      </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12">

        <h1 className="text-base text-center tracking-widest text-gray-500 font-medium">
        ALL YOU NEED TO KNOW
        </h1>
        
        <h1 className="text-5xl text-center pb-20 tracking-widest font-bold ">
        FREQUENTLY ASKED QUESTIONS
        </h1>

        {/* accordion  */}
        <div className="md:w-8/12 w-10/12 mx-auto" >
          <DefaultAccordion></DefaultAccordion>

        </div>
      </div>

     {/* Our Feature Section  */}
     <div>
     <div className="hero h-[200px] md:h-[250px] bg-purple-600 mt-5" style={{backgroundImage: 'url(https://i.ibb.co/0mMnGqq/newsletter.png)'}}>
  <div className="hero-overlay bg-opacity-10 "></div>
  <div className=" text-neutral-content w-10/12">
    <div className="grid md:grid-cols-2 grid-cols-1 justify-between">

      <div  className="flex text-4xl items-center text-white gap-3">
      <BsEnvelopeOpenHeart />
      <h1 className="font-semibold">
Subscribe to Newsletter</h1>
      </div>

      <div className="relative h-10 w-10/12 mx-auto">
    <div className="absolute top-2/4 right-3 grid h-10 w-10 -translate-y-1/4 place-items-center text-4xl text-blue-gray-500 text-purple-600">
    <IoIosSend />
    </div>
    <input
      className="peer h-14 w-full rounded-[7px] bg-white border px-3 py-6 !pr-9 font-sans text-base font-normal text-blue-gray-700 outline outline-0 text-purple-600"
      placeholder="Enter your email address "
    />
    
  </div>
    </div>
  </div>
</div>
     </div>



      
    </div>
  );
};

export default Home;
