import React, { useEffect, useState } from 'react';
import { showQueryList } from '../services/QueryService';

const QueryList = () => {
    const [isShowForm, setIsShowForm] = useState(false);
    const [isShowCard, setIsShowCard] = useState(false);
    const [isLoader, setIsLoader] = useState(true);
    const [queryList, setqueryList] = useState([]);

    //Get Project List
    const getQureyData = () => {
        showQueryList().then((data) => {
            setqueryList(data);
            setIsLoader(false);
        });
    };

    useEffect(() => {
        getQureyData();
    }, []);

   


    const showCard = () => {
        setIsShowCard(true);
    };

    const showTable = () => {
        setIsShowCard(false);
    };

    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className={`col-${isShowForm ? '8' : '12'}`}>
                    <div className='card'>
                        <div className='card-header' style={{ backgroundColor: '#03748A' }}>
                            <div className='row'>
                                <div className='col-6 text-start'>
                                    <strong className='text-white'>Query List</strong>
                                </div>

                                <div className='col-6 text-end '>
                                    {!isShowCard && (
                                        <button className='btn btn-body p-0 outline' onClick={showCard}>
                                            <i className='fa fa-th fa-lg text-white' aria-hidden='true'></i>
                                        </button>
                                    )}
                                    {isShowCard && (
                                        <button className='btn btn-body p-0 outline' onClick={showTable}>
                                            <i className='fa fa-table fa-lg text-white' aria-hidden='true'></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {!isShowCard && (
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                        <th>Sr No</th>
                                                <th>Name</th>
                                                <th>Contact no</th>
                                                <th>Query</th>
                                                <th>Country</th>
                                                <th>city</th>
                                                <th>EmialId</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoader ? (
                                            <tr>
                                                <td colSpan={6} className='text-center'>
                                                    <div className='spinner-border text-muted'></div>
                                                    <div className='spinner-border text-primary'></div>
                                                    <div className='spinner-border text-success'></div>
                                                    <div className='spinner-border text-info'></div>
                                                    <div className='spinner-border text-warning'></div>
                                                    <div className='spinner-border text-danger'></div>
                                                    <div className='spinner-border text-secondary'></div>
                                                    <div className='spinner-border text-dark'></div>
                                                    <div className='spinner-border text-light'></div>
                                                </td>
                                            </tr>
                                        ) : (
                                            queryList.map((item, index) => (
                                                <tr key={index}>
                                                     <td>{index + 1} </td>
                                                        <td> {item.name}</td>
                                                        <td> {item.contactNo}</td>
                                                        <td> {item.query}</td>
                                                        <td> {item.country}</td>
                                                        <td> {item.city}</td>
                                                        <td> {item.emialId}</td>
                                                    <td>
                                                        <button className='btn btn-sm btn-success'>
                                                            <i className='fa fa-pencil'></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-sm btn-danger'>
                                                            <i className='fa fa-trash-o'></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}


                        {isShowCard && ( 
                           <div class="card">
                            
                              <div className='card-body'>
                                <div className='row'>
                                    {queryList.map((item, index) => (
                                       
                                        <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                                            <div className='card' style={{ height: '100%' }}>
                                                <div className='card-header text-center text-white' style={{ backgroundColor: '#03748A' }}>
                                                <b>{item.name}</b>

                                                </div>
                                                <div className='card-body d-flex flex-column'>
                                                <div className='row d-flex'>
                                                <div className='col-12 d-flex'>
                                                <b>Contact - </b> <span>{item.contactNo}</span>
                                                     </div> 
                                                </div>
                                                <div className='row d-flex'>
                                                <div className='col-12 d-flex'>
                                                <b>Query - </b><span>{item.query}</span>
                                                     </div> 
                                                </div>
                                                <div className='row d-flex'>
                                                <div className='col-12 d-flex'>
                                                <b>E-mail - </b><span>{item.emialId}</span>
                                                     </div> 
                                                </div>
                                                  
                                                    <div className='mt-auto'>
                                                        <div className='row mt-2'>
                                                            <div className='col-6'>
                                                                <button className='btn btn-sm btn-success w-100'>
                                                                    <i className='fa fa-pencil'></i>
                                                                </button>
                                                            </div>
                                                            <div className='col-6'>
                                                                <button className='btn btn-sm btn-danger w-100'>
                                                                    <i className='fa fa-trash-o'></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                           </div>
                          
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryList;
