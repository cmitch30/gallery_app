import React from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";

const PhotoContainer = (props) => {
  const results = props.data;
  let photos;
  if (results.length) {
    photos = results.map((photo) => (
      <Photo
        url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg
`}
        key={photo.id}
      />
    ));
  } else {
    photos = <NotFound />;
  }
  return <ul>{photos}</ul>;
};
//   let photos = props.map((photo) => {
//     return (
//       <Photo
//         img={photos.img_src}
//         key={photos.id}
//       />
//     );
//   });
// return (
//     <div className="photo-container">
//     <h2>Results</h2>
//     <ul>
//         <Photo />
//     </ul>
//     </div>
// )

export default PhotoContainer;
