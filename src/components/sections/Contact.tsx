"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { BUSINESS_TYPES, fadeInUp } from "@/lib/constants";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      businessType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("loading");

    // Simulate API call - console.log for now (ready for backend integration)
    console.log("Form submitted:", data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Set success state
    setFormState("success");

    // Reset form after success
    setTimeout(() => {
      form.reset();
      setFormState("idle");
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <motion.div
            {...fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-section text-foreground mb-4">
              Ready to Stock TailShell?
            </h2>
            <p className="text-body-large text-muted-foreground mb-8">
              Join our growing network of vendors and bring innovation to your
              customers. Fill out the form below and we&apos;ll be in touch within 24
              hours.
            </p>

            {/* Alternative Contact */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted">
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-small text-muted-foreground">
                  Or email us directly at:
                </p>
                <p className="text-body font-semibold text-foreground">
                  vendors@tailshell.com
                </p>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-small text-muted-foreground mt-6">
              We respect your privacy. Your information will never be shared.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-muted rounded-2xl p-8"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#34C759] flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-subsection text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-body text-muted-foreground">
                  We&apos;ve received your inquiry and will be in touch within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-body font-medium text-foreground">
                          Full Name <span className="text-[#FF3B30]">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Smith"
                            className="h-12 bg-white border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[#FF3B30]" />
                      </FormItem>
                    )}
                  />

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-body font-medium text-foreground">
                            Email Address <span className="text-[#FF3B30]">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@yourstore.com"
                              className="h-12 bg-white border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#FF3B30]" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-body font-medium text-foreground">
                            Phone Number <span className="text-[#FF3B30]">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              className="h-12 bg-white border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#FF3B30]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Company Name and Business Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-body font-medium text-foreground">
                            Company Name <span className="text-[#FF3B30]">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Store Name"
                              className="h-12 bg-white border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#FF3B30]" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-body font-medium text-foreground">
                            Business Type
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12 bg-white border-border">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {BUSINESS_TYPES.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-[#FF3B30]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-body font-medium text-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your business and interest in TailShell..."
                            className="min-h-[120px] bg-white border-border resize-none"
                            maxLength={500}
                            {...field}
                          />
                        </FormControl>
                        <div className="flex justify-between">
                          <FormMessage className="text-[#FF3B30]" />
                          <span className="text-small text-muted-foreground">
                            {field.value?.length || 0}/500
                          </span>
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Error State */}
                  {formState === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FF3B30]/10 text-[#FF3B30]">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-small">
                        Something went wrong. Please try again.
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full h-14 bg-foreground hover:bg-foreground/80 text-white! text-body font-semibold rounded-xl cursor-pointer"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
