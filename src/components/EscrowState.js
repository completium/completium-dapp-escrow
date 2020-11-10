import { useState } from 'react';
import constate from "constate";

export function useEscrowState() {
  const [escrowState, setEscrowState] = useState({ address: undefined, balance: 0, delivery: false });
  const setAddress = (value) => { setEscrowState({ address: value, balance: 0, delivery: false }) };
  const setBalance = (value) => { setEscrowState({ address: escrowState.address, balance: value, delivery: value > 0 }) };
  const closeDelivery = () => { setEscrowState({ address: escrowState.address, balance: escrowState.balance, delivery: false }) };
  return { escrowState, setAddress, setBalance, closeDelivery };
}

export const [EscrowStateProvider, useEscrowStateContext] = constate(useEscrowState);
