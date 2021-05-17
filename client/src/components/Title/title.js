import React from 'react'
import './title.scss'

export default function title({ content, overideStyles }) {
  return <div className={`title__main_container ${overideStyles}`}>{content}</div>
}
