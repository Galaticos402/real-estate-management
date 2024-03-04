import { IBooking } from "../models/booking.model"
import { httpClient } from "../utils/http-client"
import { API_PATH } from "../utils/path"

type UseBooking = {
   createBooking : (booking : IBooking) => Promise<void>
   getBookingOfACustomerByStatus : (isPaid: boolean) => Promise<IBooking[]>
}

export const useBooking = () : UseBooking => {
    const createBooking = async (booking : IBooking) => {
        const res = await httpClient.post(API_PATH.BOOKING, booking)
        return res.data;
    }
    const getBookingOfACustomerByStatus = async (isPaid: boolean) => {
        const res = await httpClient.get(`${API_PATH.BOOKING}/getBookingOfACustomer?isPaid=${isPaid}`)
        return res.data;
    }
    return {
        createBooking,
        getBookingOfACustomerByStatus
    }
}