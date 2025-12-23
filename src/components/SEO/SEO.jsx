import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "IncrediQuo Solutions",
  description = "Professional transcription, captioning, and summarization services with premium accuracy and fast delivery.",
  image = "https://yourdomain.com/og-image.jpg", // change to your real image
  url = "https://yourdomain.com",
}) => {
  const fullTitle = title.includes("IncrediQuo")
    ? title
    : `${title} | IncrediQuo Solutions`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;