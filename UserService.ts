export type User = {
    id: BigInt,
    email: string,
}

export interface UserRepository {
    getUserById(userId: string): Promise<User>;
}

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.getUserById(userId);
    }
}
