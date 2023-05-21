import React, { useContext, useEffect, useState } from 'react'
import './userCollectData.css'
import { IoMdCloudUpload } from 'react-icons/io'
import { FormControl, Input, Heading, Textarea, Button, Switch } from '@chakra-ui/react'
import ResumeContext from '../Context/ResumeContext'
const UserDataCollect = () => {


    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork,  setCheckExtraSectionData,checkExtraSectionData} = useContext(ResumeContext)


    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [extraSectionDataCount, setExtraSectionDataCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([])
    const [educationArrTemplate, setEducationArrTemplate] = useState([])
    const [workArrTemplate, setWorkArrTemplate] = useState([])
    const [extraSectionArrTemplate, setExtraSectionArrTemplate] = useState([])
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Your Name", profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address",linkedin:"LinkedIn ",github:"Github account", skill: 'Your, Skills, are, shown, here',language: 'list,the, known,languages' })
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })
    const [extraSectionData, setExtraSectionData] = useState({
        'extraSectionTitles': {exTitle1: "EXTRA SECTION TITLE"},
        'extraSectionDesc': {exDescription1: "Extra Description are Shown here , with Bullet Points"}
    })    // To Add Personal Data to the State
    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value })
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
    }
    // To Add Project Data to the State
    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        let tempProjectData = projectData
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData({ ...projectData, tempProjectData })
        setThemeData({ ...themeData, projectData: projectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type={'text'} placeholder='Enter Project Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = projArrTemplate
        arr.push(template)
        setProjArrTemplate(arr)
        setProjectCount(i)
    }

    // To Add Education Data to the State
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        let tempEducationData = educationData
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData({ ...educationData }, tempEducationData)
    }
    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`eTitle${i}`} name='eName' onChange={handleChangeEducation} type={'text'} placeholder='Enter Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`eDescription${i}`} name='eDescription' onChange={handleChangeEducation} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = educationArrTemplate
        arr.push(template)
        setEducationArrTemplate(arr)
        setEducationCount(i)
    }


      // To Add  Data to the State
      const handleChangeExtraSectionData = (e) => {
        const {name, value, id} = e.target
        let tempExtraData = extraSectionData
        if (name.includes('exName')) {
            tempExtraData["extraSectionTitles"][id] = value;
        } else {
            tempExtraData["extraSectionDesc"][id] = value;
        }
        setExtraSectionData({...extraSectionData}, tempExtraData)
    }
    const handleChangeExtraSectionDataClick = (e) => {
        e.preventDefault();
        let i = extraSectionDataCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`exTitle${i}`} name='exName' onChange={handleChangeExtraSectionData} type={'text'}
                           placeholder='Enter Extra Section Title'/>
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`exDescription${i}`} name='exDescription' onChange={handleChangeExtraSectionData}
                              placeholder='Use comma to separate Description'/>
                </FormControl>
            </>
        )
        let arr = extraSectionArrTemplate
        arr.push(template)
        console.log(arr.length)
        setExtraSectionArrTemplate(arr)
        console.log(setExtraSectionArrTemplate)
        setExtraSectionDataCount(i)
    }



    // To Add Work Data to the State
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target
        let tempWorkData = workData
        if (name.includes('wName')) {
            tempWorkData["workTitles"][id] = value;
        } else {
            tempWorkData["workDesc"][id] = value;
        }
        setWorkData({ ...workData }, tempWorkData)
    }
    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`wTitle${i}`} name='wName' onChange={handleChangeWork} type={'text'} placeholder='Enter Job Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`wDescription${i}`} name='wDescription' onChange={handleChangeWork} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = workArrTemplate
        arr.push(template)
        setWorkArrTemplate(arr)
        setWorkCount(i)
    }

    // To Add Award & Achievement Data to the State
    const handleChangeAwards = (e) => {
        const { name, value } = e.target
        setAwardData({ ...awardData, [name]: value })
    }
    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData,extraSectionData })
       
    }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData,extraSectionData])

    return (
        <>
            <div id="form-collect">
                {/* Personal Details Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>
                        Personal Details
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <div className='file'>
                            <label htmlFor='input-file'>
                                <i className="material-icons"><IoMdCloudUpload size={30} />
                                </i>Select a file
                            </label>
                            <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' />
                            <img className="blah" src={personalData.profileImage} alt="your profile preview" />
                        </div>
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='name' onChange={handleChangePersonal} type={'text'} placeholder='Your Name' />
                    </FormControl>
                    {/*<FormControl isRequired className='my-2'>
                        <Input name='summary' onChange={handleChangePersonal} type={'text'} placeholder='Your Summary' />
    </FormControl>*/}
                    <FormControl isRequired className='my-2'>
                        <Input name='profile' onChange={handleChangePersonal} type={'text'} placeholder='Work Profile' />
                    </FormControl>
                    
                    <FormControl isRequired className='my-2'>
                        <Input name='phone' onChange={handleChangePersonal} type={'tel'} placeholder='Phone number' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='email' onChange={handleChangePersonal} type={'email'} placeholder='Email id' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='linkedin' onChange={handleChangePersonal} type={'url'} placeholder='LinkedIn Id' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='github' onChange={handleChangePersonal} type={'url'} placeholder='Github account' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='address' onChange={handleChangePersonal} type={'text'} placeholder='Address' />
                    </FormControl>
                </div>

                {/* Skills Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Technical Skills
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input name='skill' onChange={handleChangePersonal} type={'text'} placeholder='Separate skills by comma' />
                    </FormControl>
                </div>

                {/* Language Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Languages
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input name='language' onChange={handleChangePersonal} type={'text'} placeholder='Separate skills by comma' />
                    </FormControl>
                </div>


                {/* Education Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Education
                    </Heading>
                    <hr />
                    <Button onClick={handleEducationClick} className='my-3 w-100' colorScheme='telegram' variant='solid'>Add Education</Button>
                    {
                        (educationCount > 0) ? educationArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Projects Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Projects
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckProj(!checkProj))} colorScheme='telegram' />
                    </div>
                    <hr />
                    <Button disabled={checkProj} onClick={handleProjectClick} className='my-3 w-100' colorScheme='telegram' variant='solid'>Add Projects</Button>
                    {
                        (projectCount > 0) ? projArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Work Experience Area  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Work Experience
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckWork(!checkWork))} colorScheme='telegram' />
                    </div>
                    <hr />
                    <Button disabled={checkWork} onClick={handleWorkClick} className='my-3 w-100' colorScheme='telegram' variant='solid'>Add Experience</Button>
                    {
                        (workCount > 0) ? workArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Awards & Achievement  */}
                <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Awards & Achievement
                        </Heading>
                        <Switch defaultChecked={true} onChange={() => (setCheckAward(!checkAward))} colorScheme='telegram' />
                    </div>
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <Textarea name='awards' disabled={checkAward} onChange={handleChangeAwards} placeholder='Use comma to separate Achievement' />
                    </FormControl>
                </div>

                 {/* Add extra Data  */}
                 <div id="form-personal" className='mb-2'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Heading as='h4' size='md' className='my-2'>
                            Extra Section
                        </Heading>
                        <Switch defaultChecked={true}
                                onChange={() => (setCheckExtraSectionData(!checkExtraSectionData))}
                                colorScheme='telegram'/>
                    </div>
                    <hr/>
                    <Button disabled={checkExtraSectionData} onClick={handleChangeExtraSectionDataClick}
                            className='my-3 w-100' colorScheme='telegram'
                            variant='solid'>Add Extra Section</Button>
                    {
                        (extraSectionDataCount > 0) ? extraSectionArrTemplate.map((element, index) => <div
                            key={index}>{element}</div>) : null
                    }
                </div>

            </div>
        </>
    )
}

export default UserDataCollect
