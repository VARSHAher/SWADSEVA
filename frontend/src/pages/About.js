export default function About() {
  return (
    <div>
    
{/* ABOUT */}
<section
  id="about"
  className="about grid md:grid-cols-[1fr_480px] gap-8 px-[50px] pt-[0px] pb-[40px] items-center mt-[28px]"
>
  {/* left card */}
  <div className="about-card rounded-[24px] p-[50px] bg-[linear-gradient(180deg,#fff3eb,transparent)] shadow-[0_8px_30px_rgba(236,206,146,0.884)] border-[2px] border-[rgba(236,206,146,0.884)] backdrop-blur-[6px]">
    <h2 className="text-[40px] font-bold leading-[1.02] mb-3 text-[#333]">
      We deliver joy (and food) — on time, every time.
    </h2>
    <p className="text-[16px] text-black max-w-[60%] leading-[1.6] mb-6">
      SwadSeva was founded to make mealtime moments easier. From quick solo
      lunches to weekend feasts, our mission is to connect delicious local
      kitchens to hungry humans with speed, transparency and a little dash of
      delight.
    </p>

    <div className="stats flex gap-3 mt-5">
      <div className="stat bg-white/30 px-4 py-3 rounded-[12px] min-w-[110px] text-center">
        <b className="block text-[18px]">4.9★</b>
        <small style={{ color: "black" }}>avg rating</small>
      </div>
      <div className="stat bg-white/30 px-4 py-3 rounded-[12px] min-w-[110px] text-center">
        <b className="block text-[18px]">1M+</b>
        <small style={{ color: "black" }}>orders/month</small>
      </div>
      <div className="stat bg-white/30 px-4 py-3 rounded-[12px] min-w-[110px] text-center">
        <b className="block text-[18px]">50k</b>
        <small style={{ color: "black" }}>partner restaurants</small>
      </div>
    </div>

    <div className="mt-[22px] flex gap-3">
      <a
        href="menu.html"
        className="rounded-[12px] px-[12px] py-[12px] bg-[#ffed8a] border border-[rgba(255,255,255,0.04)] text-black no-underline"
      >
        Meet The Team
      </a>
      <a
        href="#story"
        className="rounded-[12px] px-[12px] py-[12px] bg-[#e44414] border border-[rgba(255,255,255,0.04)] text-white no-underline"
      >
        Our story
      </a>
    </div>
  </div>

  {/* right visual */}
  <div className="hero-visual relative">
    <div className="phone-mock rounded-[36px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.6)] w-full max-w-[420px] animate-float">
  <img
    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a2d5f0b7b6b8b0c7c9f3b7c8a2b8d3c"
    alt="MunchMate app mockup"
    className="w-full object-cover"
  />
</div>

    <div className="badge absolute left-[24px] -bottom-[12px] bg-gradient-to-r from-white to-[#fff2d8] text-[#071021] px-4 py-2 rounded-[14px] font-bold border border-[rgba(255,255,255,0.06)]">
      New: Group Orders • Split & Pay
    </div>
  </div>
</section>

{/* MISSION */}
      <section className="mission bg-[linear-gradient(180deg,#fffefd_0%,#fff9f5_100%)] py-[80px] px-[clamp(20px,6vw,100px)]">
        <div className="mission__wrap max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-[50px] items-start">
          <div className="mission__left bg-white p-[36px_32px] rounded-[20px] shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
            <span className="mission__tag inline-block px-3 py-1 rounded-full bg-[#ffe7d7] text-[brand-2] font-bold mb-3">
              OUR MISSION
            </span>
            <h2 className="mission__title text-[clamp(28px,3vw,36px)] font-extrabold mb-3">
              Food that feels like home —{" "}
              <span className="accent text-[#ff6a2a]">delivered thoughtfully.</span>
            </h2>
            <p className="mission__text text-[#555] leading-[1.7]">
              We began as a small team who loved food and hated waiting. Today, we
              focus on speed without sacrifice, supporting local restaurants with
              fair fees and transparent payouts. Our product design mixes
              simplicity with small delightful moments — like a friendly delivery
              photo or a chef’s note with your order.
            </p>
          </div>
          <div className="right text-right">
            <img
              src="https://static.vecteezy.com/system/resources/previews/030/672/209/large_2x/of-pizza-with-no-background-with-white-back-free-photo.jpg"
              alt="Food Delivery"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team text-center py-[80px] bg-[rgba(255,255,255,0.93)]">
        <h2 className="text-[36px] font-bold mb-12 italic">
          Meet <span className="brand text-[#e96610]">The Team</span>
        </h2>
        <div className="team-grid max-w-[1100px] mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6">
          {/* member */}
          <div className="member bg-white rounded-[20px] p-[30px_20px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-10px] transition">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc"
              alt="Fiza Sheikh"
              className="w-[120px] h-[120px] rounded-full object-cover mb-4 mx-auto shadow-[0_6px_20px_rgba(255,87,34,0.3)]"
            />
            <h3 className="text-[20px] font-bold mb-1">Fiza Sheikh</h3>
            <p className="role text-[#ff5722] font-semibold mb-2">CEO & Co-founder</p>
            <p className="bio text-[#555] text-[14px]">
              Former product manager, turned obsessed with reducing hangry moments
              worldwide.
            </p>
          </div>

          <div className="member bg-white rounded-[20px] p-[30px_20px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-10px] transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIDLyE2qiXbONA33TsxXBaa9vUEn3VxXw3A&s"
              alt="John"
              className="w-[120px] h-[120px] rounded-full object-cover mb-4 mx-auto shadow-[0_6px_20px_rgba(255,87,34,0.3)]"
            />
            <h3 className="text-[20px] font-bold mb-1">John</h3>
            <p className="role text-[#ff5722] font-semibold mb-2">Managing Director</p>
            <p className="bio text-[#555] text-[14px]">
              Develop and implementing business strategies.
            </p>
          </div>

          <div className="member bg-white rounded-[20px] p-[30px_20px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-10px] transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Olivia"
              className="w-[120px] h-[120px] rounded-full object-cover mb-4 mx-auto shadow-[0_6px_20px_rgba(255,87,34,0.3)]"
            />
            <h3 className="text-[20px] font-bold mb-1">Olivia</h3>
            <p className="role text-[#ff5722] font-semibold mb-2">Head of Ops</p>
            <p className="bio text-[#555] text-[14px]">
              Builds routing systems and driver-first tools that actually make
              deliveries faster.
            </p>
          </div>

          <div className="member bg-white rounded-[20px] p-[30px_20px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-10px] transition">
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Sophia"
              className="w-[120px] h-[120px] rounded-full object-cover mb-4 mx-auto shadow-[0_6px_20px_rgba(255,87,34,0.3)]"
            />
            <h3 className="text-[20px] font-bold mb-1">Sophia</h3>
            <p className="role text-[#ff5722] font-semibold mb-2">Design Lead</p>
            <p className="bio text-[#555] text-[14px]">
              Makes the product feel human with tiny micro-interactions and
              thoughtful copy.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
