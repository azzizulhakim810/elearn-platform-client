
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DefaultAccordion } from '../../components/Accordion/DefaultAccordion';


const Home = () => {
  // const [brands, setBrands] = useState();
  const [loading, setLoading] = useState(true);
  // const brands = useLoaderData();
  // console.log(brands);

  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch ('brands.json');
      // const data = await res.json();
      // console.log(data);
      // setBrands(data);
      setLoading(false);
    }
    fetchData();
  }, [])
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
           <Link to='/addProduct'>
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
        <h1 className="text-4xl text-center py-3  font-bold">
          Our Feature
        </h1>
        <div className="flex flex-col w-32 mx-auto mb-5">
          <div className="py-[1px] my-3 bg-purple-600"></div>
        </div>
        

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto">
        {
          loading && <span className="loading loading-spinner text-error text-6xl mx-auto flex justify-center items-center py-5 "></span>
        }
      {/* {brands?.map((brand) => (
        <Brands key={brand.id} brand={brand}></Brands>
      ))} */}
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
        {/*   <div className="collapse collapse-plus  py-3 rounded-none my-[1px] ">
            <input type="radio" name="my-accordion-3" className='accordion-item-radio' />
            <div className="collapse-title text-[18px] font-medium bg-gray-100 text-black">
            1. What is your website about?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              Our website is dedicated to all things electronic, including information, reviews, and recommendations for various electronic products.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus  py-3 rounded-none my-[1px] ">
            <input type="radio" name="my-accordion-3" className='accordion-item-radio' />
            <div className="collapse-title text-[18px] font-medium ">
            2. What kind of electronic products do you cover?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              We cover a wide range of electronic products, including smartphones, laptops, home appliances, cameras, audio equipment, and more.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus  py-3 rounded-none my-[1px] ">
            <input type="radio" name="my-accordion-3" className='accordion-item-radio'/>
            <div className="collapse-title text-[18px] font-medium ">
            3. Are the product reviews and recommendations unbiased?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              Yes, we aim to provide unbiased and honest reviews and recommendations. Our goal is to help you make informed decisions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus  py-3 rounded-none my-[1px] ">
            <input type="radio" name="my-accordion-3" className='accordion-item-radio'/>
            <div className="collapse-title text-[18px] font-medium ">
            4. Is my personal information secure on your website?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              We take your privacy seriously. Please review our privacy policy to understand how we handle your personal information.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus  py-3 rounded-none my-[1px] ">
            <input type="radio" name="my-accordion-3" className='accordion-item-radio'/>
            <div className="collapse-title text-[18px] font-medium ">
            5. Can I request reviews for specific products?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              Absolutely! We welcome product review requests. Contact us, and we will do our best to review the product you are interested in.
              </p>
            </div>
          </div> */}

        </div>
      </div>


      
    </div>
  );
};

export default Home;
