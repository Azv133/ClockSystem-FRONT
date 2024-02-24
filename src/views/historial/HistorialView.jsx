import { ButtonsBar, SessionButtons } from '../../general'
import { Footer } from '../../general'
import { FilterButtons } from './components/FilterButtons'
import { MarkingsTable } from './components/MarkingsTable'
import './styles.css'
import { useEffect, useState } from 'react'
import { useUser } from '../../context/UserContext'
import { getGroupMarkings } from '../../helpers/markingHelper'
import { useNavigate } from 'react-router-dom'

export const HistorialView = () => {
  const navigate = useNavigate();
  const [markings, setMarkings] = useState([]);
  const { user } = useUser();

  const getGmarkings = async() => {
    const res = await getGroupMarkings(user.id_usuario);
    if(res.status){
      setMarkings(res.marcaciones);
    }
  }

  useEffect(() => {
    if(!user){ navigate('/') }
    getGmarkings();
    console.log(markings)
  }, [])
  

  return (
    <>
        <div className='content-container pt-4 px-5'>
          <div className="flex justify-between mb-11">
            <ButtonsBar />
            <SessionButtons />
          </div>

          <div className='flex flex-col full-dark-card mt-12 mb-6 relative justify-center'>
            
            <h1>Historial de asistencias</h1>

            <div className='flex justify-start'>
              <h4>Filtro</h4>
            </div>

            <FilterButtons 
              setMarkings={ setMarkings }
            />

            <MarkingsTable 
              markings={ markings }
            />

          </div>
        </div>

      <div>
          <Footer />
      </div>
    </>
  )
}
