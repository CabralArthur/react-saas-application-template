import { Text } from '@mantine/core';
import {
	modals,
	openConfirmModal
} from '@mantine/modals';

export const openModal = modals.open;

export const closeModal = modals.closeAll;

interface ConfirmModalProps {
  title: string;
  text: string;
  confirmText: string;
  confirmColor?: string;
  onConfirm: () => void;
}

export const showConfirmModal = ({ title, text, confirmText, confirmColor, onConfirm }: ConfirmModalProps) => openConfirmModal({
	title: <Text fw="bold">{title}</Text>,
    centered: true,
	children: (
		<Text size="sm">
			{text}
		</Text>
	),
	labels: { confirm: confirmText, cancel: 'Cancelar' },
	confirmProps: { color: confirmColor || 'red' },
	onConfirm
});
