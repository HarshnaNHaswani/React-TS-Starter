const wrapMarkup = (html: string) => ({ __html: html })

export const Markdown = ({ content }: { content: string }) => (
  <div className="markdown" dangerouslySetInnerHTML={wrapMarkup(content)} />
)
