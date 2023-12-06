import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Ecommerce = () => {

  const [productos, setProductos] = useState([]);

  // Parametrización de la API
  const API = "https://api.mercadolibre.com/sites/MLA/search?q=";

  // Obtencion de la cadena de búsqueda
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") ? searchParams.get("q") + " " : "";

  // console.log('DBG> en <Ecommerce> searchTerm= "'+ searchTerm + '"');

  //
  const getProductsMercaLibre = async () => {
    try {
      // consumiendo la api de mercado libre
      /* const appId = '1230072520779662';
            const clientSecret = 'YSU1c0zXlALgdsO9Hl7fG2DgeJRoRBYA';

            const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?nickname=TETE365&limit=10&access_token=${appId}&client_secret=${clientSecret}`);

            console.log(response); */

      // consumiendo la api de mercado libre

      const urlXbox = API + searchTerm + "xbox#json";
      const urlLaptop = API + searchTerm + "laptop#json";
      const urlPhone = API + searchTerm + "phone#json";

      // console.log('dbg> en <Ecommerce> url= ' + urlPhone);

      // const respuestaXbox = await axios.get(urlXbox);
      const respuestaLaptop = await axios.get(urlLaptop);
      const respuestaPhone = await axios.get(urlPhone);

      // meter las dos respuestas en un mismo array con setProductos
      setProductos([
        ...respuestaPhone.data.results,
        ...respuestaLaptop.data.results,
      ]);

      // ...respuestaXbox.data.results,

      //console.log('DBG> Productos:', productos);

    } catch (error) {}
  };

  useEffect(() => {
    getProductsMercaLibre();
  }, [searchTerm]);

  return (
    <Row className="text-center">
      {productos.map((producto, index) => (
        <Col
          sm={4}
          key={index + '.' + producto.id}
          className="d-flex justify-content-center mb-4 "
        >
          <Card style={{ width: "18rem", height: "100%" }}>
            <Card.Img
              variant="top"
              src={producto.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
              style={{
                margin: "20px auto",
                maxWidth: "60%",
                maxHeight: "160px",
              }}
            />

            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>

              <Card.Text className="mb-5">${producto.price} ARS</Card.Text>
              <div>
                <Button variant="primary" className="mb-4">
                  Go somewhere
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Ecommerce;
