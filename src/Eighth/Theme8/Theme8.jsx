import React, { useContext } from 'react'
import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
import './theme8.css'
import ResumeContext from '../Context/ResumeContext';
import { BsChevronDoubleRight } from "react-icons/bs";

const Theme8 = (props) => {
    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, profileImage, summary, skill, language ,linkedin} = themeData.personalData;

    const { checkProj, checkWork, checkAward, checkExtraSectionData } = useContext(ResumeContext)
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;
    const {extraSectionTitles, extraSectionDesc} = themeData.extraSectionData

    return (
        <Box id="section-to-print" ref={componentRef}>
            <Box id="theme8">
                <header id='info' className='text-center d-flex justify-content-between align-items-center color1'>
                <Box className='mx-4  color3'>
                        <Image id='resume-avatar' borderRadius={100} boxSize={'150px'} src={profileImage} alt='Profile Picture' />
                    </Box>
                    <Box className='info-text2 text-start  '>
                        <Heading as='h2' size='xl' className='mb-2'>
                            {name}
                        </Heading>
                        <Text  fontWeight={'500'} fontSize='xl' className='mt-1 mb-2'>
                            {profile}
                        </Text>
                        <Text width={'400px'} fontSize='sm' className='mt-1 mb-2 summary-text'>
                            {summary}
                        </Text>
                    </Box>
                   
                </header>

                <section className='bottom-part d-flex '>
                    <section className='partition-11 color2'>
                        <Box className='text'>
                            <Heading fontSize='2xl' className='my-2' color={'white'}>Contact</Heading>
                            <Box className='mt-3'>
                                <Heading fontSize='md' className='my-2' color={'white'}>Phone</Heading>
                                <Text fontSize={'sm'} color={'white'}>{phone}</Text>
                                <Heading fontSize='md' className='my-2' color={'white'}>Email</Heading>
                                <Text fontSize={'sm'} color={'white'}>{email}</Text>
                                <Heading fontSize='md' className='my-2' color={'white'}>LinkedIn</Heading>
                                <Text fontSize={'sm'} color={'white'}>{linkedin}</Text>
                                <Heading fontSize='md' className='my-2'color={'white'}>Address</Heading>
                                <Text width={'190px'} fontSize={'sm'} color={'white'}>{address}</Text>
                            </Box>
                        </Box>
                        <Box className='mt-5 text'>
                            <Heading fontSize='2xl' className='my-2' color={'white'}>Skills</Heading>
                            <Box className='mt-3'>
                                {
                                    skill.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' key={index} bg={' #6B9999'} color={'white'} >{item}</Badge><br />
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>

                        <Box className='mt-5 text'>
                            <Heading fontSize='2xl' className='my-2' color={'white'}>Languages</Heading>
                            <Box className='mt-3'>
                                {
                                    language.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' key={index} bg={' #6B9999'} color={'white'}>{item}</Badge><br />
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </section>

                    <div style={{ height: '1076px'  }} className="border   " ></div>

                    <section className='partition2'>

                        <Box id='education-area' >
                            <Heading fontSize='2xl' className='my-2 text1' ><BsChevronDoubleRight color='#6B9999' className='text2'/> Education</Heading>
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
                                <Heading fontSize='2xl' className='mt-4 text1'><BsChevronDoubleRight color='#6B9999' className='text2'/>Projects</Heading>
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
                                <Heading fontSize='2xl' className='mt-4 text1'><BsChevronDoubleRight color='#6B9999' className='text2'/>Work Experience</Heading>
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
                                <Heading fontSize='2xl' className='mt-4 text1'><BsChevronDoubleRight color='#6B9999' className='text2'/>Awards & Achievement</Heading>
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
                                                <Heading fontSize='2xl' className='mt-4 text1'><BsChevronDoubleRight color='#6B9999' className='text2'/>{element[1]}</Heading>

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

export default Theme8