import React, { useContext } from 'react'
import { Heading, Text, Box, Badge} from '@chakra-ui/react'
import './theme7.css'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {AiFillLinkedin} from "react-icons/ai";
import ResumeContext from '../Context/ResumeContext'

const Theme6 = (props) => {
    const { checkProj, checkWork, checkAward,checkExtraSectionData } = useContext(ResumeContext)
    const { themeData, componentRef } = props;
    const { name,  address, phone, email,linkedin, profile, skill,language} = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;
    const {extraSectionTitles, extraSectionDesc} = themeData.extraSectionData


    return (
        <>
            <Box id="section-to-print" ref={componentRef}>
                <Box _dark={{ border: '1px solid white' }} id="theme1">
               
                
                    {/* Personal Info  */}
                    <section className='bottom-part d-flex h11 ' >
               
                    
                    {/*<Box className=''>
                  
                        <Image id='resume-avatar'  boxSize={'100px'} src={profileImage} alt='Profile Picture' /> 
                    </Box>*/}
    
   

                   <div className='h22'>
                   <header id='info' className='text-center mt-2'>
                        <Heading as='h2' size='2xl' className='mb-2'color={'#006DB2'} >
                            {name}
                        </Heading>
                        <Heading as='h1' size='md' className='mt-1 mb-2 ' color={'#006DB2'}  >
                            {profile}
                        </Heading>
                        
                        </header>
                        </div>
                        </section>
                        
                        <div class="underline2"></div>
                        <div class="underline3"></div>
                        <div class="underline3"></div>
                        <div class="underline2"></div>
                        
                        
                        
                        {
                        <section id="Details" className='my-2'>
                            
                           <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                            <div class="underline">DETAILS</div>
                            </Heading>
                            <Box id='contact-set' className='basic-set'>
                            <Text className='sub-title'>Contact</Text>
                        <Text fontSize='md' className='text-muted my-1 ' >
                            <div><span className='mx-2'><ImLocation className='d-inline mx-1' />{address}</span></div>
                            <div><span className='mx-2'><GrMail className='d-inline mx-1' />{email}</span></div>
                            <div><span className='mx-2'><BsFillTelephoneFill className='d-inline mx-1' />{phone}</span></div>
                            <div><span className='mx-2'><AiFillLinkedin className='d-inline mx-1' />{linkedin}</span></div>
                        </Text> </Box>
                        </section>
}
                        {/* WORK EXPERIENCE  */}
                    {
                        !checkWork &&
                        <section id="experience" className='my-2'>
                            <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                            <div class="underline"> WORK EXPERIENCE</div>
                               
                            </Heading>

                            <Box id='experience-set' className='basic-set'>
                                {
                                    Object.entries(workTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="subBox">
                                                <Text className='sub-title'>{element[1]}</Text>
                                                <Box className='sub-details'>
                                                    {
                                                        (Object.entries(workDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(workDesc)[index][1].split(',').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </section>
                    }
                 
                    
                    {/* Skills Part  */}
                    <section id="skills" className='my-2'>
                    
                    <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                    <div class="underline">TECHNICAL SKILLS</div>                       
                        </Heading>

                        <Box id='skills-set' className='basic-set d-flex justify-content-center align-items-center'>
                            <Box className='skillBox'>
                                {
                                    skill.split(',').map((element, index) => <Badge key={index} className='skill-badge' variant='solid'>{element}</Badge>)
                                }
                            </Box>
                        </Box>
                    </section>

                     {/* Language Part  */}
                     <section id="language" className='my-2'>
                    
                     <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                     <div class="underline">LANGUAGES</div>
                    </Heading>

                    <Box id='language-set' className='basic-set d-flex justify-content-center align-items-center'>
                        <Box className='languageBox'>
                            {
                                language.split(',').map((element, index) => <Badge key={index} className='skill-badge' variant='solid'>{element}</Badge>)
                            }
                        </Box>
                    </Box>
                </section>

                    {/* Project Section  */}
                    {
                        !checkProj &&
                        <section id="projects" className='my-2'>
                            <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                            <div class="underline"> PROJECTS </div>
                            </Heading>

                            <Box id='project-set' className='basic-set'>
                                {
                                    Object.entries(projectTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="subBox">
                                                <Text className='sub-title'>{element[1]}</Text>
                                                <Box className='sub-details'>
                                                    {
                                                        (Object.entries(projectDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(projectDesc)[index][1].split(',').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </section>
                    }

                    {/* Education Part  */}

                    <section id="education" className='my-2'>
                        
                    <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                    <div class="underline">EDUCATION </div> 
                        </Heading>

                        <Box id='education-set' className='basic-set'>
                            {
                                Object.entries(educationTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="subBox">
                                            <Text className='sub-title'>{element[1]}</Text>
                                            <Box className='sub-details'>
                                                {
                                                    (Object.entries(educationDesc)[index] === undefined)
                                                        ?
                                                        null
                                                        :
                                                        Object.entries(educationDesc)[index][1].split(',').map((element, index) => {
                                                            return <li key={index}>{element}</li>
                                                        })
                                                }
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </section>

                    
                    {/* Award & Achievement */}
                    {
                        !checkAward &&
                        <section id="awards" className='my-2'>
                            <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                            <div class="underline">AWARDS & ACHIEVEMENTS   </div>                       
                            </Heading>

                            <Box id='award-set' className='basic-set d-flex justify-content-between align-items-center'>
                                <Box>
                                    {
                                        awards.split(',').map((element, index) => {
                                            return <li key={index}>{element}</li>
                                        })
                                    }
                                </Box>
                            </Box>
                        </section>
                    }


                  {/* Extra Part   */}
                  {
                            !checkExtraSectionData &&
                            <Box id='extra-area'>
                                {
                                    Object.entries(extraSectionTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                {/*<Heading fontSize='md' className='my-2'>{element[1]}</Heading>*/}
                                                <Heading _dark={{ color: '' }} bg={''} as='h3' size='md' px={10} py={2} color={'#006DB2'}>
                            <div class="underline">{element[1]}</div></Heading>
                            <Box id='extra-set' className='basic-set'>
                                                    {
                                                        (Object.entries(extraSectionDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(extraSectionDesc)[index][1].split(',').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        }
                    
                </Box>
            </Box>
        </>
    )
}

export default Theme6
