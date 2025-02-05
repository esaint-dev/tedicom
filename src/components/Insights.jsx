import React from 'react'

const Insights = () => {
  return (
    <section>
      <p>INSIGHTS</p>
      <h3>Read our recent stories</h3>
      <div className="flex">
        {/* dominant blog */}
        <div>
            <img src="/blog1.svg" alt="blog post picture" />
            {/* text */}
            <div>
                <p className='text-[AAAAAA]'>BRANDING / DESIGN / 24.OCT.2022</p>
                <p className='font-semibold'>Four Ways a Clean Workplace Makes Employees Happy and Healthy</p>
                <p className='font-medium'>The Power BI Embedded is still popular subject. Self-service reporting formats are being sought after by organizations</p>
            </div>
        </div>


        </div>
    </section>
  )
}

export default Insights
