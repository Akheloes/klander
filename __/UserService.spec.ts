import { UserService } from './UserService';

class MockUserRepositoryAdapter implements UserRepositoryPort {
    async getUserById(userId: string): Promise<User> {
    }
}

describe('UserService', () => {
    it('getUserById', async () => {
        const userRepositoryAdapter = new MockUserRepositoryAdapter();
        const userService = new UserService(userRepositoryAdapter);

        const user = await userService.getUserById('123');
    });
});
