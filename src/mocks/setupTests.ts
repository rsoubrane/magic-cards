import '@testing-library/jest-dom/extend-expect';
import { server } from './server';

beforeAll(() => {
	// Enable the mocking in tests.
	server.listen({ onUnhandledRequest: 'bypass' });
});

afterEach(() => {
	// Reset any runtime handlers tests may use.
	server.resetHandlers();
});

afterAll(() => {
	// Clean up once the tests are done.
	server.close();
});
