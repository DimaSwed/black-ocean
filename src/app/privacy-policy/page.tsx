import React, { FC } from 'react'

import { Stack, Typography } from '@mui/material'
import Header from '@/components/Header/Header'

const PrivacyPolicy: FC = () => {
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
          Privacy Policy
        </Typography>

        <Stack sx={{ gap: '5px' }}>
          <Typography variant="subtitle1" gutterBottom color="primary.main">
            In this Privacy Policy, we explain how we handle your Personal Data when you contact us
            or use one of our services. In particular, we will tell you: Why we may process your
            Personal Data, for what purpose we process your Personal Data, whether you are required
            to provide us with certain information, how long we will store your Personal Data
            whether there are other recipients of your Personal Data, whether we intend to transfer
            your Personal Data to another country.
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="primary.main">
            In principle, we will only use your Personal Data in accordance with the applicable data
            protection laws, in particular the Czech Republic`s Data Processing Act implementing the
            GDPR has been introduced as Act. No. 110/2019 Coll. (“DPA”), the EU&apos;s General Data
            Protection Regulation (GDPR), and only as described in this Privacy Policy.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Contact details of the data controller
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            Unless otherwise stated, Black ocean s.r.o. of Michelska 966/74, Michle, 141 00 Prague,
            Czech Republic is the controller for all processing of Personal Data. You can contact us
            using info@oceanperform.com if you have any questions, comments or wish to exercise your
            rights under applicable data protection law.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            What data protection rights do I have?
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Every data subject has:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>the right to information,</li>
                <li>the right to rectification,</li>
                <li>the right to deletion,</li>
                <li>the right to restriction of processing,</li>
                <li>the right to data portability.</li>
              </ul>
            </Typography>

            <Typography variant="subtitle1" color="primary.main">
              Furthermore, you can revoke consent, in principle with effect for the future.
            </Typography>

            <Typography variant="subtitle1" color="primary.main">
              Furthermore, you have the right to lodge a complaint with a data protection
              supervisory authority. We would, however, appreciate the chance to deal with your
              concerns before you approach a data protection supervisory authority.
            </Typography>

            <Typography variant="subtitle1" color="primary.main">
              Finally, you also have a right to object. This applies, on grounds relating to data
              processing on the basis of our legitimate interest and also to profiling. If you
              object, we will no longer process your Personal Data unless we can demonstrate
              compelling legitimate reasons for the processing which override your interests, rights
              and freedoms, or the processing serves to assert, exercise or defend legal claims.
            </Typography>

            <Typography variant="subtitle1" color="primary.main">
              You may also withdraw your consent and request us to stop using and/or disclosing your
              Personal Data for any or all of the Purposes by submitting your request to us in
              writing. Should you withdraw your consent to the collection, use or disclosure of your
              Personal Data, it may impact our ability to proceed with your transactions,
              agreements, or interactions with us. Prior to you exercising your choice to withdraw
              your consent, we will inform you of the consequences of the withdrawal of your
              consent. Please note that your withdrawal of consent will not prevent us from
              exercising our legal rights (including any remedies) or undertaking any steps as we
              may be entitled to at law.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            The Supervisory Authority
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            The Office for Personal Data Protection (OPDP) in the Czech Republic is the relevant
            authority in matters of data protection. You have the right to make a complaint at any
            time to the OPDP (www.uoou.cz). We would, however, appreciate the chance to deal with
            your concerns before you approach the OPDP, so please contact us in the first instance.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            How do we obtain Personal Data?
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            For the most part, we process Personal Data that has been provided to us directly by
            you. This can happen for various reasons:
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>You have submitted an inquiry to us,</li>
              <li>You have submitted a request for information to us,</li>
              <li>You have subscribed to our service,</li>
              <li>You have created an account whether as an Affiliate or Advertiser,</li>
              <li>and of course, data that is automatically collected.</li>
            </ul>
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            What Personal Data do we collect?
          </Typography>

          <Stack sx={{ gap: '15px' }}>
            <Stack sx={{ gap: '5px' }}>
              <Typography variant="subtitle1" gutterBottom color="primary.main">
                We may collect personal information from you in the course of our business, your use
                of our Services. <br /> In general the personal data we collect is limited to the
                following:
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li>
                    Identity Data includes: first name, last name, username or similar identifier,
                    title, photos or other images.
                  </li>
                  <li>
                    Contact Data includes: billing address, delivery address, email address and
                    telephone numbers, and any social media accounts used to contact us.
                  </li>
                  <li>Financial Data includes: bank account and payment card details.</li>
                  <li>
                    Transaction Data includes: details about payments to and from you and other
                    details of products and services you have ordered or commissioned from us.
                  </li>
                  <li>
                    Technical Data includes: internet protocol (IP) address, your login data,
                    browser type and version, time zone setting and location, browser plug-in types
                    and versions, operating system and platform and other technology on the devices
                    you use to access this website.
                  </li>

                  <li>
                    Profile Data includes: any username and password to access our systems,
                    commissions or orders made by you, your interests, preferences, feedback and
                    survey responses.
                  </li>
                  <li>
                    Usage Data includes: information about how you use our website, products, and
                    services.
                  </li>
                  <li>
                    Marketing and Communications Data includes: your preferences in receiving
                    marketing from us and any third parties made known to you and your communication
                    preferences.
                  </li>
                  <li>
                    We also collect, use and share Aggregated Data such as statistical or
                    demographic data for any purpose. Aggregated Data may be derived from your
                    personal data but is not considered personal data in law as this data does not
                    directly or indirectly reveal your identity.
                  </li>
                  <li>Information you provide, such as when you contact us</li>
                </ul>
              </Typography>

              <Typography variant="subtitle1" gutterBottom color="primary.main">
                Data collected is linked and if we have already collected some of your data, we will
                only ask you for the remaining data that is necessary to carry out the service
                contracted for.
              </Typography>
            </Stack>
          </Stack>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="h4" gutterBottom>
              Contacting us
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              If you contact us, we process the following data from you for the purpose of
              processing and handling your enquiry: Name, contact details -if provided by you- and
              your message. The legal basis of the data processing is our obligation to fulfill the
              contract and/or to fulfill our pre-contractual obligations and/or our legitimate
              interest in processing your inquiry.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="h4" gutterBottom>
              Processing of Personal Data when using our services
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Personal Data will be collected, processed, or used in connection with the services
              offered. This is always done in compliance with the provisions of the DPA and GDPR.
              Insofar as we use your Personal Data for a purpose that requires your consent
              according to the legal provisions, we will always ask for your express consent.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="h4" gutterBottom>
              Administration, financial accounting, office organization, contact management
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              We process data in the context of administrative tasks as well as organization of our
              operations, financial accounting, payment, and compliance with legal obligations, such
              as archiving. In this regard, we process the same data that we process in the course
              of providing our contractual services (see above).
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The processing bases are contracts and our legitimate interest and in individual cases
              your consent. The purpose and our interest in the processing lies in the
              administration, financial accounting, office organization, archiving of data, i.e.,
              tasks that serve the maintenance of our business activities, performance of our tasks
              and provision of our services.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="h4" gutterBottom>
              Log files
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              n principle, you can use our website for purely informational purposes without
              disclosing your identity. However, our website collects a series of general data and
              information with each visit and this data is temporarily stored in log file. A log
              file is created in the course of an automatic protocol of the processing computer
              system. The following can be recorded: host name of the accessing end device, IP
              address, Date and time of the server request, Time zone difference to Greenwich Mean
              Time (GMT).
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The temporary processing of the IP address by the system is necessary to technically
              enable delivery of the website to your computer. Processing your IP address for the
              duration of the session is necessary for this. The legal basis for this processing is
              our legitimate interest.
            </Typography>
          </Stack>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="h4" gutterBottom>
              Use of cookies
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              We use so-called cookies on our web site. Cookies are small text files that are stored
              on your respective device (PC, smartphone, tablet, etc.) and saved by your browser.
              For further information please refer to our Cookie Policy. The legal basis for the use
              of cookies is your consent as well as our legitimate interest.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Automated Decision Making
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            Automated decision making within the meaning of the DPA and GDPR is not used at Black
            ocean s.r.o.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Processing of special categories of data
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            No special categories of data are processed at Black ocean s.r.o.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Is there an obligation for me to provide data?
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            Within the scope of our business relationship, you are only required to provide Personal
            Data that is necessary for the establishment, implementation, and termination of a
            business relationship or that we are legally obliged to collect. Without this data, we
            will usually have to refuse to conclude the contract or will no longer be able to
            perform an existing contract and may have to terminate it.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Data Security
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              We secure our website and other systems through appropriate technical and
              organizational measures against loss, destruction, access, modification, or
              distribution of your data by unauthorized persons. However, and despite regular
              checks, complete protection against all dangers is not possible.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Our website uses the industry standard SSL (Secure Sockets Layer) for encryption. This
              ensures the confidentiality of your personal information over the Internet. You can
              tell whether encrypted transmission is taking place by the closed key/lock symbol in
              your browser display.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Passing on of data
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            Your Personal Data will only be passed on to third parties,
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>if you have given your express consent to this;</li>
              <li>
                if the disclosure is necessary for the fulfillment of contractual obligations;
              </li>
              <li>if we are legally obligated to disclose the data;</li>
              <li>if the disclosure of the data is in the public interest;</li>
              <li>
                if the disclosure of the data is necessary for the protection of our legitimate
                interests or the legitimate interests of a third party unless your interests in the
                protection of your data override these interests.
              </li>
            </ul>
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Duration of storage of Personal Data
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            Your data will be stored by us for as long as it is needed for the respective purposes
            underlying the processing. Beyond that, we only store data insofar as we are legally
            obligated to do so, e.g., due to statutory retention obligations.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Integration of third-party services and content
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Third-party providers may also use so-called pixel tags (invisible graphics, also
              known as &quot;web beacons&quot;) for statistical or marketing purposes. The
              &quot;pixel tags&quot; can be used to evaluate information such as visitor traffic on
              the pages of this website. The pseudonymous information may also be stored in cookies
              on the user&apos;s device and may contain, among other things, technical information
              about the browser and operating system, referring websites, time of visit and other
              information about the use of our website, as well as being linked to such information
              from other sources.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Within our website, we use content or service offers of third-party providers on the
              basis of our legitimate interests in order to integrate their content and services
              (hereinafter uniformly referred to as &quot;content&quot;). This always requires that
              the third-party providers of this content are aware of the IP address of the user, as
              without the IP address they would not be able to send the content to their browser.
              The IP address is therefore necessary for the display of this content. We endeavor to
              only use content whose respective providers only use the IP address to deliver the
              content.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Marketing
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Insofar as you have also given us your separate consent to process your data for
              marketing and advertising purposes, we are entitled to contact you for these purposes
              via the communication channels you have given your consent to.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              You may give us your consent in a number of ways including by selecting a box on a
              form where we seek your permission to send you marketing information, or sometimes
              your consent is implied from your interactions or contractual relationship with us.
              Where your consent is implied, it is on the basis that you would have a reasonable
              expectation of receiving a marketing communication based on your interactions or
              contractual relationship with us.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Direct Marketing generally takes the form of e-mail but may also include other less
              traditional or emerging channels. These forms of contact will be managed by us, or by
              our contracted service providers. Every directly addressed marketing sent or made by
              us or on our behalf will include a means by which you may unsubscribe or opt out.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            Validity and questions
          </Typography>

          <Stack sx={{ gap: '10px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              This privacy and cookie policy is valid as of Monday, 21st of August 2023. It is the
              current and valid version of our privacy policy. However, we point out that from time
              to time due to actual or legal changes a revision to this privacy and cookie policy
              may be necessary.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              If you have any data protection questions, please feel free to contact us using the
              details provided above.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default PrivacyPolicy
