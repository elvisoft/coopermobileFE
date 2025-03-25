import { GooglePlacesRepository } from "../../domain/repository/GooglePlacesRepository";
import { GooglePlacesService } from "../resources/remote/services/GooglePlacesService";
import { LatLng } from "react-native-maps";

export class GooglePlacesRepositoryImpl implements GooglePlacesRepository {
    private googlePlacesService: GooglePlacesService;

    constructor(
        { googlePlacesService }: { googlePlacesService: GooglePlacesService }
    ) {
        this.googlePlacesService = googlePlacesService;
    }
    async getDirections(origin: LatLng, destination: LatLng): Promise<GoogleDirections | null> {
        return this.googlePlacesService.getDirections(origin, destination);
    }
    
    async getPlaceDetailsByCoords(lat: number, lng: number): Promise<PlaceGeocodeDetail | null> {
        return this.googlePlacesService.getPlaceDetailsByCoords(lat, lng);
    }

    async getPlaceDetails(placeId: string) {
        return this.googlePlacesService.getPlaceDetails(placeId);
    }
}