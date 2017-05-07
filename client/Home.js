import React from 'react'
import { Avatar, Text, Section, SectionHeader, Panel, PanelHeader } from 'rebass'
import { Grid, Row, Col } from 'react-flexbox-grid';


const Home = () => (
  <Row center="xs">
    <Section>
      <Panel theme="info">
        <PanelHeader >
          React Boilerplate
        </PanelHeader>
        <Text>
          <Row> This is a boilerplate for a react personal wesbite. Technologies:
              </Row>
          <Row>
            <a href="http://jxnblk.com/rebass/">
              rebass</a>
          </Row>
          <Row>
            <a href="http://roylee0704.github.io/react-flexbox-grid/">
              React-FlexBox-Grid </a>
          </Row>
          <Row>
            <a href="https://reacttraining.com/react-router/web/guides/quick-start">
              React Router 4 </a>
          </Row>
          <Row>
            <a href="https://webpack.js.org/guides/">
              Webpack 2</a>
          </Row>
          <Row>
            <a href="https://babeljs.io/">
              Babel</a>
          </Row>
        </Text>
      </Panel>

    </Section>
  </Row>
)

export default Home