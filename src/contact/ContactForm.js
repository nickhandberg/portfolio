import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import React from "react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);
    if (state.succeeded) {
        return (
            <motion.p
                id="thanks"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{
                    once: true,
                    amount: 0.75,
                    margin: "-100px 0px 0px 0px",
                }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                    type: "ease",
                }}
            >
                Thanks for reaching out{" "}
                <span style={{ color: "var(--pastel-green)" }}>
                    Your message has been sent
                </span>
            </motion.p>
        );
    }

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{
                once: true,
                amount: 0.1,
                margin: "-100px 0px 0px 0px",
            }}
            transition={{
                delay: 0,
                duration: 0.5,
                type: "ease",
            }}
        >
            <form id="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="10" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Send
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
