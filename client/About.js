import React from 'react'
import { Avatar, 
        Card,
        Section, 
        SectionHeader, 
        Block, 
        Donut, 
        Heading,
        Text } from 'rebass'
import { Row, Col } from 'react-flexbox-grid';

const About = () => (
  <Section>
      <Row center="xs">
        <Card  
          width={256}
        >
          <Avatar
              circle
              size={64}
              src={require('./photos/cat-face.jpeg')}
          />
          <Heading
            level={2}
            size={3}
          >
          Me
          </Heading>
          <Text>
          Web Developer
          </Text>
        </Card>
      </Row>
    <SectionHeader
      description='My Skills'
    />
    <Row center="xs">
    <Block
      color="blue"
      px={2}
    >
      <Heading level={3}>
        Ninja
      </Heading>
      <Donut
        color="primary"
        size={128}
        strokeWidth={8}
        value={0.5}
      />
    </Block>
    <Block
      color="blue"
      px={2}
    >
      <Heading level={3}>
        Good With Pets
      </Heading>
      <Donut
        color="primary"
        size={128}
        strokeWidth={8}
        value={0.75}
      />
    </Block>
    </Row>
  </Section>
)

export default About