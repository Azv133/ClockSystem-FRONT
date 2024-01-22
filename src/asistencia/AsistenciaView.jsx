import { ButtonsBar, SessionButtons } from '../general'
import { ClockCard, MarkButtons, Table } from "./components"
import { Footer } from '../general'
import './styles.css'

export const AsistenciaView = () => {
  return (
    <>
      <div className='content-container pt-4 px-5'>
          <div className="flex justify-between mb-11">
            <ButtonsBar />
            <SessionButtons />
          </div>

          <div className='flex justify-center'>
              <img className='img-top' src="public\images\top-bar.png" alt="" />
          </div>

          <div className='flex dark-card mt-12 mb-6 px-14 relative'>
            <div className='flex flex-col w-1/2'>
              <div className='b-box mt-4'>
                <img src="public\svg\Logo-3.png" alt="" />
                <label>¡Bienvenido Ricardo a ClockSystem!</label>
              </div>
              
              <div className='flex mt-14'>
                <ClockCard />
              </div>
            </div>

            <div className='flex flex-col text-center w-1/2'>
              <h4 className='white-text pa'>Ricardo Manuel Torres Velasquez</h4>
              <MarkButtons />
              <Table />
              <div className='flex justify-center items-end mt-10'>
                <button className='his-btn'>
                  <label>Ver historial</label>
                  <img src="public\svg\arrow-right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

      <div>
          <Footer />
      </div>
    </>
  )
}
