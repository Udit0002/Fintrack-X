'use client';

import { useState } from 'react';
import {
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  WalletIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

const faqItems = [
  {
    title: 'How does Fintrack X categorize my expenses?',
    summary: 'Automatic AI tagging with manual overrides.',
    content:
      'We use on-device OCR + ML to read receipts and bank descriptors, then auto-tag each transaction. You can edit categories anytime—our model learns from your changes.',
    icon: Cog6ToothIcon,
  },
  {
    title: 'Is my financial data secure?',
    summary: 'Bank-grade encryption and MFA.',
    content:
      'All sensitive data is encrypted at rest (AES-256) and in transit (TLS 1.2+). You can enable multi-factor authentication and device-based session approvals in Settings.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Can I connect multiple bank accounts?',
    summary: 'Yes—multi-account, multi-currency.',
    content:
      'Link multiple banks and cards. We support INR by default and show live FX conversions for foreign accounts to keep your dashboards consistent.',
    icon: WalletIcon,
  },
  {
    title: 'Will I get alerts for overspending or bills?',
    summary: 'Smart nudges before due dates.',
    content:
      'Enable notifications to get reminders for upcoming bills, unusual spend spikes, or when a category nears its monthly limit.',
    icon: BellAlertIcon,
  },
  {
    title: 'How do goals & budgets work?',
    summary: 'Track goals with progress bars and AI insights.',
    content:
      'Set monthly category budgets or long-term savings goals. We visualize progress and suggest small adjustments to keep you on track.',
    icon: ArrowTrendingUpIcon,
  },
  {
    title: 'What if the app misreads a receipt?',
    summary: 'Quick edit with one tap.',
    content:
      'Open the transaction, tap “Edit,” fix amount/category/merchant, and save. The model improves using your correction signals.',
    icon: QuestionMarkCircleIcon,
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-36">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h1>
        <div className="h-1 w-54 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto"></div>
        <p className="text-lg text-gray-600 mt-5 max-w-2xl mx-auto">
          Everything you need to know about Fintrack X—security, features, billing, and more.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-8">
        {faqItems.map((item, index) => {
          const Icon = item.icon;
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border p-6 transition-all duration-300 relative overflow-hidden ${
                isOpen
                  ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50 border-blue-500 shadow-lg'
                  : 'hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-start justify-between w-full text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                    <p className="text-gray-500">{item.summary}</p>
                  </div>
                </div>
                <span
                  className={`text-3xl text-gray-400 transform transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-panel-${index}`}
                  className="mt-4 text-gray-800 text-[17px] leading-relaxed border-t border-gray-200 pt-4"
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
