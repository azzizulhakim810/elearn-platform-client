import { useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import ViewAllMySubmissions from "../ViewAllMySubmissions/ViewAllMySubmissions";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SubmittedAssignment = () => {
  const navigate = useNavigate();
  const [allSubmission, setAllSubmission] = useState([]);

  const url = `http://localhost:5000/submitAssignment/allSubmission/status`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllSubmission(data));
  }, [url]);
  // console.log(allSubmission);

/*   const handleDelete = (id) => {
    // console.log(id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/submitAssignment/allSubmission/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0 ) {
              const remaining = allSubmission.filter(singleSub => singleSub._id !== id);
              setAllSubmission(remaining);
            }
            console.log(res.data)});
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            
          });
        }
      });
  } */


  const handleAssignmentMark = async (id) => {
    // console.log(id);

/*     axios.patch(`http://localhost:5000/submitAssignment/allSubmission/${id}`, {status:'Confirmed'})
    .then(res => {
      console.log(res.data);
      if(res.data.modifiedCount > 0) {
        const remaining = allSubmission?.filter(singleSub => singleSub._id !== id);
        const updated = allSubmission?.find(singleSub => singleSub._id === id);
        updated.status = 'Confirmed';
        const newSubmission = [updated, ...remaining];
        setAllSubmission(newSubmission);
    }
    }) */

    const getThePending = allSubmission?.map(s => s)?.find(m => m._id == id);
    // const find = map.find(m => m._id == id);
    console.log(getThePending);
    const { value: markTheAssignment } = await Swal.fire({
      title: "Evaluation",
      html: `
        <h1 class="mb-3"><strong>Examinee PDF Link</strong></h1>
        <a target="_blank" href=${getThePending.pdfLink}>${getThePending.pdfLink}</a>
        
        <h1 class="pt-5 mb-3"><strong>Examinee Note</strong> : ${getThePending.quickNote}</h1>

        
        
        <h1 class="-mb-3"><strong>Your Mark</strong></h1>
        <input type="url" id="swal-input1" class="swal2-input">
        <h1 class="-mb-3"><strong>Your Feedback</strong></h1>
        <input type="textarea" id="swal-input2" class="swal2-input">

        
        

        
      `,
      focusConfirm: false,
      preConfirm: () => {
        const obtainedMark = document.getElementById("swal-input1").value;
        const feedback = document.getElementById("swal-input2").value;
        const status = "Completed";
        return {obtainedMark, feedback, status};
      }
    });
    console.log(markTheAssignment);
    if (!markTheAssignment?.obtainedMark.length <= 0 && !markTheAssignment?.feedback.length <= 0) {
      // Swal.fire(JSON.stringify(formValues));
      // console.log(markTheAssignment.pdfLink.length && markTheAssignment.quickNote.length );
     axios.patch(`http://localhost:5000/submitAssignment/allSubmission/${id}`, markTheAssignment)
     .then(res => {
      if(res.data.modifiedCount > 0) {
        Swal.fire(
          'Great!',
          "Got Mark! Set as completed",
          'success'
        );
         navigate('/myAssignment');
      }
     })
    }
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Provide the Url & Note",
    });
 
  }

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
      <div className="py-10">
        <h1 className="text-base text-center tracking-widest text-gray-500 font-medium">
          ALL ARE THE
        </h1>

        <h1 className="text-5xl text-center tracking-widest font-bold ">
          SUBMISSIONS
        </h1>
      </div>
      <div className="w-10/12 mx-auto pb-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  
                </th>
                <th className="text-base">Profile</th>
                <th className="text-base">Examinee Name</th>
                <th className="text-base">Assignment Title</th>
                <th className="text-base">Assignment Mark</th>
                {/* <th className="text-base">Obtained Marks</th> */}
                {/* <th className="text-base">Feedback</th> */}
                <th className="text-base">Press to Mark</th>
              </tr>
            </thead>
            <tbody>
              {allSubmission?.map((singleSubmission) => (
                <ViewAllMySubmissions
                  key={singleSubmission._id}
                  singleSubmission={singleSubmission}
                  handleAssignmentMark={handleAssignmentMark}
                ></ViewAllMySubmissions>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubmittedAssignment;
