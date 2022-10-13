import React from 'react';
import Button from '../Button';
import { toast, toastBody } from './Toast';

export default {
  title: 'Atoms/Toast',
};

export const Basic = () => {
  const notify = () => toast.error(toastBody(true, 'Berhasil mereject merchant order'));
  return (
    <Button color="primary" onClick={notify}>
      Show Toast
    </Button>
  );
};
