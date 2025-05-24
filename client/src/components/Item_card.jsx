import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Detail from './Detail';

function Item_card({el}) {
  
  return (
    <div className='container-carte'>
        <Card style={{ width: '18rem', height:'27rem' }}>
            <Card.Img variant="top" src={el.photo} style={{minHeight:"214px", maxHeight:"214px", padding:"30px"}} />
            <Card.Body>
                <Card.Title>{el.trademark} {el.designation}</Card.Title>
                <Card.Text>
                    {el.price}
                </Card.Text>
             <Detail el={el}/>
                <Button style={{backgroundColor:'red'}}>Delete</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item_card