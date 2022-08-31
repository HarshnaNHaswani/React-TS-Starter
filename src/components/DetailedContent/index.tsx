import DetailedContentText from "~/assets/content/detailedContent01.md"
import { Markdown } from "~/components/Markdown"

const DetailedContent = () => {
  return (
    <div>
      <h3>Detailed Content</h3>

      <Markdown content={DetailedContentText} />
    </div>
  )
}

export default DetailedContent
