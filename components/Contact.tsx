import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        03. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">

  <strong>JaiminMevada.it@gmail.com</strong><br />
  <strong>JaiminKumarMevada@gmail.com</strong><br />
  I’m always open to discussing new opportunities, collaborations, or any queries you may have.
  <br />
  Let's connect and collaborate!
</p>


      <a href="mailto:jaiminkumarmevada@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Connect via Email
        </button>
      </a>
    </section>
  );
};

export default Contact;
