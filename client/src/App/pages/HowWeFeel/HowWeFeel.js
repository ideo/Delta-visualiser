import React, { useState, useEffect } from 'react';
import { getFeeling, getFeelingByCompany, getCompaniesDropdown } from '../../services/getData'
import { howWeFeelCopy } from '../../lib/copy'
import BarChart from '../../components/BarChart/BarChart'
import './HowWeFeel.scss';

const HowWeFeel = (props) => {
  const [feeling, setFeeling] = useState('')
  const [availableCompanies, setAvailableCompanies] = useState('')
  const [feelingsBy, setFeelingsBy] = useState('')
  const [company, setCompany] = useState('All')
  const [level, setLevel] = useState('All')

  const setCleanData = (items) => {
    const clean = items.map(item => {
      const item2 = {
        id: item.title,
        label: item.title,
        value: Number(item.value),
        perc: item.perc
      }
      return item2
    })
    return clean
  }

  useEffect(() => {
    getCompaniesDropdown().then(res => setAvailableCompanies(res))
    getFeeling().then(res => setFeeling(setCleanData(res)))
    getFeelingByCompany(company, level).then(res => setFeelingsBy(res))
  }, [company, level])

  const handleCheckboxes = (role) => {
    setLevel(role)
  }


  const renderControls = () => {

    return (
      <div className='controls'>
        <div>
          <label for="cars">Selecciona una <span className='highlighted'>organización</span>:</label>
          <select id="cars" onChange={(e) => setCompany(e.target.value)}>
            <option key={'All'} value={'All'}>{'All'}</option>
            {availableCompanies && availableCompanies.map(item => {
              return <option key={item.label} value={item.label}>{item.label}</option>
            })}

          </select>
        </div>
        <br />
        <div>
          <label for="level">Selecciona un <span className='highlighted'>cargo</span>:</label>
          <select id="level" onChange={(e) => setLevel(e.target.value)}>
            <option key={'All'} value={'All'}>{'All'}</option>
            {props.seniority && props.seniority.map(item => {
              return <option key={item.label} value={item.label}>{item.label}</option>
            })}

          </select>

          {/* <input type="radio" id={'All'} name={'All'} value={'All'} onClick={() => handleCheckboxes('All')} checked={level === 'All'} />
          <label for={'All'} >{'All'}</label>
          {props.seniority && props.seniority.map(item => {
            return <div className='radio' key={item.label} onClick={() => handleCheckboxes(item.label)}>
              <input type="radio" id={item.label} name={item.label} value={item.label} checked={level === item.label} />
              <label for={item.label} >{item.label}</label><br></br>
            </div>
          })} */}


        </div>

      </div>
    )
  }

  const renderLearning1 = () => {
    return (
      <div className='learning1'>
        <div className='column'>
          <div className='title'>
            {howWeFeelCopy[0][0].header}
          </div>
          <div className='body'>
            {howWeFeelCopy[0][0].body1}
            <br /><br />
            {howWeFeelCopy[0][0].body2}

          </div>
        </div>
        <div className='column'>
          <div className='title'>
            {howWeFeelCopy[0][1].header}

          </div>
          <div className='body'>


            {howWeFeelCopy[0][1].body1}
            <br /><br />
            {howWeFeelCopy[0][1].body2}
            <br /><br />
            {howWeFeelCopy[0][1].body3}

          </div>
        </div>
      </div>
    )
  }

  const renderLearning2 = () => {
    return (
      <div className='learning2'>
        <div className='column'>
          <div className='header'>
            {howWeFeelCopy[1][0].header}
          </div>
          <div className='fact'>
            {howWeFeelCopy[1][0].fact}
          </div>
          <div className='title'>
            <span className='highlighted'>WHAT DO WE DO?</span>
            <div className='body'>
              {howWeFeelCopy[1][0].body1}
              <br /><br />
              {howWeFeelCopy[1][0].body2}

            </div>
          </div>

        </div>
        <div className='column'>
          <div className='header'>
            {howWeFeelCopy[1][1].header}
          </div>
          <div className='fact'>
            {howWeFeelCopy[1][1].fact}<br />

          </div>
          <div className='title'>
            <span className='highlighted'>WHAT DO WE DO?</span>
            <div className='body'>
              {howWeFeelCopy[1][1].body1}
              <br /><br />
              {howWeFeelCopy[1][1].body2}

            </div>
          </div>

        </div>
        <div className='column'>
          <div className='header'>
            {howWeFeelCopy[1][2].header}
          </div>
          <div className='fact'>
            {howWeFeelCopy[1][2].fact}<br />

          </div>
          <div className='title'>
            <span className='highlighted'>WHAT DO WE DO?</span>
            <div className='body'>
              {howWeFeelCopy[1][2].body1}
              <br /><br />
              {howWeFeelCopy[1][2].body2}

            </div>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className='HowWeFeel'>
      {/* <h1>How did we feel about the last week of remote working?</h1> */}
      <div className='content'>
        <div className='text'>
          <p className='bold'>Modifica la búsqueda para más informacioón:</p>
          {renderControls()}
        </div>
        <div className='chart'>
          {feelingsBy && feelingsBy.length > 0 && <BarChart data={feelingsBy} key={'value'} title={'nr of people'} marginBottom={80} marginRight={60} />}
        </div>
      </div>
      {/* {renderLearning1()} */}
      {/* {renderLearning2()} */}
    </div>
  )
}

export default HowWeFeel;
