import httpService from '../../../config/http-service';

class FlightBookingService {
    
    public async getAvailables(origin: string, destination: string, date: string, passengers: number|null, type: number|null) {
        const response = await httpService.get(`v1/flight/available?origin=${origin}&destination=${destination}&date=${date}&passengers=${passengers}&type=${type}`);
        return response;
    }
}

export default new FlightBookingService();