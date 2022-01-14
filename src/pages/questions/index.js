import React, { useEffect, useState } from 'react'
import {
  Card,
  CardFooter,
  CardHeader,
  CardRow
} from '../../elements/card'
import {
  EndGameButtons,
  QuestionButton
} from '../../elements/buttons'
import {
  IoIosRefresh,
  IoIosFlag
} from 'react-icons/io'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalSpan
} from '../../elements/modal'
import { Main } from '../../elements/main-frame'
import { MainRow } from '../../elements/layout'
import { useRouter } from 'next/router'
import { question } from '../../questions'
const Question = () => {
  const [show, toggleShow] = useState('none')
  const [win, toggleShowWin] = useState('none')
  const [pickQuestion, setPickQuestion] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [count, setCount] = useState(0)
  const router = useRouter()

  const checkCount = () => {
    if (count === 10) toggleShowWin('flex')
  }
  const pickRandom =  () => {
    const random = (Math.floor(Math.random() * question.length))
    if (count < 10) {
      setPickQuestion(question[random])
      question.splice(random, 1)
      checkCount()
    }
  }

  const sendAnswer = async (a) => {
    if (pickQuestion.answer === a) {
      pickRandom()
      setCount(count + 1)
      setQuestionNumber(questionNumber + 1)
    }
    if (pickQuestion.answer !== a) {
      toggleShow('flex')
    }
    checkCount()
  }

  useEffect(() => {
    pickRandom()
    setQuestionNumber(1)
    setCount(0)
  }, [])
  return (
    <Main>
      <MainRow>
        <Card>
          <CardRow>
            <CardHeader onClick={() => setCount(count + 1)}>
              PERGUNTA {questionNumber}
            </CardHeader>
            <CardRow>
              <ModalSpan>você acertou {count} perguntas</ModalSpan>
            </CardRow>
          </CardRow>
          <CardRow>
            <h4>
              {pickQuestion.question}
            </h4>
          </CardRow>

          <CardFooter>
            <QuestionButton onClick={() => sendAnswer(pickQuestion.alternatives[0].a)}>
              {pickQuestion.alternatives
                ? pickQuestion.alternatives[0].a
                : ''}
            </QuestionButton>
            <QuestionButton onClick={() => sendAnswer(pickQuestion.alternatives[0].b)}>
              {pickQuestion.alternatives
                ? pickQuestion.alternatives[0].b
                : ''}
            </QuestionButton>
            <QuestionButton onClick={() => sendAnswer(pickQuestion.alternatives[0].c)}>
              {pickQuestion.alternatives
                ? pickQuestion.alternatives[0].c
                : ''}
            </QuestionButton>
            <QuestionButton onClick={() => sendAnswer(pickQuestion.alternatives[0].d)}>
              {pickQuestion.alternatives
                ? pickQuestion.alternatives[0].d
                : ''}
            </QuestionButton>
          </CardFooter>
          <Modal show={show}>
            <ModalContent>
              <ModalHeader>
                FIM DE JOGO
              </ModalHeader>
              <ModalBody>

                <EndGameButtons onClick={() => router.push('/')}>
                  <IoIosFlag /> DESISTIR
                </EndGameButtons>

                <EndGameButtons onClick={() => router.reload()}>
                  <IoIosRefresh /> REINICIAR
                </EndGameButtons>

              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal show={win}>
            <ModalContent>
              <ModalHeader>
                VOCÊ VENCEU
              </ModalHeader>
              <ModalBody>
                <EndGameButtons onClick={() => router.push('/')}>
                  <IoIosFlag /> SAIR
                </EndGameButtons>

                <EndGameButtons onClick={() => router.reload()}>
                  <IoIosRefresh /> REFAZER
                </EndGameButtons>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Card>

      </MainRow>
    </Main>
  )
}

export default Question
