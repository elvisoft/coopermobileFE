import { asClass, createContainer } from "awilix";
import { AuthService } from "../data/resources/remote/services/AuthService";
import { AuthRepositoryImpl } from "../data/repository/AuthRepositoryImpl";
import { LoginUseCase } from "../domain/useCases/Auth/LoginUseCase";
import { LoginViewModel } from "../presentation/screens/auth/login/LoginViewModel";
import { RegisterViewModel } from "../presentation/screens/auth/register/RegisterViewModel";
import { RegisterUseCase } from "../domain/useCases/Auth/RegisterUseCase";
import { GetPlaceDetailsUseCase } from "../domain/useCases/googlePlaces/GetPlaceDetailsUseCase";
import { GetPlaceDetailsByCoordsUseCase } from "../domain/useCases/googlePlaces/GetPlaceDetailsByCoordsUseCase";
import { ClientSerchMapViewModel } from "../presentation/screens/client/searchmap/ClientSearchMapViewModel";
import { GetDirectionsUseCase } from "../domain/useCases/googlePlaces/GetDirectionsUseCase";
import { GooglePlacesUseCases } from "../domain/useCases/googlePlaces/GooglePlacesUseCases";
import { GetTimeAndDistanceUseCase } from "../domain/useCases/clientRequest/GetTimeAndDistanceUseCase";
import { ClientRequestUseCases } from "../domain/useCases/clientRequest/ClientRequestUseCases";
import { GooglePlacesRepositoryImpl } from "../data/repository/GooglePlacesRepositoryImpl";
import { GooglePlacesService } from "../data/resources/remote/services/GooglePlacesService";
import { ClientRequestRepositoryImpl } from "../data/repository/ClientRequestRepositoryImpl";
import { ClientRequestService } from "../data/resources/remote/services/ClientRequestService";

const container=createContainer()
container.register({
    authService:asClass(AuthService).singleton(),
    authRepository:asClass(AuthRepositoryImpl).singleton(),
    googlePlacesRepository: asClass(GooglePlacesRepositoryImpl).singleton(),
    googlePlacesService: asClass(GooglePlacesService).singleton(),
    clientRequestService: asClass(ClientRequestService).singleton(),
    clientRequestRepository: asClass(ClientRequestRepositoryImpl).singleton(),
    loginUseCase:asClass(LoginUseCase).singleton(),
    loginViewModel:asClass(LoginViewModel).singleton(),
    registerViewModel:asClass(RegisterViewModel).singleton(),
    registerUseCase:asClass(RegisterUseCase).singleton(),
    getPlaceDetailsUseCase: asClass(GetPlaceDetailsUseCase).singleton(),
    getPlaceDetailsByCoordsUseCase: asClass(GetPlaceDetailsByCoordsUseCase).singleton(),
    clientSearchMapViewModel: asClass(ClientSerchMapViewModel).singleton(),    
    getDirectionsUseCase: asClass(GetDirectionsUseCase).singleton(),
    googlePlacesUseCases: asClass(GooglePlacesUseCases).singleton(),
    getTimeAndDistanceUseCase: asClass(GetTimeAndDistanceUseCase).singleton(),
    clientRequestUseCases: asClass(ClientRequestUseCases).singleton(),
});

export {container} 