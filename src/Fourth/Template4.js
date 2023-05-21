import { React, useContext } from 'react'
//import Introduction from '../../Components/Intro/Introduction'
import ResumeContext from './Context/ResumeContext';
import BuilderArea from './BuilderArea';
import Theme4 from './Theme4/Theme4';
//import Theme2 from '../../Theme/Theme2/Theme2';


const Home = () => {
    const { currentTheme, showComponent, themeData, componentRef } = useContext(ResumeContext);

    return (
        <>
            {/*
                !showComponent && <Introduction />
    */}
            {
                (!showComponent && currentTheme === 'Theme4') && <BuilderArea theme={<Theme4 componentRef={componentRef} themeData={themeData} />} />
}
            {/*
                (showComponent && currentTheme === 'Theme2') && <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />
*/}
         
        </>
    )
}

export default Home

