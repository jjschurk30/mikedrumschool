import React from 'react';

import Image from 'react-bootstrap/Image';

function CherokeeImg() {

return(

<Image className = "cherokee"src = {require("../images/cherokeeStreet.jpg")} alt = "cherokee street" fluid />
);
}

export default CherokeeImg;