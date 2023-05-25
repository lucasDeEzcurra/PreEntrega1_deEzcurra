import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Container, Form } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/db";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export const CheckOut = () => {
  const { cartProducts, onDeleteCartProducts } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");


  const Navigate = useNavigate();

  const saveOrder = async (object) => {
    setLoading(true);
    try {
      const orderRef = await addDoc(collection(db, "ordenes"), {
        data: object,
      });
      console.log("Orden guardada correctamente con ID:", orderRef.id);
      Navigate(`/order/${orderRef.id}`)
      onDeleteCartProducts()
      
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      alert("Emails No Coinciden");
      return;
    }

    const formData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      fecha: new Date().toLocaleDateString(),
      products: cartProducts,
    };

    saveOrder(formData);
  };

  return (
    <Container>
      {loading ? <LoadingSpinner text={'Se esta completando su compra !  '}></LoadingSpinner>
       : 
        <Form onSubmit={handleSubmit} className="checkout-form">
          <h2 className="checkout-title">Checkout</h2>
          <Form.Group controlId="firstName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Número de teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu número de teléfono"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="confirmEmail">
            <Form.Label>Confirmar correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa nuevamente tu correo electrónico"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit" className="checkout-btn">
            Confirmar Orden
          </Button>
        </Form>
      }
    </Container>
  );
};
