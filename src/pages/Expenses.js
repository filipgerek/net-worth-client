import React, { useState } from 'react'
import { Form } from '../components/Form'
import '../components/Form/Form.css'
import { EXPENSE_CATEGORIES } from '../constants'

export const Expenses = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  return (
    <Form
      heading="Expenses"
      name={name}
      setName={setName}
      date={date}
      setDate={setDate}
      type={type}
      setType={setType}
      category={category}
      setCategory={setCategory}
      amount={amount}
      setAmount={setAmount}
      categories={Object.values(EXPENSE_CATEGORIES)}
    />
  )
}
