'use client';
import { useCounter } from '@/lib/store';

export function CounterClient() {
  const { count, inc } = useCounter();
  return (
    <div className="card">
      <div>Counter: {count}</div>
      <button className="btn" onClick={inc}>Increment</button>
    </div>
  );
}
