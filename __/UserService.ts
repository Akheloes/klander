import { User } from "../UserService";

interface UserRepositoryPort {
    getUserById(userId: string): Promise<User>;
}

class UserRepositoryAdapter implements UserRepositoryPort {
    async getUserById(userId: string): Promise<User> {
    }
}

class UserService {
    private userRepository: UserRepositoryPort;

    constructor(userRepository: UserRepositoryPort) {
        this.userRepository = userRepository;
    }

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.getUserById(userId);
    }
}
