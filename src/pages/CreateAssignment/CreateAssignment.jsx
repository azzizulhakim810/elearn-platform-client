import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const CreateAssignment = () => {
  const {user} = useContext(AuthContext);
  const userEmail = user.email;
  const [startDate, setStartDate] = useState(new Date());
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const url = form.url.value;
    const level = document.getElementById("difficultyLevel").value;
    const date = form.date.value;
   

    const newProduct = {
      title,
      url,
      marks,
      level,
      description,
      date,
      userEmail
    };

    console.log(newProduct);

    axios.post('http://localhost:5000/assignment', newProduct)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId) {
        Swal.fire(
          'Great!',
          "Assignment Creation Successfull",
          'success'
        );
         form.reset();
      }
    }
      
      )
   
    
  };
  return (
    <div>
      <div
        className="hero h-[98px] -mt-24"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/dfLxV9s/home-bg-one-course-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content text-left text-neutral-content w-10/12">
          <div className="w-full"></div>
        </div>
      </div>
      <div className="">
        <div className="w-8/12 mx-auto py-10 pb-24">
          <h1 className="text-base text-center tracking-widest text-gray-500 font-medium">
            FILL THE FORM
          </h1>

          <h1 className="text-5xl text-center pb-10 tracking-widest font-bold ">
            CREATE AN ASSIGNMENT
          </h1>

          <form onSubmit={handleAddProduct}>
            {/* Title & Description row */}

            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>

                <label className="input-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>

                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* Marks & Thumbnail Image row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Marks</span>
                </label>

                <label className="input-group">
                  <input
                    type="text"
                    name="marks"
                    placeholder="Marks"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Thumbnail Image</span>
                </label>

                <label className="input-group">
                  <input
                    type="url"
                    name="url"
                    placeholder="Thumbnail Image URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* Product Type & Price row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Difficulty Level</span>
                </label>

                <label className="input-group">
                  <select id="difficultyLevel" className="input input-bordered w-full">
                    <option value="">--Choose an option--</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                  {/* <input
                  type="text"
                  name="type"
                  placeholder="Type (Ex- Phone/Monitor/Refrigerator/TV)"
                  className="input input-bordered w-full"
                /> */}
                </label>
              </div>

              <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Due Date</span>
              </label>
              <div className="mt-2">
              <DatePicker name="date" className="input input-bordered -mt-2"  
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
              </div>
               

                
              </div>
            </div>


            <input
              type="submit"
              value="Create Assignment"
              className="btn btn-block uppercase bg-purple-600 hover:bg-purple-800 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
