import React from 'react';
import {Box, Container, Image, Text, Heading, Stack} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    position: "absolute",
    left: "15%",
    top: "50%",
    transform: "translate(50%,-50%)",
    textTransform: "uppercase",
    padding: "4px", 
    size: "2xl"
  };
  

const Home = () => {
  return <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid '} m={'auto'}>Services</Heading>
        <Stack h='full' p={'4'} alignItems={'center'} direction={["column", "row"]}>
            <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Posuere ac ut consequat semper viverra nam libero. Nec ultrices dui sapien eget mi proin sed libero. Semper eget duis at tellus at urna condimentum mattis pellentesque. Proin libero nunc consequat interdum varius sit amet. Orci ac auctor augue mauris augue neque gravida in fermentum. Sed faucibus turpis in eu mi bibendum neque. Pretium quam vulputate dignissim suspendisse in est ante in. Vitae tortor condimentum lacinia quis vel. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. 
            </Text>
        </Stack>
    </Container>
  </Box>

};

const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
)

export default Home