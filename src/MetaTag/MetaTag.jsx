import { Helmet } from "react-helmet"
const MetaTag = ({title}) => {
  return (
    <>
    
    <Helmet>
        <title>{title}</title>
        <link rel="shortcut icon" href="https://abs.twimg.com/favicons/twitter.3.ico" type="image/x-icon" />


    </Helmet>
    
    </>
  )
}

export default MetaTag