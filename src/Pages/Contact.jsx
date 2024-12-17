import contactus from "../assets/images/Contactus.jpg";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="md:text-5xl text-3xl  font-bold text-green-700 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At{" "}
          <span className="font-semibold text-green-700">
            Swift Debt Collection
          </span>
          , we are here to help you at every step of your debt recovery journey.
          Connect with our team for expert guidance and support, or visit us to
          learn more about how we can help secure your business’s financial
          stability.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image and Text Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col items-center p-8">
          <div className="w-full mb-6">
            <img
              src={contactus}
              alt="Swift Debt Collection Office"
              className="w-full h-64 object-contain rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">
            Visit Our Office
          </h2>
          <p className="text-gray-600 leading-relaxed text-center">
            Our doors are always open for a conversation. Visit our office to
            meet our team, discuss your needs, and explore how our debt recovery
            services can help secure your financial future.
          </p>
        </div>

        {/* Contact Information and Map */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
            China Building  <br />
            8th Floor  807<br/>
            Behind Baniyas Towers<br/>
              Banyas metro<br />
              near Al Rigga Parking<br/>
              Deira - Dubai<br/>
              U. A. E.<br />
              Phone: +971582159377 <br />
              Email:info@keigenfoodstufftrading.net

            </p>
          </div>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.038926831109!2d55.305048976055915!3d25.269275928776214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434533d3eccd%3A0xc8f1e122794c7de0!2sBaniyas%20Square%20Station!5e0!3m2!1sen!2sin!4v1734085746278!5m2!1sen!2sin"
              width="600"
              height="450"
            //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
