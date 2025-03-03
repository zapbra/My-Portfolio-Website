"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const emailToast = toast.loading("Sending Email");

        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formData,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                }
            );

            toast.success("Email sent successfully!", { id: emailToast });
            clearForm();
        } catch (error) {
            toast.error("Failed to send email. Try again later.", {
                id: emailToast,
            });
            console.log("Error sending email:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact">
            <Toaster />
            <h1 className="text-6xl mb-[32px]">Get In Contact</h1>
            <p className="text-lg mb-[32px]">
                Send me a message! I’m excited to hear from you about any job
                opportunities, project collaborations or any general questions.
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-slate-800 bg-red mx-auto max-w-[600px] rounded-3xl px-[32px] py-[32px]"
            >
                <label htmlFor="name">Name</label>
                <br />
                <input
                    className="input mt-2 mb-6"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="name">Email *</label>
                <br />
                <input
                    className="input mt-2 mb-6"
                    name="email"
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="name">Message *</label>
                <br />
                <textarea
                    className="input mt-2 mb-6"
                    name="message"
                    required
                    placeholder="How can I help you?"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                />
                <div className="flex justify-end">
                    {loading ? (
                        <div className="lds-circle">
                            <div></div>
                        </div>
                    ) : (
                        <input
                            className="bg-emerald-400 text-slate-950 rounded-2xl px-4 py-2 cursor-pointer hover:bg-emerald-600 transition duration-300"
                            type="submit"
                            value="Send Message"
                        />
                    )}
                </div>
            </form>
        </div>
    );
}
