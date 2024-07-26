import React from 'react';

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

// import Sidenav from '../../components/Sidenav';
import PersistentDrawerLeft from '../../components/Drawer';
import SidebarIcon from '../../components/SidebarIcon';
import OnlyDrawer from '../../components/OnlyDrawer';



export default function AddChild() {


  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  
  };

  const colMd6Style = {
    flex: '0 0 50%',
    maxWidth: '50%',
    paddingRight: '15px',
    paddingLeft: '15px',
    boxSizing: 'border-box'
  };

 

  const buttonStyle = {
    
   
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    boxSizing: 'border-box',
    marginBottom: '10px'
  };

  const btnSubmitStyle = {
    ...buttonStyle,
    backgroundColor: '#225C8B',
    color: '#fff',
    width: '180px',
    height: '50px',
    top: '479px',
    left: '726px',
    padding: '14px 0px 14px 0px',
    gap: '0px',
    borderradius: '10px 0px 0px 0px',
    border: '1px solid #225C8B',
    opacity: '0px',
  };

  const btnBackStyle = {
    ...buttonStyle,
    backgroundColor: '#fffff',
    color: '#225C8B',
    width: '180px',
    height: '50px',
    top: '479px',
    left: '726px',
    padding: '14px 0px 14px 0px',
    gap: '0px',
    borderradius: '10px 0px 0px 0px',
    border: '1px solid #225C8B',
    opacity: '0px',
    marginLeft:"195px"

  };

  const handleHover = (event, color) => {
    event.target.style.backgroundColor = color;
  };
  return (

    <div style={{  backgroundColor:"#FBFBFB", height:"650px"  }}>
       {/* <PersistentDrawerLeft/> */}
       <SidebarIcon/>
      <OnlyDrawer />
      {/* <Box height={40} sx={{ direction: "rtl" }} /> */}

      <Box sx={{  width: "70%", direction: "ltr", marginLeft:"300px", marginTop:"80px"  }}>
        <div>
          {/* <h2 className='add-head' >AddChild</h2> */}
          
        </div>

        <div className='card table-style' style={{ direction: "ltr" , marginTop:"-20px"}}>
          <div className="card-header d-flex table-head-stayl" style={{ backgroundColor:"#225C8B"}}>
            <h4>
              Add Children
            </h4>
          </div>
          <div className="card-body">
            <form>
              <div className='container'>
                <div className='row'>

                  <div className='col-md-6'>
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="d-flex">First Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                  </div>



                  <div className='col-md-6'>
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="d-flex">Last Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                  </div>


                  <div className='col-md-6'>
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="d-flex">Address</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                  </div>

                  
                  <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="d-flex">Assign to Room(s)</label>
                    <select class="form-control">
                      <option>Waiting List</option>
                    </select>
                  </div>

                  <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="d-flex">Assign Key Person</label>
                    <select class="form-control">
                      <option>Nada Alaa</option>
                    </select>
                  </div>


                  <div className='col-md-6'>
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="d-flex">Photo</label>
                      <input type="File" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                  </div>


                    
               
                
                 

               
                </div>

              </div>
              <div style={rowStyle}>
          <div style={colMd6Style}>
            <button
              type="submit"
              style={btnSubmitStyle}
              onMouseOver={(event) => handleHover(event, '#225C8B')}
              onMouseOut={(event) => handleHover(event, '#225C8B')}
            >
              Submit
            </button>
          </div>
          <div style={colMd6Style}>
          <Link to='/AllChild'>
            <button
              type="button"
              style={btnBackStyle}
              onMouseOver={(event) => handleHover(event, '#fff')}
              onMouseOut={(event) => handleHover(event, '#fff')}
            >
              Back
            </button>
            </Link>
          </div>
          </div>

              {/* <button type="submit" style={{fontSize:"20px"}} className="btn btn-primary mt-4">حفظ</button> */}

              {/* <Button variant="contained" color="primary" type="submit" className='mt-4' style={{fontSize:"20px"}}>
            Submit
          </Button> */}

         
          {/* <Button variant="contained" color="secondary">
            Submit and add another
          </Button> */}
            </form>
          </div>
        </div>

      </Box>
    </div>
  )
}
