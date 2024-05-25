import React from 'react';
import { Command } from '../assets';
import './label.scss';

function Label() {
  return (
    <div className="label">
        <img src={ Command } alt="" />
        <h3>High Fidelity Dashboard - Home Rent</h3>
    </div>
  )
}

export default Label
