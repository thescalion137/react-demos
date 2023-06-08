import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log("data : ", filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <Button variant="outline-dark me-2" onClick={() => setFilter(data)}>
            All
          </Button>
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            men's Clothing
          </Button>
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </Button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <Card className="h-100 text-center p-4" key={product.id}>
                  <Card.Img variant="top" src={product.image} height="250px" />
                  <Card.Body>
                    <Card.Title className="mb-0">
                      {product.title.substring(0, 12)}...
                    </Card.Title>
                    <Card.Text className="lead fw-bold">
                      ${product.price}
                    </Card.Text>
                    {/* <Button variant="outline-dark">Buy Now</Button> */}
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justiyf-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
