import React from 'react';
import { toast, toastBody } from './Toast';

export default {
  title: 'Atoms/Toast',
};

export const Basic = () => {
  const notify = () => toast.error(toastBody(true, 'Berhasil mereject merchant order'));
  return <button onClick={notify}>Notify!</button>;
};
