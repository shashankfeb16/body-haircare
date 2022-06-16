import React, { useState } from 'react'
import style from '../style/nav.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper";
import 'swiper/css';
import Modal from 'react-modal';
import styled from "../style/modal.module.css"
import {useDisclosure} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react'
import { useCart } from "react-use-cart";
import Cart from '../../pages/Cart';



const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {isOpen,onOpen,onClose} = useDisclosure();
  const btnRef = React.useRef()
  function open(){
      setModalIsOpen(true);
  }
  function closeModal(){
    setModalIsOpen(false);
  }

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
} = useCart();


  return (
    <div>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="myswiper"
        style={{
          backgroundColor:"#51514B",
          color:"#fff",
          aspectRatio:"auto",
          height:"18px"
        }}
      >
        <SwiperSlide style={{fontSize:"12px"}}>3% OFF ON PREPAID ORDERS</SwiperSlide>
        <SwiperSlide style={{fontSize:"12px"}}>BUY 2 GET 2 MINIS FREE</SwiperSlide>
        <SwiperSlide style={{fontSize:"12px"}}>UPTO 20% OFF SITEWIDE</SwiperSlide>
        <SwiperSlide style={{fontSize:"12px"}}>NEW LAUNCH:20% VITAMIN SERUM</SwiperSlide>
      </Swiper>


      {/* NAV MENU */}
  <div className={style.nav}>
      <div>
      <div className="drawer"><i className="fa-solid fa-bars" onClick={open} onMouseEnter={closeModal}></i>
        <Modal isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        // onRequestClose={()=> setModalIsOpen(false)}
        ariaHideApp={false}
          style={{
          overlay:{
            aspectRatio:"auto",
    // backgroundColor:'grey',
    margin:"0",
    marginTop: "150px",
    height:"40%",
    width:"100%",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    aspectRatio:"auto",
          }
        }}
        className={styled.modal}>
       <div style={{overflowY: 'scroll',paddingLeft:"35px"}}>
      
       <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>WHAT'S NEW</h3></a>

        <a href="#" style={{textDecoration: "none",color:"#DD73A2"}}><h3 style={{fontWeight:"400"}}>TOP SUMMER PICKS</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>BEST SELLERS</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>SHOP BY INGREDIENTS</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>SHOP BY CONCERN</h3></a>

        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>SHOP ALL PRODUCTS</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>HAIR CARE</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>BODY CARE</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>IKWI NUTRITION</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>KNOW US BETTER</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>PROFILE</h3></a>
        
        <a href="#" style={{textDecoration: "none",color:"black"}}><h3 style={{fontWeight:"400"}}>LOGIN</h3></a>



       </div>
       <div>
        <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Vitamin_C_Burger_Menu_Banner_1.png?v=1652446441" style={{width:"50%",height:"70%",borderRadius:"15px",marginTop:"70px",marginLeft:"215px"}} alt="Not Found!" />
       </div>
          
       </Modal>
      </div>

      {/* LOGO */}
      <div>
      <div><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348" 
      alt="Not Found!"/></div>
      {/* SEARCH BAR */}
      <div><i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search...." /></div>
     
     {/* BAG / CART */}
     <div><i className="fa-solid fa-bag-shopping" ref={btnRef} onClick={onOpen}></i>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{borderBottom:"1px solid grey",fontWeight:"700"}}>BAG</DrawerHeader>


{/* drawerbody */}
          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <Cart></Cart>
           
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            <Button colorScheme='blue' style={{
              width: '100%',backgroundColor:"#FF6781",color:"white"
            }}>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      </div>
     
     {/* LOGIN */}
      <div><i className="fa-solid fa-user"></i></div>
      </div>
      </div>
  </div>
    </div>
  )
}

export default Navbar