import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'; 
export default function Contact() {
  return (
    <div>
{/* CONTACT */}
      <section id="contact" className="contact-section max-w-[1000px] mx-auto p-8 text-center">
        <h2 className="text-[2rem] font-bold mb-6">
          Please Get In <span className="brand text-[#e96610]">Touch With Us</span>
        </h2>

        <div className="contact-info flex flex-wrap justify-center gap-6 mb-8">
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">📍</span>
            <h3 className="text-lg font-semibold mb-1">Address</h3>
            <p className="text-[#666]">A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">📞</span>
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p className="text-[#666]">+1 5589 55488 55</p>
          </div>
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">✉️</span>
            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
            <p className="text-[#666]">info@example.com</p>
          </div>
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">⏰</span>
            <h3 className="text-lg font-semibold mb-1">Opening Hours</h3>
            <p className="text-[#666]">
              <strong>Mon-Sat:</strong> 11AM - 10PM
              <br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 border border-[#e96610] rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-4 py-3 border border-[#e96610] rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 border border-[#e96610] rounded md:col-span-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="px-4 py-3 border border-[#e96610] rounded md:col-span-2"
          />
          <input
            type="text"
            placeholder="City"
            className="px-4 py-3 border border-[#e96610] rounded"
          />
          <input
            type="text"
            placeholder="State"
            className="px-4 py-3 border border-[#e96610] rounded"
          />

<div className="md:col-span-2 flex justify-center mt-4">
  <button
    type="submit"
    aria-label="Submit"
    className="relative group inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-md font-semibold shadow-sm transition-colors w-40"
  >
    {/* Submit Label */}
    <span className="transition-transform duration-300 group-hover:-translate-x-2">
      Submit
    </span>

    {/* Tick Icon */}
    <span className="absolute right-4 flex items-center opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
      <FontAwesomeIcon icon={faCircleCheck} className="text-xl text-green-300" />
    </span>
  </button>
</div>


        </form>
      </section>




    </div>
  );
}
