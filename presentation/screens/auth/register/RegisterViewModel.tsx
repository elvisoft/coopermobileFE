import { User } from "../../../../domain/models/User";
import { RegisterUseCase } from "../../../../domain/useCases/Auth/RegisterUseCase";

export class RegisterViewModel {
    private registerUseCase:RegisterUseCase
    constructor({registerUseCase} : {registerUseCase:RegisterUseCase}){
        this.registerUseCase=registerUseCase
    }

    async register(user:User){
        return await this.registerUseCase.execute(user)
    }
}