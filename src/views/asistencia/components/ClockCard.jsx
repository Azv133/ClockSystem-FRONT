import { useClock } from "../../../hooks/useClock"
import { Clock } from "./clock/Clock"
import "./comp-styles.css"

export const ClockCard = () => {

  const { time } = useClock();

  return (
    <>
    <div className="flex flex-col clock-card gap-10">

      <div className="clock-container">
          <Clock />
      </div>
      
      <div className="flex justify-center gap-3">
        <div className="hour">{ time.getHours() < 10 ? `0${time.getHours()}` : time.getHours() }</div>
        <div className="dots">:</div>
        <div className="minute">
          { time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes() }
        </div>
        <div className="dots">:</div>
        <div className="seconds">
          { time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds() }
        </div>
      </div>
    </div>
    </>
  )
}
