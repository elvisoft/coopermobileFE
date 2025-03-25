import { User } from "../../models/User";
import { AuthRepository } from "../../repository/AuthRepository";

export class RegisterUseCase {
    private authRepository:AuthRepository

    constructor({authRepository}:{authRepository:AuthRepository}){
        this.authRepository=authRepository
    }

    async execute(user:User){
        return await this.authRepository.register(user)
    }
}