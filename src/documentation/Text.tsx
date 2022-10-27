import React from 'react';

export const ComponentName = ({ children }: any) => (
  <div
    style={{
      fontSize: 48,
      marginBottom: 32,
      fontWeight: 700,
      borderBottom: '1px solid #e3e5e8',
      paddingBottom: 16,
    }}
  >
    {children}
  </div>
);

export const SectionName = ({ children }: any) => (
  <div style={{ fontSize: 24, marginTop: 72, marginBottom: 32, fontWeight: 'bold' }}>
    {children}
  </div>
);
