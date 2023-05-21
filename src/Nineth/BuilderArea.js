import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react';
import UserDataCollect from './UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import ResumeContext from './Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";




const BuilderArea = (props) => {
    const {  loading, handlePrint } = useContext(ResumeContext)
    
   

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#2c78ab" size={30} />}

            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'telegram'} variant={'outline'} onClick={handlePrint}>Print</Button>
                
            </div>
       
      
    
        </>
    )
}

export default BuilderArea
