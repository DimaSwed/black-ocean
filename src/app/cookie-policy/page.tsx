import React, { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import Header from '@/components/Header/Header'
import Link from '@mui/material/Link'

const CookiePolicy: FC = () => {
  return (
    <>
      <Header />
      <Stack
        component="main"
        sx={{
          backgroundColor: 'background.default',
          overflow: 'hidden',
          fontFamily: 'Open Sans, sans-serif',
          color: 'primary.light',
          maxWidth: '1440px',
          height: 'fit-content',
          m: '0 auto',
          width: '100%',
          padding: '34px 40px 80px',
          gap: '30px',
          '@media (max-width: 992px)': {
            padding: '34px 16px 80px'
          },
          '@media (max-width: 768px)': {
            padding: '38px 20px 60px'
          },
          '@media (max-width: 480px)': {
            padding: '5px 16px 40px'
          },
          '@media (max-width: 320px)': {
            padding: '18px 10px 40px'
          }
        }}
      >
        <Typography variant="h2" gutterBottom>
          Cookie Policy
        </Typography>

        <Stack>
          <Typography variant="subtitle1" gutterBottom color="primary.main">
            This Cookie Policy applies to www.oceanperform.com operated by Black Ocean s. r. o. of
            Michelska 966/74, Michle, 141 00 Prague, Czech Republic (“we”, “us”, “our”).
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="primary.main">
            With this Cookie Policy, we would like to inform you, the user of our website, about the
            use of cookies or similar storage technologies (hereinafter &quot;cookies&quot;).
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="primary.main">
            We act as the Data controller in accordance with the Czech Republic`s Act No. 480/2004
            Coll., on Certain Information Society Services (“ECA”) and the EU`s Privacy and
            Electronic Communications Directive (“PECD”).
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="primary.main">
            If you have any questions about the use of Cookies or about data protection at Black
            Ocean s. r. o. in general, please contact us using info@oceanperform.com.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            What are cookies?
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Cookies are small text files that are stored by your web browser on your device to
              save certain information. The next time you visit our website with the same device,
              the information stored in cookies is sent back to our website (&quot;first party
              cookie&quot;) or another website to which the cookie belongs (&quot;third party
              cookie&quot;).
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Through the information stored in the cookie and sent back, our website recognizes
              that you visited before. We use this information to optimally display our website in
              accordance with your preferences. However, only the cookie itself is identified on
              your device. Any further storage of Personal Information only takes place if you give
              us your consent or if the storage is absolutely necessary in order to be able to use
              our website.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            How do we use them?
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              We use cookies to:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  obtain information about your use of our website and to perform system
                  administration.
                </li>
                <li>prevent fraudulent activity and improve security.</li>
                <li>
                  identify and analyze your browsing preferences and the products you are interested
                  in.
                </li>
                <li>
                  associate your past website behavior after you have registered with your
                  information on our website for business and technical purposes.
                </li>
              </ul>
              Some of the cookies used on our websites are set by us, others are set by third
              parties on our behalf. The use of third-party cookies enables tailored advertising,
              meaning you may see ads for Insulation Point.
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  Essential cookies: these cookies are necessary for us to provide you with the
                  basic functionality of our website and cannot be turned off in our systems.
                </li>
                <li>
                  Performance and analytics cookies: these cookies allow us to track visits and
                  traffic sources to measure and improve the performance of our website.
                </li>
                <li>
                  Functional cookies: these cookies are used to provide enhanced functionality and
                  personalization during your visit.
                </li>
                <li>
                  Targeting or advertising cookies: these cookies may be set through our website by
                  our advertising partners to profile your interests and suggest relevant
                  advertising to you.
                </li>
              </ul>
            </Typography>
          </Stack>

          <Stack sx={{ gap: '20px' }}>
            <Typography variant="h3" gutterBottom>
              Subject to your consent
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              We only use optional cookies with your prior consent. If you are visiting our website
              for the first time, a banner will appear on our website asking for your consent to use
              optional cookies. If you consent to this, we will store a cookie on your computer and
              the banner will not be displayed again for the lifetime of the cookie. Thereafter, or
              if you actively delete this cookie beforehand, the banner will be displayed again the
              next time you visit our website in order to obtain your consent again.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '20px' }}>
            <Typography variant="h3" gutterBottom>
              How to prevent the use of cookies
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Of course, you can also use our website entirely without cookies. You can configure
              the use of cookies in your browser settings by following the relevant link {' '}
              <Link
                href="https://support.google.com/chrome/answer/95647?hl=en-GB&co=GENIE.Platform%3DDesktop"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#5993e5' }}
              >
                Google Chrome
              </Link>
              ,{' '}
              <Link
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#5993e5' }}
              >
                Mozilla Firefox
              </Link>
              ,{' '}
              <Link
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#5993e5' }}
              >
                Microsoft Edge
              </Link>
              ,{' '}
              <Link
                href="https://support.google.com/chrome/answer/95647?hl=en-GB&co=GENIE.Platform%3DDesktop"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#5993e5' }}
              >
                Google Chrome
              </Link>
              ,{' '}
              <Link
                href="https://tatrck.com/h/0Hu30uVO0rlp?url=https%3A%2F%2Fblogs.opera.com%2Ftips-and-tricks%2F2023%2F04%2Fclean-browser-and-remove-trackers%2F"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#5993e5' }}
              >
                Opera
              </Link>
              ,{' '}
              <Link
                href="https://tatrck.com/h/0Hu30uVO15uh?url=https%3A%2F%2Fsupport.apple.com%2Fen-gb%2FHT201265"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#5993e5' }}
              >
                Safari
              </Link>
                at any time or deactivate them completely. However, this may lead to restrictions in
              the functions or user-friendliness of our offer.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '20px' }}>
            <Typography variant="h3" gutterBottom>
              Does this policy change?
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              We may update our Cookie Policy from time to time. This might be for a number of
              reasons, such as to reflect a change in the law or to accommodate a change in our
              business practices and the way we use cookies. We recommend that you check here
              periodically for any changes to our Cookie Policy.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '20px' }}>
            <Typography variant="h3" gutterBottom>
              Who should I contact for more information?
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              If you have any questions or comments about our Cookie Policy or wish to exercise your
              rights under applicable laws, please contact us.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '20px' }}>
            <Typography variant="h3" gutterBottom>
              Effective Date
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Monday, 21st of August 2023
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default CookiePolicy
