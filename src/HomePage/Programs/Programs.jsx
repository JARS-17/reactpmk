import React from 'react'
import './Programs.css'
import ibadah_1 from '../../assets/ibadah.jpg'
import ibadah_2 from '../../assets/ibadah2.jpg'
import ibadah_3 from '../../assets/ibadah3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={ibadah_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Ibadah Mingguan</p>
        </div>
      </div>
      <div className="program">
        <img src={ibadah_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Ibadah Paskah</p>
        </div>
      </div>
      <div className="program">
        <img src={ibadah_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Ibadah Natal</p>
        </div>
      </div>
    </div>
  );
}

export default Programs
