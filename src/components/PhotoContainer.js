import React from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {
    //   let photos = props.data.map((course) => {
    //     return (
    //       <Photo
    //         img={photos.img_src}
    //         key={photos.id}
    //       />
    //     );
    //   });
    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            <Photo />
        </ul>
        </div>
    )
}

export default PhotoContainer