import { getToken } from '../utils/storage';

const useIsLogged = () => {
	const token = getToken();

	return token;
};

export default useIsLogged;
