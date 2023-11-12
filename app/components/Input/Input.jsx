'use client'
import React from 'react'
import styles from './input.module.css'
import {create} from '@/app/lib/create'
import { useState } from 'react'

const Input = () => {
  const [title, useTitle] = useState('')
  return (
    <div>
        <form action={() => { create(title) }} className={styles.conteiner}>
          <input onChange={ (e) => {
            useTitle(e.target.value)
            }
          } type="text" maxLength={20} name='title' className={styles.input} />
          <button type='submit' className={styles.button}><span>Добавить</span></button>
        </form>
    </div>
  )
}

export default Input