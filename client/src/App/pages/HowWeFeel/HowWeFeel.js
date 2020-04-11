import React, { useState, useEffect } from 'react';
import { getFeeling, getFeelingByCompany } from '../../services/getData'
// import { BarChart } from '../../components/BarChart/Barchart'
import BubbleChart from '../../components/BubbleChart/BubbleChart'
import BarChart from '../../components/BarChart/BarChart'
import './HowWeFeel.scss';

const HowWeFeel = (props) => {
  const [feeling, setFeeling] = useState('')
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
          <label for="cars">Choose a company:</label>
          <select id="cars" onChange={(e) => setCompany(e.target.value)}>
            <option key={'All'} value={'All'}>{'All'}</option>
            {props.companies && props.companies.map(item => {
              return <option key={item.label} value={item.label}>{item.label}</option>
            })}

          </select>
        </div>
        <br />
        <div>
          <label for="level">Choose a level of seniority:</label><br></br>

          <input type="radio" id={'All'} name={'All'} value={'All'} onClick={() => handleCheckboxes('All')} checked={level === 'All'} />
          <label for={'All'} >{'All'}</label>
          {props.seniority && props.seniority.map(item => {
            return <div className='radio' onClick={() => handleCheckboxes(item.label)}>
              <input type="radio" id={item.label} name={item.label} value={item.label} checked={level === item.label} />
              <label for={item.label} >{item.label}</label><br></br>
            </div>
          })}


        </div>

      </div>
    )
  }

  const renderLearning1 = () => {
    return (
      <div className='learning1'>
        <div className='column'>
          <div className='title'>
            Those who feel 😄 recommend
          </div>
          <div className='body'>
            “Creating an account with Trello and keeping track of the tasks and how each one is progressing. We use shared screen a lot in Teams.”
            <br /><br />
            ”Daily reports or calls of 10 minutes maximum to know what we have pending, what we have completed and how we will organize ourselves during the day.”

          </div>
        </div>
        <div className='column'>
          <div className='title'>
            Those who feel 😢
          are concerned by

          </div>
          <div className='body'>


            “Social interactions becoming 100% transactional, with no space to build relevant relationships with coworkers.”
            <br /><br />
            “Not being able to contact and establish a close relationship with my clients.”
            <br /><br />
            “My daughters getting used to my physical presence and when the isolation is over, it affecting them emotionally”

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
            1:1
          </div>
          <div className='fact'>
            Team Members were about as likely to describe their week as productive as they were to describe it as challenging.
          </div>
          <div className='title'>
            <span className='highlighted'>WHAT DO WE DO?</span>
            <div className='body'>
              Continue to take pride in your productivity but be sure to take time for de-stressing and relaxation.

            Look for opportunities to ease the burden of your managers and leads, through things like proactive communication, status updates, and self-directedness.

          </div>
          </div>

        </div>
        <div className='column'>
          <div className='header'>
            1:2
          </div>
          <div className='fact'>
            Team Leads were twice as likely to use the term challenging as they were productive.<br />

          </div>
          <div className='title'>
            <span className='highlighted'>WHAT DO WE DO?</span>
            <div className='body'>
              Create space to be open about the challenges you face with your team(s), and take the time you need for breaks and re-energizing.
    Encourage practices from your team such as status updates and proactive communication that might help ease your workload.

          </div>
          </div>

        </div>
        <div className='column'>
          <div className='header'>
            1:3
          </div>
          <div className='fact'>
            Area & Department Leads were three times more likely to use the words challenging or intense as the word productive
          </div>
          <div className='title'>
            <span className='highlighted'>WHAT DO WE DO?</span>
            <div className='body'>
              Empower all of our employees to support each other, through check-ins and support networks, and don’t be afraid to be open about your own challenges.

              Set an example: highlight your own best practices to show what good remote leadership looks like.

          </div>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className='HowWeFeel'>
      <h1>How did we feel about the last week of remote working?</h1>
      <div className='content'>
        <div className='text'>
          <p className='bold'>Change the settings to find out more</p>
          {renderControls()}
        </div>
        <div className='chart'>
          {feelingsBy && feelingsBy.length > 0 && <BarChart data={feelingsBy} key={'value'} title={'nr of people'} marginBottom={80} marginRight={60}/>}
        </div>
      </div>
      {renderLearning1()}
      {renderLearning2()}
    </div>
  )
}

export default HowWeFeel;
