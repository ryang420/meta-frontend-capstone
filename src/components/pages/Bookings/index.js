import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI'
import pages from '../../../utils/pages'
import BookingForm from './BookingForm'
import ConfirmedBookingModal from './ConfirmedBookingModal'
import { useState } from 'react';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date))
  return (response.length !== 0) ? response : availableTimes
}

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())]


const Bookings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes)

  const submitData = formData => {
    const response = submitAPI(formData)
    if (response) {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    // 关闭 Modal
    setIsModalOpen(false)
  }

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
      <ConfirmedBookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Bookings
