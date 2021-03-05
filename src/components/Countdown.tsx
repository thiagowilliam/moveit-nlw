import { useEffect, useState, useContext } from 'react'
import {ChallengesContext} from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'



export default function CountDown() {

  const {
    minutes,
    hasFinished,
    isActive,
    resetCountdown,
    seconds,
    startCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return(
    <div className={styles.countDownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countDownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={startCountdown}
            >
              Iniciar um Ciclo
          </button>
          )}
        </>
      )}




    </div>
  )
}
