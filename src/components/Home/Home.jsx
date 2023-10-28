import React from 'react';
import { Heading, Stack, VStack, Text, Button, Image } from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading size={'2xl'}>LEARN FROM THE EXPERTS!</Heading>
            <Text>Find Valueable course at reasonable rates.</Text>
            <Link to="/courses">
              <Button colorScheme={'blue'} size={'lg'}>
                Explore Now!
              </Button>
            </Link>
          </VStack>
          <Image boxSize={'md'} src={vg} />
        </Stack>
      </div>
    </section>
  );
};

export default Home;
