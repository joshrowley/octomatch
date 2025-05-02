'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button'; // If using shadcn/ui

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-10 md:py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Image src="/octomatch-logo.svg" alt="OctoMatch Logo" width={48} height={48} />
        </div>
        <h1 className="text-4xl font-bold md:text-5xl">
          Find the perfect issue to solve
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get personalized open source issue recommendations based on your GitHub history. Start contributing in minutes.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Sign in with GitHub
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      {/* How It Works & Why OctoMatch */}
      <section className="mt-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="How">🔧</span> How It Works
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Connect your GitHub account</li>
            <li>We analyze your skills and history</li>
            <li>You get matched with relevant open source issues</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="Why">✨</span> Why OctoMatch?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personalized recommendations</li>
            <li>Jump into real issues, no fluff</li>
            <li>Improve your GitHub profile with high-quality PRs</li>
          </ul>
        </div>
      </section>

      {/* Matched Issues Preview */}
      <section className="mt-20 max-w-4xl mx-auto px-4">
        <div className="border rounded-lg shadow-sm p-6 bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">Matched Issues</h3>
          <p className="text-sm text-gray-500 mb-4">Find open source issues tailored to your profile.</p>
          <ul className="space-y-4">
            <li className="p-4 bg-white rounded-md border">
              <p className="font-medium">Fix accessibility bugs in the navbar</p>
              <p className="text-sm text-gray-500">repoexample • 1g • <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">good first issue</span> <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded ml-2">react</span></p>
            </li>
            <li className="p-4 bg-white rounded-md border">
              <p className="font-medium">Update the README with contributing guidelines</p>
              <p className="text-sm text-gray-500">repoexample • 1g • <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded">react</span></p>
            </li>
            <li className="p-4 bg-white rounded-md border">
              <p className="font-medium">Implement search functionality</p>
              <p className="text-sm text-gray-500">repoexample • 1g • <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded">react</span></p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold">
          🔒 Start Contributing Today
        </h2>
        <p className="mt-2 text-gray-600">Ready to find your next issue?</p>
        <div className="mt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Sign in with GitHub
          </Button>
        </div>
      </section>
    </main>
  );
}