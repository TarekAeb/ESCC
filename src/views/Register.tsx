import React, { useRef, useState } from "react";
import {
    Spinner,
    Alert,
    AlertIcon,
    ChakraProvider,
    Input,
    Textarea,
    Button,
    Flex,
    Heading,
    FormLabel,
    FormControl,
    FormHelperText,
    RadioGroup,
    Radio,
    Stack,
    Text,
    Box,
    AlertDescription,
    AlertTitle,
    CloseButton,
    Select,
    Link,
    Img
} from "@chakra-ui/react";
// import Lottie from 'react-lottie';
import { Departments } from "../constants";
import { Basketr, Books, FootballPlayer, game, Health1 } from "../utils";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
// import CurrentTime from "../components/waiting.js";
// import animationData from "../../public/assets/animate.json";
import { IoIosArrowRoundBack } from "react-icons/io";
interface FormData {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    School: string;
    Motivation: string;
    DiscordId: string;
    Dep1: string;
    Dep1Reason: string;
    Dep2: string;
    Dep2Reason: string;
    Experience: string;
    Message: string;
}
export default function Register() {
    // const defaultOptions = {
    //     loop: true, // Loop the animation
    //     autoplay: true, // Start playing the animation
    //     animationData: animationData, // The JSON animation data
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice', // Preserve aspect ratio
    //     },
    // };
    // const targetDate = useMemo(() => new Date('2024-10-09T14:30:00'), []);
    // const [isCountdownFinished, setIsCountdownFinished] = useState(false);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const now = new Date().getTime()
    //         const timeLeft = targetDate.getTime() - now

    //         if (timeLeft <= 0) {
    //             setIsCountdownFinished(true) // Switch to content when countdown is done
    //         }
    //     }, 1000)

    //     // Cleanup the interval when the component is unmounted
    //     return () => clearInterval(interval)
    // }, [targetDate]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const now = new Date().getTime()
    //         const timeLeft = targetDate.getTime() - now

    //         if (timeLeft <= 0) {
    //             setIsCountdownFinished(true) // Switch to content when countdown is done
    //         }
    //     }, 1000)

    //     // Cleanup the interval when the component is unmounted
    //     return () => clearInterval(interval)
    // }, [targetDate])

    const [formData, setFormData] = useState<FormData>({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        School: "",
        Motivation: "",
        DiscordId: "",
        Dep1: "",
        Dep1Reason: "",
        Dep2: "",
        Dep2Reason: "",
        Experience: "",
        Message: "",
    });
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const discordRef = useRef(null);
    const schoolRef = useRef(null);
    const BasketballRRef = useRef(null);
    const ExplainRef = useRef(null);
    const leftElement1 = useRef(null);
    const btnElement1 = useRef(null);
    const leftElement2 = useRef(null);
    const bottomElement2 = useRef(null);
    const rightElement2 = useRef(null);
    const leftElement3 = useRef(null);
    const rightElement3 = useRef(null);
    const btnElement2 = useRef(null);
    const rightElement2Text = useRef(null);
    const btn3Ref = useRef(null);
    const Img3Ref = useRef(null);
    const rightElement41Ref = useRef(null);
    const rightElement42Ref = useRef(null);
    const rightElement43Ref = useRef(null);
    const Img4Ref = useRef(null);

    gsap.registerPlugin();

    const [loading, setLoading] = useState(false);
    // const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState(0);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    useGSAP(() => {
        if (step === 0) {
            const firstNameInput = firstNameRef.current;
            const lastNameInput = lastNameRef.current;
            const emailInput = emailRef.current;
            const phoneInput = phoneRef.current;
            const discordInput = discordRef.current;
            const schoolInput = schoolRef.current;
            const basketballRImg = BasketballRRef.current;
            const explainText = ExplainRef.current;
            if (
                firstNameInput &&
                lastNameInput &&
                emailInput &&
                phoneInput &&
                discordInput &&
                schoolInput &&
                basketballRImg &&
                explainText
            ) {
                const inputs = [firstNameInput, lastNameInput, emailInput, schoolInput, phoneInput, discordInput];
                inputs.forEach((input, index) => {
                    gsap.from(input, {
                        opacity: 0,
                        top: 49,
                        left: -index * 40,
                        duration: 1,
                        ease: "power3.out",
                        delay: index * .1, // Adjust delay for each input if desired
                    });
                });
                gsap.from(basketballRImg, {
                    opacity: 0,
                    x: 50,
                    duration: 1,
                    ease: "power3.out",
                });

                gsap.from(explainText, {
                    opacity: 0,
                    y: -50,
                    duration: 1,
                    ease: "power3.out",
                });
            }
        }
        if (step === 1) {
            // Animate elements for step 1 after step is incremented
            gsap.fromTo(leftElement2.current, {
                opacity: 0,
                x: -1000,
            }, {
                duration: 1,
                opacity: 1,
                x: 0,
                ease: "power2.inOut"
            });

            gsap.fromTo(bottomElement2.current, {
                opacity: 0,
                y: 1000,
            }, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power2.inOut"
            });

            gsap.fromTo(rightElement2.current, {
                opacity: 0,
                x: 1000,
            }, {
                duration: 1,
                opacity: 1,
                x: 0,
                ease: "power2.inOut"
            });
        }
        if (step === 2) {
            gsap.fromTo(leftElement3.current, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0,
            });
            gsap.fromTo(rightElement3.current, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0,
            });
        }
        if (step === 3) {
            gsap.from(rightElement41Ref.current, {
                opacity: 0,
                top: -1000,
                duration: 1,
                ease: "power2.inOut",
            });
            gsap.from(rightElement42Ref.current, {
                opacity: 0,
                top: -1000,
                duration: 1,
                ease: "power2.inOut",
                delay: .2,
            });
            gsap.from(rightElement43Ref.current, {
                opacity: 0,
                top: -1000,
                duration: 1,
                ease: "power2.inOut",
                delay: .4,
            });
            gsap.from(Img4Ref.current, {
                duration: 1,
                x: -1000,
                ease: "power2.inOut"
            })
        }
    }, [step]);

    const validateFields = () => {
        const newErrors: Partial<FormData> = {};
        if (step == 0) {
            if (!formData.FirstName.trim()) {
                newErrors.FirstName = "First name is required";
            } else if (formData.FirstName.length < 2) {
                newErrors.FirstName = "First name must be at least 2 characters long";
            }

            if (!formData.LastName.trim()) {
                newErrors.LastName = "Last name is required";
            } else if (formData.LastName.length < 2) {
                newErrors.LastName = "Last name must be at least 2 characters long";
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!formData.Email.trim()) {
                newErrors.Email = "Email is required";
            } else if (!emailRegex.test(formData.Email)) {
                newErrors.Email = "Invalid email format.";
            }
            if (!formData.School.trim()) {
                newErrors.School = "The school is required"
            }

            // const phoneRegex = /^\d{10}$/;

            // // Check if phone number is empty
            // if (!formData.Phone.trim()) {
            //     return; // Exit the function if phone is empty
            // }

            // // Check if phone number is exactly 10 digits
            // if (!phoneRegex.test(formData.Phone) && formData.Phone.trim()) {
            //     newErrors.Phone = "Phone number must be exactly 10 digits";
            // }

            // const discordRegex = /^.{3,32}$/;
            // if (!formData.DiscordId.trim()) {
            //     newErrors.DiscordId = "Discord ID is required";
            // } else if (!discordRegex.test(formData.DiscordId)) {
            //     newErrors.DiscordId = "Discord ID format must be 'username#1234'";
            // }
        }

        if (step === 1) {
            if (!formData.Dep1.trim()) {
                newErrors.Dep1 = "You must select Department 1";
            }
            if (!formData.Dep1Reason.trim()) {
                newErrors.Dep1Reason = "Please provide a reason for selecting Department 1";
            }
        }
        if (step === 2) {
            // if (!formData.Dep2.trim()) {
            //     newErrors.Dep2 = "You must select Department 2";
            // }

            // if (!formData.Dep2Reason.trim()) {
            //     newErrors.Dep2Reason = "Please provide a reason for selecting Department 2";
            // }
        }
        if (step === 3) {
            if (!formData.Motivation || formData.Motivation.length < 10) {
                newErrors.Motivation = "Motivation must be at least 10 characters long if provided";
            }
            if (formData.Experience && formData.Experience.length < 10) {
                newErrors.Experience = "Experience must be at least 10 characters long if provided";
            }

            if (formData.Message && formData.Message.length > 500) {
                newErrors.Message = "Message cannot exceed 500 characters";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleNext = () => {
        const isValid = validateFields();
        if (isValid) {
            if (step === 0) {
                gsap.to(BasketballRRef.current, {
                    duration: 1,
                    x: 1000,
                    ease: "power2.inOut",
                });
                gsap.to(leftElement1.current, {
                    duration: 1,
                    x: -1000,
                    ease: "power2.inOut",
                });
                gsap.to(btnElement1.current, {
                    duration: 1,
                    x: '40vw',
                })
                gsap.to(ExplainRef.current, {
                    duration: 1,
                    y: -1000,
                    ease: "power2.inOut",
                    onComplete: () => {
                        // Increment step after animations complete
                        setStep(1); // Set to the next step
                    }
                });
            }
            else if (step === 1) {
                gsap.to(leftElement2.current, {
                    duration: 1,
                    x: -1000, // move to the right by 1000px
                    ease: "power2.inOut",
                });
                gsap.to(bottomElement2.current, {
                    duration: 1,
                    x: 500, // move to the left by 1000px
                    ease: "power2.inOut",
                    opacity: 0,
                });
                gsap.to(btnElement2.current, {
                    duration: 1,
                    x: -450,
                    ease: "power2.inOut"
                }
                )
                gsap.to(rightElement2Text.current, {
                    duration: 1,
                    height: '150px',
                    ease: "power2.inOut",
                    onComplete: () => {
                        setStep(2);
                    }
                })
            }
            else if (step === 2) {
                gsap.to(leftElement3.current, {
                    duration: 1,
                    x: -1000,
                    ease: "power2.inOut"
                })
                gsap.to(rightElement3.current, {
                    duration: 1,
                    y: -500,
                    ease: "power2.inOut"
                })
                gsap.to(Img3Ref.current, {
                    duration: 1,
                    y: 1000,
                    ease: "power2.inOut"
                })
                gsap.to(btn3Ref.current, {
                    duration: 1,
                    x: 500,
                    background: '#016FB9',
                    ease: "power2.inOut",
                    onComplete: () => {
                        setStep(3);
                    }
                })
            }
        }
    };
    // const handlePrevious = () => setStep(step - 1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateFields()) {
            setLoading(true);
            // setSuccess(null);
            setError(null);

            const data = new FormData();
            data.append("FirstName", formData.FirstName);
            data.append("LastName", formData.LastName);
            data.append("Email", formData.Email);
            data.append("Phone", formData.Phone);
            data.append("School", formData.School);
            data.append("DiscordId", formData.DiscordId);
            data.append("Motivation", formData.Motivation);
            data.append("Dep1", formData.Dep1);
            data.append("Dep1Reason", formData.Dep1Reason);
            data.append("Dep2", formData.Dep2);
            data.append("Dep2Reason", formData.Dep2Reason);
            data.append("Experience", formData.Experience);
            data.append("Message", formData.Message);

            const sheetUrl = "https://script.google.com/macros/s/AKfycbyTvysGsM6Ojx6nnaHrSHYC6wStJPVzvH-RatVCi8onm0VfKh0rtxLw9495Sj552wC6OQ/exec";

            try {
                console.log("Sending data to server...");
                const res = await fetch(sheetUrl, {
                    method: "POST",
                    body: data,
                });
                console.log("Server response:", res);
                const json = await res.json();
                console.log("Server response:", json);

                if (res.ok && json.result === "success") {
                    // setSuccess("Your information has been recorded successfully! Check your email daily to hear about your acceptance 😊");
                    setFormData({
                        FirstName: "",
                        LastName: "",
                        Email: "",
                        Phone: "",
                        School: "",
                        Motivation: "",
                        DiscordId: "",
                        Dep1: "",
                        Dep1Reason: "",
                        Dep2: "",
                        Dep2Reason: "",
                        Experience: "",
                        Message: "",
                    });
                    setStep(4);
                } else {
                    throw new Error(json.message || "Unexpected response from the server.");
                }
            } catch (err: any) {
                setError(err.message || "There was an error submitting the form.");
            } finally {
                setLoading(false);
            }
        }
    };
    const renderMainContent = () => (
        <ChakraProvider>
            <Flex direction={'column'} width={'100%'} alignItems={'center'} py={4} justify={'center'} minHeight={'100vh'} background={{ base: '#016FB9', md: 'transparent' }}>
                <Flex display={{ base: 'none', md: 'flex' }}>
                    <Flex className="bg-element" position="absolute" bottom={0} left="-10%" borderRadius="50%" width="60vw" height="90vh" zIndex={-1}></Flex>
                    <Flex className="bg-element" position="absolute" left={0} top="-20" borderRadius="50%" width="80vw" height="50vh" zIndex={-1}></Flex>
                    <Flex className="bg-element" position="absolute" bottom={0} borderRadius="50%" width="70vw" height="100vh" zIndex={-1}></Flex>
                </Flex>

                <Heading as="h1" size="xl" color={'#ffffff'} fontFamily={'Exo 2'} textAlign="center" my={5}>
                    ESC club registration
                </Heading>
                {step !== 4 && (<Flex width={{ base: '100%', md: '70%' }} paddingX={'40px'} className="justify-between items-center" mb={10} gap={{ base: '2%', md: '4%' }}>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 0 ? '#FF9300' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 1 ? '#D60002' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 2 ? '#00D44A' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 3 ? '#016FB9' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                </Flex>)}
                <form onSubmit={handleSubmit} style={{ transition: "opacity 0.5s ease-in-out" }} className="w-full flex flex-col gap-4 p-4 md:p-6 lg:p-8 xl:p-10 ">
                    {step === 0 && (
                        <Flex style={{ transition: "opacity 0.5s ease-in-out" }} direction={'column'}>
                            <Heading ref={ExplainRef} as={'h1'} size={'md'} fontFamily={'Exo 2'} color={'#000'} textAlign={'center'} mb={5}>Complete the form below to become one of the ESCC family</Heading>
                            <Flex justify={'space-around'}>
                                <Flex direction="column" gap={6} width={{ base: "100%", md: "50%" }} justify={'center'} maxWidth={'550px'} padding={6}>
                                    <Flex ref={leftElement1} direction="column" gap={6} width={"100%"} maxWidth={'550px'} padding={{ base: 1, lg: 6 }}>
                                        <FormControl isRequired ref={firstNameRef}>
                                            <FormLabel color={'#fff'}>First name</FormLabel>
                                            <Input

                                                placeholder="Enter Your First Name"
                                                name="FirstName"
                                                value={formData.FirstName}
                                                onChange={handleChange}
                                                background={'#ffffff'}
                                                border={`1px solid ${errors.FirstName ? 'red' : 'none'}`}
                                            />
                                            {errors.FirstName && <Text color="red">{errors.FirstName}</Text>}
                                        </FormControl>
                                        <FormControl isRequired ref={lastNameRef}>
                                            <FormLabel color={'#fff'}>Family name</FormLabel>
                                            <Input

                                                placeholder="Enter your Last name"
                                                name="LastName"
                                                value={formData.LastName}
                                                onChange={handleChange}
                                                background={'#ffffff'}
                                                border={`1px solid ${errors.LastName ? 'red' : 'none'}`}
                                            />
                                            {errors.LastName && <Text color="red">{errors.LastName}</Text>}
                                        </FormControl>
                                        <FormControl isRequired ref={emailRef}>
                                            <FormLabel color={'#fff'}>Email</FormLabel>
                                            <Input

                                                placeholder="enter your Email (preferably the school one)"
                                                name="Email"
                                                value={formData.Email}
                                                onChange={handleChange}
                                                type="email"
                                                background={'#ffffff'}
                                                border={`1px solid ${errors.Email ? 'red' : 'none'}`}
                                            />
                                            {errors.Email && <Text color="red">{errors.Email}</Text>}
                                        </FormControl>
                                        <FormControl ref={schoolRef} isRequired>
                                            <FormLabel color={'#fff'}>School</FormLabel>
                                            <Select
                                                placeholder='Select your school'
                                                name="School"
                                                value={formData.School}
                                                onChange={(e) => setFormData(prev => ({ ...prev, School: e.target.value }))}
                                                background={'#fff'}
                                                border={errors.School ? '1px solid red' : 'none'}
                                                defaultValue={'ENSIA'}
                                            >
                                                <option value='ESNN'>ESNN</option>
                                                <option value='ENSA'>ENSA</option>
                                                <option value='NHSM'>NHSM</option>
                                                <option value='ENSIA'>ENSIA</option>
                                                <option value='NHSC'>NHSC</option>
                                            </Select>
                                            {errors.School && <Text color="red">{errors.School}</Text>}
                                        </FormControl>
                                        <FormControl ref={phoneRef}>
                                            <FormLabel color={'#fff'}>Phone Number</FormLabel>
                                            <Input
                                                placeholder="Enter your Phone number (0---------)"
                                                name="Phone"
                                                value={formData.Phone}
                                                onChange={handleChange}
                                                type="tel"
                                                background={'#ffffff'}
                                            />
                                            {errors.Phone && <Text color="red">{errors.Phone}</Text>}
                                        </FormControl>
                                        <FormControl ref={discordRef}>
                                            <FormLabel color={'#fff'}>Discord ID</FormLabel>
                                            <Input

                                                placeholder="Enter your Discord ID"
                                                name="DiscordId"
                                                value={formData.DiscordId}
                                                onChange={handleChange}
                                                background={'#ffffff'}
                                            />
                                            {errors.DiscordId && <Text color="red">{errors.DiscordId}</Text>}
                                            <FormHelperText>
                                                Can't find your Discord ID?{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID"
                                                >
                                                    Visit Discord support
                                                </a>
                                            </FormHelperText>
                                        </FormControl>
                                    </Flex>
                                    <Button ref={btnElement1} onClick={handleNext} width={'150px'} borderRadius={'30px'} colorScheme="orange" alignSelf={'end'} color={'#fff'} >Next</Button>
                                </Flex>
                                <img ref={BasketballRRef} className="hidden md:flex max-h-[700px]" src={Basketr} />
                            </Flex>
                        </Flex>
                    )}
                    {step === 1 && (
                        <Flex style={{ transition: "opacity 0.5s ease-in-out" }} width={'100%'} direction={{ base: 'column', md: 'row' }}>
                            <Flex direction={'column'} width={{ base: '100%', md: '50%' }} >
                                <FormControl ref={leftElement2} isRequired opacity={0}> {/* Adjust opacity if needed */}
                                    <FormLabel color="#fff" fontSize="2xl" alignSelf={'center'} textAlign={{ base: 'center', md: 'start' }}>
                                        Choose Your First Department
                                    </FormLabel>
                                    <RadioGroup
                                        name="Dep1"
                                        value={formData.Dep1}
                                        onChange={(value) => setFormData(prev => ({ ...prev, Dep1: value }))}
                                    >
                                        <Stack direction={'column'} textColor={'#FFF'} fontSize={'xl'}>
                                            {Departments.map((dep) => (
                                                <Radio
                                                    key={dep.title}
                                                    colorScheme="red"
                                                    value={dep.title}
                                                >
                                                    {dep.title}
                                                </Radio>
                                            ))}
                                        </Stack>
                                    </RadioGroup>
                                    {errors.Dep1 && <Text color="red">{errors.Dep1}</Text>}
                                </FormControl>
                                <img ref={bottomElement2} src={Books} style={{ maxWidth: '400px', alignSelf: 'end', opacity: 0 }} className="hidden md:flex w-[100px]" />
                            </Flex>
                            <Flex direction={'column'} gap={'40px'} justify={"space-between"} width={{ base: '100%', md: '50%' }}>
                                <FormControl ref={rightElement2} opacity={0}>
                                    <FormLabel color={'#fff'} fontSize={'2xl'} textAlign={{ base: 'center', md: 'start' }}>Why do you choose this department</FormLabel>
                                    <Textarea
                                        ref={rightElement2Text}
                                        name="Dep1Reason"
                                        value={formData.Dep1Reason}
                                        onChange={handleChange}
                                        placeholder="Enter your answer"
                                        background={'#ffffff'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'250px'}
                                        border={`solid ${errors.Dep1Reason ? '2px red' : 'red 1px'}`}
                                    />
                                    {errors.Dep1Reason && <Text color="red">{errors.Dep1Reason}</Text>}
                                </FormControl>
                                <Button ref={btnElement2} onClick={handleNext} width={'150px'} borderRadius={'30px'} colorScheme="red" alignSelf={'center'} color={'#fff'} >Next</Button>
                            </Flex>
                        </Flex>
                    )}
                    {step === 2 && (
                        <Flex style={{ transition: "opacity 0.5s ease-in-out" }} width={'100%'} direction={{ base: 'column', md: 'row' }}>
                            <Flex direction={'column'} justifyContent={'space-between'} width={{ base: '100%', md: '50%' }}>
                                <FormControl ref={leftElement3} opacity={0}>
                                    <FormLabel color="#fff" fontSize="2xl" alignSelf={'center'} textAlign={{ base: 'center', md: 'start' }}>Choose Your Second Department <span className="text-sm text-grayLight">Press next to skip</span></FormLabel>
                                    <RadioGroup
                                        name="Dep2"
                                        value={formData.Dep2}
                                        onChange={(value) => setFormData(prev => ({ ...prev, Dep2: value }))}
                                    >
                                        <Stack direction={'column'} textColor={'#FFF'} fontSize={'xl'}>
                                            {Departments.map((dep) => (
                                                <Radio
                                                    key={dep.title}
                                                    colorScheme="red"
                                                    value={dep.title}
                                                >
                                                    {dep.title}
                                                </Radio>
                                            ))}
                                        </Stack>
                                    </RadioGroup>
                                    {errors.Dep2 && <Text color="red">{errors.Dep2}</Text>}
                                </FormControl>
                                <Button ref={btn3Ref} onClick={handleNext} width={'150px'} borderRadius={'30px'} colorScheme="green" alignSelf={'end'} color={'#fff'} className="hidden md:flex">Next</Button>
                            </Flex>
                            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} gap={'40px'} width={{ base: '100%', md: '50%' }} >
                                <FormControl ref={rightElement3} opacity={0}>
                                    <FormLabel color={'#fff'} fontSize={'2xl'}>Why do you choose this department</FormLabel>
                                    <Textarea
                                        name="Dep2Reason"
                                        value={formData.Dep2Reason}
                                        onChange={handleChange}
                                        placeholder="Enter your answer"
                                        background={'#ffffff'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'150px'}
                                        border={`solid ${errors.Dep2Reason ? '2px red' : '1px #00D44A'}`}

                                    />
                                    {errors.Dep2Reason && <Text color="red">{errors.Dep2Reason}</Text>}
                                </FormControl>
                                <img ref={Img3Ref} src={Health1} style={{ maxWidth: '400px', alignSelf: 'center' }} className="hidden md:flex w-[100px]" />
                                <Button onClick={handleNext} width={'150px'} borderRadius={'30px'} colorScheme="green" alignSelf={'end'} color={'#fff'} hidden>Next</Button>
                            </Flex>
                        </Flex>
                    )}
                    {step === 3 && (
                        <Flex justify={"space-around"} style={{ transition: "opacity 0.5s ease-in-out" }}>
                            <img ref={Img4Ref} src={FootballPlayer} alt="Football player" className="hidden md:flex w-1/2" />
                            <Flex direction="column" gap={6} width={{ base: '100%', md: '50%' }}>
                                <FormControl isRequired ref={rightElement41Ref}>
                                    <FormLabel color={'#fff'}>What motivates you to join the club?</FormLabel>
                                    <Textarea
                                        name="Motivation"
                                        value={formData.Motivation}
                                        onChange={handleChange}
                                        placeholder="Share your thoughts"
                                        background={'#ffffff'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'120px'}
                                        border={`2px solid ${errors.Motivation ? 'red' : '#016FB9'}`}
                                    />
                                    {errors.Motivation && <Text color="red">{errors.Motivation}</Text>}
                                </FormControl>
                                <FormControl ref={rightElement42Ref}>
                                    <FormLabel color={'#fff'}>Have you been an athlete before?</FormLabel>
                                    <Textarea
                                        name="Experience"
                                        value={formData.Experience}
                                        onChange={handleChange}
                                        placeholder="Share any experience you have"
                                        background={'#ffffff'}
                                        border={'2px'}
                                        borderColor={'#016FB9'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'120px'}
                                    />
                                    {errors.Experience && <Text color="red">{errors.Experience}</Text>}
                                </FormControl>
                                <FormControl ref={rightElement43Ref}>
                                    <FormLabel color={'#fff'}>Any addition you want to add?</FormLabel>
                                    <Textarea
                                        name="Message"
                                        value={formData.Message}
                                        onChange={handleChange}
                                        placeholder="What's in your mind"
                                        background={'#ffffff'}
                                        border={'2px'}
                                        borderColor={'#016FB9'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'120px'}
                                    />
                                    {errors.Message && <Text color="red">{errors.Message}</Text>}
                                </FormControl>
                                <Button borderRadius={'30px'} maxWidth={'500px'} type="submit" colorScheme="blue" isLoading={loading}>
                                    {loading ? <Spinner size="sm" /> : "Register"}
                                </Button>
                            </Flex>
                        </Flex>
                    )}
                    {step === 4 && (
                        <Flex direction="column" className="bg-white self-center" padding={{ base: '10px', md: '20px', lg: '25px' }} borderRadius={{ base: '25px', md: '40px' }} gap={'10px'} width={{ base: '80%', md: '400px', lg: '600px', xl: '50%' }} alignSelf={'center'}>
                            <Flex direction="column" className="md:text-lg text-black text-center" gap={'10px'} justify={'center'} alignItems={'center'}>
                                <Text fontWeight={'bold'} fontSize={'xl'} color="green">Congratulations!</Text>
                                <h2>Your information has been recorded successfully! Check your email daily to hear about your acceptance 😊</h2>
                                <Text>Feel free to visit our <Link href="https://www.instagram.com/ensia.sport.culture.club" target="_blank" color={'orange.500'} fontWeight={'bold'}>Instagram</Link> account and <Link href={'https://discord.gg/px6CnQUb'} target="_blank" color={'orange.500'} fontWeight={'bold'}>Discord </Link> server to stay updated.</Text>
                                <Img src={game} width={{ base: '80px', md: '100px' }} className="" alt="Game over icon" />
                            </Flex>
                            <Link href="/" className="text-grayDark text-start flex items-center"><IoIosArrowRoundBack />Return to the registration</Link>
                        </Flex>

                    )}
                </form>
                {error && (
                    <Flex className="fixed" maxWidth={'100%'} top={20}>{/*TODO*/}
                        <Alert status='error' >
                            <AlertIcon />
                            <Box>
                                <AlertTitle>Error!</AlertTitle>
                                <AlertDescription>
                                    {error}
                                </AlertDescription>
                            </Box>
                            <CloseButton
                                alignSelf='flex-start'
                                position='relative'
                                right={-1}
                                top={-1}
                                onClick={() => { setError(null); window.location.reload(); }}
                            />
                        </Alert>
                    </Flex>
                )}
            </Flex>
        </ChakraProvider >
    );
    return (
        <>
            {/* {
                isCountdownFinished ? renderMainContent() :
                    <ChakraProvider>
                        <Flex style={{ background: '#004FB9' }} className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
                            <Lottie options={defaultOptions} height={350} width={350} />
                            <Text fontSize="2xl" color="white" textAlign={'center'} padding={1}>Registration will be available soon</Text>
                            <CurrentTime />
                        </Flex>
                    </ChakraProvider>
            } */}
            {renderMainContent()}
        </>
    )
}

