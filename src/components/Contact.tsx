import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        toast.success(`Email Successfully Sent! 😁`);
      } catch (error) {
        console.error(error);
        toast.error(`Error Sending Email`);
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <footer>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me!
      </motion.h2>
      <div
        id="contact"
        className="flex flex-col border-b border-neutral-900 pb-20 lg:flex-row lg:justify-between"
      >
        <form
          ref={formRef}
          onSubmit={handleSumbit}
          className="lg:w-1/2 p-6 rounded-lg shadow-md"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex space-x-4 mb-4 w-[100%]"
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              style={{ backgroundColor: "rgba(31, 41, 55, 0.1)" }}
              className="text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 w-[50%]"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              style={{ backgroundColor: "rgba(31, 41, 55, 0.1)" }}
              className="text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 w-[50%]"
            />
          </motion.div>

          <div className="mb-4">
            <motion.input
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              style={{ backgroundColor: "rgba(31, 41, 55, 0.1)" }}
              className="text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 w-[100%]"
            />
          </div>

          <div className="mb-4">
            <motion.textarea
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              style={{ backgroundColor: "rgba(31, 41, 55, 0.1)" }}
              className="text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 w-[100%] h-40"
            ></motion.textarea>
          </div>

          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center lg:justify-start"
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </motion.div>
        </form>

        <h1></h1>

        <div className="flex justify-center mt-[10rem] lg:w-1/2">
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            href="mailto:amanuelabiy.business@gmail.com
"
          >
            <IoIosMail className="text-[6rem] mx-4 lg:ml-[6rem] lg:text-[185px] lg:mx-5" />
          </motion.a>
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            href="https://www.linkedin.com/in/amanuel-abiy-96a9a1262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[6rem] mx-4 lg:ml-[6rem] lg:text-[10rem] lg:mx-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
