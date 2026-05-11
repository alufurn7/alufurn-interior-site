'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string }

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi! I'm the Alufurn design assistant. Ask me anything about our kitchens, wardrobes, or how to get started with your project.",
}

type ChatbotProps = {
  isOpen: boolean
  onClose: () => void
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // New state for the form/chat flow
  const [view, setView] = useState<'form' | 'chat'>('form')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (view === 'chat') {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, view])

  useEffect(() => {
    if (isOpen && view === 'chat') setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen, view])

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: "Chatbot Lead",
        location: "Website Chat",
        startTime,
        honeypot: "",
      }

      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error('Failed to submit')
      }

      setView('chat')
    } catch (err) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const send = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    const updated = [...messages, userMessage]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })

      if (!res.ok) throw new Error('API error')

      const data = await res.json()
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.reply }
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Alufurn chat assistant"
          style={{
            position: 'fixed',
            bottom: isMobile ? '82px' : '90px',
            right: isMobile ? '16px' : '24px',
            left: isMobile ? '16px' : 'auto',
            width: isMobile ? 'auto' : '340px',
            zIndex: 1000,
            height: '500px',
            maxHeight: '80vh',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e5e5',
            boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header - Brand Gold */}
          <div style={{
            padding: '14px 18px',
            background: '#333333', // Dark background like OPPEIN
            color: '#fff',
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Logo Circle */}
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#fff',
                color: '#C8A96A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '9px',
                fontWeight: 'bold',
                letterSpacing: '0.05em'
              }}>
                ALUFURN
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '15px' }}>
                  ALUFURN Support
                </div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '2px', fontWeight: 300 }}>
                  Welcome to contact us
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close chat"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                opacity: 0.8,
                transition: 'opacity 0.2s',
                padding: '4px',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
            >
              <ChevronDown size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Body */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>



            {/* 2. Form View */}
            {view === 'form' && (
              <div style={{ padding: '24px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <form onSubmit={submitForm} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px', color: '#111' }}>
                    Please provide your details
                  </div>

                  <input
                    required
                    placeholder="Name *"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: '12px 14px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none', width: '100%' }}
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ padding: '12px 14px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none', width: '100%' }}
                  />

                  <div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden', background: '#fff' }}>
                    <div style={{ padding: '12px 14px', background: '#f5f5f5', borderRight: '1px solid #ddd', fontSize: '14px', color: '#555', fontWeight: 500 }}>
                      +91
                    </div>
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{ flex: 1, padding: '12px 14px', border: 'none', fontSize: '14px', outline: 'none', width: '100%' }}
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    style={{
                      padding: '14px',
                      background: '#C8A96A',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '14px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      marginTop: '8px',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Start Chatting'}
                  </button>
                </form>
              </div>
            )}

            {/* 3. Chat View */}
            {view === 'chat' && (
              <div style={{ padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {messages.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                      background: m.role === 'user' ? '#C8A96A' : '#f0f0f0',
                      color: m.role === 'user' ? '#fff' : '#111',
                      padding: '10px 14px',
                      borderRadius: m.role === 'user'
                        ? '12px 12px 2px 12px'
                        : '12px 12px 12px 2px',
                      fontSize: '13.5px',
                      lineHeight: '1.5',
                      maxWidth: '85%',
                      wordBreak: 'break-word',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                    }}
                  >
                    {m.content}
                  </div>
                ))}

                {loading && (
                  <div style={{
                    alignSelf: 'flex-start',
                    background: '#f0f0f0',
                    padding: '10px 14px',
                    borderRadius: '12px 12px 12px 2px',
                    fontSize: '13.5px',
                    color: '#666',
                  }}>
                    Typing…
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </div>

          {/* Input bar - Only show in chat view */}
          {view === 'chat' && (
            <div style={{
              padding: '12px 14px',
              borderTop: '1px solid #efefef',
              display: 'flex',
              gap: '8px',
              flexShrink: 0,
              background: '#fff',
            }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask something..."
                disabled={loading}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '24px',
                  border: '1px solid #e0e0e0',
                  fontSize: '13.5px',
                  outline: 'none',
                  background: '#fafafa',
                  color: '#1a1a1a',
                }}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                style={{
                  padding: '10px 18px',
                  borderRadius: '24px',
                  background: '#C8A96A',
                  color: '#fff',
                  border: 'none',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                  opacity: loading || !input.trim() ? 0.45 : 1,
                  transition: 'opacity 0.15s',
                }}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
