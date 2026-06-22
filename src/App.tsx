import React, { useState } from 'react';
import { Shield, Mail, Globe, Lock, Eye, FileText, CheckCircle, Scale, AlertTriangle, UserCheck, BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white pt-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            {activeTab === 'privacy' ? (
              <Shield className="w-10 h-10 text-blue-400" />
            ) : (
              <Scale className="w-10 h-10 text-blue-400" />
            )}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h1>
          </div>
          <p className="text-slate-300 text-lg">
            Veritas AI Pro 4 by Media Multi-Tool
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Last Updated: March 24, 2026
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mt-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === 'privacy'
                  ? 'bg-slate-50 text-slate-900'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === 'terms'
                  ? 'bg-slate-50 text-slate-900'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {activeTab === 'privacy' ? <PrivacyPolicyContent /> : <TermsOfServiceContent />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Media Multi-Tool. All rights reserved.</p>
        <p className="mt-2">Veritas AI Pro 4</p>
      </footer>
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-500" />
          1. Introduction
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Media Multi-Tool ("we", "our", or "us") operates the Veritas AI Pro 4 application (the "App"). This Privacy Policy explains our principles regarding your data and privacy when you use our App.
        </p>
        <p className="text-slate-600 leading-relaxed font-medium text-slate-900">
          The short version: We do not collect, store, or transmit any of your personal information.
        </p>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Eye className="w-6 h-6 text-blue-500" />
          2. No Information Collection
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>We are committed to your privacy. Veritas AI Pro 4 is built from the ground up to operate without collecting your data:</p>
          
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li><strong className="text-slate-800">No Personal Data:</strong> We do not ask for, collect, or store your name, email address, or any other personally identifiable information. There are no user accounts or registration requirements.</li>
            <li><strong className="text-slate-800">No Tracking or Analytics:</strong> We do not track your usage, log your activities, or use cookies to monitor your behavior within the App.</li>
            <li><strong className="text-slate-800">No Device Data:</strong> We do not collect your IP address, device ID, or location data.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-blue-500" />
          3. Ephemeral In-Browser Processing
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          All operations, inputs, and AI processing performed by Veritas AI Pro 4 occur locally and ephemerally on your device.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Data entered into the application remains strictly in your browser's active memory.</li>
          <li>Once you close the browser tab or refresh the page, your session data is permanently erased.</li>
          <li>No data is transmitted to our servers for storage, training, or analysis.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Lock className="w-6 h-6 text-blue-500" />
          4. Security
        </h2>
        <p className="text-slate-600 leading-relaxed">
          The most secure data is data that is never collected. Because Veritas AI Pro 4 does not collect or store any of your personal information, there is no risk of your data being breached, leaked, or accessed by unauthorized third parties through our servers. We rely on the inherent security sandboxing of your modern web browser to keep your ephemeral session safe.
        </p>
      </section>

      <ContactSection sectionNumber="5" />
    </div>
  );
}

function TermsOfServiceContent() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-500" />
          1. Agreement to Terms
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Media Multi-Tool ("we," "us" or "our"), concerning your access to and use of the Veritas AI Pro 4 mobile application.
        </p>
        <p className="text-slate-600 leading-relaxed">
          You agree that by accessing the App, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the App and you must discontinue use immediately.
        </p>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-blue-500" />
          2. User Representations
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          By using the App, you represent and warrant that:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
          <li>You are not under the age of 13.</li>
          <li>You will not access the App through automated or non-human means, whether through a bot, script or otherwise.</li>
          <li>You will not use the App for any illegal or unauthorized purpose.</li>
          <li>Your use of the App will not violate any applicable law or regulation.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-blue-500" />
          3. Prohibited Activities
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          You may not access or use the App for any purpose other than that for which we make the App available. The App may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
        <p className="text-slate-600 leading-relaxed">
          As a user of the App, you agree not to systematically retrieve data or other content from the App to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
        </p>
      </section>

      <ContactSection sectionNumber="4" />
    </div>
  );
}

function ContactSection({ sectionNumber }: { sectionNumber: string }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Mail className="w-6 h-6 text-blue-500" />
        {sectionNumber}. Contact Us
      </h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        If you have questions or comments about these terms or our privacy practices, please contact us at:
      </p>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
        <div className="flex items-center gap-3 text-slate-700">
          <Shield className="w-5 h-5 text-slate-400" />
          <span className="font-medium">Media Multi-Tool</span>
        </div>
        <div className="flex items-center gap-3 text-slate-700">
          <Globe className="w-5 h-5 text-slate-400" />
          <a href="https://mediamultitool.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            https://mediamultitool.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-slate-700">
          <Mail className="w-5 h-5 text-slate-400" />
          <a href="mailto:themediamultitool@gmail.com" className="text-blue-600 hover:underline font-medium">
            themediamultitool@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
