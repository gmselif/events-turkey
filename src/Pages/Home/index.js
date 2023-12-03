import React, { useState } from 'react'
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

  const [searchText, setSearchText] = useState("")//SearchBar
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  //Handle Change Functions
  const searchHandleChange = (e) => {
    setSearchText(e.target.value)
  }
  const cityHandleChange = (e) => {
    setCity(e.target.value)
  }
  const locationHandleChange = (e) => {
    setLocation(e.target.value)
  }
  const startDateHandleChange = (e) => {
    setStartDate(e.target.value)
    console.log(startDate)
  }
  const endDateHandleChange = (e) => {
    setEndDate(e.target.value)
    console.log(endDate)
  }

  //Make Cities select options
  const CityOptions = () =>
    data.map(
      item => item.city).filter(
        (val, id, array) => { return array.indexOf(val) === id }).map(
          (city, index) => <option key={index} value={city}>{city}</option>
        )

  //Make Locations select options
  const LocationOptions = () => data.map(
    item => item.location).filter(
      (val, id, array) => { return array.indexOf(val) === id }).map(
        (location, index) => <option key={index} value={location}>{location}</option>
      );

  const ClearFilter = () => {
    setCity("")
    setLocation("")
    setStartDate("")
    setEndDate("")
  }

  const handleClearButton = () => {
    ClearFilter()
    setFilteredData(data)
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

  //Handle Filter Operation
  const filterHandleSubmit = (e) => {
    e.preventDefault()

    !city && !location && !startDate && !endDate && alert("You have to at least fill one input")

    var filterByCity = []
    var filterByLocation = []
    var filterByStartDate = []
    var filterByEndDate = []

    var result = data.filter(item => {
      filterByCity = []
      filterByLocation = []
      filterByStartDate = []
      filterByEndDate = []

      city ? (item.city.toLowerCase() === city.toLowerCase() && filterByCity.push(item)) : filterByCity.push(true)
      location ? (item.location.toLowerCase() === location.toLowerCase() && filterByLocation.push(item)) : filterByLocation.push(true)
      startDate ? (item.startDate > startDate && filterByStartDate.push(item)) : filterByStartDate.push(true)
      endDate ? (item.startDate < endDate && filterByEndDate.push(item)) : filterByEndDate.push(true)

      return filterByCity[0] && filterByLocation[0] && filterByStartDate[0] && filterByEndDate[0]
    })

    setFilteredData(result)

    ClearFilter()
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
          <SearchBar searchText={searchText} handleChange={searchHandleChange} searchbarHandleSubmit={searchbarHandleSubmit} />
          <FilterBar CityOptions={CityOptions} LocationOptions={LocationOptions} handleClearButton={handleClearButton} city={city} location={location} startDate={startDate} endDate={endDate} cityHandleChange={cityHandleChange} locationHandleChange={locationHandleChange} startDateHandleChange={startDateHandleChange} endDateHandleChange={endDateHandleChange} filterHandleSubmit={filterHandleSubmit} />
          <EventCardWrapper items={filteredData ? filteredData : setFilteredData(data)} setFilteredData={setFilteredData}/>
        </>
      )}
    </>
  )
}

export default Home