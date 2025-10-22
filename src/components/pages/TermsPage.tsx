import { motion } from "motion/react";

export function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Terms and Conditions
            </motion.h1>
            <motion.p
              className="text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Last updated: Oct 19, 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="space-y-8">
              <p className="text-foreground/70">
                Please read these terms and conditions carefully before using Our Service.
              </p>

              <div>
                <h2>Interpretation and Definitions</h2>
                <h3>Interpretation</h3>
                <p className="text-foreground/70">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div>
                <h3>Definitions</h3>
                <p className="text-foreground/70">For the purposes of these Terms and Conditions:</p>
                <ul className="space-y-3 text-foreground/70">
                  <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                  <li><strong>Country</strong> refers to: Maharashtra, India</li>
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Karuna Kodwani.</li>
                  <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                  <li><strong>Service</strong> refers to the Website.</li>
                  <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                  <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                  <li><strong>Website</strong> refers to Karuna Kodwani, accessible from https://www.karunakodwani.com</li>
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
              </div>

              <div>
                <h2>Acknowledgment</h2>
                <p className="text-foreground/70">
                  These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                </p>
                <p className="text-foreground/70">
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                </p>
                <p className="text-foreground/70">
                  By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                </p>
                <p className="text-foreground/70">
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                </p>
              </div>

              <div>
                <h2>Links to Other Websites</h2>
                <p className="text-foreground/70">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                </p>
                <p className="text-foreground/70">
                  The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
              </div>

              <div>
                <h2>Termination</h2>
                <p className="text-foreground/70">
                  We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
                <p className="text-foreground/70">
                  Upon termination, Your right to use the Service will cease immediately.
                </p>
              </div>

              <div>
                <h2>Limitation of Liability</h2>
                <p className="text-foreground/70">
                  Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                </p>
                <p className="text-foreground/70">
                  To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever.
                </p>
              </div>

              <div>
                <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                <p className="text-foreground/70">
                  The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise.
                </p>
              </div>

              <div>
                <h2>Governing Law</h2>
                <p className="text-foreground/70">
                  The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                </p>
              </div>

              <div>
                <h2>Disputes Resolution</h2>
                <p className="text-foreground/70">
                  If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                </p>
              </div>

              <div>
                <h2>Severability and Waiver</h2>
                <h3>Severability</h3>
                <p className="text-foreground/70">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>
                <h3>Waiver</h3>
                <p className="text-foreground/70">
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
              </div>

              <div>
                <h2>Changes to These Terms and Conditions</h2>
                <p className="text-foreground/70">
                  We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                </p>
                <p className="text-foreground/70">
                  By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3>Contact Us</h3>
                <p className="text-foreground/70">
                  If you have any questions about these Terms and Conditions, You can contact us:
                </p>
                <p className="text-foreground/70">
                  By email: <a href="mailto:karunakodwani@gmail.com" className="text-emerald-600 hover:text-emerald-700">karunakodwani@gmail.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
