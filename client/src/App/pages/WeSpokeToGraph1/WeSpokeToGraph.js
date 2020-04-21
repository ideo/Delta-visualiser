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
import CommunicationTools from '../CommunicationTools/CommunicationTools'
import WorkingWell from '../WorkingWell/WorkingWell'
import ProductiveTime from '../ProductiveTime/ProductiveTime'
import gif from '../../assets/deltalogo.gif'
import { weHeardFrom, sampleData } from '../../lib/copy'
import PieChart from '../../components/PieChart/PieChart';
import './WeSpokeToGraph.scss';


const WeSpokeToGraph = () => {
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
        <h3 className='title'><span className='highlighted'>{title}</span></h3>
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
        {/* <h2>We heard from <br/><span className='highlighted'>1,498 employees</span> across Intercorp</h2> */}
        
        <div className='content'>
            {renderColumnContent(weHeardFrom[0].title, weHeardFrom[0].body, getKeyData(weHeardFrom[0].key))}
        </div>
      </div>
    )
  }

  return (
    <div className="InteractiveGraph">
      <div className='landing'>
        {renderHeardFrom()}
      </div>
    </div>
  );
}

export default WeSpokeToGraph;
