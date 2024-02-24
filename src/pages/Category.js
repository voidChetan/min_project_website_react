import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategiryData } from '../Redux/react-redux/action';
import { addCategoryData, getCategoryName, deleteCategoryData, updateCategory } from '../services/CategoryService';
const Category = () => {

    const reducerData = useSelector(state => state); 
    const dispatch = useDispatch();

    const [categoryObj, setcategoryObj] = useState( { projectCategoryId: 0,  categoryName: "", bannerImageName: "",  isActive: true } );
    let [isLoader, setIsLoader] = useState(true)
    let [formsubmited, setFormSubmited] = useState(false);
    let [isShowForm, setisShowForm] = useState(false);
    let [isShowCard, setisShowCard] = useState(false);
    let [searchData, setSearchData] = useState('');
    let [categoryList, setCategoryList] = useState([]);

    const handleInputChange = (event, key) => {
        setcategoryObj(prevObj => ({ ...prevObj, [key]: event.target.value }));
    };
    const handleSearchInputChange = (event) => {
        setSearchData(event.target.value);
    };

    useEffect(() => {
        getAllCategory();

    }, [])

    const getAllCategory = () => {
        debugger;
        getCategoryName().then((data) => {
            debugger;
            dispatch(getCategiryData(data))

            setCategoryList(data);
            setIsLoader(false)
        })

    }


    const addAllCategoryData = () => {
        try {
            setFormSubmited(true)
            let categoryObjData = [categoryObj];

            addCategoryData(categoryObjData).then((data) => {
                if (data.result) {
                    alert("Category Added Successfully");
                    getAllCategory();
                    resetForm();
                } else {
                    alert(data.message);
                }
            })


        } catch (error) {
            alert(error.code)
        }

    }

    const editCategoryData = (item) => {
        setisShowForm(true);
        try {
            setcategoryObj(prevObj => ({
                ...prevObj,
                projectCategoryId: item.projectCategoryId,
                categoryName: item.categoryName,
                bannerImageName: item.bannerImageName,
                isActive: item.isActive
            }))

        } catch (error) {
            alert('Error Occurred');
        }
    }


    const updateAllCategoryList = () => {
        try {
            // if (categoryObj.projectCategoryId == null || categoryObj.bannerImageName == null || categoryObj.isActive == null) {
            //     alert('All field Are Required')
            // }
            // else {
            //     setFormSubmited(true);
            // }
            let categoryObjData = [categoryObj];
            updateCategory(categoryObjData).then((data) => {
                if (data.result) {
                    alert('Category Updated Sucessfully');
                    getAllCategory();
                    resetForm();
                } else {
                    alert(data.message);
                }
            })
        } catch (error) {
            alert(error.code)
        }
    }

    const resetForm = () => {
        setcategoryObj({
            projectCategoryId: 0,
            categoryName: "",
            bannerImageName: "",
            isActive: true
        })
    }

    const deleteAllCategoryData = (projectCategoryId) => {
        const isDelete = window.confirm('Are you sure you want to delete this Project?');
        if (isDelete) {
            deleteCategoryData(projectCategoryId).then((data) => {
                if (data.result) {
                    alert(' Category Deleted Sucessfully');
                    getAllCategory();
                } else {
                    alert(data.message);
                }
            })
        }
    }

    const showForm = () => {
        setisShowForm(true);
    }
    const showCard = () => {
        setisShowCard(true);
    }

    const closeForm = () => {
        setisShowForm(false);
    }

    const showTable = () => {
        setisShowCard(false);
    }
    return (
        <div>
            <div className='container-fluid'>
                {/* <div className='row' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className='col-6'>
                        <div className='form-outline'>
                            <div className='input-group'>
                                <input type='text' className='form-control' value={searchData} onChange={handleSearchInputChange} placeholder='Search by Department Name' />
                                <button className='btn btn-secondary' ><i className='fa fa-search'></i></button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='row mt-3'>
                    <div className={`${isShowForm ? 'col-8' : 'col-12'}`}>
                        <div className='card'>
                            <div className='row '>
                                <div className='card-header' style={{ backgroundColor: '#03748A' }}>
                                    <div className='row d-flex justify-content-between'>

                                        <div className='col-6 text-start'>
                                            <strong className='text-white'>Category List</strong>
                                        </div>

                                        <div className='col-2 text-end'>
                                            <button className='btn btn-info border-0  ' style={{ outline: 'none' }} onClick={showForm}>Add Data</button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {
                                !isShowCard && <div className='card-body'>
                                    <table className='table table-bordered  table-striped'>
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Category Name</th>
                                                <th>Banner Image Name</th>
                                                <th>Edit</th>
                                                <th>Delete</th>

                                            </tr>
                                        </thead>
                                        {
                                            isLoader && <tbody>
                                                <tr>
                                                    <td colSpan={9} className='text-center'>
                                                        <div className="spinner-border text-muted"></div>
                                                        <div className="spinner-border text-primary"></div>
                                                        <div className="spinner-border text-success"></div>
                                                        <div className="spinner-border text-info"></div>
                                                        <div className="spinner-border text-warning"></div>
                                                        <div className="spinner-border text-danger"></div>
                                                        <div className="spinner-border text-secondary"></div>
                                                        <div className="spinner-border text-dark"></div>
                                                        <div className="spinner-border text-light"></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        }
                                        {!isLoader && <tbody>
                                            {
                                                categoryList.map((item, index) => {
                                                    return (<tr>
                                                        <td>{index + 1} </td>
                                                        <td> {item.categoryName}</td>
                                                        <td>{item.bannerImageName}</td>
                                                        <td><button className='btn btn-success btn-sm'> <i className='fa fa-pencil' onClick={() => editCategoryData(item)}></i></button> </td>
                                                        <td> <button className='btn btn-sm btn-danger btn-sm' > <i className='fa fa-trash-o' onClick={() => deleteAllCategoryData(item.projectCategoryId)}></i></button></td>
                                                    </tr>)
                                                })
                                            }

                                        </tbody>
                                        }
                                    </table>
                                </div>
                            }


                        </div>

                    </div>
                    <div className='col-4'>
                        {
                            isShowForm &&
                            <div className='card'>
                                <div className='card-header' style={{ backgroundColor: '#03748A' }}>
                                    <div className='row'>
                                        <div className='col-6 text-start'>
                                            <strong className='text-white'>  Add  Category</strong>
                                        </div>
                                        <div className='col-6 text-end'>
                                            <button className='btn p-0 btn-body' onClick={closeForm}>
                                                <i className="fa fa-times fa-lg text-white"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label className='p-2'>Category Name</label>
                                            <input type='text' className='form-control' onChange={(event) => { handleInputChange(event, 'categoryName') }} value={categoryObj.categoryName} placeholder='Enter Category Name' />

                                            {

                                                formsubmited && categoryObj.categoryName == '' && <span className='text-danger'>Category Name Is Required </span>
                                            }

                                        </div>
                                        <div className='col-6'>
                                            <label className='p-2'>Banner Image Name</label>
                                            <input type='text' className='form-control' onChange={(event) => { handleInputChange(event, 'bannerImageName') }} value={categoryObj.bannerImageName} placeholder='Enter Image Name' />

                                            {

                                                formsubmited && categoryObj.bannerImageName == '' && <span className='text-danger'>Banner Image Name Is Required </span>
                                            }

                                        </div>


                                    </div>
                                </div>
                                <div className='row mt-2 '>
                                    <div className='col-6 mt-3 text-center mb-2'>
                                        <button className='btn btn-sm btn-secondary' onClick={resetForm} >Reset</button>
                                    </div>
                                    <div className='col-6 mt-3 text-center'>
                                        {/* {console.log('projectCategoryId:', categoryObj.projectCategoryId)} */}
                                        {categoryObj.projectCategoryId == 0 && <button className='btn btn-sm btn-success' onClick={addAllCategoryData}>Add Category</button>}
                                        {categoryObj.projectCategoryId !== 0 && <button className='btn btn-sm btn-warning' onClick={updateAllCategoryList}>Update Category</button>}

                                    </div>

                                </div>

                            </div>
                        }


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Category;