import React from 'react'
import { Card, CardImage, Text, Heading, Section } from 'rebass'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Pets = () => (
  <Section>
    <Row center="xs">
      <Col xs={12} sm={3}>
        <Card>
          <CardImage width={256}
            src={require('./photos/fred.jpeg')}
          />
          <Heading level={3}>
           Fred
          </Heading>
          <Text>
            First puppy
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={3}>
        <Card>
          <CardImage width={256}
            src={require('./photos/george.jpeg')}
          />
          <Heading level={3}>
           George
          </Heading>
          <Text> 
            Second puppy 
          </Text>
        </Card>
      </Col>
    </Row>
  </Section>
)

export default Pets