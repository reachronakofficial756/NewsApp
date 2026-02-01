import React from 'react'
import Card from '../components/Card'
const General = ({category, news}) => {

    
  return (
    <div>
        <h2 className='text-2xl text-[#00bda6] underline font-bold mx-10 my-5'>{category.toUpperCase()} NEWS</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-25 px-20 py-5 -mb-20  '>
            {news.map((result) => (
              
                <Card key={Math.random()} props={result}/>
           
        ))} 
        </div>
    </div>
  )
}

export default General