import { Icon } from "@iconify/react/dist/iconify.js";

function Contact() {
  return (
    <>
      <h3 data-aos="zoom-in" id="contact">
        Contact me
      </h3>
      <div className="mt-30 mb-30 grid w-full grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10">
        <div className="contactCard" data-aos="zoom-in-right">
          <span>Email</span>
          <span className="text-xl font-bold">jmingua@ccc.edu.ph</span>
          <a href="mailto:jmingua@ccc.edu.ph" className="contactButton">
            Write me
            <Icon icon="proicons:compose" className="h-6 w-6" />
          </a>
        </div>
        <div className="contactCard" data-aos="zoom-in-left">
          <span>Whatsapp</span>
          <span className="text-xl font-bold">639919793106</span>
          <a
            href="https://wa.me/639919793106?text=Hello"
            target="_blank"
            className="contactButton"
          >
            Message me
            <Icon icon="lucide:message-square" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
