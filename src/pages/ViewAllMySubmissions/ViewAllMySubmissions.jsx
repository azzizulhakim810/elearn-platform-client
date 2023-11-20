import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ViewAllMyAssignments = ({singleSubmission, handleDelete, handleAssignmentConfirm}) => {
  const {user} = useContext(AuthContext);
  const {_id, title, marks, status} = singleSubmission || {};
  // console.log(user.photoURL);
  // console.log(singleSubmission);
  // console.log(status);



  return (
    
      
      <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle bg-purple-600 text-white hover:bg-purple-900">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 rounded-full">
                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            {/* <div>
              <div className="font-bold">{userName}</div>
            </div> */}
          </div>
        </td>
        
        
        <td>
          {title}
        </td>
        <td>{marks}</td>
        <td>20</td>
        <td>Good</td>
        <th>
          {
            status === "Completed" ? <span className="btn btn-ghost btn-xs">Completed</span> :
            <button onClick={()=> handleAssignmentConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>
          }
          
        </th>
      </tr>
    
  );
};

ViewAllMyAssignments.propTypes = {
  singleSubmission:PropTypes.object,
  handleDelete:PropTypes.func,
  handleAssignmentConfirm:PropTypes.func,
};

export default ViewAllMyAssignments;

