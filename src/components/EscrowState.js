import { useState } from 'react';
import constate from "constate";

export function useEscrowState() {
  const [escrowState, setEscrowState] = useState({ address: undefined, balance: 0 });
  const setAddress = (value) => { setEscrowState({ address: value, balance: 0 }) };
  const setBalance = (value) => { setEscrowState({ address: escrowState.address, balance: value }) };
  return { escrowState, setAddress, setBalance };
}

export const [EscrowStateProvider, useEscrowStateContext] = constate(useEscrowState);
