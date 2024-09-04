import styles from "./page.module.css";

export default function Privacy() {
  const siteName = "Virtual Epoch";
  const siteURL = "www.virtualepoch.com";
  return (
    <main className={styles.section__main}>
      <p className="page-heading">Terms & Conditions</p>

      <p>Effective Date: 1/1/24</p>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            Welcome to {siteName} &#40;“we,” “our,” “us”&#41;.
            <br />
            <br />
            By accessing or using {siteURL} &#40;the “Website”&#41;, you agree
            to comply with and be bound by the following terms and conditions
            &#40;the “Terms”&#41;.
            <br />
            <br />
            Please read them carefully.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            1. Acceptance of Terms
            <br />
            <br />
            By using our Website, you agree to these Terms and our Privacy
            Policy, which is incorporated herein by reference. If you do not
            agree to these Terms, please do not use the Website.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            2. Changes to Terms
            <br />
            <br />
            We reserve the right to update or modify these Terms at any time
            without prior notice. Your continued use of the Website following
            any changes constitutes your acceptance of the new Terms. We
            encourage you to review these Terms periodically.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            3. Use of the Website
            <br />
            <br />
            You agree to use the Website in accordance with all applicable laws
            and regulations. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            4. User Content
            <br />
            <br />
            You are solely responsible for any content you submit or post on the
            Website. By submitting content, you grant us a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify, and
            distribute such content.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            5. Prohibited Activities
            <br />
            <br /> You agree not to:
            <br />
            <br />
            - Engage in any activity that may harm or interfere with the
            Website&apos;s functionality or security.
            <br />- Use the Website for any illegal or unauthorized purpose.
            <br />- Post any content that is defamatory, obscene, or otherwise
            objectionable.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            6. Intellectual Property
            <br />
            <br />
            All content on the Website, including text, graphics, logos, and
            images, is the property of {siteName} or its licensors and is
            protected by intellectual property laws. You may not use any content
            from the Website without our express written permission.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            7. Disclaimers
            <br />
            <br />
            The Website is provided on an “as is” and “as available” basis. We
            make no warranties or representations about the accuracy or
            completeness of the content on the Website. We disclaim all
            warranties to the fullest extent permitted by law.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            8. Limitation of Liability
            <br />
            <br />
            To the maximum extent permitted by law, {siteName} shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of the
            Website.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            9. Indemnification
            <br />
            <br /> You agree to indemnify and hold harmless {siteName}, its
            affiliates, officers, directors, employees, and agents from any
            claims, liabilities, losses, damages, costs, or expenses arising out
            of or related to your use of the Website or violation of these
            Terms.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            10. Termination
            <br />
            <br />
            We reserve the right to terminate or suspend your access to the
            Website at our sole discretion, without notice, for any reason,
            including if you breach these Terms.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            11. Governing Law
            <br />
            <br />
            These Terms are governed by and construed in accordance with the
            laws of Idaho/USA, without regard to its conflict of law principles.
            Any disputes arising from these Terms shall be subject to the
            exclusive jurisdiction of the courts located in Idaho/USA.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            12. Contact Information
            <br />
            <br /> If you have any questions about these Terms, please contact
            us at:
            <br />
            <br />
            Virtual Epoch LLC
            <br />
            Boise Metro - Idaho
            <br />
            CEO: cdk11235@gmail.com
            <br />
            208-794-2695
          </p>
        </div>
      </div>
    </main>
  );
}
