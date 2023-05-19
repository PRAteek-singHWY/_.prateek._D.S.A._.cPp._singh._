import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
const Header = (props) => {
    return (
        <header>
        <h1 class="logo"> <NoteAltIcon style={{ fontSize: "38px" }} /> </h1>
        <h1>KeePeR</h1>
        {/* <h4>{props.name}</h4> */}
        </header>
    )
};

export default Header;