import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {

  const [isExpanded, setExpanded] = useState(false)
  const [title_Note, set_Title_Note] = useState({
    title: "",
    content: ""
  });

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    set_Title_Note((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    //onClickhandle to addNote 
    props.onClickHandle(title_Note.title, title_Note.content);

    //to clear the entry once the note's saved
    set_Title_Note(({
      title: "",
      content:""
    }))
    event.preventDefault();
  };

  const Expanding = () => {
    setExpanded(true)
  }



  return (
    <div>
      <form className="create-note" >
        {!isExpanded && (
          <input
            name="title"
            placeholder="Take a note..."
            value={title_Note.title}
            onClick={Expanding}

          />)}
        {isExpanded && (
          <div>
            <input
              name="title"
              placeholder="Title"
              value={title_Note.title}
              onChange={onChangeHandle}
              onClick={Expanding} />

            <textarea
              name="content"
              placeholder="Take a note..."
              value={title_Note.content}
              onChange={onChangeHandle}
              rows="3"
            />
            <Zoom in={true} >
              <Fab
                color="secondary" onClick={handleSubmit}><AddIcon />
              </Fab>
            </Zoom>
          </div>
        )
        }
      </form >
    </div >
  );
}

export default CreateArea;

