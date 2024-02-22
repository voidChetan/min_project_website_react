import React, { useState,  } from 'react';
import { AddQuries } from '../services/QueryService'
import '../assets/CSS/ContactUs.css'
// import JoditEditor from 'jodit-react';

const ContactUs = ({ placeholder }) => {
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
        <div>
            
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="form-container">
                            <h2 class="mb-4">Contact Form</h2>
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" value={QueriesObj.name} onChange={(event) => { Onchangehandle(event, 'name') }} placeholder="Enter your name" />
                                    <div className='text-danger'>
                                        {
                                            isFormSubmitted && QueriesObj.name == '' && <span> Name is Required.</span>
                                        }
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" value={QueriesObj.emialId} onChange={(event) => { Onchangehandle(event, 'emialId') }} placeholder="Enter your email" />
                                    <div className='text-danger'>
                                        {
                                            isFormSubmitted && QueriesObj.emialId == '' && <span> EmialId is required.</span>
                                        }
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="contact" class="form-label">Contact Number</label>
                                    <input type="tel" class="form-control" id="contact" value={QueriesObj.contactNo} onChange={(event) => { Onchangehandle(event, 'contactNo') }} placeholder="Enter your contact number" />
                                    <div className='text-danger'>
                                        {
                                            isFormSubmitted && QueriesObj.name == '' && <span>Contact No is Required.</span>
                                        }
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="city" class="form-label">City</label>
                                    <input type="text" class="form-control" id="city" value={QueriesObj.city} onChange={(event) => { Onchangehandle(event, 'city') }} placeholder="Enter your city" />
                                    <div className='text-danger'>
                                    {
                                        isFormSubmitted && QueriesObj.city == '' && <span>City is Required.</span>
                                    }
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="country" class="form-label">Country</label>
                                    <input type="text" class="form-control" id="country" value={QueriesObj.country} onChange={(event) => { Onchangehandle(event, 'country') }} placeholder="Enter your country" />
                                    <div className='text-danger'>
                                    {
                                        isFormSubmitted && QueriesObj.country == '' && <span>Country is Required.</span>
                                    }
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={addQueries}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         

        </div>

    );
};

export default ContactUs;