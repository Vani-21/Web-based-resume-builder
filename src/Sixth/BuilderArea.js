import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Sixth/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import ResumeContext from '../Sixth/Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";







const BuilderArea = (props) => {
    const {  loading, handlePrint } = useContext(ResumeContext)
    
   

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#5A5A5A" size={30} />}

            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'gray'} variant={'solid'} borderColor={'gray'} borderWidth={'3px'} onClick={handlePrint}>Print</Button>
                
            </div>
       
      
    
        </>
    )
}

export default BuilderArea
