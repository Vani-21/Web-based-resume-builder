import React, { useContext } from 'react'
import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
import './theme.css'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {AiFillLinkedin} from "react-icons/ai";
import ResumeContext from '../Context/ResumeContext';

const Theme = (props) => {
    const { componentRef, themeData } = props;
    const { name, address, phone, email,linkedin, profile, profileImage, summary, skill, language } = themeData.personalData;

    const { checkProj, checkWork, checkAward, checkExtraSectionData } = useContext(ResumeContext)
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;
    const {extraSectionTitles, extraSectionDesc} = themeData.extraSectionData

    return (


        
        <Box id="section-to-print" ref={componentRef} >

            <Box id="">
            <section className='bottom-part d-flex '>
                    <section className='partition-1'  >
                    <div class="partition1-1">
                <header id='info' className='text-center m-2 d-flex justify-content-between align-items-center'>
                    
             <Box className='mx-2 mb-2'>
                        <Image id='resume-avatar' borderRadius={100} boxSize={'100px'} src={profileImage} alt='Profile Picture' />
    </Box>
                   
                </header>
                {/*<div className="w-100 border border-dark m-auto"></div>*/}
                
                        <Box> <div class="underline_">
                            <Heading fontSize='2xl' className='my-2'>Contact</Heading></div>
                            
                            <Box className='mt-3'>
                                
                                <Text fontSize={'md'}><BsFillTelephoneFill className='d-inline mx-1' />{phone}</Text>
                               
                                <Text fontSize={'md'}><GrMail className='d-inline mx-1' />{email}</Text>
                                <Text fontSize={'md'}><AiFillLinkedin className='d-inline mx-1' />{linkedin}</Text>
                                
                                <Text width={'190px'} fontSize={'md'}><ImLocation className='d-inline mx-1' />{address}</Text>
                            </Box>
                        </Box>
                        <Box className='mt-5'>
                        <div class="underline_"> <Heading fontSize='2xl' className='my-2'>Skills</Heading></div>
                            <Box className='mt-3'>
                                {
                                    skill.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' bgColor=' rgb(176,176,176)' key={index}>{item}</Badge><br />
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>

                        <Box className='mt-5'>
                        <div class="underline_"><Heading fontSize='2xl' className='my-2'>Languages</Heading></div>
                            <Box className='mt-3'>
                                {
                                    language.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1'bgColor=' rgb(176,176,176)' key={index}>{item}</Badge><br />
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                        </div>
                    </section>

                    <div style={{ height: '1245px' }} ></div>
                    

                    <section className='partition-2'>

  <section class='one'>
                    <Box className='info-text text-start' >
                   <div class='one-one'>
                    <div class="underline_"><Heading as='h2' size='2xl' fontWeight={'500'} className='mb-2' >
                       {name}
                   </Heading></div>
                   <Text fontWeight={'400'} fontSize='2xl'  className='mt-1 mb-2' class="profile" >
                       {profile}
                   </Text>
                   </div>
               </Box>
               </section>

              
<div class='part3'>

               <div class="underline_"> <Heading fontSize='2xl' className='my-2' >Summary</Heading> </div>      
               <Text width={'400px'} fontSize='sm' className='mt-1 mb-2 summary-text'>
                       {summary}
                   </Text>
                        <Box id='education-area'>
                        <div class="underline_"> <Heading fontSize='2xl' className='my-2'>Education</Heading> </div>
                            {
                                Object.entries(educationTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="mt-3">
                                            <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
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

                        {
                            !checkProj &&
                            <Box id='project-area'>
                                <div class="underline_"><Heading fontSize='2xl' className='mt-4'>Projects</Heading></div>
                                {
                                    Object.entries(projectTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
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
                        }
                        {
                            !checkWork &&
                            <Box id='experience-area'>
                                <div class='underline_'><Heading fontSize='2xl' className='mt-4'>Work Experience</Heading></div>
                                {
                                    Object.entries(workTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
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
                        }
                        {
                            !checkAward &&
                            <Box id='award-area'>
                                <div class="underline_"><Heading fontSize='2xl' className='mt-4'>Awards & Achievement</Heading></div>
                                <Box className='mt-1'>
                                    {
                                        awards.split(',').map((element, index) => {
                                            return <li key={index}>{element}</li>
                                        })
                                    }
                                </Box>
                            </Box>
                        }

{
                            !checkExtraSectionData &&
                            <Box id='extra-area'>
                                {
                                    Object.entries(extraSectionTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                {/*<Heading fontSize='md' className='my-2'>{element[1]}</Heading>*/}
                                                <div class="underline_"><Heading fontSize='2xl' className='mt-4'>{element[1]}</Heading>
                                                      </div>
                                                <Box className='sub-details'>
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
</div>
                    </section>
                </section>
            </Box>
        </Box>
    )
}

export default Theme