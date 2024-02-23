import { useState } from 'react';

import { AddQuries } from '../services/QueryService'

const ContactUs = () => {
    let [QueriesObj, setQueriesObj] = useState({
        "queryId": 0,
        "name": "",
        "contactNo": "",
        "query": "",
        "country": "",
        "city": "",
        "emialId": "",
        "isResponded": true

    })
    let [isFormSubmitted, setisFormSubmitted] = useState(false);

    const addQueries = () => {
        setisFormSubmitted(true);
        let QueriesDataArr = [QueriesObj];
        debugger;
        if (
            QueriesObj.name != '',
            QueriesObj.contactNo != '',
            QueriesObj.query != '',
            QueriesObj.country != '',
            QueriesObj.city != '',
            QueriesObj.emialId != ''
        ) {
            AddQuries(QueriesDataArr).then((data) => {
                debugger;
                try {
                    if (data.result) {
                        alert('Queries Added Successfully');
                    } else {
                        alert(data.message);
                    }
                } catch (error) {
                    alert(error.message);
                }
            });

        }
    };
    const Onchangehandle = (event, key) => {
        setQueriesObj(prevData => ({ ...prevData, [key]: event.target.value }));
    }
    
    return (
        <div className="container mt-5 d-flex " style={{ backgroundColor: '	#fff8dc' }}>
            <div className='row'>
                <div className='col-6  text-center' >
                    <h1>Contact Us</h1>
                    <p style={{fontWeight:'70px' ,fontSize:'25px',lineHeight:'45px'}}>We're here to assist you! If you have
                    any questions or need assistance,please feel free to reach out to us.<br></br><br></br>
                        You can also email us. Click here  to reveal email address
                        <a href="https://veilmail.io/e/FkKh7o">https://veilmail.io/e/FkKh7o</a> <br></br><br></br>
                        We use VeilMail.io to protect your email address from spam.</p>
                </div>
                <div className='col-6 text-center' >
                    <h1>Contact Form</h1>
                    <div className='row pe-4'>
                        {/* <div className='col-4'> */}
                        <label for="name" class="form-label">Name</label>
                        <input type="email" class="form-control" id="email" value={QueriesObj.name} onChange={(event) => { Onchangehandle(event, 'name') }}placeholder="Enter your Name" />

                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" value={QueriesObj.emialId} onChange={(event) => { Onchangehandle(event, 'emialId') }}placeholder="Enter your email" />

                        <label for="email" class="form-label">Contact Number</label>
                        <input type="email" class="form-control" id="email" value={QueriesObj.contactNo} onChange={(event) => { Onchangehandle(event, 'contactNo') }} placeholder="Enter your contact number" />

                        <label for="email" class="form-label">City</label>
                        <input type="email" class="form-control" id="email" value={QueriesObj.city} onChange={(event) => { Onchangehandle(event, 'city') }}placeholder="Enter your Cityl" />

                        <label for="email" class="form-label">Country</label>
                        <input type="email" class="form-control" id="email" value={QueriesObj.country} onChange={(event) => { Onchangehandle(event, 'country') }}placeholder="Enter your Country" />
                    </div>
                    <div className='row'>
                        <div className='col-4 pt-4 m-4'>
                            <button className='btn btn-lg btn-success' onClick={addQueries}>save</button>
                        </div>

                    </div>


                </div>

            </div>

        </div>

        // </div>






    );
};

export default ContactUs;