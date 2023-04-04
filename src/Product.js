import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'


const Product = ({pselect}) => {
  return (
    <div >
        <Container>
        <Card style={{width: '18rem' ,height:'20rem' , color:'black'}} >
          <Card.Img variant="top" src="holder.js/100px180" />

          
          <Card.Body>
            <Card.Title>{pselect.pname}</Card.Title>
            <Card.Text>{pselect.price}</Card.Text>
          </Card.Body>
        <Button style={{background: 'purple', color: 'black', cursor:'pointer'}} ><TiShoppingCart></TiShoppingCart></Button>
          </Card> 
        </Container>
          {console.log(pselect.pname)}
    </div>

    /*<div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>*/
  )
}

export default Product