import React, {useContext} from 'react'
import {Box, Text, Image, Heading, Badge} from '@chakra-ui/react';
import './theme10.css'
import {AiFillLinkedin} from "react-icons/ai";
import {IoMdContact} from "react-icons/io";
import {GrMail} from "react-icons/gr";
import {ImLocation} from "react-icons/im";
import {GrGithub} from "react-icons/gr";
import ResumeContext from '../Context/ResumeContext';

const Theme10 = (props) => {
    const {componentRef, themeData} = props;
    const {
        name,
        address,
        phone,
        email,
        profile,
        profileImage,
        summary,
        linkedin,
        github,
        skill,
        language
    } = themeData.personalData;

    const {checkProj, checkWork, checkAward, checkExtraSectionData} = useContext(ResumeContext)
    const {projectTitles, projectDesc} = themeData.projectData;
    const {educationTitles, educationDesc} = themeData.educationData;
    const {workTitles, workDesc} = themeData.workData;
    const {awards} = themeData.awardData;
    const {extraSectionTitles, extraSectionDesc} = themeData.extraSectionData
    return (
        <Box id="section-to-print" ref={componentRef}>
            <Box id="theme10">
                <Box className='sizing'>
                    <header id='info' className='text-center d-flex align-items-center _10'>
                        <Box className='mx-2 mb-2'>
                            <Image id='resume-avatar_10' borderRadius={150} src={profileImage} alt='Profile Picture'/>
                        </Box>

                        <Box className='info-text_10 text-start '>
                            <Heading as='h2' size='2xl' className='mb-2' color={'white'}>
                                {name}
                            </Heading>
                            <Text fontWeight={'500'} fontSize='xl' className='mt-1 mb-2' color={'white'}>
                                {profile}
                            </Text>

                        </Box>


                    </header>
                </Box>

                <section className='bottom-part d-flex mt-3'>
                    <section className='partition10_1'>
                        <Box>
                            <Heading fontSize='2xl' className='my-2 underlining' color={'#942637'}>Contact</Heading>
                            <Box className='mt-3'>
                                <Heading fontSize='md' className='my-2'><IoMdContact className='d-inline mx-1'/>{phone}
                                </Heading>

                                <Heading fontSize='md' width={'190px'} className='my-2'><GrMail
                                    className='d-inline mx-1'/>{email}</Heading>

                                <Heading fontSize='md' width={'190px'} className='my-2'><AiFillLinkedin
                                    className='d-inline mx-1'/>{linkedin}</Heading>
                                <Heading fontSize='md' width={'190px'} className='my-2'><GrGithub
                                    className='d-inline mx-1'/>{github}</Heading>
                                <Heading fontSize='md' width={'190px'} className='my-2'><ImLocation
                                    className='d-inline mx-1'/>{address}</Heading>
                            </Box>
                        </Box>
                        <Box className='mt-5'>
                            <Heading fontSize='2xl' className='my-2 underlining' color={'#942637'}>Skills</Heading>
                            <Box className='mt-3'>
                                {
                                    skill.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' key={index}>{item}</Badge><br/>
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>

                        <Box className='mt-5 '>
                            <Heading fontSize='2xl' className='my-2 underlining' color={'#942637'}>Languages</Heading>
                            <Box className='mt-3'>
                                {
                                    language.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' key={index}>{item}</Badge><br/>
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </section>

                    <div style={{height: '1050px'}} className=" mx-3"></div>

                    <section className='partition10_2'>
                        <Heading fontSize='2xl' className='my-2 underlining' color={'#942637'}>About Me</Heading>

                        <Text width={'400px'} fontSize='sm' className='mt-1 mb-2 summary-text'>
                            {summary}
                        </Text>


                        <Box id='education-area'>
                            <Heading fontSize='2xl' className='my-2 underlining' color={'#942637'}>Education</Heading>
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
                                <Heading fontSize='2xl' className='mt-4 underlining'
                                         color={'#942637'}>Projects</Heading>
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
                                <Heading fontSize='2xl' className='mt-4 underlining' color={'#942637'}>Work
                                    Experience</Heading>
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
                                <Heading fontSize='2xl' className='mt-4 underlining' color={'#942637'}>Awards &
                                    Achievement</Heading>
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
                            // !checkExtra &&
                            // <Box id='extra-area'>
                            //     <Heading fontSize='2xl' className='mt-4 underlining' color={'#942637'}>{title}</Heading>
                            //     <Box className='mt-1'>
                            //         {
                            //             extra.split(',').map((element, index) => {
                            //                 return (
                            //                     <li key={index}>{element}</li>
                            //                 )
                            //             })
                            //         }
                            //     </Box>
                            // </Box>
                        }
                        {
                            !checkExtraSectionData &&
                            <Box id='extra-area'>
                                {
                                    Object.entries(extraSectionTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                {/*<Heading fontSize='md' className='my-2'>{element[1]}</Heading>*/}
                                                <Heading fontSize='2xl' className='mt-4 underlining'
                                                         color={'#942637'}>{element[1]}</Heading>

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
                <Box className='sizing1'></Box>
            </Box>
        </Box>
    )
}

export default Theme10