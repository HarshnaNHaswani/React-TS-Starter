declare module "*.module.css"
declare module "*.css"
declare module "*.gif"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.ico"
declare module "*.txt"
declare module "*.pdf"
declare module "*.md"  {
	const value: string;
	export default value;
}
declare module "*.svg" {
  const content: string
  export default content
}
interface ResponsiveImageOutput {
  src: string
  srcSet: string
  placeholder: string | undefined
  images: { path: string; width: number; height: number }[]
  width: number
  height: number
  toString: () => string
}

declare module '*!rl' {
  const src: ResponsiveImageOutput
  export default src
}

// if you need any files as modules other than JS & TS files declare here e.g. font files like .woff