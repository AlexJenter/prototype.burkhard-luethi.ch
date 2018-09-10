import React from 'react'
import './index.css'

export default ({ actions: {prev, next}}) => [
  <button onClick={prev} className="prev-next-button prev">hin</button>,
  <button onClick={next} className="prev-next-button next">her</button>,
]
