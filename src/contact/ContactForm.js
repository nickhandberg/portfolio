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
                    once: false,
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
        <div>
            <form id="contactForm" onSubmit={handleSubmit}>
                <motion.label
                    htmlFor="email"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{
                        once: false,
                        amount: 0.75,
                        margin: "-100px 0px 0px 0px",
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.5,
                        type: "ease",
                    }}
                >
                    Email
                </motion.label>
                <motion.input
                    id="email"
                    type="email"
                    name="email"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{
                        once: false,
                        amount: 0.75,
                        margin: "-100px 0px 0px 0px",
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.5,
                        type: "ease",
                    }}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <motion.label
                    htmlFor="message"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{
                        once: false,
                        amount: 0.75,
                        margin: "-100px 0px 0px 0px",
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.5,
                        type: "ease",
                    }}
                >
                    Message
                </motion.label>
                <motion.textarea
                    id="message"
                    rows="10"
                    name="message"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{
                        once: false,
                        amount: 0.75,
                        margin: "-100px 0px 0px 0px",
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.5,
                        type: "ease",
                    }}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <motion.button
                    type="submit"
                    disabled={state.submitting}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{
                        once: false,
                        amount: 0.75,
                        margin: "-100px 0px 0px 0px",
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.5,
                        type: "ease",
                    }}
                >
                    Send
                </motion.button>
            </form>
        </div>
    );
};

export default ContactForm;
