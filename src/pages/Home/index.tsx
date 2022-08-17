import React, { Suspense, useEffect, useState } from 'react'
const  DetailedContent  = React.lazy(() => import('../../components/DetailedContent'))
import {ErrorBoundary} from 'react-error-boundary'
import { ErrorFallback } from '../../components/ErrorFallback';

export const Home = () => {
  const [showDetailedContent, setShowDetailedContent] = useState<boolean>(false);
  
  const buttonClickHandler = () => {
    setShowDetailedContent(!showDetailedContent)
  }

  return (
    <div>
      <h1>
        Home
        </h1>
      <button onClick={buttonClickHandler}>Click to {showDetailedContent? "Hide" : "Get"} Detailed Info</button>
      {
        showDetailedContent &&
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={ () => {}}>
        <Suspense fallback={<div>Loading....</div>} >
          <DetailedContent /> 
        </Suspense>
      </ErrorBoundary>
      }
    </div>
  )
}
