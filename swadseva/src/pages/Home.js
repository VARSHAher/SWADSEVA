import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faTruckFast, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero flex flex-col md:flex-row items-center justify-between bg-[#fff3eb] rounded-[20px] my-[20px] mx-[80px] p-[120px_100px] border border-[rgba(236,206,146,0.884)] shadow-inner">
        <div className="hero-text max-w-[500px] animate-boomIn">
          <h1 className="text-[3.40em] font-extrabold mb-2 text-[#111] text-shadow">
            Delicious Dishes <br /> for Food Lovers
          </h1>
          <p className="text-[1.80em] font-bold text-[#777] mb-8">
            Within a few clicks, find meals that are accessible near you
          </p>
          <div className="buttons flex gap-5">
            <a href="/orders" className="bg-[orange] text-white px-4 py-3 rounded-[8px] font-bold hover:bg-[#ff8c00]">Order Now</a>
            <a href="/menu" className="bg-[#f26522] text-white px-4 py-3 rounded-[8px] font-bold hover:bg-[#d14c0e]">Explore Menu</a>
          </div>
        </div>
        <div className="hero-img mt-8 md:mt-0">
  <img
    src="https://www.foodchow.com/Images/bg-new-1.png"
    alt="hero"
    className="w-[880px] max-w-full animate-float"
  />
</div>
  </section>

     {/* Why Choose Swad Seva */}
<section className="features text-center my-20 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-orange-600 mb-14 relative inline-block">
    Why Choose <span className="brand italic text-gray-800">Swad Seva</span>
    <span className="block w-3/5 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-3 rounded"></span>
  </h2>

  <div className="order-content flex flex-wrap items-center justify-center gap-10">
    {/* Grid for steps */}
    <div className="order-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
      
      {/* Step 1 */}
<div className="step-card relative bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
  <div className="icon-box filled w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 bg-orange-600 text-white">
    <FontAwesomeIcon icon={faUtensils} />
  </div>
  <h3 className="text-lg font-semibold mb-3 text-gray-900">Delicious Dishes</h3>
  <p className="text-sm text-gray-600 leading-relaxed">
    Wide variety of cuisines freshly prepared by top chefs with love.
  </p>
</div>

{/* Step 2 */}
<div className="step-card relative bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
  <div className="icon-box outlined w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 border-2 border-orange-600 text-orange-600">
    <FontAwesomeIcon icon={faTruckFast} />
  </div>
  <h3 className="text-lg font-semibold mb-3 text-gray-900">Fast Delivery</h3>
  <p className="text-sm text-gray-600 leading-relaxed">
    We deliver joy and food right on time, every time you order.
  </p>
</div>

{/* Step 3 */}
<div className="step-card relative bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
  <div className="icon-box filled w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 bg-orange-600 text-white">
    <FontAwesomeIcon icon={faStar} />
  </div>
  <h3 className="text-lg font-semibold mb-3 text-gray-900">Customer Satisfaction</h3>
  <p className="text-sm text-gray-600 leading-relaxed">
    Thousands of happy customers trust us for quality & service.
  </p>
</div>

    </div>
  </div>
</section>

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

{/* MENU (categories + cards) */}
<section id="menu" className="menu bg-[#fff3eb] py-[40px]">
  <h1 className="text-[2rem] font-bold text-center mb-6">
    {" "}
    Our Top{" "}
    <span className="brand text-[color:#e96610] italic">
      Rated Dishes
    </span>
  </h1>

  {/* categories */}
  <div className="categories flex justify-center items-center gap-5 overflow-x-auto px-6 py-2">
    <div className="category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 border-transparent hover:border-[orange] transform hover:-translate-y-1 transition">
      <img
        src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-fast-foods-item-png-image_10303953.png"
        alt=""
        className="w-[80px] h-[80px] mb-2"
      />
      <p>All</p>
    </div>
    <div className="category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 border-transparent hover:border-[orange] transform hover:-translate-y-1 transition">
      <img
        src="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-burger-food-sticker-png-png-image_10188397.png"
        alt=""
        className="w-[80px] h-[80px] mb-2"
      />
      <p>Burger</p>
    </div>
    <div className="category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 border-transparent hover:border-[orange] transform hover:-translate-y-1 transition">
      <img
        src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cartoon-pizza-sticker-isolated-on-white-vector-png-image_12229935.png"
        alt=""
        className="w-[80px] h-[80px] mb-2"
      />
      <p>Pizza</p>
    </div>
    <div className="category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 border-transparent hover:border-[orange] transform hover:-translate-y-1 transition">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/046/484/390/small_2x/birthday-cake-with-chocolate-and-strawberry-ai-generative-free-png.png"
        alt=""
        className="w-[80px] h-[80px] mb-2"
      />
      <p>Cake</p>
    </div>
    <div className="category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 border-transparent hover:border-[orange] transform hover:-translate-y-1 transition">
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/657/382/non_2x/trifle-cake-dessert-hand-drawn-sticker-sweet-and-delicious-with-fruit-topping-on-top-free-png.png"
        alt=""
        className="w-[80px] h-[80px] mb-2"
      />
      <p>Dessert</p>
    </div>
    <div className="category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 border-transparent hover:border-[orange] transform hover:-translate-y-1 transition">
      <img
        src="https://static.vecteezy.com/system/resources/previews/027/144/452/non_2x/delicious-chicken-biryani-isolated-on-transparent-background-png.png"
        alt=""
        className="w-[80px] h-[80px] mb-2"
      />
      <p>Biriyani</p>
    </div>
    <div className="category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 border-transparent hover:border-[orange] transform hover:-translate-y-1 transition">
      <img
        src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cocacola-drink-spilling-in-it-clipart-vector-png-image_12234714.png"
        alt=""
        className="w-[80px] h-[80px] mb-2"
      />
      <p>Beverages</p>
    </div>
  </div>

  {/* menu grid */}
  <div className="menu-section mt-6">
    <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px] px-10 md:px-20 mt-6">
      {/* Card 1 */}
      <div className="card bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.SkaQutaZ3HeacQ72BbA4EgHaHa?r=0&w=550&h=550&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Soup"
          className="w-full h-[155px] object-cover"
        />
        <div className="card-info p-3 flex-1">
          <div className="name-reviews flex items-center gap-3">
            <h2 className="text-[18px] font-semibold">Rice Burger</h2>
            <div className="reviews text-[#ff9800] text-[13px]">
              ⭐ 4.9{" "}
              <span className="text-[#555] ml-2">(6,705 reviews)</span>
            </div>
          </div>
          <p className="text-[14px] text-[#555] leading-[1.4] mt-2">
            A delicious burger made with a rice patty
          </p>
          <div className="price mt-3 font-bold">$17.00</div>
        </div>
        <button className="cart-btn bg-[#e96610] text-white rounded-b-[8px] py-2 hover:bg-[#c85b12]">
          Add to cart
        </button>
      </div>

      {/* Card 2 */}
      <div className="card bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col">
        <img
          src="https://wallpaperaccess.com/full/2004483.jpg"
          alt="Burger"
          className="w-full h-[155px] object-cover"
        />
        <div className="card-info p-3 flex-1">
          <div className="name-reviews flex items-center gap-3">
            <h2 className="text-[18px] font-semibold">Cheeseburger</h2>
            <div className="reviews text-[#ff9800] text-[13px]">
              ⭐ 5.0{" "}
              <span className="text-[#555] ml-2">(5,123 reviews)</span>
            </div>
          </div>
          <p className="text-[14px] text-[#555] leading-[1.4] mt-2">
            A classic cheeseburger with all the fixings
          </p>
          <div className="price mt-3 font-bold">$15.00</div>
        </div>
        <button className="cart-btn bg-[#e96610] text-white rounded-b-[8px] py-2 hover:bg-[#c85b12]">
          Add to cart
        </button>
      </div>

      {/* Card 3 */}
      <div className="card bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col">
        <img
          src="https://www.inspiredtaste.net/wp-content/uploads/2023/09/Margherita-Pizza-2-1200.jpg"
          alt="Margherita"
          className="w-full h-[155px] object-cover"
        />
        <div className="card-info p-3 flex-1">
          <div className="name-reviews flex items-center gap-3">
            <h2 className="text-[18px] font-semibold">Margherita Pizza</h2>
            <div className="reviews text-[#ff9800] text-[13px]">
              ⭐ 4.9{" "}
              <span className="text-[#555] ml-2">(5000 reviews)</span>
            </div>
          </div>
          <p className="text-[14px] text-[#555] leading-[1.4] mt-2">
            Classic cheese and tomato pizza.
          </p>
          <div className="price mt-3 font-bold">$22.00</div>
        </div>
        <button className="cart-btn bg-[#e96610] text-white rounded-b-[8px] py-2 hover:bg-[#c85b12]">
          Add to cart
        </button>
      </div>

      {/* Card 4 */}
      <div className="card bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col">
        <img
          src="https://bing.com/th?id=OSK.1762ee796a990b9304ff2eff94d61408"
          alt="BBQ chicken"
          className="w-full h-[155px] object-cover"
        />
        <div className="card-info p-3 flex-1">
          <div className="name-reviews flex items-center gap-3">
            <h2 className="text-[18px] font-semibold">BBQ Chicken Pizza</h2>
            <div className="reviews text-[#ff9800] text-[13px]">
              ⭐ 4.9{" "}
              <span className="text-[#555] ml-2">(6,986 reviews)</span>
            </div>
          </div>
          <p className="text-[14px] text-[#555] leading-[1.4] mt-2">
            Grilled chicken with BBQ sauce.
          </p>
          <div className="price mt-3 font-bold">$26.00</div>
        </div>
        <button className="cart-btn bg-[#e96610] text-white rounded-b-[8px] py-2 hover:bg-[#c85b12]">
          Add to cart
        </button>
      </div>
    </div>

    <div className="view-all-container flex justify-center mt-12">
      <a
        href="menu.js"
        className="view-all-btn bg-gradient-to-r from-[#e44414] to-[#ff8a4c] text-white px-6 py-3 rounded-[30px] text-[17px] font-[600] inline-flex items-center gap-2 shadow-[0_6px_15px_rgba(228,68,20,0.3)] hover:translate-y-[-3px] transition"
      >
        View All <i className="fas fa-arrow-right"></i>
      </a>
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
