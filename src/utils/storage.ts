export const saveSession = ({ token }: { token: string; }) => {
	localStorage.setItem('token', token);
};

export const getUserId = () => ~~(localStorage.getItem('userId') || false);
export const logout = () => localStorage.clear();
export const getToken = () => localStorage.getItem('token');
