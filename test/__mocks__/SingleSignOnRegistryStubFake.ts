import SingleSignOnRegistry from '../../src/sso/SingleSignOnRegistry';
import SSOToken from '../../src/sso/SSOToken';

export class SingleSignOnRegistryStubFake implements SingleSignOnRegistry {
    private validFake = false
    //private userList: string[] = ['biko', 'cambia'];
    isValid(token: string): boolean {
        return this.validFake
    }

    registerNewSession(userName: string, password: string): SSOToken | undefined {
        
        return new SSOToken('abcd')
        
    }

    unregister(token: string): void {
        throw new Error('Dummy: not implemented');
    }
}
