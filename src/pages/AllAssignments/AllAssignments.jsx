import { useLoaderData } from "react-router-dom";
import ShowEachAssignment from "../ShowEachAssignment/ShowEachAssignment";


const AllAssignments = () => {
  const allAssignments = useLoaderData();
  // console.log(allAssignments);


const handleChange = e => {
  console.log(e.target.value)
}

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
                  <select id="difficultyLevel" onChange={handleChange} className="input input-bordered  h-10">
                    <option value="">--Choose an option--</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </label>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-5 pt-5 pb-20">
        {
          allAssignments?.map(assignment => <ShowEachAssignment key={assignment._id} assignment={assignment}></ShowEachAssignment>)
        }
      </div>
    </div>
  );
};

export default AllAssignments;