
import { Helmet } from "react-helmet";

const MetaSetup = ({ title, description, imageUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
     <meta property="og:url" content={window.location.href} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="robots" content="index,follow" />
  </Helmet>
);

export default MetaSetup;