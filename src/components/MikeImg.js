import React from 'react';

import Image from 'react-bootstrap/Image';

function MikeImg() {

return(

<Image className = "mike" src = {require("../images/mike.jpg")} alt = "Mike Schurk" fluid />
);
}

export default MikeImg;