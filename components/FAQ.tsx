// components/FAQ.tsx
"use client";

import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What happens in a first therapy session?",
            answer:
                "The first session is really about getting to know each other. I'll ask about what's bringing you to therapy, your background, and what you're hoping to get out of our work together. You'll also have a chance to ask me anything—about my approach, experience, or how therapy works. There's no pressure to dive deep right away. Think of it as a conversation to see if we're a good fit.",
        },
        {
            question: "How long does therapy typically take?",
            answer:
                "It depends on what you're working through and your goals. Some clients find relief in 8-12 sessions, while others benefit from longer-term work. We'll regularly check in on your progress and adjust as needed. My goal is to help you build lasting skills, not to keep you in therapy forever.",
        },
        {
            question: "What's your approach to therapy?",
            answer:
                "I use an integrative approach, drawing primarily from EMDR, cognitive-behavioral therapy (CBT), and mindfulness-based techniques. But beyond any specific method, I believe the relationship between therapist and client is what makes therapy work. I'm warm, direct, and collaborative. I'll give you honest feedback and practical tools—not just nod and take notes.",
        },
        {
            question: "Do you offer telehealth sessions?",
            answer:
                "Yes. I offer secure video sessions for clients located anywhere in California. Many of my clients prefer telehealth for its convenience, and research shows it can be just as effective as in-person therapy for anxiety, trauma, and related concerns.",
        },
        {
            question: "What are your fees, and do you take insurance?",
            answer:
                "I'm an out-of-network provider, which means I don't bill insurance directly. However, I provide superbills that you can submit to your insurance company for potential reimbursement. Many PPO plans cover a significant portion of out-of-network therapy. Contact me to discuss current rates and options.",
        },
        {
            question: "How do I know if I'm ready for therapy?",
            answer:
                "If you're asking this question, you're probably ready. Therapy doesn't require you to be in crisis—it's for anyone who wants to understand themselves better, work through something that's been weighing on them, or simply have support during a challenging time. A free consultation is a great way to explore if it's the right step for you.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="section-padding-y bg-white"
        >
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-950 mb-3">
                        Questions You Might Have
                    </h2>
                    <p className="text-primary-500 max-w-xl mx-auto">
                        Starting therapy can bring up a lot of questions. Here are answers
                        to some of the most common ones.
                    </p>
                </div>

                {/* Accordion */}
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-secondary-200"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFAQ(index)}
                                className="
                  w-full
                  py-5
                  flex
                  items-center
                  justify-between
                  text-left
                  group
                "
                                aria-expanded={openIndex === index}
                            >
                <span className="text-base font-medium text-primary-900 pr-8 group-hover:text-accent-600 transition-colors">
                  {faq.question}
                </span>

                                <span
                                    className={`
                    text-xl 
                    shrink-0 
                    transition-colors
                    ${openIndex === index ? "text-accent-600" : "text-primary-400"}
                  `}
                                >
                  {openIndex === index ? "−" : "+"}
                </span>
                            </button>

                            <div
                                className={`
                  overflow-hidden 
                  transition-all 
                  duration-300
                  ${openIndex === index ? "max-h-80 pb-5" : "max-h-0"}
                `}
                            >
                                <p className="text-primary-500 leading-relaxed text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}