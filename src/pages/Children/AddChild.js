import React from 'react';

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import Sidenav from '../../components/Sidenav';



export default function AddChild() {
  return (
    <div>
      <Sidenav/>
      {/* <Box height={40} sx={{ direction: "rtl" }} /> */}

      <Box sx={{  width: "85%", direction: "ltr", marginLeft:"169px"  }}>
        <div>
          {/* <h2 className='add-head' >AddChild</h2> */}
          <Link to='/AllChild'>
            <button className='btn btn-primary add-button' style={{marginTop:"-10px"}}>Back</button>
          </Link>
        </div>

        <div className='card table-style' style={{ direction: "ltr" , marginTop:"-20px"}}>
          <div className="card-header d-flex table-head-stayl">
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
