import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardRow
} from '../../elements/card'
import {
  ActionButton,
  CloseButton,
  CheckButton
} from '../../elements/buttons'
import {
  IoIosPlay,
  IoIosClose,
  IoIosCheckmark
} from 'react-icons/io'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalInput,
  ModalSpan
} from '../../elements/modal'
import { Main } from '../../elements/main-frame'
import { MainRow } from '../../elements/layout'
import { useRouter } from 'next/router'

const Question = () => {
  const [show, toggleShow] = useState('none')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const sendMessage = () => {
    setMessage('Nomes precisam de pelo menos 3 letras')
  }
  return (
    <Main>
      <MainRow>
        <Card>
          a
        </Card>
      </MainRow>
    </Main>
  )
}

export default Question
