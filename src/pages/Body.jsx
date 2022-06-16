import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel, Card, Button } from 'react-bootstrap';
import styles from "../styles/body.module.css"



const Body = () => {
    return (
        <div>
            <div style={{marginTop: "100px"}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/shop_all_desk_3_3.png?v=1653457175"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/bodycare_desktop.png?v=1639668460"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_home_4.png?v=1645176921"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-SPREAD-THE-LOVE-Desktop-Final_3.png?v=1638165803" alt="" className="d-block w-100" />
            </div>
            <br />
            <br />
            <div>
                <h2>Just In</h2>
                <h1>Body Care</h1>
            </div>
            <div className={styles.card}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ROSE_2.png?v=1636617537" />
                    <Card.Body>
                        <Card.Title>Body Butter</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/0_1.png?v=1636623319" />
                    <Card.Body>
                        <Card.Title>Serum Lotion</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.3_d0fb05cd-1610-4b66-ad0d-391d4aad2676.png?v=1636537323" />
                    <Card.Body>
                        <Card.Title>Body Scrub</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <br />
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Model-Image-Desktop_2_1ac15045-7c83-4680-9bd8-6d5a5878a0c4.png?v=1636955347" alt="" />
            </div>
            <br />
            <br />
            <div>
                <h2>Body</h2>
                <h1>Scrub</h1>
                <p>Buff that Ruff</p>
            </div>
            <div className={styles.card}>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-14.jpg?v=1646477249" />
                    <Card.Body>
                        <p>4.7/5 (26)</p>
                        <Card.Text>
                            <p>Vitamin C {`&`} Avalon Lemon</p>
                            <p>Sugar Body Scrub</p>
                           <div  className={styles.stk}>
                             <del>Rs: 545</del>
                             <p style={{color: "#ff6781"}}>Rs: 490</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-13.jpg?v=1646477177" />
                    <Card.Body>
                        <p>4.7/5 (22)</p>
                        <Card.Text>
                            <p>Damask Rose{`&`} Lavender</p>
                            <p>Gel Body Scrub</p>
                            <div  className={styles.stk}>
                             <del>Rs: 545</del>
                             <p style={{color: "#ff6781"}}>Rs: 490</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <br />
            <div>
                <h2>SERUM</h2>
                <h1>LOTIONS</h1>
                <p>Hydrations your bae</p>
            </div>
            <div className={styles.card}>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_5_1f30698f-72cf-4165-8bca-302aa29817e2.jpg?v=1646477193" />
                    <Card.Body>
                        <p>4.8/5 (33)</p>
                        <Card.Text>
                            <p>Damask Rose{`&`} Lavender</p>
                            <p>Hydrating Hyaluronic Body Lotion</p>
                            <div className={styles.stk}>
                                <del>Rs: 595.00</del>
                                <p style={{color: "#ff6781"}}>Rs: 535</p>
                            </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-11_2.jpg?v=1646477397" />
                    <Card.Body>
                        <p>4.9/5 (19)</p>
                        <Card.Text>
                            <p>Avalon Lemon{`&`} Verbena</p>
                            <p>Vitamin C Glow Body Lotion</p>
                            <div  className={styles.stk}>
                             <del>Rs: 595</del>
                             <p style={{color: "#ff6781"}}>Rs: 535</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <br />
            <div>
                <h2>BODY</h2>
                <h1>BUTTER</h1>
                <p>Buttery, melt-in goodness</p>
            </div>
            <div className={styles.card}>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6.jpg?v=1644862704" />
                    <Card.Body>
                        <p>5.0/5 (35)</p>
                        <Card.Text>
                            <p>Cocoa{`&`} French vanilla</p>
                            <p>Rich Body Butter with 10% SHEA</p>
                            <div  className={styles.stk}>
                             <del>Rs: 595</del>
                             <p style={{color: "#ff6781"}}>Rs: 505</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2.png?v=1644862556" />
                    <Card.Body>
                        <p>4.9/5 (35)</p>
                        <Card.Text>
                            <p>Damask Rose{`&`} Lavender</p>
                            <p>Velvet Body Butter With 5% SHEA</p>
                            <div  className={styles.stk}>
                             <del>Rs: 595</del>
                             <p style={{color: "#ff6781"}}>Rs: 505</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <br />
            <div className={styles.card}>
                <Card style={{ width: '800px' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/long_3.png?v=1646650083" />
                    <Card.Body>
                        <p>5.0/5 (35)</p>
                        <Card.Text>
                            <p>Cocoa{`&`} French vanilla</p>
                            <p>Rich Body Butter with 10% SHEA</p>
                            <div  className={styles.stk}>
                             <del>Rs: 495</del>
                             <p style={{color: "#ff6781"}}>Rs: 445</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <br />
            <div>
                <h2>OUR</h2>
                <h1>COMBOS</h1>
            </div>
            <div className={styles.card} >
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8.jpg?v=1643717568" />
                    <Card.Body>
                        <p>5.0/5 (35)</p>
                        <Card.Text>
                            <p>Cocoa{`&`} French vanilla</p>
                            <p>Rich Body Butter with 10% SHEA</p>
                            <div  className={styles.stk}>
                             <del>Rs: 1140</del>
                             <p style={{color: "#ff6781"}}>Rs: 1026</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9.jpg?v=1643714860" />
                    <Card.Body>
                        <p>4.9/5 (35)</p>
                        <Card.Text>
                            <p>Damask Rose{`&`} Lavender</p>
                            <p>Velvet Body Butter With 5% SHEA</p>
                            <div  className={styles.stk}>
                             <del>Rs: 1140</del>
                             <p style={{color: "#ff6781"}}>Rs: 1026</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <br />
            <div className={styles.combos}>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9.jpg?v=1643714860" />
                    <Card.Body>
                        <p>4.9/5 (35)</p>
                        <Card.Text>
                            <p>Damask Rose{`&`} Lavender</p>
                            <p>Velvet Body Butter With 5% SHEA</p>
                            <div  className={styles.stk}>
                             <del>Rs: 1190</del>
                             <p style={{color: "#ff6781"}}>Rs: 1071</p>
                           </div>
                        </Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Body