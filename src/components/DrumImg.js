import React from 'react';

import Image from 'react-bootstrap/Image';

function DrumImg() {

return(

<Image className = "drum"src = {require("../images/drum.jpg")} alt = "drum set" fluid />
);
}

export default DrumImg;