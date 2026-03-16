'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type FormData = {
  fullName: string
  phoneNumber: string
  email: string
  tiktok: string
  instagram: string
  youtube: string
  soundcloud: string
  genres: string[]
  genresOther: string
  useCases: string[]
  useCaseOther: string
}

const GENRES = [
  'Afropop', 'Afrobeats', 'Bongo Flava', 'Gospel', 'R&B/Soul',
  'Hip-Hop', 'Neo-Soul', 'Gengetone', 'Jazz', 'Pop',
  'Reggae/Dancehall', 'Experimental'
]

const USE_CASES = [
  'I have songs ready to test before committing to studio time',
  'I produce for other artists and want a faster way to demo concepts',
  'I write songs and need to hear them performed to know if they work',
  'I\'m building toward a release and want to stress-test the material'
]

export default function GetEarlyAccessPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    tiktok: '',
    instagram: '',
    youtube: '',
    soundcloud: '',
    genres: [],
    genresOther: '',
    useCases: [],
    useCaseOther: ''
  })

  const steps = [
    { number: 1, title: 'Who you are' },
    { number: 2, title: 'Where to find your music' },
    { number: 3, title: 'What you make' },
    { number: 4, title: 'How you would use the platform' }
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleGenre = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre]
    }))
  }

  const toggleUseCase = (useCase: string) => {
    setFormData(prev => ({
      ...prev,
      useCases: prev.useCases.includes(useCase)
        ? prev.useCases.filter(u => u !== useCase)
        : [...prev.useCases, useCase]
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background-light">
        <Header />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Check className="w-12 h-12 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading font-black text-[40px] lg:text-[56px] text-text-primary mb-4"
            >
              You're on the list!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-lg mb-8"
            >
              Thanks for applying to get early access to wimbo.ai. We'll review your application and reach out when your slot opens.
            </motion.p>
            <motion.a
              href="/"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Back to Home
            </motion.a>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
            
            {/* Left Sidebar */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading font-black text-[40px] lg:text-[48px] text-text-primary leading-tight mb-6"
              >
                Get Early Access
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-text-secondary text-lg mb-10"
              >
                We're selecting a limited group of creators to shape East Africa's first AI music pre-production studio. Tell us who you are and what you're building.
              </motion.p>

              {/* Progress Steps */}
              <div>
                <h3 className="text-primary font-semibold mb-6">Your Application</h3>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                        currentStep > step.number
                          ? 'bg-primary text-white'
                          : currentStep === step.number
                          ? 'bg-primary text-white'
                          : 'bg-transparent border-2 border-gray-300 text-text-secondary'
                      }`}>
                        {currentStep > step.number ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <span className={`transition-colors duration-300 ${
                        currentStep >= step.number ? 'text-primary' : 'text-text-secondary'
                      }`}>
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <div className="absolute left-4 top-8 w-0.5 h-4 bg-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form Area */}
            <div>
              <motion.div
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-primary font-semibold mb-2">Step {currentStep} of 4</p>

                <AnimatePresence mode="wait">
                  {/* Step 1: Contact Details */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-heading font-black text-[28px] lg:text-[36px] text-text-primary leading-tight mb-2">
                        Let's start with<br />your contact details.
                      </h2>
                      <p className="text-text-secondary mb-8">
                        Basic contact details. This is how we'll reach you when your slot opens.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-text-primary font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            placeholder="Your name or artist name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-text-primary font-medium mb-2">Phone Number</label>
                            <input
                              type="tel"
                              placeholder="+2547XXXXXXXX"
                              value={formData.phoneNumber}
                              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-text-primary font-medium mb-2">Email</label>
                            <input
                              type="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Social Profiles */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-heading font-black text-[28px] lg:text-[36px] text-text-primary leading-tight mb-2">
                        Where's<br />your work?
                      </h2>
                      <p className="text-text-secondary mb-8">
                        Drop your social profiles. We want to hear what you've already made, even if it's rough.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-text-primary font-medium mb-2">TikTok</label>
                          <input
                            type="text"
                            placeholder="@yourhandle"
                            value={formData.tiktok}
                            onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-text-primary font-medium mb-2">Instagram</label>
                          <input
                            type="text"
                            placeholder="@yourhandle"
                            value={formData.instagram}
                            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-text-primary font-medium mb-2">Youtube</label>
                          <input
                            type="text"
                            placeholder="@yourhandle"
                            value={formData.youtube}
                            onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-text-primary font-medium mb-2">SoundCloud/Spotify</label>
                          <input
                            type="text"
                            placeholder="@yourhandle"
                            value={formData.soundcloud}
                            onChange={(e) => setFormData({ ...formData, soundcloud: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Music Genres */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-heading font-black text-[28px] lg:text-[36px] text-text-primary leading-tight mb-2">
                        What kind of<br />music do you make?
                      </h2>
                      <p className="text-text-secondary mb-8">
                        Select everything that applies to your work.
                      </p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {GENRES.map((genre) => (
                          <button
                            key={genre}
                            onClick={() => toggleGenre(genre)}
                            className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                              formData.genres.includes(genre)
                                ? 'bg-primary border-primary text-white'
                                : 'bg-white border-gray-200 text-text-primary hover:border-primary'
                            }`}
                          >
                            {genre}
                          </button>
                        ))}
                      </div>

                      <div>
                        <label className="block text-text-primary font-medium mb-2">Anything Else</label>
                        <input
                          type="text"
                          placeholder="Other genres..."
                          value={formData.genresOther}
                          onChange={(e) => setFormData({ ...formData, genresOther: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Use Cases */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-heading font-black text-[28px] lg:text-[36px] text-text-primary leading-tight mb-2">
                        How would you<br />actually use the platform?
                      </h2>
                      <p className="text-text-secondary mb-8">
                        Select everything that applies to your work.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {USE_CASES.map((useCase) => (
                          <button
                            key={useCase}
                            onClick={() => toggleUseCase(useCase)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                              formData.useCases.includes(useCase)
                                ? 'bg-primary/5 border-primary text-text-primary'
                                : 'bg-white border-gray-200 text-text-secondary hover:border-primary'
                            }`}
                          >
                            {useCase}
                          </button>
                        ))}
                      </div>

                      <div>
                        <label className="block text-text-primary font-medium mb-2">Tell us more in your own words</label>
                        <textarea
                          rows={4}
                          placeholder="Anything else you'd like us to know..."
                          value={formData.useCaseOther}
                          onChange={(e) => setFormData({ ...formData, useCaseOther: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {currentStep > 1 && (
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-all duration-300"
                  >
                    {currentStep === 4 ? 'Submit' : 'Continue'}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
