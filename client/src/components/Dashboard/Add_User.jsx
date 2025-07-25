import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';

function Add_User({ping, setping}) {

  // create a redux dispatch to dispatch actions
  // this will be used to add a new item to the product list 
  const dispatch = useDispatch();

  // // create a state to handle the form data
  // // this will be used to store the data entered in the form
  

  // // handle input change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };
  // // handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //    dispatch the add product action with the form data
  //   dispatch(addproduct(formData));
  //    reset the form data
  //   setFormData({
  //     name: '',
  //     price: '',
  //     description: '',
  //     category: ''
  //   });
  //   // close the modal after submission
  //   handleClose();
  // }



  // create a state to handle the modal visibility
  // this will be used to show the modal when the user clicks on the add button
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newuser, setnewuser] = useState({
    name: '',
    lastname: '',
    birthday: '',
    email: '',
    phone: '',
    address: '',
    bank_card: ''
  });

  return (
    <div className='Core-addUser'>
      <Button variant="primary" onClick={handleShow}>Add new User</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User's data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Insert your Profil Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newuser.name}
                onChange={(e) => setnewuser({ ...newuser, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newuser.lastname}
                onChange={(e) => setnewuser({ ...newuser, lastname: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newuser.birthday}
                onChange={(e) => setnewuser({ ...newuser, birthday: e.target.value })}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-31" controlId="formBasicName">
              <Form.Label>Phone N°</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newuser.phone}
                onChange={(e) => setnewuser({ ...newuser, phone: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newuser.address}
                onChange={(e) => setnewuser({ ...newuser, address: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Bank ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newuser.bank_card}
                onChange={(e) => setnewuser({ ...newuser, bank_card: e.target.value })}
              />
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

export default Add_User