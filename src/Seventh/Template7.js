import { React, useContext } from 'react'
//import Introduction from '../../Components/Intro/Introduction'
import ResumeContext from './Context/ResumeContext';
import BuilderArea from './BuilderArea';
import Theme7 from './Theme7/Theme7';
//import Theme2 from '../../Theme/Theme2/Theme2';


const Home = () => {
    const { currentTheme, showComponent, themeData, componentRef } = useContext(ResumeContext);

    return (
        <>
            {/*
                !showComponent && <Introduction />
    */}
            {
                (!showComponent && currentTheme === 'Theme7') && <BuilderArea theme={<Theme7 componentRef={componentRef} themeData={themeData} />} />
}
            {/*
                (showComponent && currentTheme === 'Theme2') && <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />
*/}
         
        </>
    )
}

export default Home

