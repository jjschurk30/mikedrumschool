import React from 'react';

import Image from 'react-bootstrap/Image';

function FiredogImg() {

return(

<Image className = "firedog"src = {require("../images/firedog.jpg")} alt = "Firedog" fluid />
);
}

export default FiredogImg;