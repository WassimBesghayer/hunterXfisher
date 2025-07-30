import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Add_Product({ping, setping}) {

    // create a redux dispatch to dispatch actions
    // this will be used to add a new item to the product list 
    const dispatch = useDispatch();

    // create a state to handle the modal visibility
    // this will be used to show the modal when the product clicks on the add button
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
      // create a state to handle the new product data
      // this will be used to store the data entered in the form
      const [newproduct, setnewproduct] = useState({
        designation: '',
        trademark: '',
        product_code: '',
        description: '',
        price: '',
        category: '',
        activity: '',
        warranty: '',
        photo: ''
      });

  return (
    <div className='Core-addProduct'>
        <Button variant="primary" onClick={handleShow}>Add New Product</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Product's Data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product's name"
                value={newproduct.designation}
                onChange={(e) => setnewproduct({ ...newproduct, designation: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Trademark</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the product's manufacturer"
                value={newproduct.trademark}
                onChange={(e) => setnewproduct({ ...newproduct, trademark: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the product's code"
                value={newproduct.product_code}
                onChange={(e) => setnewproduct({ ...newproduct, product_code: e.target.value })}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Say something about the product"
                value={newproduct.product_code}
                onChange={(e) => setnewproduct({ ...newproduct, product_code: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="$ ?"
                value={newproduct.price}
                onChange={(e) => setnewproduct({ ...newproduct, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product's Type (e.g. Rifle, Ammo, Fishing Rod, etc.)"
                value={newproduct.category}
                onChange={(e) => setnewproduct({ ...newproduct, category: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Activity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nature of use (e.g. Hunting, Fishing, etc.)"
                value={newproduct.activity}
                onChange={(e) => setnewproduct({ ...newproduct, activity: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Warranty</Form.Label>
              <Form.Control
                type="text"
                placeholder="For how long is the product guaranteed ?"
                value={newproduct.warranty}
                onChange={(e) => setnewproduct({ ...newproduct, warranty: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Insert the Product's Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"red"}}> Close </Button>
          <Button variant="primary" onClick={handleClose}> Save Changes </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add_Product