declare module "*.module.css"
declare module "*.css"
declare module "*.gif"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.ico"
declare module "*.txt"
declare module "*.pdf"
declare module "*.svg" {
  const content: string
  export default content
}
