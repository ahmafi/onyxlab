import Script from "next/script";

const mId = "G-HGXWFMCFQT";

export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${mId}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${mId});
        `}
      </Script>
    </>
  );
}
