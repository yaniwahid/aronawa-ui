import React from 'react';
import { toast, toastBody } from './Toast';

export default {
  title: 'Atoms/Toast',
};

export const Basic = () => {
  const notify = () => toast.error(toastBody(false, `Rentang Waktu Export Maksimal 5 Hari`));
  return <button onClick={notify}>Notify!</button>;
};
