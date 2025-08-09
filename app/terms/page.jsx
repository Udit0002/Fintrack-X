// app/terms/page.jsx
import TOCSidebar from '../privacy/TOCSidebar';

export const metadata = {
  title: 'Terms of Service — Fintrack X',
  description: 'Read the terms that govern your use of Fintrack X.',
};

const sections = [
  ['acceptance', '1. Acceptance of Terms'],
  ['eligibility', '2. Eligibility & Accounts'],
  ['subscriptions', '3. Subscriptions & Billing'],
  ['use', '4. Use of the Service'],
  ['prohibited', '5. Prohibited Conduct'],
  ['data', '6. Data & Privacy'],
  ['ip', '7. Intellectual Property'],
  ['thirdparty', '8. Third-Party Services'],
  ['disclaimers', '9. Disclaimers'],
  ['liability', '10. Limitation of Liability'],
  ['indemnity', '11. Indemnification'],
  ['termination', '12. Termination'],
  ['governing', '13. Governing Law & Disputes'],
  ['changes', '14. Changes to these Terms'],
  ['contact', '15. Contact Us'],
];

export default function TermsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-36">

      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-5">Terms of Service</h1>
        <div className="h-1 w-54 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto" />
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Please read these terms carefully before using Fintrack X.
        </p>
        <p className="text-sm text-gray-500 mt-3">Last updated: 9 August 2025</p>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-[260px_1fr] gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block">
          <TOCSidebar sections={sections} />
        </aside>

        {/* Content */}
        <main className="space-y-12">
          {/* Mobile TOC */}
          <nav className="md:hidden mb-2 bg-white border rounded-xl p-5">
            <p className="text-sm font-medium text-gray-700 mb-3">On this page</p>
            <ul className="grid grid-cols-1 gap-2 text-gray-600 text-sm">
              {sections.map(([href, label]) => (
                <li key={href}>
                  <a href={`#${href}`} className="hover:text-gray-900 hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Section id="acceptance" title="1. Acceptance of Terms">
            <p>
              By accessing or using Fintrack X (“Service”), you agree to be bound by these Terms of Service (“Terms”).
              If you do not agree, do not use the Service.
            </p>
          </Section>

          <Section id="eligibility" title="2. Eligibility & Accounts">
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be legally capable of entering into a binding agreement.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must provide accurate information and update it as needed.</li>
            </ul>
          </Section>

          <Section id="subscriptions" title="3. Subscriptions & Billing">
            <ul className="list-disc pl-6 space-y-2">
              <li>Some features may require a paid subscription billed on a recurring basis.</li>
              <li>Fees, billing cycles, and cancellation terms are shown at checkout or in-app.</li>
              <li>Unless required by law, payments are non-refundable once the billing period starts.</li>
            </ul>
          </Section>

          <Section id="use" title="4. Use of the Service">
            <p>
              You may use the Service only for lawful purposes and in accordance with these Terms and any posted policies.
            </p>
          </Section>

          <Section id="prohibited" title="5. Prohibited Conduct">
            <ul className="list-disc pl-6 space-y-2">
              <li>Reverse engineering, scraping, or bypassing security controls.</li>
              <li>Uploading malware, attempting unauthorized access, or disrupting the Service.</li>
              <li>Infringing third-party rights or violating applicable laws and regulations.</li>
            </ul>
          </Section>

          <Section id="data" title="6. Data & Privacy">
            <p>
              We handle your data as described in our{' '}
              <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
              By using the Service, you consent to such processing and represent that you have obtained all necessary consents.
            </p>
          </Section>

          <Section id="ip" title="7. Intellectual Property">
            <p>
              The Service, including software, designs, logos, and content, is owned by Fintrack X or its licensors and is protected by
              intellectual property laws. Except as expressly permitted, you may not reproduce, modify, or create derivative works.
            </p>
          </Section>

          <Section id="thirdparty" title="8. Third-Party Services">
            <p>
              We may integrate third-party services (e.g., banking connectors, analytics). Their use may be subject to additional terms.
              We are not responsible for third-party content, policies, or practices.
            </p>
          </Section>

          <Section id="disclaimers" title="9. Disclaimers">
            <p>
              The Service is provided on an “AS IS” and “AS AVAILABLE” basis without warranties of any kind, express or implied,
              including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted
              or error-free operation.
            </p>
          </Section>

          <Section id="liability" title="10. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Fintrack X and its affiliates will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of the Service.
            </p>
          </Section>

          <Section id="indemnity" title="11. Indemnification">
            <p>
              You agree to indemnify and hold harmless Fintrack X, its affiliates, and personnel from any claims, liabilities, damages,
              and expenses (including legal fees) arising out of your use of the Service or violation of these Terms.
            </p>
          </Section>

          <Section id="termination" title="12. Termination">
            <p>
              We may suspend or terminate access to the Service at any time for any violation of these Terms or for compliance and
              security reasons. You may stop using the Service at any time. Certain provisions survive termination.
            </p>
          </Section>

          <Section id="governing" title="13. Governing Law & Disputes">
            <p>
              These Terms are governed by applicable laws of your jurisdiction or as specified in your subscription agreement.
              Disputes will be resolved in the courts or arbitration forums specified therein.
            </p>
          </Section>

          <Section id="changes" title="14. Changes to these Terms">
            <p>
              We may update these Terms from time to time. We will post the updated version with a revised “Last updated” date.
              Material changes may be communicated by email or in-app notice. Continued use constitutes acceptance.
            </p>
          </Section>

          <Section id="contact" title="15. Contact Us">
            <p>
              Questions? Contact{' '}
              <a href="mailto:support@fintrack.com" className="text-blue-600 underline">support@fintrack.com</a>.
            </p>
          </Section>

          <div className="border rounded-xl p-5 bg-gray-50 text-gray-600 text-sm">
            <strong>Note:</strong> This page provides general information and does not constitute legal advice.
          </div>
        </main>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-5 w-1.5 rounded bg-gradient-to-b from-blue-600 to-purple-600" />
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
