// app/privacy-policy/page.jsx
import TOCSidebar from './TOCSidebar';

export const metadata = {
  title: 'Privacy Policy — Fintrack X',
  description:
    'Learn how Fintrack X collects, uses, and protects your personal and financial data.',
};

const sections = [
  ['introduction', '1. Introduction'],
  ['data-we-collect', '2. Data We Collect'],
  ['how-we-use', '3. How We Use Data'],
  ['legal-basis', '4. Legal Basis'],
  ['sharing', '5. Data Sharing'],
  ['security', '6. Data Security'],
  ['your-rights', '7. Your Rights'],
  ['retention', '8. Data Retention'],
  ['international', '9. International Transfers'],
  ['cookies', '10. Cookies & Tracking'],
  ['children', "11. Children’s Privacy"],
  ['changes', '12. Changes to this Policy'],
  ['contact', '13. Contact Us'],
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-36">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-5">Privacy Policy</h1>
        <div className="h-1 w-54 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto" />
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Your privacy matters. This policy explains what we collect, why we collect it, and how you control it.
        </p>
        <p className="text-sm text-gray-500 mt-3">Last updated: 9 August 2025</p>
      </div>


      <div className="grid md:grid-cols-[260px_1fr] gap-10">

        <aside className="hidden md:block">
          <TOCSidebar sections={sections} />
        </aside>


        <main className="space-y-12">

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

          <Section id="introduction" title="1. Introduction">
            <p>
              Fintrack X (“we”, “us”, “our”) provides tools to track income, expenses, bills, and insights.
              This Privacy Policy describes how we handle your information when you use our website and app.
            </p>
          </Section>

          <Section id="data-we-collect" title="2. Data We Collect">
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Account info:</span> name, email, password hash.</li>
              <li><span className="font-medium">Financial data:</span> transactions, amounts, categories, payees, bill due dates, optional receipts (OCR).</li>
              <li><span className="font-medium">Device & usage:</span> IP address, device type, browser, pages viewed, app events.</li>
              <li><span className="font-medium">Support content:</span> messages, attachments you share with support.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              You may choose not to provide certain data, but some features may not work properly.
            </p>
          </Section>

          <Section id="how-we-use" title="3. How We Use Data">
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve core features (tracking, budgets, insights, receipt OCR).</li>
              <li>Send alerts (bill reminders, spend spikes, monthly summaries) you enable.</li>
              <li>Maintain security, prevent fraud, and troubleshoot issues.</li>
              <li>Analyze usage to enhance performance and user experience.</li>
            </ul>
          </Section>

          <Section id="legal-basis" title="4. Legal Basis">
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Consent</span> (e.g., marketing emails, connecting accounts).</li>
              <li><span className="font-medium">Contract</span> (to provide the service you requested).</li>
              <li><span className="font-medium">Legitimate interests</span> (improving and securing the service).</li>
              <li><span className="font-medium">Legal obligations</span> (when required by law).</li>
            </ul>
          </Section>

          <Section id="sharing" title="5. Data Sharing">
            <p>We do not sell your personal information. We share data only with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><span className="font-medium">Service providers</span> (e.g., cloud hosting, analytics) under strict contracts.</li>
              <li><span className="font-medium">Compliance</span> when required by law or to protect rights and safety.</li>
              <li><span className="font-medium">With your direction</span> when you connect third-party services.</li>
            </ul>
          </Section>

          <Section id="security" title="6. Data Security">
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption in transit (TLS 1.2+) and at rest.</li>
              <li>Least-privilege access controls, logging, and monitoring.</li>
              <li>Optional multi-factor authentication (MFA).</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              No method is 100% secure, but we apply industry best practices and review controls regularly.
            </p>
          </Section>

          <Section id="your-rights" title="7. Your Rights">
            <p>Depending on your region, you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access, correct, or delete your data.</li>
              <li>Export your data in a portable format.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Object to or restrict certain processing.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              To exercise rights, contact us—see “Contact Us” below. We’ll respond within applicable timelines.
            </p>
          </Section>

          <Section id="retention" title="8. Data Retention">
            <p>
              We retain personal data only as long as needed for the purposes described, to comply with legal obligations,
              resolve disputes, and enforce agreements. You can request deletion at any time.
            </p>
          </Section>

          <Section id="international" title="9. International Transfers">
            <p>
              If data is processed outside your country, we use safeguards (e.g., standard contractual clauses) to protect it
              consistent with this Policy.
            </p>
          </Section>

          <Section id="cookies" title="10. Cookies & Tracking">
            <p>
              We use cookies and similar technologies to keep you signed in, remember preferences, and measure performance.
              You can control cookies in your browser settings; some features may be limited if disabled.
            </p>
          </Section>

          <Section id="children" title="11. Children’s Privacy">
            <p>
              Fintrack X is not intended for children under 13 (or the age required by local law). We do not knowingly collect data
              from children. If you believe a child has provided data, contact us for deletion.
            </p>
          </Section>

          <Section id="changes" title="12. Changes to this Policy">
            <p>
              We may update this Policy to reflect changes to our practices. We’ll post the updated version here and revise the
              “Last updated” date. Material changes may be communicated by email or in-app notice.
            </p>
          </Section>

          <Section id="contact" title="13. Contact Us">
            <p>
              Questions or requests? Reach us at{' '}
              <a href="mailto:support@fintrack.com" className="text-blue-600 underline">
                support@fintrack.com
              </a>.
            </p>
          </Section>


          <div className="border rounded-xl p-5 bg-gray-50 text-gray-600 text-sm">
            <strong>Note:</strong> This page is for general information and does not constitute legal advice. For compliance in
            specific jurisdictions, consult a qualified attorney.
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
