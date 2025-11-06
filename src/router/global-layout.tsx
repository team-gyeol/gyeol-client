import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function GlobalLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
}
