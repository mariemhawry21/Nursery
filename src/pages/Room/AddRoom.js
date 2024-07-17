import React from 'react';

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

// import Sidenav from '../../components/Sidenav';
import PersistentDrawerLeft from '../../components/Drawer';



export default function AddRoom() {
  return (
    <div>
       <PersistentDrawerLeft/>
      {/* <Box height={40} sx={{ direction: "rtl" }} /> */}

      <Box sx={{  width: "85%", direction: "ltr", marginLeft:"169px"  }}>
        <div>
          {/* <h2 className='add-head' >AddChild</h2> */}
          <Link to='/AllRoom'>
            <button className='btn btn-primary add-button' style={{marginTop:"130px"}}>Back</button>
          </Link>
        </div>

        <div className='card table-style' style={{ direction: "ltr" , marginTop:"-20px"}}>
          <div className="card-header d-flex table-head-stayl">
            <h4>
            Room Details
            </h4>
          </div>
          <div className="card-body">
            <form>
              <div className='container'>
                <div className='row'>

                  <div className='col-md-6'>
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="d-flex" >Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='New Room ' required/>
                    </div>
                  </div>



                  <div className='col-md-6'>
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="d-flex">Capacity</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='eg"9"' required/>
                    </div>
                  </div>


                  <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="d-flex">Assign Children</label>
                    <select class="form-control">
                      <option>Nada Alaa</option>
                      
                    
                    </select>
                  </div>

                  
                  <div className='col-md-6'>
                    <label for="exampleInputEmail1" className="d-flex">Assign Children</label>
                    <select class="form-control">
                      <option>Jana Alaa</option>
                      <option>Mohammed Ahmed</option>
                      <option>Osama Alaa</option>
                      <option>Salma Ahmed</option>
                      <option>Massa Alaa</option>
                    
                    </select>
                  </div>

                
                
                 

               
                </div>

              </div>


              {/* <button type="submit" style={{fontSize:"20px"}} className="btn btn-primary mt-4">حفظ</button> */}

              <Button variant="contained" color="primary" type="submit" className='mt-4' style={{fontSize:"20px"}}>
            Submit
          </Button>
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
