---
title: Terms of Use
---

<div>
   <div class="layout-mid">
      <div class="header">Web Application Security Policy</div>
      <div style="float:left; width:50%"><p class="mail"></p></div>
      <table style="width:100%;"><tbody><tr><td>
       <strong style="color:#0632a0">1. Overview</strong><br/>
       Web application vulnerabilities account for the largest portion of attack vectors outside of malware. It is crucial that any web application be assessed for vulnerabilities and any vulnerabilities be remediated prior to production deployment.<br/><br/><br/>
       <strong style="color:#0632a0">2. Purpose</strong><br/>
        The purpose of this policy is to define web application security assessments within SuiteOpen. Web application assessments are performed to identify potential or realized weaknesses as a result of inadvertent mis-configuration, weak authentication, insufficient error handling, sensitive information leakage, etc.  Discovery and subsequent mitigation of these issues will limit the attack surface of SuiteOpen services available both internally and externally as well as satisfy compliance with any relevant policies in place.<br/><br/><br/>
       <strong style="color:#0632a0">3. Scope</strong><br/>
       This policy covers all web application security assessments requested by any individual, group or department for the purposes of maintaining the security posture, compliance, risk management, and change control of technologies in use at SuiteOpen.All web application security assessments will be performed by delegated security personnel either employed or contracted by SuiteOpen.<br/><br/>All findings are considered confidential and are to be distributed to persons on a “need to know” basis. Distribution of any findings outside of SuiteOpen is strictly prohibited unless approved by the Chief Information Officer.<br/><br/>Any relationships within multi-tiered applications found during the scoping phase will be included in the assessment unless explicitly limited.  Limitations and subsequent justification will be documented prior to the start of the assessment.<br/><br/><br/>
       <strong style="color:#0632a0">4. Policy</strong><br/>
       <b>4.1</b> Web applications are subject to security assessments based on the following criteria:<br/>
       <b>- 4.1.1</b> New or Major Application Release – will be subject to a full assessment prior to approval of the change control documentation and/or release into the live environment.<br/>
       <b>- 4.1.2</b> Third Party or Acquired Web Application – will be subject to full assessment after which it will be bound to policy requirements.<br/>
       <b>- 4.1.3</b> Point Releases – will be subject to an appropriate assessment level based on the risk of the changes in the application functionality and/or architecture.<br/>
       <b>- 4.1.4</b> Patch Releases – will be subject to an appropriate assessment level based on the risk of the changes to the application functionality and/or architecture.<br/>
       <b>- 4.1.5</b> Emergency Releases – An emergency release will be allowed to forgo security assessments and carry the assumed risk until such time that a proper assessment can be carried out.  Emergency releases will be designated as such by the Chief Information Officer or an appropriate manager who has been delegated this authority.<br/>
       <b>- 4.1.6</b> Annual Review – all applications will be subject to a full annual review in its entirety to review potential risks of functionality and/or architecture.<br/><br/>
       <b>4.2</b> All security issues that are discovered during assessments must be mitigated based upon the following risk levels. The Risk Levels are based on the OWASP Risk Rating Methodology. Remediation validation testing will be required to validate fix and/or mitigation strategies for any discovered issues of Medium risk level or greater.<br/>
       <b>- 4.2.1</b> High – Any high-risk issue must be fixed immediately or other mitigation strategies must be put in place to limit exposure before deployment.  Applications with high risk issues are subject to being taken off-line or denied release into the live environment.<br/>
       <b>- 4.2.2</b> Medium – Medium risk issues should be reviewed to determine what is required to mitigate and scheduled accordingly. Applications with medium risk issues may be taken off-line or denied release into the live environment based on the number of issues and if multiple issues increase the risk to an unacceptable level.  Issues should be fixed in a patch/point release unless other mitigation strategies will limit exposure.<br/>
       <b>- 4.2.3</b> Low – Issue should be reviewed to determine what is required to correct the issue and scheduled accordingly.<br/><br/>
       <b>4.3</b> The following security assessment levels shall be established by the InfoSec organization or other designated organization that will be performing the assessments.<br/>
       <b>- 4.3.1</b> Full – A full assessment is comprised of tests for all known web application vulnerabilities using both automated and manual tools based on the OWASP Testing Guide. A full assessment will use manual penetration testing techniques to validate discovered vulnerabilities to determine the overall risk of any and all discovered.<br/>
       <b>- 4.3.2</b> Quick – A quick assessment will consist of a (typically) automated scan of an application for the OWASP Top Ten web application security risks at a minimum.<br/>
       <b>- 4.3.3</b> Targeted – A targeted assessment is performed to verify vulnerability remediation changes or new application functionality.<br/><br/><br/>
       <strong style="color:#0632a0">5. Policy Compliance</strong><br/>
       <b>5.1 Compliance Measurement</b><br/>The Infosec team will verify compliance to this policy through various methods, including but not limited to, business tool reports, internal and external audits, and feedback to the policy owner.<br/>
       <b>5.2 Exceptions</b><br/>
       Any exception to the policy must be approved by the Infosec team in advance.<br/>
       <b>5.3 Non-Compliance</b><br/>
       An employee found to have violated this policy may be subject to disciplinary action, up to and including termination of employment.<br/>
       Web application assessments are a requirement of the change control process and are required to adhere to this policy unless found to be exempt. All application releases must pass through the change control process. Any web applications that do not adhere to this policy may be taken offline until such time that a formal assessment can be performed at the discretion of the Chief Information Officer.
       <br/><br/><br/>
       <strong style="color:#0632a0">6.	Definitions and Terms</strong><br/>
       None.<br/><br/><br/>
      </td></tr></tbody></table>
      
   </div>
</div>
<div style="height:50px;"></div>

<style scoped>
    .mail{
        padding-left: 10px;
    }
    .header{
        color: var(--color-primary);
        font-size: 40px;
        font-weight: 300;
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .addr{
        padding: 30px 10px;
        border-bottom: 1px solid var(--color-primary);
    }
    .addr-country{
        font-weight: 600;
        color: var(--color-primary);
        font-size: 22px;
        margin-bottom: 10px;
    }
    .addr-detail{
        display: flex;
        justify-content: space-between;
    }
    .addr-city{
        width: 45%;
    }
    .addr-street{
        color: #666;
    }
    .city-name{
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>