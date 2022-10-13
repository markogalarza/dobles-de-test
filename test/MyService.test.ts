import MyService from '../src/myservice/MyService';
import Request from '../src/sso/Request';
import SSOToken from '../src/sso/SSOToken';
import { SingleSignOnRegistryDummy } from './__mocks__/SingleSignOnRegistryDummy';
import { SingleSignOnRegistryStub } from './__mocks__/SingleSignOnRegistryStub';
import { SingleSignOnRegistryStubFalse } from './__mocks__/SingleSignOnRegistryStubFalse';
import { SingleSignOnRegistryStubGeneric } from './__mocks__/SingleSignOnRegistryStubGeneric';
import { SingleSignOnRegistryStubFake } from './__mocks__/SingleSignOnRegistryStubFake';

describe('MyService', () => {
  it('invalid sso token is rejected', () => {
    const service = new MyService(new SingleSignOnRegistryDummy());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).not.toEqual('hello Foo!');
  });

  it('valid token is true', () => {
    const service = new MyService(new SingleSignOnRegistryStub());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).toEqual('valido');
  });

  it('invalid token is false', () => {
    const service = new MyService(new SingleSignOnRegistryStubFalse());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).toEqual('invalido');
  });

  it('generic answer stub', () => {
    const service = new MyService(new SingleSignOnRegistryStubGeneric());

    const response = service.handleRequest(new Request('Foo', new SSOToken('token')));

    expect(response.getText()).toMatch(/valido|invalido/);
  });
//////////////////////////////////////////

// it('test doble fake undefined', () => {
//   const service = new MyService(new SingleSignOnRegistryStubFake());

//   const response = service.handleRegister('biko', 'cambia');

//   expect(response.getToken()).toBe('')
// });

  it('test doble fake regisration valid', () => {
    const service = new MyService(new SingleSignOnRegistryStubFake());

    const response = service.handleRegister('biko', 'cambia');

    expect(response.getToken()).toEqual('abcd')
  });

});
