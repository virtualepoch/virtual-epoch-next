import styles from "./page.module.css";

export default function Privacy() {
  const siteName = "Virtual Epoch";
  return (
    <main className={styles.section__main}>
      <p className="page-heading">Privacy Policy</p>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>Effective Date: 1/1/24</p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            1. Introduction
            <br />
            <br />
            Welcome to {siteName} &#40;&quot;we,&quot; &quot;our,&quot;
            &quot;us&quot;&#41;. We are committed to protecting your privacy and
            ensuring a safe online experience. This Privacy Policy outlines how
            we collect, use, disclose, and safeguard your information when you
            visit our website {siteName} &#40;the &quot;Site&quot;&#41;. By
            using our Site, you agree to the terms of this Privacy Policy.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            2. Information We Collect
            <br />
            <br />
            a. Personal Information
            <br />
            <br />
            When you visit our Site, we may collect personal information that
            you voluntarily provide to us, such as:
            <br />
            - Name
            <br />
            - Email address
            <br />
            - Phone number
            <br />
            - Mailing address
            <br />
            <br />
            b. Non-Personal Information
            <br />
            <br />
            We may also collect non-personal information about your visit,
            including:
            <br />
            - IP address
            <br />
            - Browser type
            <br />
            - Operating system
            <br />
            - Referring website
            <br />
            - Pages viewed
            <br />- Date and time of visit
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            3. How We Use Your Information
            <br />
            <br />
            We use your information for the following purposes:
            <br />
            <br />
            - To provide, operate, and maintain our Site
            <br />
            <br />
            - To improve and personalize your experience on our Site
            <br />
            <br />
            - To respond to your comments, questions, and requests
            <br />
            <br />
            - To send you updates, newsletters, and promotional materials
            &#40;if you have opted in&#41;
            <br />
            <br />
            - To analyze usage patterns and trends to enhance our Site&apos;s
            functionality
            <br />
            <br />- To comply with legal obligations and protect our legal
            rights
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            4. Sharing Your Information
            <br />
            <br />
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except in the following
            circumstances:
            <br />
            <br />
            - Service Providers: We may share your information with third-party
            service providers who perform functions on our behalf, such as
            hosting, analytics, and customer support.
            <br />
            <br />- Legal Requirements: We may disclose your information if
            required by law or to protect the rights, property, or safety of{" "}
            {siteName}, our users, or others.
            <br />
            <br />
            -Business Transfers: In the event of a merger, acquisition, or sale
            of all or a portion of our assets, your information may be
            transferred as part of that transaction.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            5. Cookies and Tracking Technologies
            <br />
            <br />
            Our Site uses cookies and similar tracking technologies to enhance
            your experience. Cookies are small data files placed on your device
            that help us recognize you and remember your preferences. You can
            control cookie settings through your browser, but disabling cookies
            may affect your ability to use certain features of our Site.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            6. Third-Party Links
            <br />
            <br />
            Our Site may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
            We encourage you to review the privacy policies of any third-party
            sites you visit.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            7. Security
            <br />
            <br />
            We implement reasonable security measures to protect your personal
            information from unauthorized access, use, or disclosure. However,
            no method of transmission over the internet or electronic storage is
            100% secure, so we cannot guarantee absolute security.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            8. Your Choices
            <br />
            <br />
            You have the right to:
            <br />
            <br />
            - Access, correct, or delete your personal information
            <br />
            <br />
            - Opt-out of receiving promotional communications from us
            <br />
            <br />- Object to or restrict the processing of your personal
            information To exercise these rights, please contact us using the
            information provided below.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            9. Children&apos;s Privacy
            <br />
            <br />
            Our Site is not intended for children under the age of 13. We do not
            knowingly collect or solicit personal information from children
            under 13. If we become aware that we have collected personal
            information from a child under 13, we will take steps to delete such
            information.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            10. Changes to This Privacy Policy
            <br />
            <br />
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. Your
            continued use of our Site after any modifications indicates your
            acceptance of the updated policy.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <p>
            11. Contact Us
            <br />
            <br />
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
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
