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
  const [pickQuestion, setPickQuestion] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [count, setCount] = useState(0)
  const router = useRouter()

  const pickRandom = async () => {
    const used = []
    const random = (Math.floor(Math.random() * question.length))
    if (!used.includes(random)) {
      setPickQuestion(question[random])
      used.push(random)
      console.log(used)
    } else {
      setPickQuestion(question[random + 1])
    }
  }
  const sendAnswer = async (a) => {
    if (pickQuestion.answer === a) {
      pickRandom()
      setCount(count + 1)
      setQuestionNumber(questionNumber + 1)
    } else {
      toggleShow('flex')
    }
  }
  const restartGame = () => {
    setCount(0)
    setQuestionNumber(1)
    toggleShow('none')
    pickRandom()
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
            <CardHeader>
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

                <EndGameButtons onClick={() => restartGame()}>
                  <IoIosRefresh /> REINICIAR
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
