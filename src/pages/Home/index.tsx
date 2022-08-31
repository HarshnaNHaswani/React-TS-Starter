import React, { Suspense, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import Hello from "~/assets/images/hello.jpg"
import { ErrorFallback, Loader } from "~/components"
import homeStyles from "./home.module.css"
const DetailedContent = React.lazy(() => import("~/components/DetailedContent"))
export const Home = () => {
  const [showDetailedContent, setShowDetailedContent] = useState<boolean>(false)

  const buttonClickHandler = () => {
    setShowDetailedContent(!showDetailedContent)
  }

  return (
    <div>
      <h2>Home</h2>

      <button onClick={buttonClickHandler}>
        Click to {showDetailedContent ? "Hide" : "Get"} Detailed Info
      </button>
      {showDetailedContent && (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            console.log("an error occurred")
          }}
        >
          <Suspense fallback={<Loader />}>{<DetailedContent />}</Suspense>
        </ErrorBoundary>
      )}
      {!showDetailedContent && (
        <img
          src={Hello}
          loading="lazy"
          className={homeStyles.img}
          alt="Hello!!!"
        />
      )}
    </div>
  )
}
