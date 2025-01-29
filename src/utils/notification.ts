import { showNotification, hideNotification as mantineHideNotification } from '@mantine/notifications';

export const hideNotification = options => mantineHideNotification(options);

export const showInfoNotification = options => showNotification({
	color: 'blue',
	...options
});

export const showSuccessNotification = options => showNotification({
	color: 'green',
	...options
});

export const showErrorNotification = options => {
    showNotification({
        color: 'red',
        ...options
    })
};
