"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendForm } from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendForm(
        `${process.env.emailjs_service_id}`, // Replace with your Service ID
        `${process.env.emailjs_template_id}`, // Replace with your Template ID
        e.currentTarget,
        `${process.env.emailjs_key}` // Replace with your Public Key
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      // Clear form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name" // Important for EmailJS
          required
          className="w-full px-4 py-2 rounded-lg border bg-background"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email" // Important for EmailJS
          required
          className="w-full px-4 py-2 rounded-lg border bg-background"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message" // Important for EmailJS
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border bg-background resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
} 