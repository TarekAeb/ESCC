
import { Flex,Text } from "@chakra-ui/react";
import Lottie from "react-lottie";
import animationData from "../../public/assets/animate.json";

const Close = ()=>{
    const defaultOptions = {
        loop: true, // Loop the animation
        autoplay: true, // Start playing the animation
        animationData: animationData, // The JSON animation data
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice', // Preserve aspect ratio
        },
    };
    return (
        <Flex style={{ background: '#004FB9' }} className="w-[100vw] h-[100vh] flex flex-col justify-center items-center text-xl">
                <Lottie options={defaultOptions} height={350} width={350} />
                <Text color="white" textAlign={'center'} padding={1}>Registration are closed</Text>
            </Flex>
    )
}
export default Close;