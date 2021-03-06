import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div>
    <ul>
      <div className="list-buttons">
        <Link to="/income">
          <div className="income-homepage">
            <li className="homepage-heading">Income</li>
          </div>
        </Link>
        <Link to="/expenses">
          <div className="expenses-homepage">
            <li className="homepage-heading">Expenses</li>
          </div>
        </Link>
      </div>
    </ul>
  </div>
)
