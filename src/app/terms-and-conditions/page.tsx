import React, { FC } from 'react'

import { Stack, Typography } from '@mui/material'
import Header from '@/components/Header/Header'

const TearmsAndConditions: FC = () => {
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
          Tearms and Conditions
        </Typography>

        <Typography variant="subtitle1" gutterBottom color="primary.main">
          This agreement is valid as of Monday, 21st of August 2023,and applies between you, the
          User of this website and Black Ocean s.r.o. of Michelska 966/74, Michle, 141 00 Prague,
          Czech Republic, the operator(s) of this website (hereinafter “Black Ocean s.r.o.”, “we”,
          “us” or “our”). Your agreement to comply with and be bound by these Terms and Conditions
          (these “Terms”), is deemed to occur upon your first use of our website. If you do not
          agree to be bound by these Terms you should stop using oceanperform.com (our “website”)
          immediately.
        </Typography>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            1. Acceptance
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              1.1. Please read these Terms, our Privacy Policy, Cookie Policy, carefully, as they
              contain terms and conditions that impact your rights, obligations, and remedies in
              connection with your use of our website and content.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              1.2. Your access to and use of our website is conditioned on your acceptance of and
              compliance with all applicable terms.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              1.3. We reserve the right to change these Terms at any time.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              1.4. By accessing, browsing and/or using our website after updates to these Terms have
              been posted, you agree to be bound by the updated terms.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              1.5. Your failure to comply with these Terms may result in the suspension or
              termination of your access to our website and may subject you to civil and criminal
              penalties.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            2. General Conditions
          </Typography>

          <Stack sx={{ gap: '10px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              2.1. We do not guarantee the accuracy, completeness, validity, or timeliness of
              information listed by us.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              2.2. We make material changes to these Terms from time to time, we may notify you
              either by prominently posting a notice of such changes or via email communication.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              2.3. Our website is licensed to you on a limited, non-exclusive, non-transferable,
              non-sublicensable basis, solely to be used in connection with our website for your
              private, personal, non-commercial use, subject to all the terms and conditions of this
              Agreement as they apply to our website.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            3. License to use website
          </Typography>

          <Stack sx={{ gap: '10px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              3.1. We may provide you with certain information because of your use of our website.
              Such information may include but is not limited to, documentation, data, or
              information developed by us, and other materials which may assist in your use of our
              website (“our Materials”).
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              3.2. Subject to this Agreement, we grant you a non-exclusive, limited,
              non-transferable, and revocable license to use our Materials solely in connection with
              your use of our website. Our Materials may not be used for any other purpose, and this
              license terminates upon your cessation of use of our website or at the termination of
              this Agreement.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            4. Intellectual Property
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              4.1. You agree that our website and all services provided by us are the property of
              Black Ocean s.r.o., including all copyrights, trademarks, trade secrets, patents, and
              other intellectual property (“our IP”).
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              4.2. You agree that we own all rights, title, and interest in and to our IP and that
              you will not use our IP for any unlawful or infringing purpose. You agree not to
              reproduce or distribute our IP in any way, including electronically or via
              registration of any new trademarks, trade names, website marks, or Uniform Resource
              Locators (URLs), without express written permission from us.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            5. Acceptable Use
          </Typography>

          <Stack sx={{ gap: '10px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              5.1. You agree not to
              <ol style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '5px', marginTop: '5px' }}>
                  5.1.1. use our website for any unlawful purpose, or any purpose prohibited under
                  this clause.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  5.1.2. use our website in any way that could damage our website, website, or
                  general business of Black Ocean s.r.o.
                </li>
              </ol>
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              5.2. You further agree not to use our website:
              <ol style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '5px', marginTop: '5px' }}>
                  5.2.1. to harass, abuse, or threaten others or otherwise violate any person&apos;s
                  legal rights.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  5.2.2. to violate any of our intellectual property rights or any third party.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  5.2.3. to upload or otherwise disseminate any computer viruses or other software
                  that may damage the property of another.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  5.2.4. to perpetrate any fraud. 5.2.5. to publish or distribute any obscene or
                  defamatory material.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  5.2.6. to publish or distribute any material that incites violence, hate, or
                  discrimination towards any group.
                </li>
                <li>5.2.7. to unlawfully gather information about others.</li>
              </ol>
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            6. Assumption of Risk
          </Typography>

          <Stack sx={{ gap: '10px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              6.1. Our website is provided for information purposes only. You acknowledge and agree
              that any information posted on our website is not intended to be advice of any kind,
              and no fiduciary relationship has been created between you and us.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              6.2. We do not assume responsibility or liability for any advice or other information
              given on our website.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            7. Indemnification
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            You agree to defend and indemnify us and any of our affiliates (if applicable) and hold
            us harmless against any legal claims and demands, including reasonable attorney&apos;s
            fees, which may arise from or relate to your use or misuse of our website, your breach
            of this Agreement, or your conduct or actions. You agree that we shall be able to select
            its legal counsel and may participate in its defense if we wish.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            8. Exclusion of liability
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              8.1. You understand and agree that we (a) do not guarantee the accuracy, completeness,
              validity, or timeliness of information listed by us or any third parties; and (a)
              shall not be responsible for any materials posted by us or any third party. You shall
              use your judgment, caution, and common sense in evaluating any prospective methods or
              offers and any information provided by us or any third party.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              8.2. Further, we shall not be liable for direct, indirect consequential, or any other
              form of loss or damage that may be suffered by a user using the Black Ocean s.r.o.
              website including loss of data or information or any kind of financial or physical
              loss or damage.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              8.3. In no event shall Black Ocean s.r.o., nor its Owner, directors, employees,
              partners, agents, suppliers, or affiliates, be accountable for any indirect,
              incidental, special, eventful, or exemplary costs, including without limitation, loss
              of proceeds, figures, usage, goodwill, or other intangible losses, consequential from
              (i) your use or access of or failure to access or use our website; (ii) any conduct or
              content of any third party on our website; (iii) any content obtained from our
              website; and (iv) unlawful access, use or alteration of your transmissions or content,
              whether or not based on guarantee, agreement, domestic wrong (including carelessness)
              or any other lawful concept, whether or not we&apos;ve been aware of the possibility
              of such damage, and even if a cure set forth herein is originated to have futile of
              its important purpose.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            9. Spam Policy
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            You are strictly prohibited from using our website or any of our services for illegal
            spam activities, including gathering email addresses and personal information from
            others or sending any mass commercial emails.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            10. Modification and variation
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            We may, from time to time and at any time without notice to you, modify this Agreement.
            You agree that we have the right to modify this Agreement or revise anything contained
            herein. You further agree that all modifications to this Agreement are in full force and
            effect immediately upon posting on our website and that modifications or variations will
            replace any prior version of this Agreement unless prior versions are specifically
            referred to or incorporated into the latest modification or variation of this Agreement.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            11. Website interruptions
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            We may need to interrupt your access to our website to perform maintenance or emergency
            services on a scheduled or unscheduled basis. You agree that your access to our website
            may be affected by unanticipated or unscheduled downtime, for any reason, but that we
            shall have no liability for any damage or loss caused because of such downtime.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            12. Term, Termination and Suspension
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            We may terminate this Agreement with you at any time for any reason, with or without
            cause. We specifically reserve the right to terminate this Agreement if you violate any
            of the terms outlined herein, including, but not limited to, violating the intellectual
            property rights of us or a third party, failing to comply with applicable laws or other
            legal obligations, and/or publishing or distributing illegal material. At the
            termination of this Agreement, any provisions that would be expected to survive
            termination by their nature shall remain in full force and effect.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            13. No Warranties
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            You agree that your use of our website is at your sole and exclusive risk and that any
            website provided by us is on an &quot;As Is&quot; basis. We hereby expressly disclaim
            any express or implied warranties of any kind, including, but not limited to the implied
            warranty of fitness for a particular purpose and the implied warranty of
            merchantability. We make no warranties that our website will meet your needs or that our
            website will be uninterrupted, error-free, or secure. We also make no warranties as to
            the reliability or accuracy of any information on our website or obtained through our
            website. You agree that any damage that may occur to you, through your computer system,
            or because of the loss of your data from your use of our website is your sole
            responsibility and that we are not liable for any such damage or loss.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            14. Limitation on liability
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            We are not liable for any damages that may occur to you because of your use of our
            website, to the fullest extent permitted by law. This section applies to any claims by
            you, including, but not limited to, lost profits or revenues, consequential or punitive
            damages, negligence, strict liability, fraud, or torts of any kind.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            15. General Provisions
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              15.1. This Agreement, or the rights granted hereunder, may not be assigned, sold,
              leased, or otherwise transferred in whole or part by you. Should this Agreement, or
              the rights granted hereunder, be assigned, sold, leased, or otherwise transferred by
              us, the rights, and liabilities of Black Ocean s.r.o. will bind and inure to any
              assignees, administrators, successors, and executors.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              15.2. If any part or sub-part of this Agreement is held invalid or unenforceable by a
              court of law or competent arbitrator, the remaining parts and sub-parts will be
              enforced to the maximum extent possible. In such a condition, the remainder of this
              Agreement shall continue in full force.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              15.3. If we fail to enforce any provision of this Agreement, this shall not constitute
              a waiver of any future enforcement of that provision or any other provision. Waiver of
              any part or sub-part of this Agreement will not constitute a waiver of any other part
              or sub-part.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              15.4. Headings of parts and sub-parts under this Agreement are for convenience and
              organization, only. Headings shall not affect the meaning of any provisions of this
              Agreement.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              15.5. No agency, partnership, or joint venture has been created between the Parties
              because of this Agreement. No Party has any authority to bind the other to third
              parties.{' '}
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              15.6. We are not liable for any failure to perform due to causes beyond its reasonable
              control including, but not limited to, acts of God, acts of civil authorities, riots,
              embargoes, acts of nature, and natural disasters, and other acts which may be due to
              unforeseen circumstances.{' '}
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              15.7. The terms herein will be governed by and construed by the laws of the Czech
              Republic without giving effect to any principles of conflicts of law. The courts of
              the Czech Republic shall have exclusive jurisdiction over any dispute arising from the
              use of our website.{' '}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default TearmsAndConditions
