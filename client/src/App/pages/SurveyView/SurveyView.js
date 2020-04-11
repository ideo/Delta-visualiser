import React, { useEffect, useState } from 'react';
import {
  getAllData,
  getAcrossCompanies,
  getAcrossDepartments,
  getAcrossSen,
  getFeeling
} from '../../services/getData'
import Header from '../../components/Header/Header'
import HowWeFeel from '../HowWeFeel/HowWeFeel'
import AccessTools from '../AccessTools/AccessTools'
import BiggestConcerns from '../BiggestConcerns/BiggestConcerns'
import gif from '../../assets/deltalogo.gif'
import { weHeardFrom, sampleData } from '../../lib/copy'
import PieChart from '../../components/PieChart/PieChart';
import './SurveyView.scss';


const SurveyView = () => {
  const [data, setData] = useState('')
  const [companies, setAcrossCompanies] = useState('')
  const [seniority, setAcrossSeniority] = useState('')
  const [departments, setDepartments] = useState('')
  const [feeling, setFeeling] = useState('')

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
    getAllData().then(res => setData(res))
    getAcrossCompanies().then(res => setAcrossCompanies(setCleanData(res)))
    getAcrossDepartments().then(res => setDepartments(setCleanData(res)))
    getAcrossSen().then(res => setAcrossSeniority(setCleanData(res)))
    getFeeling().then(res => setFeeling(setCleanData(res)))
  }, [setAcrossCompanies, setDepartments, setAcrossSeniority])


  const renderColumnContent = (title, body, data) => {
    return (
      <div className='column' key={title}>
        <h4 className='title'><span className='highlighted'>{title}</span></h4>
        <p className='body'>{body}</p>
        <PieChart data={data} width={200} height={200} color={'set3'} />
      </div>
    )
  }

  const getKeyData = (key) => {
    if (key === 'companies') return companies
    if (key === 'seniority') return seniority
    if (key === 'departments') return departments
  }

  const renderHeardFrom = () => {
    return (
      <div className='HeardFrom'>
        <h2>WE HEARD FROM</h2>
        <p>1,498 employees across Intercorp</p>
        <div className='content'>
          {weHeardFrom.map(item => {
            return renderColumnContent(item.title, item.body, getKeyData(item.key))
          })}

        </div>
      </div>
    )
  }

  return (
    <div className="SurveyView">
      <div className='logo'>

      </div>
      <img src={gif} className='logo'></img>
      <div className='landing'>
        <Header />
        {renderHeardFrom()}
      </div>
      <HowWeFeel data={feeling} companies={companies} seniority={seniority} />
      <AccessTools />
      <BiggestConcerns />
    </div>
  );
}

export default SurveyView;
