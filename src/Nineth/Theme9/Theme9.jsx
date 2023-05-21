import React, { useContext } from 'react'
import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
import './theme9.css'
import { AiFillLinkedin } from "react-icons/ai";
import {IoMdContact} from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { ImLocation} from "react-icons/im";
import { GrGithub} from "react-icons/gr";
import ResumeContext from '../Context/ResumeContext';

const Theme9 = (props) => {
    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile,github, profileImage,linkedin,  skill,language } = themeData.personalData;

    const { checkProj, checkWork, checkAward,checkExtraSectionData } = useContext(ResumeContext)
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;
    const {extraSectionTitles, extraSectionDesc} = themeData.extraSectionData

    return (
        <Box id="section-to-print" ref={componentRef}>
            <Box id="">
                
                <section className='bottom-part d-flex '>
                    
                    <section className='partition9_1'>
                    <header id='info' className='text-center  d-flex justify-content-between align-items-center'>
                <Box className=''>
                        <Image id='resume-avatar_09' className='_09' borderRadius={100} boxSize={'200px'} src={profileImage} alt='Profile Picture' />
                        <Box className='info-text-09 text-start'>
                        <Heading as='h2' size='xl' className='mb-2' color={'white'}>
                            {name}
                        </Heading>
                        <Text fontWeight={'500'} fontSize='xl' className='mt-1 ' color={'white'}>
                            {profile}
                        </Text>
                        
                    </Box>
                    </Box>

                   
                    
                </header>
                
                        <Box className='_091'>
                            <Heading fontSize='xl' className='my-2' color={'white'}>CONTACT</Heading>
                            <Box className='mt-3'>
                                <Heading fontSize='md' className='my-2' color={'white'}><IoMdContact className='d-inline mx-1' />{phone}</Heading>
                                
                                <Heading fontSize='md' width={'190px'} className='my-2' color={'white'}><GrMail className='d-inline mx-1'/>{email}</Heading>
                                
                                <Heading fontSize='md' width={'190px'} className='my-2' color={'white'}><AiFillLinkedin className='d-inline mx-1'/>{linkedin}</Heading>
                                <Heading fontSize='md' width={'190px'} className='my-2' color={'white'}><GrGithub className='d-inline mx-1'/>{github}</Heading>
                                <Heading fontSize='md' width={'190px'} className='my-2' color={'white'}><ImLocation className='d-inline mx-1'/>{address}</Heading>
                                
                            </Box>
                        </Box>
                        <Box className='mt-5 _091'>
                            <Heading fontSize='xl' className='my-2' color={'white'}>SKILLS</Heading>
                            <Box className='mt-3'>
                                {
                                    skill.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' key={index} bg={' #2c78ab'} color={'white'}>{item}</Badge><br />
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>

                        <Box className='mt-5 _091 '>
                            <Heading fontSize='xl' className='my-2' color={'white'}>LANGUAGES</Heading>
                            <Box className='mt-3'>
                                {
                                    language.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' key={index} bg={' #2c78ab'} color={'white'} >{item}</Badge><br />
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </section>

                    <div style={{ height: '1245px' }} className="border "></div>

                    <section className='partition9_2'>

                        <Box id='education-area'>
                            <Heading _dark={{ color: 'gray.800' }} bg={'#cee3f3'} fontSize='xl' className='my-2'>EDUCATION</Heading>
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
                                                            return <li key={index} >{element}</li>
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
                                <Heading _dark={{ color: 'gray.800' }} bg={'#cee3f3'} fontSize='xl' className='mt-4'>PROJECTS</Heading>
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
                                <Heading _dark={{ color: 'gray.800' }} bg={'#cee3f3'} fontSize='xl' className='mt-4'>WORK EXPERIENCE</Heading>
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
                                <Heading _dark={{ color: 'gray.800' }} bg={'#cee3f3'} fontSize='xl' className='mt-4'>AWARDS AND ACHIEVEMENT</Heading>
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
                            <Box id='experience-area'>
                                {
                                    Object.entries(extraSectionTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                {/*<Heading fontSize='md' className='my-2'>{element[1]}</Heading>*/}
                                                <Heading _dark={{ color: 'gray.800' }} bg={'#cee3f3'} fontSize='xl' className='mt-4'>{element[1]}</Heading>

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

                    </section>
                </section>
            </Box>
        </Box>
    )
}

export default Theme9