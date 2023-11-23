import { useLoaderData } from "react-router-dom";
import ShowEachAssignment from "../ShowEachAssignment/ShowEachAssignment";
import { useEffect, useState } from "react";
import ShowEachFilteredAssignment from "../ShowEachAssignment/ShowEachFilteredAssignment";


const AllAssignments = () => {
 
  const allAssignments = useLoaderData();
  // console.log(allAssignments);
  // const [loadAssignments, setLoadAssignments] = useState();


/*   allAssignments?.map(eachOne => setLoadAssignments(eachOne))
  console.log(loadAssignments); */
/* useEffect(() => {
  fetch('http://localhost:5000/assignment')
  .then(res => res.json())
  .then(data => setLoadAssignments(data))

  allAssignments?.map(eachOne => setLoadAssignments(eachOne))
}, []) */



/* const handleChange = e => {
  console.log(e.target.value)

} */

const [selectedLevel, setSelectedLevel] = useState('all'); // Default to 'all' to show all assignments
const [assignments, setAssignments] = useState([]);

  // Simulating fetching assignments from the database
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      // Example API call
      const response = await fetch('http://localhost:5000/assignment');
      const data = await response.json();
      setAssignments(data);
    };

    fetchData();
  }, []);
  // console.log(selectedLevel,assignments);

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
      <div className="w-10/12 mx-auto pt-5 pb-3 grid grid-cols-6 gap-2 align-middle items-center">
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
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-5 pt-5 pb-20">
        {/* {
          allAssignments?.map(assignment => <ShowEachAssignment key={assignment._id} assignment={assignment}></ShowEachAssignment>)
        } */}

        {
          selectedLevel === 'all' ? allAssignments?.map(assignment => <ShowEachAssignment key={assignment._id} assignment={assignment}></ShowEachAssignment>)
          : 
          filteredAssignments?.map(eachOne => <ShowEachFilteredAssignment key={eachOne._id} eachOne={eachOne}></ShowEachFilteredAssignment>)
        }

        {/* {
          filteredAssignments?.map(eachOne => <ShowEachFilteredAssignment key={eachOne._id} eachOne={eachOne}></ShowEachFilteredAssignment>)
        } */}
      </div>
    </div>
  );
};

export default AllAssignments;