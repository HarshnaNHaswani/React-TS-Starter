import React, { useState } from 'react'

export const Home = () => {
  const [DetailedContent, setDetailedContent] = useState<JSX.Element | null>(null);
  const buttonClickHandler = () => {
    import('./detailedContent')
      .then((module) => setDetailedContent(module.default))
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <h1>
        Home
        </h1>
      <button onClick={buttonClickHandler}>Click to Get Detailed Info</button>
      {
        DetailedContent ? <DetailedContent /> : null
      }
    </div>
  )
}
