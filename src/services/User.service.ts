import * as UserRepository from '../repositories/User.repository';
import {user_account} from "@prisma/client";

export async function getUserByID(id: number): Promise<user_account | null> {
    const user = await UserRepository.getUserByID(id);
    return user;
}

