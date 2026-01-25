import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "RxZ3FnelkpLTYjMAR";

const initEmailjs = () => {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });
};

export { initEmailjs };
