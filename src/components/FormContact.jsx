import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { contactoInfo } from "@/utils/data";
import { useInView } from "react-intersection-observer";

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState();
  const input = useRef();
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });

  const sendEmail = async () => {
    try {
      return await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_CONTACT,
        input.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );
    } catch (error) {
      toast.error(
        "Upss!!, Hay un problema con el servicio, intenta más tarde.",
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error !== null)) {
      Swal.fire("Debes corregir los errores", "", "warning");
      return;
    }
    const response = await sendEmail();
    if (response && response.status === 200) {
      toast.success("Email enviado con exito. Gracias por contactarme", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    e.target.reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = null;

    switch (name) {
      case "user_name":
        const regexName = /^[A-Za-z\s]+$/;
        if (!regexName.test(value) || value.length > 30) {
          error = "El nombre debe tener solo letras y máximo 30 caracteres";
        }
        break;
      case "user_email":
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(value)) {
          error = "Ingrese una dirección de correo electrónico válida";
        }
        if (value.length > 50) {
          error = "El email debe tener como máximo 50 caracteres";
        }
        break;
      case "user_message":
        value.length < 6
          ? (error = "El mensaje es muy corto")
          : value.length > 500
          ? (error = "El mensaje no debe exceder de 500 caracteres")
          : null;
        break;

      default:
        break;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  useEffect(() => {
    gsap.set(".bigdot", { scale: 0 });
  }, []);

  const inputFocus = (e) => {
    gsap.to(`[name=${e.target.name}] + .bigdot`, { scale: 1, duration: 0.2 });
  };
  const inputBlur = (e) =>
    gsap.to(`[name=${e.target.name}] + .bigdot`, { scale: 0, duration: 0.2 });

  return (
    <div className="quick w-full mx-auto items-center justify-between font-mono text-sm bg-custom-azul">
      <div className="mx auto container p-5 sm:p-7 md:p-10 md:mx-12 lg:p-20 xl:p-20">
        <h1
          ref={inViewRef}
          className={`nothing text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-custom-oro_2  ${
            inView ? "animate__animated animate__zoomInDown" : ""
          }`}
        >
          Contacto
        </h1>
        <div
          ref={inViewRef}
          className={`text-xs md:text-lg lg:text-lg animate-fadeInDown ${
            inView ? "animate__animated animate__jackInTheBox" : ""
          }`}
        >
          <p className="mb-2 text-gray-500 text-justify">
            {contactoInfo.parrafo_1}
          </p>
        </div>

        <ToastContainer />
        <div
          ref={inViewRef}
          className={`quick text-xs md:text-lg lg:text-xl  ${
            inView ? "animate__animated animate__lightSpeedInLeft" : ""
          }`}
        >
          <form
            ref={input}
            onSubmit={handleSubmit}
            className="form mx-auto mt-5 md:mt-10 lg:mt-20 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl animate-slideUp"
          >
            <div className="space-y-2">
              <label className="text-brand-green text-xs font-semibold pl-1 block">
                Nombre
              </label>

              <div className="relative overflow-hidden rounded-lg w-full">
                <input
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                  className="bg-transparent text-brand-green border-2 p-3 
											relative z-10 border-brand-green w-full rounded-lg 
											focus:outline-none focus:text-white font-medium
											focus:placeholder:text-white focus:placeholder:text-opacity-70"
                  name="user_name"
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  required
                />
                {errors.user_name && (
                  <div className="error">{errors.user_name}</div>
                )}
                <span className="bigdot bg-brand-green w-[800px] h-[800px] left-[-200px] top-[-400px] absolute rounded-full pointer-events-none"></span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-brand-green text-xs font-semibold pl-1 block">
                Email
              </label>
              <div className="relative overflow-hidden rounded-lg">
                <input
                  id="email"
                  placeholder="Ingresa tu email"
                  className="bg-transparent text-brand-green border-2 p-3 
											relative z-10 border-brand-green w-full rounded-lg 
											focus:outline-none focus:text-white font-medium
											focus:placeholder:text-white focus:placeholder:text-opacity-70"
                  name="user_email"
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  required
                />
                {errors.user_email && (
                  <div className="error">{errors.user_email}</div>
                )}
                <span className="bigdot bg-brand-green w-[800px] h-[800px] left-[-200px] top-[-400px] absolute rounded-full pointer-events-none"></span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-brand-green text-xs font-semibold pl-1 block">
                Mensaje
              </label>
              <div className="relative overflow-hidden rounded-lg">
                <textarea
                  id="mensaje"
                  className="bg-transparent text-brand-green resize-none 
											font-medium border-2 p-3 relative z-10 border-brand-green 
											w-full rounded-lg h-40 focus:outline-none focus:text-white"
                  name="user_message"
                  placeholder="Tu mensaje..."
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  required
                />
                {errors.user_message && (
                  <div className="error">{errors.user_message}</div>
                )}
                <span className="bigdot bg-brand-green w-[800px] h-[800px] left-[-200px] top-[-400px] absolute rounded-full pointer-events-none"></span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="fancy">
                <span className="py-1">Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
