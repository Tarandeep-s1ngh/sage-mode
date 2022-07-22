// import React from "react";
// import "./videocard.css";
// import { Link } from "react-router-dom";
// import { useAuth, useFilter } from "../../context";
// import { disliked } from "../../utils/actions";

// export const LikedCard = ({ video }) => {
//   const { dispatch } = useFilter();
//   const { token } = useAuth();

//   return (
//     <div className="card-badge">
//       <div className="card-header">
//         <img
//           className="thumbnail-image"
//           src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
//           alt={video.title}
//         />
//         <div className="card-floating-icon">
//           <div
//             onClick={() => disliked(dispatch, video._id, token)}
//             className="history-icon"
//           >
//             <i className="far fa-thumbs-down"></i>
//           </div>
//         </div>
//         <div className="card-header-txt vid-card-header-txt">
//           <Link to={`/singlevideo/${video._id}`}>
//             <h3 className="semibold vid-card-title">{video.title}</h3>
//           </Link>
//           <small className="gray-color">{video.creator}</small>
//         </div>
//       </div>
//     </div>
//   );
// };
