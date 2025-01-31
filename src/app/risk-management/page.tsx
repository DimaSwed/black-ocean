import React, { FC } from 'react'

import { Stack, Typography } from '@mui/material'
import Header from '@/components/Header/Header'

const RiskManagementPolicy: FC = () => {
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
          Risk Management Policy
        </Typography>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            INTRODUCTION
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              This Risk Management Policy forms part of Black Ocean s.r.o.’s governance and control
              arrangements.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Risk management is not an isolated activity. It is one element together with planning,
              project and performance management of effective governance and management. The focus
              is on those risks that could disrupt the achievement of Black Ocean s.r.o.&apos;s
              strategy.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The purpose of this policy and the supporting guidance is to establish Black Ocean
              s.r.o.’s underlying approach to risk management by clarifying the roles and
              responsibilities of the Board of Directors, the Finance and Audit Committee, Senior
              Management and other staff. It also describes the context for risk management as part
              of the overall system of internal controls and arrangements for periodic review. It
              aims to support those staff with particular involvement in anticipating, assessing and
              managing risks so that they can take timely and well-founded risk-informed decisions.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            DEFINITIONS
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              A risk is commonly defined as an effect of uncertainty on the achievement of
              objectives. In other words, risks are various events that can affect the achievement
              of objectives. Risk can have both negative and positive outcomes. Our aim is to manage
              the adverse effects and turn the risk into value. Risks are an everyday part of our
              activities. Our operations involve multiple partnerships, challenging environmental,
              organizational contexts and extensive geographic scope. The realization of our mission
              and strategy depends on our ability to recognise risks and to define suitable measures
              for their treatment. Effective risk management is about effective decision- making,
              not compliance. It is not limited to the identification and mitigation of negative
              risks, but also enables opportunities to be recognised that may involve some level of
              risk where they also have the potential to lead to positive outcomes, supporting the
              overall strategy.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Risk management refers to all activities performed by Black Ocean s.r.o. to
              anticipate, identify, assess and control the uncertainties which may impact on Black
              Ocean s.r.o.&apos;s ability to achieve its aims, objectives and opportunities. These
              will range from organization-wide to specific projects or programmes, to the
              individual.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The risk management policy aims to demonstrate that Black Ocean s.r.o. is acting
              appropriately to anticipate risks; to assess risks; to avoid excessive risk; to
              embrace necessary or desirable risks with appropriate safeguards; that its response to
              risk, whether by insurance, control measures or avoidance, is proportionate and
              effective; that responsible staff are equipped to take risk-based decisions with
              confidence; and that we are intelligent in applying our risk appetite.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            THE POLICY STATEMENT
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              In our work to achieve our ambition, four risks stand out. The first concerns our
              reputation. Our Mission centers on creating and sharing knowledge and delivering
              projects that have a real impact. So we must undertake research and knowledge work of
              the highest quality and secure maximum impact and influence for our activities. As
              such, our reputation for the quality of our work, our autonomy and ethical and
              intellectual integrity are of paramount importance. We will be bold in the nature of
              our work, in our technical thinking, in our methodologies and we will be innovative in
              how we seek to impact and influence. We will do everything we can to mitigate risks to
              our reputation.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The second concerns our people. Certain parts of our work takes place online and
              overseas in locations that are inherently risky. We are responsible for the well-being
              of our staff. We, therefore, seek to ensure that work with partners overseas and in
              particular, overseas travel for our own staff, is informed by robust risk assessments
              and that traveling staff are trained and supported in their individual journeys. We
              will not require staff to travel or work in areas where we assess the risks to be
              excessive.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The third concerns our financial position. We will manage our income and control our
              costs, remain competitive whilst delivering well-managed projects and programmes on
              time and on budget. We will seek to minimize our financial exposure. We will not
              compromise our ethical standards to secure funding. We will not undertake work that
              compromises our financial solvency.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The fourth concerns the impact of our projects and programmes. Many of our services
              involve partners and collaborators often based online and overseas and/or operating in
              challenging environments. To do this well, we need to anticipate and manage all
              project and programme risks at the pre-proposal, proposal and inception stages. We
              need to make decisions about when to bid for funding and with whom, in good time but
              often on the basis of imperfect information. We need to be prepared to decide when we
              will take well-judged risks. when we will support responsible risk-taking and when we
              will not submit a funding proposal because of the risks. When we do, we must use
              relevant management information to track progress and identify difficulties. We will
              support our staff to do this well. We will not undertake work where we assess the
              financial or delivery risks to be too high. We will not compromise our ethical
              standards in delivering our work.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            PRINCIPLES AND GOVERNANCE
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Our risk management approach will reflect the following principles:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Addressing both value protection and value creation;</li>
                <li>Ensuring that roles and responsibilities are explicit and clear;</li>
                <li>Ensuring that the process for managing risk is fit for purpose;</li>
                <li>Establishing legal compliance as a minimum standard.</li>
              </ul>
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              And will be embedded in our governance structures as follows:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  As the principal executive and policy-making body of Black Ocean s.r.o., the Board
                  of Directors is responsible for the risk management policy and for assuring itself
                  of the policy’s implementation.
                </li>
                <li>
                  The Board is also responsible for defining our risk appetite and risk tolerance,
                  ensuring that a sound system of internal control is in place that supports the
                  achievement of policies, aims and objectives while safeguarding the public and
                  other funds and assets for which it is responsible
                </li>
              </ul>
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            RISK MANAGEMENT OBJECTIVES
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            Black Ocean s.r.o.’s objectives in relation to risk management are to:
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Develop an appropriate risk appetite.</li>
              <li>
                Adopt good practice in the anticipation, timely identification, evaluation and
                cost-effective control of risk in carrying out both normal and extraordinary
                business activities.
              </li>
              <li>
                Ensure that adverse risks are either avoided, reduced to an acceptable level, or
                managed and contained; and to do so in good time and on a continuous basis.
              </li>
              <li>
                Support individual members of staff and teams to take appropriate risk-based
                decisions, encouraging responsible intellectual risk-taking, informed by an
                understanding of risk and reward and supported by senior colleagues where necessary.
              </li>
              <li>
                Ensure business continuity wherever possible and respond effectively when this is
                threatened.
              </li>
              <li>
                Enable a robust audit trail to demonstrate that we are capable of managing risk.
              </li>
              <li>
                Focus risk assessment and management on the highest level of threats to our ability
                to achieve our strategic objectives; and opportunities to promote them.
              </li>
              <li>
                Assure funders/investors that there is a robust approach in place to assess and
                manage risk.
              </li>
            </ul>
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            ASSESSING RISKS
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Effective risk management requires risks to be anticipated, identified and assessed
              regularly, and actions are taken to manage the risks, whether these are positive or
              negative. To support risk assessment and actions to be identified, Black Ocean s.r.o.
              will develop documentation about each project/programme specifying the country of
              operation, partner exposure, any key risks (e.g. foreign exchange). It will also
              develop training and communications tools to support project managers to manage risk.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              We face specific operating risks that inform our approach to assessing risks as
              follows:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  We hold investments and a minimum financial reserve to enable us to manage cash
                  flow and other uncertainties. We will not undertake activities that compromise
                  these.
                </li>
                <li>
                  We work with and through partners. The quality of our work and our reputation can
                  be affected adversely or positively by the activities of our partners. We will,
                  therefore, select our partners carefully and we will develop a set of partnership
                  principles and criteria to assist in this.
                </li>
                <li>
                  We work in countries with different regulatory and accounting requirements for
                  INGOs. We will always ensure that we understand these requirements in order to
                  maintain our license to operate to the benefit of our ultimate beneficiaries.
                </li>
              </ul>
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Details of Black Ocean s.r.o.’s approach to assessing risks are set out in the
              Appendix.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            RISK MANAGEMENT FRAMEWORK
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Our approach to risk management reflects sector guidance and aims to clearly locate
              responsibility for identifying and managing different levels and types of risk in a
              structured way.
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              In each case, the “owner” of the risk should have in place early warning mechanisms to
              alert Black Ocean s.r.o. so that remedial action can be taken to manage any potential
              hazards.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            MANAGING RISKS
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            Risks regarded as high or very high in impact and probability should be identified in
            advance and a decision taken about whether to continue with the activity and if so, how
            to manage it to either realize the potential benefits or avoid the potential downsides.
            Risks change and evolve as projects develop, before bidding and throughout their funded
            life. Different risks will be managed with a particular focus. Some will be addressed
            through routine management, supported by Black Ocean s.r.o.’s systems, procedures and
            policies. Black Ocean s.r.o.’s risk management process has a particular role to play
            here in providing the forum for regular review of project implementation, including
            emerging issues that threaten successful delivery.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            MONITORING AND LEARNING
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="primary.main">
            We will monitor the risks on the Strategic Risk Register, especially those with a “High”
            risk score. Clusters/units and departments will be asked to review the operational risks
            captured in their Registers termly. The Strategic Risk List is kept under review by the
            Finance and Audit Committee, which meets regularly. It is reported to the Board.We will
            learn from our experience of risk management and seek to share issues and ideas with
            staff to enable them to work effectively in a risk-based manner. This will include
            learning from those risks that we take on knowingly, where we believe that we could
            secure significant benefits if the risks are handled responsibly.
          </Typography>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            ROLES AND RESPONSIBILITIES
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The Board is responsible for overseeing risk management with a scheme of delegation to
              the Finance Resources and Audit Committee and policy implementation by the Director
              and senior staff. All senior staff are responsible for encouraging good risk
              management practice within their areas of responsibility and all project managers
              (researchers and professionals) will need to have regard to risk for the projects that
              they lead or support
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The Board will:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Approve the overall policy statement;</li>
                <li>Offer periodic advice on risk appetite and risk tolerance;</li>
                <li>
                  Satisfy itself about the assessment of strategic risks via annual consideration of
                  the Strategic Risk List;
                </li>
                <li>
                  Monitor the management of significant risks to ensure that appropriate controls
                  are in place;
                </li>
                <li>
                  Identify any strategic risks that require inclusion or updating in the Strategic
                  Risk List to ensure that it reflects Black Ocean s.r.o.’s overall strategy and
                  operating context;
                </li>
                <li>
                  Approve major decisions, taking into account Black Ocean s.r.o.s risk profile or
                  exposure;
                </li>
                <li>
                  Satisfy itself that less significant risks are being actively managed, and that
                  appropriate controls are in place and working effectively to ensure the
                  implementation of policies approved by the Board;
                </li>
                <li>
                  Review regularly the Institute’s approach to risk management and approve changes
                  where necessary to key elements of its processes and procedures.
                </li>
              </ul>
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The Finance and Audit Committee will:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  Ensure the implementation of the risk management policy and advise on any
                  modifications to the policy;
                </li>
                <li>
                  Receive advice from the Board on the need for inclusion or amendment of strategic
                  risks in the Strategic Risk List;
                </li>
                <li>
                  Satisfy itself about the assessment of strategic risks via annual consideration of
                  the Strategic Risk List;
                </li>
                <li>
                  Ensure that adequate information is provided for the Board and its committees, as
                  appropriate, on the status of risks and controls;
                </li>
                <li>
                  Ensure that an annual report is provided to the Board on the effectiveness of the
                  system of internal controls;
                </li>
                <li>
                  Ensure that local risk registers in the country offices are reviewed regularly.
                </li>
              </ul>
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The Strategic Management Team will:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  Regularly review the Strategic Risk List and submit this to the F&A committee
                  quarterly and thence bi-annually, to the Board;
                </li>
                <li>Advise on modifications to the policy;</li>
                <li>Assess the adequacy of internal controls and advise the Board as necessary;</li>
                <li>Decide on risk mitigation where Board or FAC action is not required;</li>
                <li>Advise on Black Ocean s.r.o.’s appetite for risk and its tolerance of risk;</li>
                <li>Inform all its strategic decisions with considerations of risk;</li>
                <li>Ensure other Sub Committees take appropriate steps in respect of risk;</li>
                <li>Keep the overall Strategic framework under review;</li>
                <li>Advise on thresholds for risk assessment in proposals and projects;</li>
                <li>
                  Engage with the Institute’s internal and external auditors on internal controls;
                </li>
                <li>Ensure appropriate training is available for staff;</li>
                <li>Advise on any supporting policies;</li>
                <li>Advise on thresholds for risk-based decisions;</li>
                <li>Ensure appropriate insurance cover is in place to mitigate risks.</li>
              </ul>
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Country Directors, Cluster Directors and Heads of Professional Function will:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Implement policies on risk management;</li>
                <li>
                  Identify particular risks that arise in their area of responsibility e.g. a data
                  protection breach; an employment relations challenge;
                </li>
                <li>
                  Develop and maintain a local Risk Register and forward a copy of the Register
                  annually to the CFO and Head of Finance;
                </li>
                <li>
                  Support their staff to develop and apply risk management principles and tools for
                  individual projects;
                </li>
                <li>
                  Regularly view risks with their staff and help Project Managers identify and
                  manage risks appropriately.
                </li>
              </ul>
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Project Managers will:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Identify and manage risks in individual projects;</li>
                <li>Provide input to the local Risk Register and report on progress;</li>
                <li>Support their staff to apply good risk management principles.</li>
              </ul>
            </Typography>

            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Individual members of staff will:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Take care to apply good risk management practice in their day-to-day work;</li>
                <li>Follow the principles and objectives set out in this policy;</li>
                <li>
                  Follow other policies that contribute to managing risks such as the Social Media
                  Policy and Travel Policy;
                </li>
                <li>
                  Draw on the guidance from Black Ocean s.r.o.’s risk management process when
                  development project proposals;
                </li>
                <li>
                  Take part in relevant training where this will help with confidence and capacity
                  in risk management.
                </li>
              </ul>
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            INTERNAL CONTROLS
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Internal controls encompass a review of the risks inherent in each activity. The
              Finance and Audit Committee report to the Board on the adequacy of internal controls.
              As part of its remit, the Committee reviews the work of the Internal and External
              Auditors and of Black Ocean s.r.o.&apos;s management. The Committee is therefore well
              placed to advise the Board on the effectiveness of the internal control system.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Currently Black Ocean s.r.o. has an external consultant which it contracts to review
              and report the effectiveness and reliability of the internal control system.As part of
              the annual audit, Black Ocean s.r.o.’s External Auditors will advise the Finance and
              Audit Committee on the operation of the internal financial controls.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            PERIODIC REVIEW
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              The Board will periodically review its risk appetite and risk tolerance. The Board
              will also periodically review the effectiveness of the internal control system and in
              doing so will:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  Review the previous year and examine the Institute’s track record on risk
                  management;
                </li>
                <li>
                  Consider whether Black Ocean s.r.o. has made the right decisions on risks that are
                  value enhancing and value protecting;
                </li>
                <li>Consider the internal and external risk profiles of the coming year;</li>
                <li>
                  Consider whether the current internal control arrangements are likely to be
                  effective.
                </li>
              </ul>
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              As part of its review, the Board will consider:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>
                  Black Ocean s.r.o.’s objectives and its financial and non-financial targets;
                </li>
                <li>Black Ocean s.r.o.’s strategic ambitions and progress towards them;</li>
                <li>The management approach to risk;</li>
                <li>The appropriateness of the level of delegation of authority;</li>
                <li>Public reporting;</li>
                <li>Prioritization of risks;</li>
                <li>Timely identification and assessment of risks;</li>
                <li>
                  The ability of Black Ocean s.r.o. to learn from its problems and apply its
                  learning.
                </li>
              </ul>
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ gap: '20px' }}>
          <Typography variant="h3" gutterBottom>
            APPENDIX
          </Typography>

          <Stack sx={{ gap: '5px' }}>
            <Typography variant="h4" gutterBottom color="primary.main">
              ASSESSING RISKS
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="primary.main">
              Most relevant authorities on risk management advocate two main parameters for
              assessing risks. The parameters are:
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Likelihood, i.e. how likely is it to happen</li>
                <li>Impact, i.e. how significant might the consequences be</li>
                <li>
                  These almost always focus on risk mitigation and management of the possible/likely
                  “downsides” rather than of the possible/likely “upsides” although the idea of
                  focusing resources on the most risky can apply to risks to be embraced as well as
                  to those to be managed/mitigated.
                </li>
                <li>Black Ocean s.r.o. will use a traffic light system to assess risk.</li>
                <li>
                  Very low - no significant disruption, adverse publicity unlikely, litigation
                  unlikely financial loss modest; funder/partner relations unaffected.
                </li>
                <li>
                  Low - short term disruption; careful PR required; litigation unlikely; moderate
                  financial loss; funder/partner relations unaffected.
                </li>
                <li>
                  Moderate - short term disruption; reputational damage; litigation possible;
                  significant financial loss; funder/partner relations may be affected.
                </li>
                <li>
                  High - medium-term disruption; adverse publicity; probable litigation and
                  difficult to defend; significant financial loss; funder/partner relations
                  affected.
                </li>
                <li>
                  Very high - sustained disruption; significant reputational damage; litigation
                  highly likely and costly; significant financial loss; funder/partner relations
                  seriously affected.
                </li>
                <li>Likelihood:</li>
                <Typography variant="subtitle1" gutterBottom color="primary.main">
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>vl very low</li>
                    <li>l low</li>
                    <li>m moderate</li>
                    <li>h high</li>
                    <li>vh very high (as likely as not)</li>
                  </ul>
                </Typography>
              </ul>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default RiskManagementPolicy
