import { User, UserRepository, UserService } from './UserService';

class MockUserRepository implements UserRepository {
    getUserById(userId: string): Promise<User> {
    }
}

describe('When user service is called', () => {
    it('Should get user by id', async () => {
        const userRepository = new MockUserRepository();
        const userService = new UserService(userRepository);

        const user = await userService.getUserById('123');
    });
});
