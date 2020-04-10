import React, {useEffect, useState} from 'react';
import { getAllData } from '../../services/getData'
import './SurveyView.scss';

const SurveyView  = () => {
  const [data,setData] = useState('')

  useEffect(() => {
    getAllData()
  },[])

  return (
    <div className="SurveyView">
      Survey View
    </div>
  );
}

export default SurveyView;
