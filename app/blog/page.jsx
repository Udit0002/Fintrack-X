'use client';

import { useState } from 'react';
import {
  BanknotesIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const blogPosts = [
  {
    title: 'Introducing Smart Receipts',
    summary: 'How AI-powered receipt scanning is changing the game for personal finance tracking.',
    content:
      'Fintrack X now supports smart receipt uploads via OCR. You can scan, extract and auto-categorize expenses in real-time. This reduces manual entry and increases tracking accuracy significantly.',
    icon: BanknotesIcon,
  },
  {
    title: 'Top 5 Budgeting Tips That Actually Work',
    summary: 'Master your money every month with strategies that align with your lifestyle.',
    content:
      'Try the 50/30/20 rule, track every rupee, automate savings, review expenses weekly, and set specific goals. Fintrack X helps you implement and monitor all of these.',
    icon: ChartBarIcon,
  },
  {
    title: 'Why Multi-Currency Support Matters',
    summary: 'Managing international income? Here’s why this feature is essential.',
    content:
      'Whether you’re a freelancer, traveler, or investor, Fintrack X lets you manage and convert across currencies. Real-time FX rates ensure accurate budgeting and global insights.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Save Smarter with AI-Powered Insights',
    summary: 'See how Fintrack X helps you identify hidden spending patterns.',
    content:
      'With ML models analyzing your daily transactions, Fintrack X provides personalized tips to reduce unnecessary costs, increase savings, and meet your financial goals.',
    icon: ChartBarIcon,
  },
  {
    title: 'Switching to Digital Budgeting',
    summary: 'Still using Excel or notebooks? Here’s why you should switch today.',
    content:
      'Manual tracking often leads to gaps and errors. Fintrack X automates the process, categorizes expenses, and visualizes trends—giving you control without effort.',
    icon: BanknotesIcon,
  },
  {
    title: 'Automating Bill Payments with Fintrack X',
    summary: 'Never miss a due date again with scheduled payments.',
    content:
      'Fintrack X integrates with your bank to automate recurring bills. Get notified before payments go out, ensuring you stay on top of expenses without last-minute rush.',
    icon: BanknotesIcon,
  },
  {
    title: 'Tracking Investments in Real Time',
    summary: 'View all your stocks, crypto, and mutual funds in one place.',
    content:
      'With Fintrack X, link your brokerage accounts and monitor your portfolio performance in real time. Receive alerts when assets hit target prices or fall below safety levels.',
    icon: ChartBarIcon,
  },
  {
    title: 'Understanding Your Credit Score',
    summary: 'Why your credit score matters and how to improve it.',
    content:
      'Fintrack X shows your credit score trends, alerts you to changes, and gives actionable steps to boost your score—helping you secure better loans and interest rates.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Expense Sharing Made Simple',
    summary: 'Split bills and track group expenses effortlessly.',
    content:
      'Whether it’s rent, travel, or dinners with friends, Fintrack X lets you split costs, track who owes what, and send reminders—all in a single dashboard.',
    icon: BanknotesIcon,
  },
  {
    title: 'Mastering Subscription Management',
    summary: 'Cut unnecessary recurring costs with ease.',
    content:
      'Fintrack X detects recurring subscriptions, highlights rarely used ones, and suggests cancellations to save money instantly.',
    icon: ChartBarIcon,
  },
  {
    title: 'Financial Goal Tracking',
    summary: 'Stay motivated and hit your savings milestones.',
    content:
      'Set short- and long-term financial goals in Fintrack X, and track progress visually. The app nudges you to stay consistent without feeling pressured.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Secure Data with Bank-Grade Encryption',
    summary: 'Your privacy is our top priority.',
    content:
      'Fintrack X uses AES-256 encryption and multi-factor authentication to ensure your data is safe from breaches and unauthorized access.',
    icon: BanknotesIcon,
  },
];


export default function BlogPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-36">
      {/* Page Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-5">Fintrack X Blog</h1>
        <div className="h-1 w-94 bg-gradient-to-r from-blue-600 to-purple-600 rounded mx-auto"></div>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Tips, tools, and insights to help you master your finances, one swipe at a time.
        </p>
    </div>


      {/* Blog List */}
      <div className="space-y-8">
        {blogPosts.map((post, index) => {
          const Icon = post.icon;
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border p-6 transition-all duration-300 relative overflow-hidden ${
                isOpen ? 'bg-gradient-to-br from-blue-50 via-white to-purple-200 border-blue-500' : 'hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-start justify-between w-full text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                    <p className="text-gray-500">{post.summary}</p>
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
                <div className="mt-4 text-gray-800 text-[17px] leading-relaxed border-t border-gray-200 pt-4">
                  {post.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
