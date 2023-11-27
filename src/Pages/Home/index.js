import React, { useState, useEffect } from 'react'
import { useQuery } from "react-query"
import GetAll from '../../Network/GetAll'
import EventCardWrapper from '../../Components/EventCardWrapper';
import NavigationButtons from "../../Components/NavigationButtons"
import Slider from "../../Components/Slider"
import SearchBar from '../../Components/SearchBar';
import FilterBar from '../../Components/FilterBar';

function Home() {
  const { status, data } = useQuery("events", GetAll)
  const [filteredData, setFilteredData] = useState(data)

  //SearchBar
  const [searchText, setSearchText] = useState("")

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  //Handle Search Bar Operations
  const searchbarHandleSubmit = (e) => {
    e.preventDefault();

    var result = searchText ? data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText) ||
      item.city.toLowerCase().includes(searchText) ||
      item.eventType.toLowerCase().includes(searchText)
    ) : alert("You have to fill in")

    setFilteredData(result)
    setSearchText("")
  }


  //City
  const [city, setCity] = useState("")

  const CityOptions = () =>
    data.map(
      item => item.city).filter(
        (val, id, array) => { return array.indexOf(val) === id }).map(
          (city, index) => <option key={index} value={city}>{city}</option>
        )

  const cityHandleChange = (e) => {
    setCity(e.target.value)
  }


  //Location
  const [location, setLocation] = useState("")

  const LocationOptions = () => data.map(
    item => item.location).filter(
      (val, id, array) => { return array.indexOf(val) === id }).map(
        (location, index) => <option key={index} value={location}>{location}</option>
      );

  const locationHandleChange = (e) => {
    setLocation(e.target.value)
  }


  //Date
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const startDateHandleChange = (e) => {
    setStartDate(e.target.value)
    console.log(startDate)
  }

  const endDateHandleChange = (e) => {
    setEndDate(e.target.value)
    console.log(endDate)
  }

  const ClearFilter = () => {
    setCity("")
    setLocation("")
    setStartDate("")
    setEndDate("")
    setFilteredData(data)
  }

  //Handle Filter Operation
  const filterHandleSubmit = (e) => {
    e.preventDefault()

    !city && !location && !startDate && !endDate && alert("You have to fill in")

    setFilteredData(
      data.filter(item => {
        if (city && !location && !startDate && !endDate) {
          return item.city.toLowerCase() === city.toLowerCase()
        }
        else if (!city && location && !startDate && !endDate) {
          return item.location.toLowerCase() === location.toLowerCase()
        }
        else if (!city && !location && startDate && !endDate) {
          return item.startDate > startDate
        }
        else if (!city && !location && !startDate && endDate) {
          return item.startDate < endDate
        }
        else if (city && location && !startDate && !endDate) {
          return item.city.toLowerCase() === city.toLowerCase()
            && item.location.toLowerCase() === location.toLowerCase()
        }
        else if (!city && !location && startDate && endDate) {
          return (item.startDate > startDate) 
            && (item.startDate < endDate)
        }
        else if (city && !location && startDate && !endDate) {
          return item.city.toLowerCase() === city.toLowerCase() 
            && item.startDate > startDate
        }
        else if (!city && location && startDate && !endDate) {
          return item.location.toLowerCase() === location.toLowerCase() 
            && item.startDate > startDate
        }
        else if (city && !location && !startDate && endDate) {
          return item.city.toLowerCase() === city.toLowerCase() 
            && item.startDate < endDate
        }
        else if (!city && location && !startDate && endDate) {
          return item.location.toLowerCase() === location.toLowerCase() 
            && item.startDate < endDate
        }
        else if (city && location && startDate && !endDate) {
          return item.city.toLowerCase() === city.toLowerCase() 
            && item.location.toLowerCase() === location.toLowerCase() 
            && item.startDate > startDate
        }
        else if (city && location && !startDate && endDate) {
          return item.city.toLowerCase() === city.toLowerCase()  
            && item.location.toLowerCase() === location.toLowerCase() 
            && item.startDate < endDate
        }
        else if (city && !location && startDate && endDate) {
          return item.city.toLowerCase() === city.toLowerCase()
            && item.startDate > startDate
            && item.startDate < endDate
        }
        else if (!city && location && startDate && endDate) {
          return item.location.toLowerCase() === location.toLowerCase() 
            && item.startDate > startDate
            && item.startDate < endDate
        }
      })
    )
    setCity("")
    setLocation("")
    setStartDate("")
    setEndDate("")
  }
  
  /*
  useEffect(() => {
    filterHandleSubmit()
  }, [data, city, location, startDate, endDate])
  */

  return (
      <>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <>
            <Slider />
            <NavigationButtons />
            <SearchBar searchText={searchText} handleChange={handleChange} searchbarHandleSubmit={searchbarHandleSubmit}/>
            <FilterBar CityOptions={CityOptions} LocationOptions={LocationOptions} ClearFilter={ClearFilter} city={city} location={location} startDate={startDate} endDate={endDate} cityHandleChange={cityHandleChange} locationHandleChange={locationHandleChange} startDateHandleChange={startDateHandleChange} endDateHandleChange={endDateHandleChange} filterHandleSubmit={filterHandleSubmit}/>
            <EventCardWrapper items={filteredData ? filteredData : setFilteredData(data)} />
          </>
        )}
      </>
    )
  }

  export default Home