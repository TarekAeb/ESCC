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
} from "@chakra-ui/react";
import { Departments } from "../constants";
import { Basketr, Books, FootballPlayer, Health1 } from "../utils";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
export default function Register() {
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Motivation: "",
        DiscordId: "",
        Deps: Departments.map((dep) => ({ ...dep, selected: false })),
        Dep1: "",
        Dep1Reason: "",
        Dep2: "",
        Dep2Reason: "",
        Dep3: "",
        Dep3Reason: "",
        Experience: "",
        Message: "",
    });
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const discordRef = useRef(null);
    const BasketballRRef = useRef(null);
    const ExplainRef = useRef(null);
    const leftElement1 = useRef(null);
    const leftElement2 = useRef(null);
    const bottomElement2 = useRef(null);
    const rightElement2 = useRef(null);
    const leftElement3 = useRef(null);
    const rightElement3 = useRef(null);
    const btnElement2 = useRef(null);
    const rightElement2Text = useRef(null);
    const btn3Ref = useRef(null);

    gsap.registerPlugin();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState(0);
    useGSAP(() => {
        if (step === 0) {
            const firstNameInput = firstNameRef.current;
            const lastNameInput = lastNameRef.current;
            const emailInput = emailRef.current;
            const phoneInput = phoneRef.current;
            const discordInput = discordRef.current;
            const basketballRImg = BasketballRRef.current;
            const explainText = ExplainRef.current;
            if (
                firstNameInput &&
                lastNameInput &&
                emailInput &&
                phoneInput &&
                discordInput &&
                basketballRImg &&
                explainText
            ) {
                const inputs = [firstNameInput, lastNameInput, emailInput, phoneInput, discordInput];
                inputs.forEach((input) => {
                    gsap.from(input, {
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: "power3.out",
                        // delay: index * 0.1, // Adjust delay for each input if desired
                    });
                });

                gsap.from(basketballRImg, {
                    opacity: 0,
                    x: 50,
                    duration: 0.8,
                    ease: "power3.out",
                });

                gsap.from(explainText, {
                    opacity: 0,
                    y: -50,
                    duration: 0.8,
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

    }, [step]);


    const animateNext = () => {
        if (step === 0) {
            gsap.to(BasketballRRef.current, {
                duration: 1,
                x: 1000, // move to the right by 1000px
                ease: "power2.inOut",
            });
            gsap.to(leftElement1.current, {
                duration: 1,
                x: -1000, // move to the left by 1000px
                ease: "power2.inOut",
            });
            gsap.to(ExplainRef.current, {
                duration: 1,
                y: -1000, // move upwards by 1000px
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
                height: '120px',
                ease: "power2.inOut",
                onComplete: () => {
                    setStep(2);
                }
            })
        }
        else if (step === 2) {
            gsap.to(leftElement3.current, {
                duration: 1,
                x:-1000,
            })
            gsap.to(btn3Ref.current, {
                duration: 1,
                maxWidth: '500px',
                background: 'blue',
                x:500,
                onComplete: () => {
                    setStep(3);
                }
            })
        }
    };


    const handleNext = () => {
        animateNext();
    };
    // const handlePrevious = () => setStep(step - 1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        const data = new FormData();
        data.append("Name", formData.FirstName + " " + formData.LastName);
        data.append("Email", formData.Email);
        data.append("Phone", formData.Phone);
        data.append("Departments", `${formData.Dep1}, ${formData.Dep2}, ${formData.Dep3}`);
        data.append("DepReasons", `${formData.Dep1Reason}, ${formData.Dep2Reason}, ${formData.Dep3Reason}`);
        data.append("DiscordId", formData.DiscordId);
        data.append("Motivation", formData.Motivation);
        data.append("Message", formData.Message);

        const sheetUrl = "https://script.google.com/macros/s/AKfycby59Pgo7LQWo3Msav6FtiQlF3OL9LbfMV9EpISSDrTGTWxVVBjqy8UL7v8mBkA2u0PEbw/exec";

        try {
            const res = await fetch(sheetUrl, { method: "POST", body: data });
            const json = await res.json();

            if (res.ok && json.result === "success") {
                setSuccess("Your information has been recorded successfully! Check your email daily to hear about your acceptance 😊");
                setFormData({
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Phone: "",
                    Motivation: "",
                    DiscordId: "",
                    Dep1: "",
                    Dep1Reason: "",
                    Dep2: "",
                    Dep2Reason: "",
                    Dep3: "",
                    Dep3Reason: "",
                    Experience: "",
                    Message: "",
                    Deps: Departments.map((dep) => ({ ...dep, selected: false })),
                });
            } else {
                throw new Error(json.result || "Unexpected response from the server.");
            }
        } catch (err: any) {
            setError(err.message || "There was an error submitting the form.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ChakraProvider>
            <div className="py-4 flex flex-col w-full items-center justify-center"
                style={{
                    // minHeight: '100vh',
                    height: '100vh'
                }}>
                <Flex>
                    <Flex className="bg-element" position={'absolute'} bottom={0} left={'-10%'} borderRadius={'50%'} width={'60vw'} height={'90vh'} zIndex={-1}></Flex>
                    <Flex className="bg-element" position={'absolute'} left={0} top={-20} borderRadius={'50%'} width={'80vw'} height={'50vh'} zIndex={-1}></Flex>
                    <Flex className="bg-element" position={'absolute'} bottom={0} borderRadius={'50%'} width={'70vw'} height={'100vh'} zIndex={-1}></Flex>
                </Flex>
                <Heading as="h1" size="xl" color={'#ffffff'} fontFamily={'Permanent Marker'} textAlign="center" my={5}>
                    ESC club registration
                </Heading>
                <Flex width={{ base: '100%', md: '70%' }} paddingX={'40px'} className="justify-between items-center" mb={10} gap={{ base: '2%', md: '4%' }}>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 0 ? '#FF9300' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 1 ? '#D60002' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 2 ? '#00D44A' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                    <Flex alignItems={'center'} justify={'center'} borderRadius={'20px'} width={{ base: '20%', md: '28%' }} height={{ base: '8px', md: '10px' }} background={`${step >= 3 ? '#016FB9' : '#ffffff'} `} border={'.1px solid #fff'}></Flex>
                </Flex>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 p-4 md:p-6 lg:p-8 xl:p-10">
                    {step === 0 && (
                        <Flex direction={'column'}>
                            <Heading ref={ExplainRef} as={'h1'} size={'md'} fontFamily={'Permanent Marker'} color={'#000'} textAlign={'center'} mb={5}>Complete the form below to become one of the ESCC family</Heading>
                            <Flex justify={'space-around'}>
                                <Flex ref={leftElement1} direction="column" gap={6} width={{ base: "100%", md: "50%" }} maxWidth={'550px'} padding={6}>
                                    <FormControl isRequired>
                                        <FormLabel color={'#fff'}>First name</FormLabel>
                                        <Input
                                            ref={firstNameRef}
                                            placeholder="Enter Your First Name"
                                            name="FirstName"
                                            value={formData.FirstName}
                                            onChange={handleChange}
                                            background={'#ffffff'}
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel color={'#fff'}>Family name</FormLabel>
                                        <Input
                                            ref={lastNameRef}
                                            placeholder="Enter your Last name"
                                            name="LastName"
                                            value={formData.LastName}
                                            onChange={handleChange}
                                            background={'#ffffff'}
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel color={'#fff'}>Email</FormLabel>
                                        <Input
                                            ref={emailRef}
                                            placeholder="enter your Email (preferably your school email)"
                                            name="Email"
                                            value={formData.Email}
                                            onChange={handleChange}
                                            type="email"
                                            background={'#ffffff'}
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel color={'#fff'}>Phone Number</FormLabel>
                                        <Input
                                            ref={phoneRef}
                                            placeholder="Enter your Phone number (0---------)"
                                            name="Phone"
                                            value={formData.Phone}
                                            onChange={handleChange}
                                            type="tel"
                                            background={'#ffffff'}
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel color={'#fff'}>Discord ID</FormLabel>
                                        <Input
                                            ref={discordRef}
                                            placeholder="Enter your Discord ID"
                                            name="DiscordId"
                                            value={formData.DiscordId}
                                            onChange={handleChange}
                                            background={'#ffffff'}
                                        />
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
                                    <Button onClick={handleNext} width={'150px'} borderRadius={'30px'} colorScheme="orange" alignSelf={'end'} color={'#fff'} >Next</Button>
                                </Flex>
                                <img ref={BasketballRRef} className="hidden md:flex max-h-[700px]" src={Basketr} />
                            </Flex>
                        </Flex>
                    )}
                    {step === 1 && (
                        <Flex width={'100%'}>
                            <Flex direction={'column'} width={{ base: '100%', md: '50%' }} >
                                <FormControl ref={leftElement2} isRequired opacity={0}  >
                                    <FormLabel color="#fff" fontSize="2xl" alignSelf={'center'}>
                                        Choose Your First Department
                                    </FormLabel>
                                    {/* <Flex direction={'column'}> */}
                                    <RadioGroup name="Dep1" value={formData.Dep1}>
                                        <Stack direction={'column'} textColor={'#FFF'} fontSize={'xl'} >
                                            {Departments.map((dep) => (
                                                <Radio
                                                    key={dep.title}
                                                    colorScheme="red"
                                                    value={dep.title}
                                                    onChange={(e) => {
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            Dep1: e.target.value,
                                                        }));
                                                    }}
                                                >
                                                    {dep.title}
                                                </Radio>
                                            ))}
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>
                                <img ref={bottomElement2} src={Books} style={{ maxWidth: '400px', alignSelf: 'end', opacity: 0 }} className="w-[100px]" />
                            </Flex>
                            <Flex ref={rightElement2} direction={'column'} gap={'40px'} opacity={0} justify={"space-between"} width={{ base: '100%', md: '50%' }}>
                                <FormControl>
                                    <FormLabel color={'#fff'} fontSize={'2xl'}>Why do you choose this department</FormLabel>
                                    <Textarea
                                        ref={rightElement2Text}
                                        name="Dep1Reason"
                                        value={formData.Dep1Reason}
                                        onChange={handleChange}
                                        placeholder="Enter your answer"
                                        background={'#ffffff'}
                                        border={'1px'}
                                        borderColor={'red'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'250px'}
                                    />
                                </FormControl>
                                <Button ref={btnElement2} onClick={handleNext} width={'150px'} borderRadius={'30px'} colorScheme="red" alignSelf={'center'} color={'#fff'} >Next</Button>
                            </Flex>
                        </Flex>
                    )}
                    {step === 2 && (
                        <Flex width={'100%'}>
                            <Flex direction={'column'} justifyContent={'space-between'} width={{ base: '100%', md: '50%' }}>
                                <FormControl ref={leftElement3} isRequired opacity={0}>
                                    <FormLabel color={'#fff'} fontSize={'2xl'}>Choose Your Second Department</FormLabel>
                                    <RadioGroup
                                        name="Dep1"
                                        value={formData.Dep2}
                                    // onChange={handleSelectChange}
                                    >
                                        <Stack direction={'column'} textColor={'#FFF'} fontSize={'xl'}>
                                            {Departments.map((dep) => (
                                                <Radio
                                                    key={dep.title}
                                                    colorScheme="red"
                                                    value={dep.title}
                                                    onChange={(e) => {
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            Dep1: e.target.value,
                                                        }));
                                                    }}
                                                >
                                                    {dep.title}
                                                </Radio>
                                            ))}
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>
                                <Button onClick={handleNext} width={'150px'} borderRadius={'30px'} colorScheme="green" alignSelf={'end'} color={'#fff'} >Next</Button>
                            </Flex>
                            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} gap={'40px'} width={{ base: '100%', md: '50%' }} >
                                <FormControl ref={rightElement3} opacity={0}>
                                    <FormLabel color={'#fff'} fontSize={'2xl'}>Why do you choose this department</FormLabel>
                                    <Textarea
                                        name="Dep1Reason"
                                        value={formData.Dep1Reason}
                                        onChange={handleChange}
                                        placeholder="Enter your answer"
                                        background={'#ffffff'}
                                        border={'2px'}
                                        borderColor={'#00D44A'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'150px'}
                                    />
                                </FormControl>
                                <img src={Health1} style={{ maxWidth: '400px', alignSelf: 'center' }} className="w-[100px]" />
                            </Flex>
                        </Flex>
                    )}
                    {step === 3 && (
                        <Flex justify={"space-around"}>
                            <img src={FootballPlayer} alt="Football player" className="hidden md:flex w-1/2" />
                            <Flex direction="column" gap={6} width={{ base: '100%', md: '50%' }}>
                                <FormControl isRequired>
                                    <FormLabel color={'#fff'}>What motivates you to join the club?</FormLabel>
                                    <Textarea
                                        name="Motivation"
                                        value={formData.Motivation}
                                        onChange={handleChange}
                                        placeholder="Share your thoughts"
                                        background={'#ffffff'}
                                        border={'2px'}
                                        borderColor={'#016FB9'}
                                        borderRadius={'30px'}
                                        maxWidth={'500px'}
                                        height={'120px'}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel color={'#fff'}>Have you been an athlete before?</FormLabel>
                                    <Textarea
                                        name="Motivation"
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
                                </FormControl>
                                <FormControl>
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
                                </FormControl>
                                <Button ref={btn3Ref} borderRadius={'30px'} maxWidth={'500px'} type="submit" colorScheme="blue" isLoading={loading}>
                                    {loading ? <Spinner size="sm" /> : "Register"}
                                </Button>
                            </Flex>
                        </Flex>
                    )}
                </form>

                {success && (
                    <Alert status="success" mt={4}>
                        <AlertIcon />
                        {success}
                    </Alert>
                )}
                {error && (
                    <Alert status="error" mt={4}>
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
            </div>
        </ChakraProvider >
    );
}

