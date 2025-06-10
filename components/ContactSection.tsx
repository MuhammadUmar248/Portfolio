"use client"
import React, { useState } from "react"
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi"
import emailjs from "emailjs-com"
import SlideUp from "./SlideUp"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        'service_4t1xlup',
        'template_8ykrhkh',
        {
          from_name: formData.name,
          from_email: formData.email,
          title: formData.title || 'No title',
          message: formData.message,
        },
        'NO0p-J39zrybj0zJU'
      )

      setFormData({ name: "", email: "", message: "", title: "" })
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I&apos;ll respond within 24 hours.",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please email me directly at umar@example.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-9 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-bold text-4xl">
          Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
        </h1>

        <SlideUp offset="-100px 0px -100px 0px">
          <div className="max-w-2xl mx-auto bg-white dark:bg-stone-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-gray-700 dark:text-gray-300 font-medium">Subject</label>
                <div className="flex items-center border border-gray-300 dark:border-stone-600 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent">
                  <FiMessageSquare className="mr-3 text-gray-500 dark:text-gray-400" />
                  <input
                    type="text"
                    name="title"
                    placeholder="What&apos;s this about?"
                    className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white placeholder-gray-400"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-gray-700 dark:text-gray-300 font-medium">Name</label>
                  <div className="flex items-center border border-gray-300 dark:border-stone-600 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent">
                    <FiUser className="mr-3 text-gray-500 dark:text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white placeholder-gray-400"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-gray-700 dark:text-gray-300 font-medium">Email</label>
                  <div className="flex items-center border border-gray-300 dark:border-stone-600 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent">
                    <FiMail className="mr-3 text-gray-500 dark:text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white placeholder-gray-400"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-gray-700 dark:text-gray-300 font-medium">Message</label>
                <div className="border border-gray-300 dark:border-stone-600 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent">
                  <textarea
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white placeholder-gray-400 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-6 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-teal-500 to-blue-500
                  hover:from-teal-600 hover:to-blue-600
                  focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                  transition-all duration-300
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}
                  flex items-center justify-center
                `}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>

              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default ContactSection