import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Member, occupations } from '../components/Member'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Member name={'Tom Tom'} occupation={occupations.cooker}/>
          <Button variant="success">Save</Button>
        </Col>
      </Row>
    </Container>
  )
}
