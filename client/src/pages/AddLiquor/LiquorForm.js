import React from "react";
import "./LiquorForm.css";
import {Button, Input, Row, MediaBox} from 'react-materialize';


const LiquorForm = props => (
<form class="container center">
<img class="responsive-img" src="../../drinkorderlogo.png" />
<Row>
    <h1>Add Liquor to your Inventory</h1>
    <Input s={12}
        label= "Name"
        onChange={props.handleInputChange}
        value={props.name}
        name="name"
        type="text"
        className="form-control"
        id="AddLiquor"
    />
    <Input s={12} 
        label= "Type of Liquor" 
        onChange={props.handleInputChange}
        value={props.type}
        name="type"
        type="text"
        className="form-control"
        id="AddLiquor"
    />
    <Input s={12} 
        label= "Bottle Volume (size)" 
        onChange={props.handleInputChange}
        value={props.bottleVolume}
        name="bottleVolume"
        type="text"
        className="form-control"
        id="AddLiquor"
    />
    <Input s={12} label= 
        "Bottle Cost" 
        onChange={props.handleInputChange}
        value={props.bottleCost}
        name="bottleCost"
        type="text"
        className="form-control"
        id="AddLiquor"
    />
</Row>
<Row>
    <Button waves='light' onClick={props.handleSaveLiquor}
                    className="SaveLiquor-button">Submit</Button>
</Row>
</form>
);

export default LiquorForm;