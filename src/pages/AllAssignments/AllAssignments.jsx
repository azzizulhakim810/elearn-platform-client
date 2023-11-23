import { useLoaderData } from "react-router-dom";
import ShowEachAssignment from "../ShowEachAssignment/ShowEachAssignment";
import { useEffect, useState } from "react";
import ShowEachFilteredAssignment from "../ShowEachAssignment/ShowEachFilteredAssignment";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


const AllAssignments = () => {
 
  // const allAssignments = useLoaderData(); 
  const {count} = useLoaderData(); 
  console.log(count);
const [selectedLevel, setSelectedLevel] = useState('all');
const [assignments, setAssignments] = useState([]);
const [allAssignments, setAllAssignments] = useState([]);
const [currentPage, setCurrentPage] = useState(0);
const [itemsPerPage, setItemsPerPage] = useState(3);
// const totalAssignments = totalCount?.count;
// const itemsPerPage = 10;



/* const pages = [];
  console.log(numberOfPages);
  for(let i = 0; i < numberOfPages; i++) {
    // console.log(pages);
    pages.push(i);
  }
  console.log(pages); */


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/assignment?page=${currentPage}&size=${itemsPerPage}`);
      const data = await response.json();
      setAllAssignments(data);
      setAssignments(data);
    };

    fetchData();
  }, [currentPage, itemsPerPage]);
  // console.log(selectedLevel,assignments);

  // Pagination fetch 
/*   useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/assignment');
      const data = await response.json();
      setAllAssignments(data);
    };

    fetchData();
  }, []); */



  const numberOfPages = Math.ceil(count/itemsPerPage);
  console.log(numberOfPages);

  const pages = [...Array(numberOfPages).keys()] ;
  // console.log(pages);

  // Filter assignments based on the selected level
  const filteredAssignments = selectedLevel === 'all'
    ? assignments
    : assignments.filter(assignment => assignment.level === selectedLevel);
    // console.log(filteredAssignments.length);



  return (
    <div>
       <div
        className="hero h-[98px] -mt-24"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/dfLxV9s/home-bg-one-course-1.jpg)",
        }}
      ></div>
      <div className="w-10/12 mx-auto pt-5 pb-3 grid lg:grid-cols-6 grid-cols-3 gap-2 align-middle items-center">
      <h1 className="text-base font-bold col-span-1">Filter By Diffculty Level</h1>
      <label className="input-group col-span-1">
                  <select id="difficultyLevel" value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)} className="input input-bordered  h-10">
                    <option value="all">--Choose an option--</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </label>
      </div>
      <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-5 pb-20">
        

        {
          selectedLevel === 'all' ? allAssignments?.map(assignment => <ShowEachAssignment key={assignment._id} assignment={assignment}></ShowEachAssignment>)
          : 
          filteredAssignments?.map(eachOne => <ShowEachFilteredAssignment key={eachOne._id} eachOne={eachOne}></ShowEachFilteredAssignment>)
        }

        
      </div>
      <div className="flex justify-center pb-3 font-bold">Current Page : {currentPage}</div>
      <div className="flex justify-center pb-10">
        
      <nav>
  <ul className="flex">
  <li>
        <a
          className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          
          aria-label="Previous"
        >
          <button onClick={handlePrevPage} className="material-icons text-sm"><FaArrowLeftLong /></button>
        </a>
      </li>



{/*     <li>
      <a
        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
        href="#"
      >
        2
      </a>
    </li>

    <li>
      <a
        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
        href="#"
      >
        3
      </a>
    </li>
*/}
    <li>
      <a
        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
        
        aria-label="Next"
      >
        <button onClick={handleNextPage} className="material-icons text-sm"><FaArrowRightLong /></button>
      </a>
    </li> 

  
  </ul>
  
</nav>
      </div>
    </div>
  );
};

export default AllAssignments;