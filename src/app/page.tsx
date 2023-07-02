'use client'
import Image from 'next/image'
import Head from 'next/head'
import { Menu } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { Combobox } from '@headlessui/react'
import { } from './page.module.css'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import CustomModal from './custommodal'
import { fetchCars } from './api';
import { useEffect } from 'react';
import {manufacturers,yearsOfProduction,fuels} from './data'
  import { format } from 'path'



export default function Home() {
  const [data, setData] = useState([]);
  // fetch car
  async function handleFetchCars(filter: object) {
    try {
      const result = await fetchCars(filter);
      const dataArray = JSON.parse(JSON.stringify(result));
      console.log(dataArray);
      setData(dataArray);
      return dataArray;
    } catch (error) {
      console.error(error);
    }
  }

  //end fetch car
  useEffect(() => {
    const filter = {
      manufacture: "",
      year: 2022,
      limit: 200,
      model: "",
      fuel: ""
    };
    handleFetchCars(filter);
  }, []);
  //
  const [itemsToShow, setItemsToShow] = useState(3);
  const [hoveredIndexes, setHoveredIndexes] = useState<number[]>([]);
  //combobox

  const [selectedPerson, setSelectedPerson] = useState(null)
  const [query, setQuery] = useState('')
  
  const filteredPeople =
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacturers) => {
          return manufacturers.toLowerCase().includes(query.toLowerCase())
        })



  //end combobox      
  //modal
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const openModal = () => {
    if (hoveredIndexes.length > 0) {
      const firstIndex = hoveredIndexes[0]; // Truy cập vào chỉ số đầu tiên 
      setModalData(data[firstIndex]);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData('');
  };


  //end modal

  const handleShowMore = () => {
    const newItemsToShow = itemsToShow + 3; // Tăng số lượng phần tử hiển thị lên 3

    if (newItemsToShow <= data.length) {
      setItemsToShow(newItemsToShow);

    } else {
      setItemsToShow(data.length); // Giới hạn số lượng phần tử hiển thị là 6
    }
  };
  const [keyword, setKeyword] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);



  const handleMouseEnter = (index: number) => {
    setHoveredIndexes((prevState) => [...prevState, index]);

  };
  const carList = keyword ? filteredCars : data.slice(0, itemsToShow);

  const handleMouseLeave = (index: number) => {
    setHoveredIndexes((prevState) => prevState.filter((item) => item !== index));

  };
  return (



    <div className='row' style={{ marginLeft: '55px', marginRight: '5px', marginTop: '25px' }}>
      <img style={{
        height: '90%',
        width: '71%', zIndex: '-1',
        position: 'absolute', right: '-271px', top: '-60px'
      }} src='..\hero-bg.png'></img>
      <img style={{
        height: '65%',
        width: '55%', zIndex: '-1',
        position: 'absolute', right: '-15px', top: '80px'
      }} src='..\hero.webp'></img>
      <div ></div>
      <div className='row'>
        <div className='col-4'>
          <img style={{
            height: '18px',
            width: '118px',
            left: '5px'
          }} src='..\logo.png'></img>
          <div >
          </div>
        </div>
        <div className='col-4'>
        </div >
        <div className='col-4'>
          <button style={{ height: '45px', width: '90px', position: 'absolute', top: '15px', right: '80px', color: 'blue', borderRadius: '20px 20px 20px 20px' }} className='btn btn-light'> Sign in</button>
        </div>
        <div style={{ marginTop: '100px' }} className='row'>
          <div className='col-5'>
            <h1 style={{ fontSize: '75px', marginTop: '20px' }}>Find, book, rent a car-quick and super easy!</h1>
            <label style={{ fontSize: '26px' }}>Streamline your car rental experience with our effortless booking process.</label>
            <button style={{ marginTop: '40px', borderRadius: '20px 20px 20px 20px' }} className='btn btn-primary'>Exploer Cars</button>
            <h1 style={{ marginTop: '45px' }}>Car Catalogue</h1>
            <label>Explore out cars you might like</label>
          </div>
        </div>
        <div style={{ marginTop: '30px' }} className='row'>
          <div className='col-7'>  <div>
          <Combobox  value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input placeholder="Volkswagen" style={{ height: '40px', width: '300px', backgroundColor: '#F5FFFA', border: 'none', outline: 'none', paddingLeft: '50px', borderRadius: '20px 0px 0px 20px ' }}  onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options style={{width:'350px',height:'70px', position: 'absolute',zIndex:'1', overflow: 'auto', maxHeight: '500px'}}>

        {filteredPeople.map((person) => (
          <Combobox.Option 
          style={{ listStyleType: 'none', backgroundColor: 'white' }}
          onMouseEnter={(event) => event.target.style.backgroundColor = 'blue'}
          onMouseLeave={(event) => event.target.style.backgroundColor = 'white'}
          key={person} value={person}>
           
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>

           
            <img style={{
              position: 'absolute', marginTop: '9px', width: '20px',
              left: '80px'
            }} src='..\car-logo.svg'></img>
            <img style={{
              position: 'absolute', marginTop: '9px', width: '20px',
              left: '385px'
            }} src='..\model-icon.webp'></img>
            <input style={{ height: '40px', width: '330px', backgroundColor: '#F5FFFA', border: 'none', outline: 'none', paddingLeft: '50px' }} placeholder="Tiguan..." type="text" />

            <img style={{ cursor: 'pointer' }} onClick={() => alert('Clicked!')} src='..\magnifying-glass.svg'></img>

          </div>

          </div>
          <div className='col-2'>

          </div>
          <div className='col-3'>
          <select style={{ width: '100px', height: '38px', marginLeft: '10px', outline: 'none', borderRadius: '10px 10px 10px 10px ' }} id="year">
            { fuels.map((fuel,index:number)=> (
               <option value={fuel.value}>{fuel.title}</option>
            ))}
            </select>
            <select style={{ marginLeft:'10px', width: '100px', height: '40px', outline: 'none', borderRadius: '10px 10px 10px 10px ' }} name="lang" id="type">
            { yearsOfProduction.map((year,index:number)=> (
               <option value={year.value}>{year.title}</option>
            ))}
            </select>
          



          </div>


        </div>
        <div style={{ marginTop: '40px' }} className='row'>

          {data.slice(0, itemsToShow).map((car, index: number) => (
            <div
              key={index}
              style={{ height: '380px', marginTop: '10px' }}
              className="col-4 car-card"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div style={{ height: '360px', background: hoveredIndexes.includes(index) ? '#FFFFFF' : '#F5FFFA', marginTop: '10px', borderRadius: '20px 20px 20px 20px' }}>
                <label style={{ marginTop: '15px', marginLeft: '20px' }}><b>{car.make.charAt(0).toUpperCase() + car.make.slice(1)} {car.model.charAt(0).toUpperCase() + car.model.slice(1)}</b></label>
                <br />
                <span style={{ marginLeft: '20px', marginTop: '20px' }}>$</span>

                <span><b>{150}</b></span>
                <span style={{ marginTop: '55px' }}>/day</span>
                <p><img style={{ marginLeft: '40px', height: '170px', width: '280px', left: '5px' }} src="..\xecon\getimage.webp" alt="Car Image" /></p>


                <p></p>
                {hoveredIndexes.includes(index) && (
                  <center><button onClick={openModal} style={{ width: '100%', marginTop: '20px', borderRadius: '20px 20px 20px 20px' }} className='btn btn-primary'>View More</button></center>
                )}
                {!hoveredIndexes.includes(index) && (
                  <>
                    <img style={{ marginLeft: '35px', height: '20px', width: '20px' }} src="..\steering-wheel.svg" alt="Steering Wheel" />
                    <img style={{ marginLeft: '130px', height: '20px', width: '20px' }} src="..\tire.svg" alt="Tire" />
                    <img style={{ marginLeft: '115px', height: '20px', width: '20px' }} src="..\gas.svg" alt="Gas" />
                    <span style={{ marginLeft: '15px' }}>Automatic</span>
                    <span style={{ marginLeft: '90px' }}>FWD</span>
                    <span style={{ marginLeft: '90px' }}>19MPG</span>
                  </>
                )}
              </div>
            </div>
          ))}


          <div>


            <CustomModal isOpen={isOpen} onClose={closeModal} data={modalData} />
          </div>



         
        </div>







        <div style={{ marginTop: '30px' }} className='row'>
          <center><button style={{ height: '45px', width: '130px', borderRadius: '20px 20px 20px 20px' }} onClick={handleShowMore} className='btn btn-primary'>Show More</button></center>
        </div>



        <div className='row'> 
        
        <div style={{position: 'relative'}} className='col-3'>
   
           </div>
        </div>
  


        





      </div>

      <hr style={{ marginTop: '50px' }}></hr>
      <div className='row'>
        <div className='col-5'>  <img style={{
          height: '18px',
          width: '118px',
          left: '5px'
        }} src='..\logo.png'></img>
          <br></br>
          <label style={{ marginTop: '10px' }}>Carhub 2023 </label>  <br></br>
          <label> All Rights Reserved ©</label>
          <br></br>
        </div>
        <div className='col-2'>
          <label><b>About</b></label>
          <br></br>
          <label style={{ marginTop: '15px' }}>How it works</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Featured</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Partnership</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Bussiness Relation</label>
        </div>
        <div className='col-2'>
          <label><b>Company</b></label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Events</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Blog</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Podcast</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Invite a friend</label>
        </div>
        <div className='col-2'>
          <label><b>Socials</b></label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Discord</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Instagram</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Twitter</label>
          <br></br>
          <label style={{ marginTop: '15px' }}>Facebook</label>
        </div>
      </div>
      <div style={{ marginTop: '70px' }} className='row'></div>
      <hr></hr>
      <div style={{ marginTop: '50px' }} className='row'>
        <div className='col-8'>@2023 CarHub. All rights reserved

        </div>
        <div className='col-2'>Privacy & Policy
        </div>
        <div className='col-2'>
          Terms & Condition</div>
      </div>
      <div style={{ marginTop: '50px' }} className='row'></div>
    </div>


  )
}
